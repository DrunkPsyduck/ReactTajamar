import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { NavLink, Redirect } from "react-router-dom";

export default class DetallePlantilla extends Component {
  constructor(props) {
    super(props);
    this.setState({ idEmpleado: props.idEmpleado });
    console.log(props.idEmpleado);
  }
  state = { empleado: [], status: false, idEmpleado: this.props.idEmpleado };

  buscarEmpleado = () => {
    let request = "/api/plantilla/" + this.state.idEmpleado;
    axios.get(Global.plantilla + request).then((res) => {
      this.setState({ empleado: res.data, status: true });
      console.log(this.state.idEmpleado);
    });
  };
  componentDidMount = () => {
    this.buscarEmpleado();
  };
  render() {
    return (
      <div>
        {this.state.status && (
          <div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>idEmpleado</th>
                  <th>idHospital</th>
                  <th>idSala</th>
                  <th>apellido</th>
                  <th>funcion</th>
                  <th>turno</th>
                  <th>salario</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.empleado.idEmpleado}</td>
                  <td>{this.state.empleado.idHospital}</td>
                  <td>{this.state.empleado.idSala}</td>
                  <td>{this.state.empleado.apellido}</td>
                  <td>{this.state.empleado.funcion}</td>
                  <td>{this.state.empleado.turno}</td>
                  <td style={{ backgroundColor: "lightblue" }}>
                    {this.state.empleado.salario}
                  </td>
                </tr>
              </tbody>
            </table>
            <NavLink to={"/"} className="btn btn-danger">
              Volver
            </NavLink>
          </div>
        )}
      </div>
    );
  }
}
