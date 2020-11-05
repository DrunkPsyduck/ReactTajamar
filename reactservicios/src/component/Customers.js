import React, { Component } from "react";
import axios from "axios";

export default class Customer extends Component {
  urlCustomers = "http://northwind.netcore.io/customers?format=json";
  state = {
    customers: [],
    status: null,
  };
  cargarClientes = () => {
    axios.get(this.urlCustomers).then((res) => {
      console.log(res.data.customers);
      this.setState({ customers: res.data.customers, status: "Success" });
    });
  };

  componentWillMount = () => {
    this.cargarClientes();
  };
  render() {
    if (this.state.customers.length > 0) {
      // * hay clientes
      return (
        <div>
          <h1>Servicio API CUSTOMERS</h1>
          {this.state.customers.map((cliente) => {
            return <h2 key={cliente.id}>{cliente.contactName}</h2>;
          })}
        </div>
      );
    } else if (this.state.customers.length === 0) {
      // * no se han cargado los clientes
      return <h1>No hay clientes</h1>;
    } else if (this.state.status !== "success") {
      //* el servicio no ha terminado de procesar
      return <h1>Cargando...</h1>;
    } else {
      //*otra opcion
      return <h1>Algo ha ido mal</h1>;
    }
    // return (
    //   <div>
    //     <h1>Servicios API Customer</h1>
    //     {this.state.customers.map((cliente) => {
    //       return <h2 key={cliente.id}>{cliente.contactName}</h2>;
    //     })}
    //   </div>
    // );
  }
}
