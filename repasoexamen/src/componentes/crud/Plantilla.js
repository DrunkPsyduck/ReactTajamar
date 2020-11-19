import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { NavLink } from "react-router-dom";

export default class Plantilla extends Component {
  state = {
    plantilla: [],
    status: false,
  };

  cargarPlantilla = () => {
    let request = "api/plantilla";
    axios.get(Global.plantilla + request).then((res) => {
      this.setState({
        plantilla: res.data,
        status: true,
      });
    });
  };
  componentDidMount = () => {
    this.cargarPlantilla();
  };
  render() {
    return (
      <div>
        <h1>Test</h1>
        {this.state.status && (
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
              {this.state.plantilla.map((plan, index) => {
                return (
                  <tr key={index}>
                    <td key={plan.idEmpleado}>{plan.idEmpleado}</td>
                    <td key={plan.idHospital}>{plan.idHospital}</td>
                    <td key={plan.idSala}>{plan.idSala}</td>
                    <td key={plan.apellido}>{plan.apellido}</td>
                    <td key={plan.funcion}>{plan.funcion}</td>
                    <td key={plan.turno}>{plan.turno}</td>
                    <td key={plan.salario}>{plan.salario}</td>
                    <td>
                      <NavLink to={"/details/" + plan.idEmpleado}>
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
