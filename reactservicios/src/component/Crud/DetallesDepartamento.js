import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { NavLink } from "react-router-dom";

export default class DetallesDepartamento extends Component {
  constructor(props) {
    super(props);
    this.setState({
      idDepartamento: props.idDepartamento,
    });
  }

  state = {
    departamento: [],
    status: false,
    idDepartamento: 0,
  };

  buscarDepartamento = () => {
    let request = "/api/departamentos/" + this.props.idDepartamento;
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
        <br />
        <h2>Detalles del departamento</h2>
        {this.state.status && (
          <React.Fragment>
            <a href="/" className="btn btn-primary">
              Volver
            </a>
            <h3 className="text-primary">
              Numero: {this.state.departamento.numero}
            </h3>
            <h3 className="text-primary">
              Nombre: {this.state.departamento.nombre}
            </h3>
            <h3 className="text-primary">
              Localidad: {this.state.departamento.localidad}
            </h3>
            <NavLink
              to={
                "/update/" +
                this.state.departamento.numero +
                "/" +
                this.state.departamento.nombre +
                "/" +
                this.state.departamento.localidad
              }
              className="btn btn-warning"
            >
              Modificar
            </NavLink>
            <NavLink
              to={"/delete/" + this.state.departamento.numero}
              className="btn btn-danger"
            >
              Borrar
            </NavLink>
            <hr />
            {/* Los NavLink se utilizan para enlaces internos, los <a> para enlaces externos */}
            <NavLink
              to={"/delete/" + this.state.departamento.numero}
              className="btn btn-primary"
            >
              Delete NavLink
            </NavLink>
          </React.Fragment>
        )}
      </div>
    );
  }
}
