import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import PrimeraClase from "./components/primeraClase/PrimeraClase";

ReactDOM.render(
  <React.StrictMode>
    <PrimeraClase titulo="Hola holita vecinito" />
    <PrimeraClase titulo="Hola mundo cruel" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
