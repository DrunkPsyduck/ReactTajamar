import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { Redirect } from "react-router-dom";
export default class DeleteDepartamento extends Component {
  state = {
    status: false,
  };
  eliminarDepartamento = () => {
    let request = "/api/departamentos/" + this.props.idDepartamento;
    axios.delete(Global.urlCrudDept + request).then((res) => {
      this.setState({ status: true });
    });
  };
  render() {
    if (this.state.status) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <br />
        <h1>¿Desea borrar el departamento {this.props.idDepartamento}?</h1>

        <br />
        <button onClick={this.eliminarDepartamento} className="btn btn-danger">
          Eliminar
        </button>
      </div>
    );
  }
}
