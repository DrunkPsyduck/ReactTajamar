import React, { Component } from "react";
import axios from "axios";

export default class Customer extends Component {
  urlCustomers = "http://northwind.netcore.io/customers?format=json";
  state = {
    customers: [],
  };
  cargarClientes = () => {
    axios.get(this.urlCustomers).then((res) => {
      console.log(res.data.customers);
      this.setState({ customers: res.data.customers });
    });
  };

  componentWillMount = () => {
    this.cargarClientes();
  };
  render() {
    return (
      <div>
        <h1>Servicios API Customer</h1>
        {this.state.customers.map((cliente) => {
          return <h2 key={cliente.id}>{cliente.contactName}</h2>;
        })}
      </div>
    );
  }
}
