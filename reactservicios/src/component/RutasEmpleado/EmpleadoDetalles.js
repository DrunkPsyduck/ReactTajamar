import React, { Component } from "react";

export default class EmpleadoDetalles extends Component {
  //Se reciben props con un constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello world , {this.props.idEmpleado}</h1>
      </div>
    );
  }
}
