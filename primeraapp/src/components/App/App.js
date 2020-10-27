import "./../../App.css";
import Saludo from "../Saludos";

function App() {
  return (
    <div className="App">
      {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Saludo nombre="Ducky McDuck sr" edad="50" />
      <Saludo nombre="Ducky McDuck jr" edad="30" />
      <Saludo nombre="Ducky McDuck III" edad="10" />
    </div>
  );
}

export default App;
