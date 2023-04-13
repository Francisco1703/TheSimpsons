import { useState, useEffect } from "react";
import "./JsonPlaceholder.css";

//1) Importamos los hooks que vamos a utilizar.

const JsonPlaceholder = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=10")
      .then((respuesta) => respuesta.json())
      .then((data) => setPersonajes(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Personajes de The Simpsons</h2>
      <div className="divPrincipal">
        {personajes.map((personaje) => {
          return (
            <div className="divPersonajes" key={personaje.id}>
              <p className="nombre">Nombre: {personaje.character} </p>
              <p className="frase">Frase: {personaje.quote} </p>
              <img
                className="imgPersonajes"
                src={personaje.image}
                alt={personaje.character}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JsonPlaceholder;
