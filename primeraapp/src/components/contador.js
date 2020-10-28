import { useState } from "react";

function Contador(props) {
  // ! Una variable de estado esta compuesta por un nombre para mostrar y un set para establecer
  const [numero, setNumero] = useState(0);
  return (
    <div>
      <h1>Ejemplo state Contador</h1>
      <h2 style={{ color: "red" }}>El valor del Contador es {numero}</h2>
      <button
        onClick={() => {
          setNumero(numero + 1);
        }}
      >
        Incrementar
      </button>
      <button
        onClick={() => {
          setNumero(numero - 1);
        }}
      >
        Restar
      </button>
    </div>
  );
}

export default Contador;
