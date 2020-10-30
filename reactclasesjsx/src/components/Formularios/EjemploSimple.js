import React, { Component } from "react";

export default class EjemploSimple extends Component {
  //propiedades para enlazar los <input>
  nombre = React.createRef();
  apellidos = React.createRef();

  state = {
    usuario: {}, //objeto vacio. La lógica es la misma
  };

  recibirDatos = (e) => {
    //Para trabajar en Front es necesario cortar el submit para trabajar
    //No esta supeditado a hacerlo unicamente en el submit
    e.preventDefault();
    let user = {
      nombre: this.nombre.current.value,
      apellidos: this.apellidos.current.value,
    };
    this.setState({ usuario: user });
  };

  render() {
    return (
      <div>
        <h1>Ejemplo forms en React JS</h1>
        {this.state.usuario.nombre && (
          <h1 style={{ backgroundColor: "black", color: "white" }}>
            {this.state.usuario.nombre}, {this.state.usuario.apellidos}
          </h1>
        )}
        <form onSubmit={this.recibirDatos}>
          {/* En React htmlFor utiliza el atributo name del input */}
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            ref={this.nombre}
            name="nombre"
            onChange={this.recibirDatos}
          />
          <br />
          <label htmlFor="apellidos">apellidos</label>
          <input
            type="text"
            ref={this.apellidos}
            name="apellidos"
            onChange={this.recibirDatos}
          />
          <br />
          <button>Enviar Datos</button>
        </form>
      </div>
    );
  }
}
