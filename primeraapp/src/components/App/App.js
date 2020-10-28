import "./../../App.css";
import Saludo from "../Saludos";
import SumarNumeros from "../SumarNumeros";

function App() {
  const metodoPadre = (descripcion) => {
    // * ! Si se deesa enviar parametros a la funcion se quitan los parentesis
    console.log("Metodo del padre " + descripcion);
  };
  const sumarPadre = (num1, num2) => {
    // Recibido desde el hijo
    let suma = parseInt(num1) + parseInt(num2);
    console.log("Suma padre: " + suma);
  };
  return (
    <div className="App">
      <Saludo nombre="Ducky McDuck" edad="123" metodo={metodoPadre} />
      <SumarNumeros
        numero1="12"
        numero2="8"
        color="aquamarine"
        realizarSuma={sumarPadre}
      />
    </div>
  );
}

export default App;
