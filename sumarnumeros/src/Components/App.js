import Sumas from "./Sumas";
import "./../App.css";

function App() {
  let sumarNumeros = (num1, num2) => {
    let suma = parseInt(num1) + parseInt(num2);
    /* console.log(suma); */
    return suma;
  };
  let color = "#4287f5";
  return (
    <div className="App" style={{ backgroundColor: color, padding: "20%" }}>
      <div>
        <Sumas
          numero1="14"
          numero2="98"
          color="#dbbe00"
          sumarNumeros={sumarNumeros()}
        />
      </div>
    </div>
  );
}

export default App;
