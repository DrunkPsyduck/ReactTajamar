import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { NavLink } from "react-router-dom";

export default class Hospitales extends Component {
  state = {
    hospitales: [],
    status: false,
  };
  cargarHospitales = () => {
    let request = "/webresources/hospitales";
    axios.get(Global.hospitales + request).then((res) => {
      this.setState({
        hospitales: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarHospitales();
  };
  render() {
    return (
      <div>
        <h1>Hospitales</h1>
        {this.state.status && (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Dirección</th>
                <th>Teléfono</th>
                <th>Camas</th>
                <th>Detalles</th>
              </tr>
            </thead>
            <tbody>
              {this.state.hospitales.map((hos, index) => {
                return (
                  <tr key={index}>
                    <td key={hos.idhospital}>{hos.idhospital}</td>
                    <td key={hos.nombre}>{hos.nombre}</td>
                    <td key={hos.direccion}>{hos.direccion}</td>
                    <td key={hos.telefono}>{hos.telefono}</td>
                    <td key={hos.camas}>{hos.camas}</td>
                    <td>
                      <NavLink to={"/details/" + hos.idhospital}>
                        Detalles
                      </NavLink>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
