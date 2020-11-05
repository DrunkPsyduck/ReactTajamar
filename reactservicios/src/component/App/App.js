import "./App.css";
//import Customer from "./../Customers";
//import BuscarCustomers from "./../BuscarCustomers";
//import Coches from "./../Coches";
// import Departamentos from "./../Empleados/Departamentos";
//import EmpleadosRouter from "./../RutasEmpleado/EmpleadosRouter";
import Router from "./../Router";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle";
import Departamentos from "./../Crud/Departamentos";
function App() {
  return (
    <div className="App">
      <Departamentos />
      <hr />
      <Router />
    </div>
  );
}

export default App;
