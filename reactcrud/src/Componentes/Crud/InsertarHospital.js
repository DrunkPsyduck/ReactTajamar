import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./Crud.css";

export default class InsertarHospital extends Component {
  cajaIdRef = React.createRef();
  cajaNombreRef = React.createRef();
  cajaDireccionRef = React.createRef();
  cajaTelefonoRef = React.createRef();
  cajaCamasRef = React.createRef();
  state = { mensaje: "", status: false };

  nuevoHospital = (e) => {
    e.preventDefault();
    let id = parseInt(this.cajaIdRef.current.value);
    let nom = this.cajaNombreRef.current.value;
    let dir = this.cajaDireccionRef.current.value;
    let telf = this.cajaTelefonoRef.current.value;
    let cama = this.cajaCamasRef.current.value;

    let hosp = {
      idhospital: id,
      nombre: nom,
      direccion: dir,
      telefono: telf,
      camas: cama,
    };
    let request = "/webresources/hospitales/post";
    let url = Global.hospitales + request;
    axios.post(url, hosp).then((res) => {
      this.setState({ mensaje: "Hospital insertado " + id, status: true });
    });
  };
  render() {
    if (this.state.status) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1> Nuevo Hospital</h1>
        <form onSubmit={this.nuevoHospital}>
          <label>Id</label>
          <input
            type="text"
            name="cajaId"
            className="form-control"
            ref={this.cajaIdRef}
          />

          <label>Nombre</label>
          <input
            type="text"
            name="cajaNombre"
            className="form-control"
            ref={this.cajaNombreRef}
          />

          <label>Direccion</label>
          <input
            type="text"
            name="cajaDireccion"
            className="form-control"
            ref={this.cajaDireccionRef}
          />
          <label>Telefono</label>
          <input
            type="text"
            name="cajaTelefono"
            className="form-control"
            ref={this.cajaTelefonoRef}
          />
          <label>Camas</label>
          <input
            type="text"
            name="cajaCamas"
            className="form-control"
            ref={this.cajaCamasRef}
          />
          <br />
          <button className="btn btn-secondary">Insertar</button>
        </form>
      </div>
    );
  }
}
