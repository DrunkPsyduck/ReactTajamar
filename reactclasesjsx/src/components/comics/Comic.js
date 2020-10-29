import React from "react";
import "./Comics.css";

class Comic extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <img src={this.props.imagen} />
        <h1>{this.props.descripcion}</h1>
      </div>
    );
  }
}

export default Comic;
