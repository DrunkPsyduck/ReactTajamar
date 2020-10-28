//import React from "react";

function sumarNumeros(props) {
  const { numero1, numero2, color, realizarSuma } = props;
  const sumar = () => {
    let suma = parseInt(numero1) + parseInt(numero2);
    console.log("Sumar hijo: " + suma);
  };
  return (
    <div style={{ backgroundColor: color }}>
      <h1>Componente sumar Numeros</h1>
      <button onClick={() => sumar()}>Sumar</button>
      <button onClick={() => realizarSuma(numero1, numero2)}>
        Metodo padre
      </button>
    </div>
  );
}

export default sumarNumeros;
