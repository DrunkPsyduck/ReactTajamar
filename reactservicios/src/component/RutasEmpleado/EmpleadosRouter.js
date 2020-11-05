import React, { Component } from "react";
import Global from "./../../Global";
import axios from "axios";
import "./Estilos.css";
export default class EmpleadosRouter extends Component {
  state = {
    empleados: [],
    status: false,
  };

  cargarEmpleados = () => {
    let request = "/api/empleados";
    axios.get(Global.empleados + request).then((res) => {
      this.setState({
        empleados: res.data,
        status: true,
      });
    });
  };
  componentDidMount = () => {
    this.cargarEmpleados();
  };
  render() {
    return (
      <div>
        <h1>Rutas de empleado</h1>
        <ul>
          {this.state.status &&
            this.state.empleados.map((emp, index) => {
              return (
                <li key={index}>
                  <a href={"/empleadoDetalles/" + emp.idEmpleado}>
                    {emp.apellido}
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
