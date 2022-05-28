import React from "react"; // si no hay hooks realmente no hace falta esto
import '../hojas-de-estilo/Boton.css'

function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
    onClick={manejarClic}>
      {texto}
    </button>
  );
}


export default Boton;