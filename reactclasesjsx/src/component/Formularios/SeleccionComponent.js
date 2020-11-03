import React, { Component } from "react";
import Select from "react-select";

export default class seleccionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientes: ["Leche", "Cacao", "Avellanas", "Ázucar"],
      opciones: [],
      selectedOption: null,
      seleccionados: "",
    };
  }

  componentWillMount = () => {
    this.generarOptions();
  };

  generarOptions = () => {
    let datos = [];
    this.state.ingredientes.map((ingrediente, i) => {
      datos.push({ value: ingrediente, label: ingrediente });
    });
    this.setState({ opciones: datos });
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  mostrarSeleccionado = (seleccionado) => {
    this.setState({
      selectedOption: seleccionado,
      seleccionados: seleccionado.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Select componente externo</h1>
        <Select
          isMulti
          value={this.state.selectedOption}
          onChange={this.mostrarSeleccionado}
          options={this.state.opciones}
        />
        <h2 style={{ color: "red" }}>{this.state.seleccionados}</h2>
      </div>
    );
  }
}
