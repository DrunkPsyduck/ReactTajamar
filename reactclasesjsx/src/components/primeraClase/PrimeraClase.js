import React from "react";
import "./primeraClase.css";

//! Se puede declarar funciones fuera de la classe pero no se pueden utilizar valores de clase.
//! Puede recibir valores. Para llamar a las funciones externa no se utiliza 'this'
function miFuncion() {
  console.log("esto es miFuncion");
}

class PrimeraClase extends React.Component {
  // ? Evaluado en todo momento
  // ? sin palabras clave(let, cons , function)..
  contador = 1;
  metodoAccion = () => {
    console.log("Contando " + this.contador);
    this.contador++;
  };

  // ? Se pueden usa variables de estado para dibujar
  // ? Las variables de estado deben ser declaradas para poder ser utilizadas
  //? state = {variable: 1. variableN: n}
  state = { valor: 0 };
  incrementarEstado = () => {
    // TODO: contador para dibujar un incremento en la página
    //* Moficar una o n variables de estado
    this.setState({
      valor: this.state.valor + 1,
    });
  };
  render() {
    //* También se pueden declarar funciones en el render() pero se debe hacer con la sintaxis anterior
    //* Existe diferenecia entre el render y fuera
    //* Render se actualiza cuándo hay cambios visuales
    let numero = 1;
    let hacerAlgo = () => {
      console.log("Haciendo algo..." + numero);
      numero++;
    };
    return (
      <React.Fragment>
        <h1 className="rojo">{this.props.titulo}</h1>
        <h2 className="azul">Estado: {this.state.valor}</h2>
        <button onClick={this.metodoAccion}> Contar </button>
        <button
          onClick={() => {
            miFuncion();
            hacerAlgo();
            this.incrementarEstado();
          }}
        >
          Pulsar
        </button>
      </React.Fragment>
    );
  }
}

export default PrimeraClase;
