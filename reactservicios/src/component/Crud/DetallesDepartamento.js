import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";

export default class DetallesDepartamento extends Component {
  constructor(props) {
    super(props);
    this.setState({
      idDepartamento: props.iddepartamento,
    });
  }

  state = {
    departamento: {},
    status: false,
    idDepartamento: 0,
  };

  buscarDepartamento = () => {
    let request = "/api/departamentos" + this.state.idDepartamento;
    axios.get(Global.urlCrudDept + request).then((res) => {
      this.setState({
        departamento: res.data,
        status: true,
      });
    });
  };
  componentDidMount = () => {
    this.buscarDepartamento();
  };
  render() {
    return (
      <div>
        <h2>Detalles del departamento</h2>
        {this.state.status && (
          <React.Fragment>
            <h3>Numero: {this.state.departamento.numero}</h3>
            <h3>Nombre: {this.state.departamento.nombre}</h3>
            <h3>Localidad: {this.state.departamento.localidad}</h3>
          </React.Fragment>
        )}
      </div>
    );
  }
}
