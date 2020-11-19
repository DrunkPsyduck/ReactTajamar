import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { NavLink } from "react-router-dom";

export default class Salarios extends Component {
  state = {
    funciones: [],
    status: false,
    incrementado: false,
    funcion: "",
    empleados: [],
  };
  cajaSalarioRef = React.createRef();
  cajaFuncionRef = React.createRef();
  cargarFunciones = () => {
    let request = "/api/plantilla/funciones";
    axios.get(Global.plantilla + request).then((res) => {
      this.setState({ funciones: res.data, status: true });
    });
  };
  updateSalario = (e) => {
    e.preventDefault();
    let salario = parseInt(this.cajaSalarioRef.current.value);
    let funcion = this.cajaFuncionRef.current.value;

    let request = "/api/plantilla/" + funcion + "/" + salario;
    axios.put(Global.plantilla + request).then((res) => {
      this.setState({ incrementado: true, funcion: funcion });
      this.getEmpleadosFuncion();
    });
  };

  getEmpleadosFuncion = () => {
    let request = "/api/Plantilla/PlantillaFuncion/" + this.state.funcion;
    axios.get(Global.plantilla + request).then((res) => {
      this.setState({ empleados: res.data });
    });
  };

  componentDidMount = () => {
    this.cargarFunciones();
  };
  render() {
    return (
      <div>
        <h2>salarios</h2>
        {this.state.status && (
          <form onSubmit={this.updateSalario}>
            <select ref={this.cajaFuncionRef}>
              {this.state.funciones.map((func, index) => {
                return (
                  <option key={index} value={func}>
                    {func}
                  </option>
                );
              })}
            </select>
            <br />
            <label>Incrementar salario en </label>
            <br />
            <input type="number" name="cajasalario" ref={this.cajaSalarioRef} />
            <br />
            <button className="btn btn-warning">Update</button>
          </form>
        )}

        {this.state.incrementado && (
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
                <th>info</th>
              </tr>
            </thead>
            <tbody>
              {this.state.empleados.map((emp, index) => {
                return (
                  <tr key={index}>
                    <td key={emp.idEmpleado}>{emp.idEmpleado}</td>
                    <td key={emp.idHospital}>{emp.idHospital}</td>
                    <td key={emp.idSala}>{emp.idSala}</td>
                    <td key={emp.apellido}>{emp.apellido}</td>
                    <td key={emp.funcion}>{emp.funcion}</td>
                    <td key={emp.turno}>{emp.turno}</td>
                    <td key={emp.salario}>{emp.salario}</td>
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
