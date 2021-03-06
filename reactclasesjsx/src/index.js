import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
//!Declaracion de los componentes creados y utilizados en clase
// import Deportes from "./components/comics/Deportes";
// import Numeros from "./components/comics/Numeros";
// import Comics from "./components/comics/Comics";
//import EjemploSimple from "./components/Formularios/EjemploSimple";
//import Collatz from "./components/Collatz/Collatz";
//import SeleccionSimple from "./components/Formularios/SeleccionSimple";
// import SeleccionMultiple from "./components/Formularios/SeleccionMultiple";
import SeleccionarComics from "./components/Formularios/SeleccionarComics";
// import SeleccionSimple from "./components/Formularios/SeleccionSimple";
import SeleccionComponent from "./components/Formularios/SeleccionComponent";

ReactDOM.render(
  <React.StrictMode>
    <SeleccionComponent />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
