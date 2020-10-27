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
    console.log(name + " has pulsado el botón");
  };
  const sumarNumeros = (num1, num2) => {
    let suma = num1 + num2;
    console.log(suma);
  };
  const mostrarMensaje = () => {
    return <h1> Hola Mundo</h1>;
  };
  return (
    <div>
      {sumarNumeros(5, 15)}
      <h2>
        Hola, {name}, con edad {age}
      </h2>
      <button onClick={botonPulsado}>Pulsar</button>
      <button onClick={() => sumarNumeros(14, 12)}>Pulsar</button>
      {/* O también se puede llamar con:
       *<button onClick={() => botonPulsado()}>Pulsar</button>!  Con esta función lambda se ejecuta cuando se hace el evento, 
       si no se ejecuta directamentes*/}
      {mostrarMensaje()}
    </div>
  );
}

export default Saludos;
