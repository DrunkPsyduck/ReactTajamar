import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";

export default class InsertarDepartamento extends Component {
  cajaNumeroRef = React.createRef();
  cajaNombreRef = React.createRef();
  cajaLocalidadRef = React.createRef();
  state = {
    mensaje: "",
    status: false,
  };
  nuevoDepartamento = (e) => {
    e.preventDefault();
    let num = parseInt(this.cajaNumeroRef.current.value);
    let nom = this.cajaNombreRef.current.value;
    let loc = this.cajaLocalidadRef.current.value;
    let dpt = {
      numero: num,
      nombre: nom,
      localidad: loc,
    };

    let request = "/api/departamentos";
    let url = Global.urlCrudDept + request;
    axios.post(url, dpt).then((res) => {
      this.setState({
        mensaje: "Nuevo departamanto: " + num,
        status: true,
      });
    });
  };
  render() {
    return (
      <div>
        <h1>Nuevo departamento</h1>
        <form onSubmit={this.nuevoDepartamento}>
          <label>Numero:</label>
          <input
            type="text"
            name="cajaNuemero"
            className="form-control"
            ref={this.cajaNumeroRef}
          />
          <br />
          <label>Nombre:</label>
          <input
            type="text"
            name="cajaNombre"
            className="form-control"
            ref={this.cajaNombreRef}
          />
          <br />
          <label>Localidad:</label>
          <input
            type="text"
            name="cajaLocalidad"
            className="form-control"
            ref={this.cajaLocalidadRef}
          />
          <br />
          <button className="btn btn-secondary">Insertar Departamento</button>
        </form>
        <br />
        {this.state.status && (
          <h3 className="alert alert-success">{this.state.mensaje}</h3>
        )}
      </div>
    );
  }
}
