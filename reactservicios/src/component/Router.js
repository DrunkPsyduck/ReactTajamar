import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EmpleadoDetalles from "./RutasEmpleado/EmpleadoDetalles";
import Departamentos from "./Crud/Departamentos";
import InsertarDepartamento from "./Crud/InsertarDepartamento";
import DetallesDepartamento from "./Crud/DetallesDepartamento";
import UpdateDepartamento from "./Crud/UpdateDepartamento";
import DeleteDepartamento from "./Crud/DeleteDepartamento";
export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Departamentos}></Route>
          <Route exact path="/create" component={InsertarDepartamento}></Route>
          <Route
            exact
            path="/details/:id"
            render={(props) => {
              let id = props.match.params.id;
              return <DetallesDepartamento idDepartamento={id} />;
            }}
          ></Route>
          <Route
            exact
            path="/update/:id/:nombre/:localidad"
            render={(props) => {
              let id = props.match.params.id;
              let nombre = props.match.params.nombre;
              let localidad = props.match.params.localidad;
              return (
                <UpdateDepartamento
                  idDepartamento={id}
                  nombre={nombre}
                  localidad={localidad}
                />
              );
            }}
          ></Route>
          <Route
            exact
            path="/delete/:id"
            render={(props) => {
              let id = props.match.params.id;
              return <DeleteDepartamento idDepartamento={id} />;
            }}
          />
          <Route
            exact
            path="/empleadoDetalles/idEmpleado"
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
