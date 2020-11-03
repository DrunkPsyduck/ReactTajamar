import React, { Component } from "react";

export default class SeleccionSimple extends Component {
  seleccionado = React.createRef();
  state = {
    filas: [],
    opciones: [],
  };
  generarOption = () => {
    let options = [];
    for (let i = 0; i < 10; i++) {
      let rnd = Math.floor(Math.random() * 55 + 1);
      options.push(
        <option key={i} value={rnd}>
          {rnd}
        </option>
      );
    }
    this.setState({
      opciones: options,
    });
  };

  //metodo para cargar los options solo una vez. Ciclo de vida
  componentWillMount = () => {
    this.generarOption();
  };
  compo;
  tablaMultiplicar = (e) => {
    e.preventDefault();
    let numero = parseInt(this.seleccionado.current.value);
    let datos = [];
    for (let i = 0; i < 10; i++) {
      let operacion = numero * i;
      datos.push(
        <tr key={i}>
          <td>{numero + "*" + i}</td>
          <td>{operacion}</td>
        </tr>
      );
    }
    this.setState({
      filas: datos,
    });
  };
  render() {
    return (
      <div>
        <h1>Selección de elemento</h1>
        <form onSubmit={this.tablaMultiplicar}>
          <select name="selectNumeros" ref={this.seleccionado}>
            {this.state.opciones}
            {/* Con los parentesis se ejecuta al cargar. Sin ellos espera al usuario para ejecutarsre */}
          </select>
          <button>Generar tabla</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Operacion</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>{this.state.filas}</tbody>
        </table>
      </div>
    );
  }
}
