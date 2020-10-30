import React from "react";
import LogoHome from "../../assets/images/Skyfall.jpg";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <img src={LogoHome} alt="a"></img>
      </div>
    );
  }
}
export default Home;
