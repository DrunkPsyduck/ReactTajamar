import React, { Component } from "react";
import axios from "axios";
export default class BuscarCustomers extends Component {
  cajaCustomerRef = React.createRef();

  state = {
    customer: {},
    status: false,
  };

  buscarCliente = (e) => {
    e.preventDefault();
    let idCLiente = this.cajaCustomerRef.current.value;
    let url = "http://northwind.netcore.io/customers/" + idCLiente + ".json";
    axios.get(url).then((res) => {
      this.setState({
        customer: res.data.customer,
        status: true,
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Buscador customer</h1>
        <form onSubmit={this.buscarCliente}>
          <label> Id customer: </label>
          <input
            type="text"
            name="cajacustomer"
            ref={this.cajaCustomerRef}
          ></input>
          <br />
          <button>Buscar Clientes</button>
        </form>
        {this.state.status === true && (
          <div>
            <h2 style={{ color: "blue" }}>
              Name: {this.state.customer.contactName}
            </h2>
            <h2>Company: {this.state.customer.companyName}</h2>
            <h2>City: {this.state.customer.city}</h2>
            <h2>Oficio: {this.state.customer.contactTitle}</h2>
          </div>
        )}
      </div>
    );
  }
}
