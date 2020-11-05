import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EmpleadoDetalles from "./RutasEmpleado/EmpleadoDetalles";
export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/empleadoDetalles/:idEmpleado"
            render={(props) => {
              var idEmp = props.match.params.idEmpleado;
              console.log("ID " + idEmp);
              return <EmpleadoDetalles idEmpleado={idEmp} />;
            }}
          ></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
