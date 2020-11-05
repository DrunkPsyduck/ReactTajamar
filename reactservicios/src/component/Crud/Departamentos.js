import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
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
          <table className="table tabel-bordered">
            <thead>
              <tr>
                <th>Número</th>
                <th>Nombre</th>
                <th>Localidad</th>
              </tr>
            </thead>
            <tbody>
              {this.state.departamentos.map((dept, index) => {
                return (
                  <tr>
                    <td>{dept.numero}</td>
                    <td>{dept.nombre}</td>
                    <td>{dept.localidad}</td>
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
