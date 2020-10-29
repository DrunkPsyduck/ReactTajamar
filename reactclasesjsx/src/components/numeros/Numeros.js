import React from "react";
import Numero from "./Numero";

class Numeros extends React.Component {
  state = {
    numeros: [1, 2, 3, 10],
    suma: 0,
  };

  sumarNumeros = (valor) => {
    this.setState({ suma: this.state.suma + valor });
  };

  resetSuma = () => {
    this.setState({ suma: 0 });
  };

  setNuevoNumero = () => {
    let rnd = Math.floor(Math.random() * 99 + 1);
    let numeros = this.state.numeros;
    numeros.push(rnd);
    this.setState({
      numeros: numeros,
    });
  };
  render() {
    return (
      <div>
        <h1 style={{ color: "royalblue" }}> La suma es: {this.state.suma}</h1>
        <button onClick={() => this.resetSuma()}>Borrar suma</button>
        <button onClick={this.setNuevoNumero}>Nuevo numero</button>
        {this.state.numeros.map((numero, index) => {
          return (
            <Numero
              key={index}
              valor={numero}
              sumarNumeros={this.sumarNumeros}
            />
          );
        })}
      </div>
    );
  }
}

export default Numeros;
