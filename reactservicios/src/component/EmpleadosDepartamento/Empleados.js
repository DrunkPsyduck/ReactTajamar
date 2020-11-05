import React, { Component } from "react";
import axios from "axios";
import Global from "../../Global";

export default class Empleados extends Component {
  state = {
    empleados: [],
    status: null,
  };

  cargarEmpleados = () => {
    let idDept = this.props.idDepartamento;
    let request = "api/Empleados/EmpleadosDepartamento/" + idDept;
    axios.get(Global.empleados + request).then((res) => {
      this.setState({ empleados: res.data, status: "Success" });
    });
  };

  componentDidMount = () => {
    this.cargarEmpleados();
  };

  componentDidUpdate = () => {
    this.cargarEmpleados();
  };
  render() {
    return (
      <div>
        {this.state.empleados.length > 0 &&
          this.state.empleados.map((emp, index) => {
            return <h3 key={index}>{emp.apellido}</h3>;
          })}
      </div>
    );
  }
}
