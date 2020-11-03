import React, { Component } from "react";
//Se necesita agregar unos componentes de la libreria del Router-Dom
import { BrowserRouter, Route, Switch } from "react-router-dom";
//. Todos los componentes entre los que deseemos navegar debe estar aqui declarados
import Home from "./Rutas/Home";
import Cine from "./Rutas/Cine";
import Musica from "./Rutas/Musica";
import Television from "./Rutas/Television";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/musica" component={Musica} exact></Route>
          <Route path="/cine" component={Cine}></Route>
          <Route path="/television" component={Television}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
