import React, { Component } from "react";

export default class UpdateDepartamento extends Component {
  constructor(props) {
    super(props);
    let id = props.idDepartamento;
    let nombre = props.nombre;
    let localidad = props.localidad;
  }
  state = {};
  render() {
    return (
      <div>
        <br />
        <h1>Modificar Elementos {this.props.idDepartamento}</h1>
      </div>
    );
  }
}
