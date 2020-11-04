import React, { Component } from "react";
import axios from "axios";
import Global from "./../Global";

export default class Coches extends Component {
  cajaMarcaCoche = React.createRef();
  request = "/webresources/coches/";
  url = Global.coches + this.request;
  state = {
    coches: [],
    busqueda: [],
    statusBusqueda: null,
    status: null,
  };

  cargarCoches = () => {
    axios.get(this.url).then((res) => {
      this.setState({ coches: res.data, status: "success" });
    });
  };

  componentDidMount = () => {
    this.cargarCoches();
  };

  buscarMarca = (e) => {
    e.preventDefault();
    let marca = this.cajaMarcaCoche.current.value.toUpperCase();
    let cochesFiltrados = [];
    for (const coche of this.state.coches) {
      if (coche.marca === marca) {
        cochesFiltrados.push(coche);
      }
    }

    if (cochesFiltrados.length === 0) {
      this.setState({ statusBusqueda: "empty" });
    } else {
      this.setState({
        busqueda: cochesFiltrados,
        statusBusqueda: "Success",
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Buscador API coches</h1>
        <form onSubmit={this.buscarMarca}>
          <label>Marca:</label>
          <input type="text" name="cajaMarca" ref={this.cajaMarcaCoche}></input>
          <button> Buscar</button>
        </form>
        {this.state.statusBusqueda === "empty" && (
          <h1 style={{ color: "red" }}>No se han encontrado resultados</h1>
        )}
        {this.state.statusBusqueda && this.state.statusBusqueda === "Success" && (
          <table border="1">
            <thead>
              <tr>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Conductor</th>
                <th>Imagen</th>
              </tr>
            </thead>
            <tbody>
              {this.state.busqueda.map((coche, index) => {
                return (
                  <tr key={index}>
                    <td key={coche.marca}>{coche.marca}</td>
                    <td key={coche.modelo}>{coche.modelo}</td>
                    <td key={coche.conductor}>{coche.conductor}</td>
                    <td key={coche.id}>
                      <img
                        src={coche.imagen}
                        key={coche.imagen}
                        style={{ width: "150px", height: "auto" }}
                        alt="coche"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        <h1>Servicios API Coches</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Conductor</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            {this.state.coches.map((coche, index) => {
              return (
                <tr key={index}>
                  <td key={coche.marca}>{coche.marca}</td>
                  <td key={coche.modelo}>{coche.modelo}</td>
                  <td key={coche.conductor}>{coche.conductor}</td>
                  <td key={coche.id}>
                    <img
                      src={coche.imagen}
                      key={coche.imagen}
                      style={{ width: "150px", height: "auto" }}
                      alt="coche"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
