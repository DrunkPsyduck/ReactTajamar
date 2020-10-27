import React from "react";

function Saludos(props) {
  /** 
   let nombre = props.nombre;
   let mensaje = props.mensaje; 
  *? Es lo mismo que la siguiente línea
   * const { mensaje, edad } = props;*/

  let name = props.nombre;
  let age = props.edad;
  return (
    <div>
      <h2>
        Hola, {name}, con edad {age}
      </h2>
    </div>
  );
}

export default Saludos;
