import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import Empleados from "./Empleados";

export default class Departamentos extends Component {
  state = {
    departamentos: [],
    departamento: "",
    empleados: [],
    status: null,
  };
  cargarDepartamentos = () => {
    axios.get(Global.departamentos).then((res) => {
      this.setState({ departamentos: res.data, status: "Success" });
    });
  };
  componentDidMount = () => {
    this.cargarDepartamentos();
  };

  guardaValor = (e) => {
    e.preventDefault();
    let dpt = e.target.value;
    if (dpt !== "Seleccione departamento") {
      this.setState({ departamento: dpt });
    }
  };

  render() {
    return (
      <div>
        <h2>Seleccion departamento</h2>
        <select onChange={this.guardaValor}>
          <option vlaue="0">Seleccione departamento</option>
          {this.state.departamentos.map((dpt, index) => {
            return (
              <option key={index} value={dpt.Numero}>
                {dpt.Nombre}
              </option>
            );
          })}
        </select>
        <button>Buscar Empleados</button>

        {this.state.status === "Success" && (
          <Empleados idDepartamento={this.state.departamento} />
        )}
      </div>
    );
  }
}
