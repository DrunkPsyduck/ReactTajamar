import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetallesHospital from "./Crud/DetallesHospital";
import Hospitales from "./Crud/Hospitales";
import InsertarHospital from "./Crud/InsertarHospital";
import NavHospitales from "./Crud/NavHospitales";
import UpdateHospital from "./Crud/UpdateHospital";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavHospitales />
        <Switch>
          <Route exact path="/" component={Hospitales} />
          <Route
            exact
            path="/details/:id"
            render={(props) => {
              let id = props.match.params.id;
              return <DetallesHospital idHospital={id} />;
            }}
          />
          <Route
            exact
            path="/update/:id/:nombre"
            render={(props) => {
              let id = props.match.params.id;
              let nombre = props.match.params.nombre;
              let direccion = props.match.params.direccion;
              let telefono = props.match.params.telefono;
              let camas = props.match.params.camas;
              return (
                <UpdateHospital
                  idHospital={id}
                  nombre={nombre}
                  direccion={direccion}
                  telefono={telefono}
                  camas={camas}
                />
              );
            }}
          />
          <Route exact path="/create/" component={InsertarHospital} />
        </Switch>
      </BrowserRouter>
    );
  }
}
