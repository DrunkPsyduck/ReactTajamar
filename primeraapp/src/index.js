import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import Car from "./components/Car";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Car
      marca="Nissan"
      modelo="Fairlady Z"
      velocidadMaxima="180"
      aceleracion="15"
    />

    <Car
      marca="Toyota"
      modelo="Corolla AE86 Sprinter Trueno GP APEX"
      velocidadMaxima="175"
      aceleracion="25"
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
