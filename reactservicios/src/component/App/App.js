import "./App.css";
//import Customer from "./../Customers";
//import BuscarCustomers from "./../BuscarCustomers";
//import Coches from "./../Coches";
// import Departamentos from "./../Empleados/Departamentos";
import Router from "./../Router";
import EmpleadosRouter from "./../RutasEmpleado/EmpleadosRouter";
function App() {
  return (
    <div className="App">
      <EmpleadosRouter />
      <hr />
      <Router />
    </div>
  );
}

export default App;
