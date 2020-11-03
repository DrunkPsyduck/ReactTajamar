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
    });
  };

  componentWillMount = () => {
    this.cargarClientes();
  };
  render() {
    return <div></div>;
  }
}
