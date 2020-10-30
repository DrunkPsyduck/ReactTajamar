import React from "react";
import LogoCine from "../../assets/images/Tenet.jpg";

class Cine extends React.Component {
  render() {
    return (
      <div>
        <h1>Componente Cine</h1>
        <img src={LogoCine}></img>
      </div>
    );
  }
}
export default Cine;
