import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function PD() {
  const [pokemon, setPokemon] = React.useState([]);

  function getMe() {
    fetch("https://pokeapi.co/api/v2/pokemon/132")
      .then((response) => response.json())
      .then((data) => {
        setPokemon({
          name: data.name,
          type: data.types[0].type.name,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
        });
      });
  }

  function handleClick(event) {
    getMe();
    console.log(pokemon);
  }

  return (
    <Box sx={{ minWidth: 275 }}>
      <Button onClick={handleClick}>Balls</Button>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {pokemon.type}
            </Typography>
            <Typography variant="h5" component="div">
              {pokemon.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              HP: {pokemon.hp}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Attack: {pokemon.attack}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Defense: {pokemon.defense}
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}

class PokeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      hp: 0,
      attack: 0,
      defense: 0,
    };
    fetch("https://pokeapi.co/api/v2/pokemon/132")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          name: data.species.names,
          type: data.types[0].type.name,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
        });
      });
  }

  render = () => (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {this.state.name}
            </Typography>
            <Typography variant="h5" component="div">
              {this.state.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}

export default PD;
