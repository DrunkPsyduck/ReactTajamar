import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";

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
            <h3 className="text-primary">
              Numero: {this.state.departamento.numero}
            </h3>
            <h3 className="text-primary">
              Nombre: {this.state.departamento.nombre}
            </h3>
            <h3 className="text-primary">
              Localidad: {this.state.departamento.localidad}
            </h3>
          </React.Fragment>
        )}
      </div>
    );
  }
}
