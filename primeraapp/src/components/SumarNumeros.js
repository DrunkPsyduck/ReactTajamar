import React from "react";

function sumarNumeros(props) {
  const { numero1, numero2 } = props;

  const sumar = () => {
    let suma = parseInt(numero1) + parseInt(numero2);
    console.log("EOEO " + suma);
  };
  return (
    <div>
      <h1>Componente sumar Numeros</h1>
      <button onClick={() => sumar()}>Sumar</button>
    </div>
  );
}

export default sumarNumeros;
