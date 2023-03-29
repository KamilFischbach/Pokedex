import { useState } from "react";

function Grid() {
  const [pokemons, setPokemons] = useState([]);
  let tempPokemons = [];
  //"https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0";
  //useEffect(() => {}, []);

  function fetchAllPokemons() {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0`)
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((ps) => {
        tempPokemons = [];
        ps.results.forEach((element) => {
          fetchSinglePokemon(element.url);
        });
        console.log(tempPokemons);
        setPokemons(tempPokemons);
      })
      .catch((err) => console.log(err));
  }
  function setValues(pokemon) {
    return {
      name: pokemon.name,
      type: pokemon.types[0].type.name,
      img: pokemon.sprites.front_default,
      id: pokemon.id,
    };
  }

  function fetchSinglePokemon(url) {
    fetch(`${url}`)
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((pokemon) => {
        const p = setValues(pokemon);
        tempPokemons.push(p);
      })
      .catch((err) => console.log(err));
  }

  function handleClick() {
    fetchAllPokemons();
    console.log(pokemons);
  }

  return (
    <div className="grid">
      <button onClick={handleClick}>LOG POKEMONS!</button>
      <ul>
        {pokemons.map((p) => (
          <li key={p.name}>
            <img src={p.img} alt="hehe" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Grid;
