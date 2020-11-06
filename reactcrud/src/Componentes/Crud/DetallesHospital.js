import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { NavLink, Redirect } from "react-router-dom";
import Swal from "sweetalert2";

export default class DetallesHospital extends Component {
  constructor(props) {
    super(props);
    this.setState({ idHospital: props.idHospital, status: false });
  }
  state = { hospital: [], status: false, idHospital: 0, borrado: false };

  buscarHospital = () => {
    let request = "/webresources/hospitales/" + this.props.idHospital;
    axios.get(Global.hospitales + request).then((res) => {
      this.setState({ hospital: res.data, status: true });
    });
  };
  componentDidMount = () => {
    this.buscarHospital();
  };

  borrarHospital = () => {
    let request = "/webresources/hospitales/delete/" + this.props.idHospital;
    axios.delete(Global.hospitales + request).then((res) => {
      this.setState({ borrado: true });
    });
  };
  triggerDelete = () => {
    Swal.fire({
      title: "¿Seguro que quiere borrar el hospital?",
      showDenyButton: true,
      confirmButtonText: `Borrar`,
      confirmButtonColor: `red`,
      denyButtonText: `Salir`,
      denyButtonColor: `grey`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Hospital Borrado", this.borrarHospital());
      } else if (result.isDenied) {
        Swal.fire("No se borrará el hospital", "", "info");
      }
    });
  };
  render() {
    if (this.state.borrado) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        {this.state.status && (
          <React.Fragment>
            <br />
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h2>ID Hospital: {this.state.hospital.idhospital}</h2>
                </div>
                <div className="card-body">
                  <h4>Nombre: {this.state.hospital.nombre}</h4>
                  <h4>Direccion: {this.state.hospital.direccion}</h4>
                  <h4>Telefono: {this.state.hospital.telefono}</h4>
                  <h4>Camas: {this.state.hospital.camas}</h4>
                </div>
              </div>
            </div>
            <br />
            <div>
              <NavLink to="/" className="btn btn-primary">
                Volver atrás
              </NavLink>
            </div>
            <br />

            <NavLink
              to={
                "/update/" +
                this.state.hospital.idhospital +
                "/" +
                this.state.hospital.nombre
              }
              className="btn btn-warning"
            >
              Modificar
            </NavLink>
            <button className="btn btn-danger" onClick={this.triggerDelete}>
              Eliminar
            </button>
          </React.Fragment>
        )}
      </div>
    );
  }
}
