import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import PrimeraClase from "./components/primeraClase/PrimeraClase";
import Deportes from "./components/deportes/Deportes";

ReactDOM.render(
  <React.StrictMode>
    <PrimeraClase titulo="Hola holita vecinito" inicio="12" />
    <PrimeraClase titulo="Hola mundo cruel" inicio="86" />
    <Deportes />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
