import React, { Component } from "react";
import Comic from "./../comics/Comic";

export default class SeleccionarComics extends Component {
  seleccionMultipleRef = React.createRef();
  state = {
    comics: [
      {
        titulo: "Spiderman",
        imagen:
          "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
        descripcion: "Hombre araña",
      },
      {
        titulo: "Wolverine",
        imagen:
          "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
        descripcion: "Lobezno",
      },
      {
        titulo: "Guardianes de la Galaxia",
        imagen:
          "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
        descripcion: "Yo soy Groot",
      },
      {
        titulo: "Avengers",
        imagen:
          "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
        descripcion: "Los Vengadores",
      },
      {
        titulo: "Spawn",
        imagen:
          "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
        descripcion: "Al Simmons",
      },
      {
        titulo: "Batman",
        imagen:
          "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
        descripcion: "Murcielago",
      },
    ],
    seleccionado: [],
  };

  generarOption = () => {
    let options = [];
    this.state.comics.map((nombre, i) => {
      options.push(
        <option key={i} value={nombre.titulo}>
          {nombre.titulo}
        </option>
      );
    });
    return options;
  };

  seleccionarComic = () => {};

  mostrarSeleccionados = (e) => {
    e.preventDefault();
    let comic = [];
    let options = this.seleccionMultipleRef.current.options;
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        for (let j = 0; j < this.state.comics.length; j++) {
          if (this.state.comics[j].titulo === options[i].value) {
            comic.push(this.state.comics[j]);
          }
        }
      }
    }
    console.log(comic, this.state.comics);
    this.setState({ seleccionado: comic });
    console.log(this.state.seleccionado);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.mostrarSeleccionados}>
          <select
            name="seleccionarMultiple"
            size="10"
            ref={this.seleccionMultipleRef}
            multiple
          >
            {" "}
            {this.generarOption()}
          </select>
          <button>Mostrar seleccionados</button>
        </form>
        <h1 style={{ color: "green" }}> {this.state.seleccionados}</h1>
      </div>
    );
  }
}
