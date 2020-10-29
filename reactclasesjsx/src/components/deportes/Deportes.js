import React from "react";
import Deporte from "./Deporte";

class Deportes extends React.Component {
  //!solo una declaracion de state. Si se vuelve a declararar lo sobreescribe
  state = {
    deportes: ["Futbol", "Baloncesto", "Drift", "Tenis"],
    nombre: "Alumno React",
    seleccionado: "",
  };
  // ? Ejecutado por el hijo llamando al parent
  seleccionarFavorito = (deporteFavorito) => {
    this.setState({ seleccionado: deporteFavorito });
  };
  contador = 1;
  nuevoDeporte = () => {
    //cambiar state y recuperar los deportes de este
    let deportes = this.state.deportes;
    deportes.push("deporte " + this.contador);
    this.contador++;
    this.setState({
      deportes: deportes,
    });
  };
  render() {
    return (
      <div>
        <h1> Deportes de {this.state.nombre}</h1>
        <button onClick={this.nuevoDeporte}>Crear Nuevo deporte </button>
        <h2 style={{ color: "royalblue" }}>
          Seleccionado {this.state.seleccionado}
        </h2>
        <ul>
          {this.state.deportes.map((depor, index) => {
            return (
              <Deporte
                key={index}
                deporte={depor}
                seleccionarFavorito={this.seleccionarFavorito}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Deportes;
