import React, { Component } from "react";
//Se necesita agregar unos componentes de la libreria del Router-Dom
import { BrowserRoute, Route, Switch } from "react-router-dom";
//. Todos los componentes entre los que deseemos navegar debe estar aqui declarados
import Home from "./Rutas/Home";
import Cine from "./Rutas/Cine";
import Musica from "./Rutas/Musica";
import Television from "./Rutas/Television";

export default class Router extends Component {
  render() {
    return <div></div>;
  }
}
