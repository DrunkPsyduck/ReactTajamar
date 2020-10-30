import React, { Component } from "react";

export default class Collatz extends Component {
  numero = React.createRef();
  state = {
    numeros: {},
  };
  recibirNumero = (e) => {
    e.preventDefault();
    // let numeroRecibido = { numero: this.numero.current.value };
    let numero = parseInt(this.numero.current.value);
    let numeros = "";

    while (numero !== 1) {
      if (numero % 2 === 0) {
        numero /= 2;
      } else {
        numero *= 3;
        numero += 1;
      }
      numeros += numero + ",";
    }

    let objeto = { cadena: numeros };
    this.setState({ numeros: objeto });
    console.log(this.state.numeros);
  };

  render() {
    return (
      <div>
        <h1>Conjetura de Collatz</h1>

        {this.state.numeros.cadena && (
          <h1 style={{ backgroundColor: "black", color: "white" }}>
            {this.state.numeros.cadena}
          </h1>
        )}

        <form>
          <input type="number" ref={this.numero} />
          <br />
          <button onClick={this.recibirNumero}>Calcular Conjetura</button>
        </form>
      </div>
    );
  }
}
