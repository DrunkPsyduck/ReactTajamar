import React from "react";

class Numero extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.valor}</h1>
        <button
          onClick={() => {
            this.props.sumarNumeros(this.props.valor);
          }}
        >
          sumar {this.props.valor}
        </button>
      </div>
    );
  }
}

export default Numero;
