import "./../../App.css";
import Saludo from "../Saludos";

function App() {
  const metodoPadre = (descripcion) => {
    // * ! Si se deesa enviar parametros a la funcion se quitan los parentesis
    console.log("Metodo del padre " + descripcion);
  };
  return (
    <div className="App">
      <Saludo nombre="Ducky McDuck sr" edad="50" metodo={metodoPadre} />
      <Saludo nombre="Ducky McDuck jr" edad="30" metodo={metodoPadre} />
      <Saludo nombre="Ducky McDuck III" edad="10" metodo={metodoPadre} />
    </div>
  );
}

export default App;
