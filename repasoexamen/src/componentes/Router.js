import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetallePlantilla from "./crud/DetallePlantilla";
import Menu from "./crud/Menu";
import Plantilla from "./crud/Plantilla";
import Salarios from "./crud/Salarios";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/" component={Plantilla} />
          <Route
            exact
            path="/details/:id"
            render={(props) => {
              let id = props.match.params.id;
              return <DetallePlantilla idEmpleado={id} />;
            }}
          />

          <Route exact path="/salarios/" component={Salarios} />
        </Switch>
      </BrowserRouter>
    );
  }
}
