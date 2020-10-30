import React from "react";
import LogoTelevision from "../../assets/images/NoTimeToDie.jpg";

class Television extends React.Component {
  render() {
    return (
      <div>
        <h1>Componente television</h1>
        <img src={LogoTelevision}></img>
      </div>
    );
  }
}
export default Television;
