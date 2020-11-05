import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
export default class Departamentos extends Component {
  state = {
    departamentos: [],
    status: false,
  };
  cargarDepartamentos = () => {
    let request = "/webresources/departamentos";
    axios.get(Global.urlCrudDept + request).then((res) => {
      this.setState({
        departamentos: res.data,
        status: true,
      });
    });
  };
  componentDidMount = () => {
    this.cargarDepartamentos();
  };
  render() {
    return <div></div>;
  }
}
