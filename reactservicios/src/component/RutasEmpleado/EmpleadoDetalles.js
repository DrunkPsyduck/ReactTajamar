import React, { Component } from "react";
import Global from "./../../Global";
import axios from "axios";
export default class EmpleadoDetalles extends Component {
  //Se reciben props con un constructor
  constructor(props) {
    super(props);
    console.log("empleado" + this.props.idEmpleado);
  }

  state = {
    empleado: {},
    status: false,
  };
  mostrarEmpleado = () => {
    let request = "/api/empleados/" + this.props.idEmpleado;
    axios.get(Global.empleados + request).then((res) => {
      this.setState({
        empleado: res.data,
        status: true,
      });
    });
    console.log(this.state);
  };

  componentDidMount = () => {
    this.mostrarEmpleado();
  };
  render() {
    return (
      <div>
        {this.state.status && (
          <div>
            <h2 className="resultado">
              Apellido: {this.state.empleado.apellido}
            </h2>
            <h2 className="resultado">Oficio: {this.state.empleado.oficio}</h2>
          </div>
        )}
      </div>
    );
  }
}
