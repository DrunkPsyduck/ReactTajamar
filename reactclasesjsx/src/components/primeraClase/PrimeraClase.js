import React from "react";
import "./primeraClase.css";

//! Se puede declarar funciones fuera de la classe pero no se pueden utilizar valores de clase.
//! Puede recibir valores. Para llamar a las funciones externa no se utiliza 'this'
function miFuncion() {
  console.log("esto es miFuncion");
}

class PrimeraClase extends React.Component {
  //Evaluado en todo momento
  // sin palabras clave(let, cons , function)..
  contador = 1;
  metodoAccion = () => {
    console.log("Contando " + this.contador);
    this.contador++;
  };
  render() {
    return (
      <React.Fragment>
        <h1 className="rojo">Primer componente class</h1>
        <button onClick={this.metodoAccion}> Contar </button>
        <button
          onClick={() => {
            miFuncion();
          }}
        >
          Pulsar
        </button>
      </React.Fragment>
    );
  }
}

export default PrimeraClase;
