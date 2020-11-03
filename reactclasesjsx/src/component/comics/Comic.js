import React from "react";
import "./Comics.css";

class Comic extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.comic.titulo}</h1>
        <img src={this.props.comic.imagen} alt="alt" />
        <h1>{this.props.comic.descripcion}</h1>
        {/* <button
          onClick={() => {
            this.props.seleccionarComic(this.props.comic);
          }}
        >
          Seleccionar Comic
        </button> */}

        {/* <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => {
            this.props.eliminarComic(this.props.index);
          }}
        >
          Eliminar Comic
        </button> */}
      </div>
    );
  }
}

export default Comic;
