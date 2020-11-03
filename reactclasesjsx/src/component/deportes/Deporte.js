import React from "react";

class Deporte extends React.Component {
  state = { seleccionado: "" };
  seleccionarDeporte = () => {
    //Cuando el usuario pulse el botón se cambia el valor
    this.props.seleccionarFavorito(this.props.deporte);
    // this.setState({
    //   seleccionado: this.props.deporte,
    // });
  };
  render() {
    return (
      <React.Fragment>
        <li style={{ color: "blue" }} key={this.props.index}>
          {this.props.deporte}
          <button onClick={this.seleccionarDeporte}>Seleccionar Deporte</button>
        </li>
        <span style={{ color: "red" }}>{this.state.seleccionado}</span>
      </React.Fragment>
    );
  }
}

export default Deporte;
