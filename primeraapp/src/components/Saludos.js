import React from "react";

function Saludos(props) {
  /** 
   let nombre = props.nombre;
   let mensaje = props.mensaje; 
  *? Es lo mismo que la siguiente línea
   * const { mensaje, edad } = props;*/

  let name = props.nombre;
  let age = props.edad;
  const botonPulsado = () => {
    console.log(name + " has pulsado el botoón");
  };
  return (
    <div>
      <h2>
        Hola, {name}, con edad {age}
      </h2>
      <button onClick={botonPulsado}>Pulsar</button>
      {/* O también se puede llamar con:
       *<button onClick={() => botonPulsado()}>Pulsar</button>!  */}
    </div>
  );
}

export default Saludos;
