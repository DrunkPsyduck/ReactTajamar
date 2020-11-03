import React, { Component } from "react";

export default class SeleccionMultiple extends Component {
  SeleccionMultipleRef = React.createRef();
  state = {
    ingredientes: ["Leche", "Cacao", "Avellanas", "Ázucar"],
    seleccionados: "",
  };

  generarOption = () => {
    let options = [];
    this.state.ingredientes.map((ingrediente, i) => {
      options.push(
        <option key={i} value={ingrediente}>
          {ingrediente}
        </option>
      );
    });
    return options;
  };
  mostrarSeleccionados = (e) => {
    e.preventDefault();
    let datos = "";
    //ref.current.value funsiona bien cúando son selecciones simple pero no con selecciones múltiples
    //ref.current.options.
    let options = this.SeleccionMultipleRef.current.options;

    for (let i = 0; i < options.length; i++) {
      if (options[i].selected === true) {
        datos += options[i].value + ", ";
      }
    }
    this.setState({ seleccionados: datos });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.mostrarSeleccionados}>
          <select
            name="seleccionMultiple"
            size="10"
            ref={this.SeleccionMultipleRef}
            multiple
          >
            {this.generarOption()}
          </select>
          <button>Mostrar seleccionados</button>
        </form>
        <h1 style={{ color: "green" }}> {this.state.seleccionados}</h1>
      </div>
    );
  }
}
