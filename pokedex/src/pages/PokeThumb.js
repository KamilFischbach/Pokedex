import "./PokeThumb.css";
import { useState, useEffect } from "react";

function PokeThumb(props) {
  const [name, setName] = useState(props.pokemon.name);

  useEffect(() => {
    capitalizeName();
  }, []);

  function capitalizeName() {
    const capitalName = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(capitalName);
    setName(capitalName);
  }

  return (
    <div className="card">
      <div className="line1">
        <div className="id font">
          <p>#{props.pokemon.id}</p>
        </div>
        <img src={props.pokemon.img} alt="Poke pic" width="100" height="100" />
      </div>
      <div className="line2 font">{name}</div>
    </div>
  );
}

export default PokeThumb;
