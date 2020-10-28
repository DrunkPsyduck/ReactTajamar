import "./../../App.css";
import Saludo from "../Saludos";
import SumarNumeros from "../SumarNumeros";

function App() {
  const metodoPadre = (descripcion) => {
    // * ! Si se deesa enviar parametros a la funcion se quitan los parentesis
    console.log("Metodo del padre " + descripcion);
  };
  return (
    <div className="App">
      <Saludo nombre="Ducky McDuck sr" edad="50" metodo={metodoPadre} />
      <SumarNumeros numero1="12" numero2="8" />
    </div>
  );
}

export default App;
