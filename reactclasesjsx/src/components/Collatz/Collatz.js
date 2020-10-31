import React, { Component } from "react";
import "./Collatz.css";

export default class Collatz extends Component {
  numero = React.createRef();
  state = {
    numeros: {},
  };
  recibirNumero = (e) => {
    e.preventDefault();
    let numero = parseInt(this.numero.current.value);
    if (numero === 0) {
      console.log("Numero 0");
    } else {
      let numeros = [];
      while (numero !== 1 && numero !== 0) {
        if (numero % 2 === 0) {
          numero /= 2;
        } else {
          numero *= 3;
          numero += 1;
        }
        numeros.push(numero);
      }
      let objeto = { cadena: numeros };
      this.setState({ numeros: objeto });
    }
  };

  render() {
    return (
      <div>
        <h1>Conjetura de Collatz</h1>

        {this.state.numeros.cadena && (
          <React.Fragment>
            <ul>
              {Object.keys(this.state.numeros.cadena).map((numero, i) => {
                return <li key={numero}>{this.state.numeros.cadena[i]}</li>;
              })}
            </ul>
          </React.Fragment>
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
