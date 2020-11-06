import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { NavLink } from "react-router-dom";
export default class Departamentos extends Component {
  state = {
    departamentos: [],
    status: false,
  };
  cargarDepartamentos = () => {
    let request = "/api/departamentos";
    axios.get(Global.urlCrudDept + request).then((res) => {
      this.setState({
        departamentos: res.data,
        status: true,
      });
    });
  };
  componentDidMount = () => {
    this.cargarDepartamentos();
  };
  render() {
    return (
      <div>
        <h1>Departamentos</h1>
        {this.state.status && (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Número</th>
                <th>Nombre</th>
                <th>Localidad</th>
                <th>Detalles</th>
              </tr>
            </thead>
            <tbody>
              {this.state.departamentos.map((dept, index) => {
                return (
                  <tr key={index}>
                    <td key={dept.numero}>{dept.numero}</td>
                    <td key={dept.nombre}>{dept.nombre}</td>
                    <td key={dept.localidad}>{dept.localidad}</td>
                    <td>
                      <NavLink to={"/details/" + dept.numero}>Detalles</NavLink>
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
