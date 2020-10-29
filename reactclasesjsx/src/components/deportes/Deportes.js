import React from "react";

class Deportes extends React.Component {
  state = {
    deportes: ["Futbol", "Baloncesto", "Drift", "Tenis"],
    nombre: "Alumno React",
  };
  render() {
    return (
      <div>
        <h2> Deportes de {this.state.nombre}</h2>
        <ul>
          {this.state.deportes.map((depor, index) => {
            return <li key={index}> {depor}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Deportes;
