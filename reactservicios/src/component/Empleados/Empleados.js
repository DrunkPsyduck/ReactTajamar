import React, { Component } from "react";

export default class Empleados extends Component {
  state = {
    empleados: [],
    status: null,
    departamento: this.props.departamento,
  };

  render() {
    return <div>{this.state}</div>;
  }
}
