import React, { Component } from "react";
import Global from "./../../Global";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class UpdateDepartamento extends Component {
  cajaNumeroRef = React.createRef();
  cajaNombreRef = React.createRef();
  cajaLocalidadRef = React.createRef();
  state = {
    status: false,
  };

  modificarDepartamento = (e) => {
    e.preventDefault();
    let num = parseInt(this.cajaNumeroRef.current.value);
    let nom = this.cajaNombreRef.current.value;
    let loc = this.cajaLocalidadRef.current.value;

    let dept = {
      numero: num,
      nombre: nom,
      localidad: loc,
    };
    let request = "/api/departamentos";
    axios.put(Global.urlCrudDept + request, dept).then((res) => {
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
        <h1>Modificar Elementos {this.props.idDepartamento}</h1>
        <form onSubmit={this.modificarDepartamento}>
          <label>Numero</label>
          <input
            type="text"
            name="cajaNumero"
            className="form-control"
            ref={this.cajaNumeroRef}
            defaultValue={this.props.idDepartamento}
            readOnly
          />
          <label>Nombre</label>
          <input
            type="text"
            name="cajaNumero"
            className="form-control"
            ref={this.cajaNombreRef}
            defaultValue={this.props.nombre}
          />
          <label>Localidad</label>
          <input
            type="text"
            name="cajaNumero"
            className="form-control"
            ref={this.cajaLocalidadRef}
            defaultValue={this.props.localidad}
          />
          <br />
          <button className="btn btn-warning">Modificar</button>
        </form>
      </div>
    );
  }
}
