import React from "react";
import ReactDOM from "react-dom";

function Saludos(props) {
  let ejemplo = "Lorem ipsum sit aemet";
  /** 
   let nombre = props.nombre;
   let mensaje = props.mensaje; 
  *? Es lo mismo que la siguiente línea
   * const { mensaje, edad } = props;*/

  const { nombre, edad, metodo } = props;

  /*  let name = props.nombre;
  let age = props.edad; */
  const botonPulsado = () => {
    console.log(nombre + " has pulsado el botón");
    ejemplo = "Don't Tread On Me";
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
      <h1 style={{ color: "red" }}>{ejemplo}</h1>

      {sumarNumeros(5, 15)}
      <h2>
        Hola, {nombre}, con edad {edad}
      </h2>
      <button onClick={() => botonPulsado()}>Pulsar</button>
      <button onClick={() => sumarNumeros(14, 12)}>Sumar</button>
      <button onClick={() => metodo(nombre + " " + edad)}>Método padre</button>
      {/* O también se puede llamar con:
       *<button onClick={() => botonPulsado()}>Pulsar</button>!  Con esta función lambda se ejecuta cuando se hace el evento, 
       si no se ejecuta directamentes*/}
      {mostrarMensaje()}
    </div>
  );
}

export default Saludos;
