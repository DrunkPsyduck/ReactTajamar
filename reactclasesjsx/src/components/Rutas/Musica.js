import React from "react";
import LogoMusica from "../../assets/images/eurobeat.jpg";

class Musica extends React.Component {
  render() {
    return (
      <div>
        <h1>Componente Muscia</h1>
        <img src={LogoMusica} alt="a"></img>
      </div>
    );
  }
}
export default Musica;
