import React from "react";

function Sumas(props) {
  let color = props.color;
  let numero1 = props.numero1;
  let numero2 = props.numero2;

  const sumarNumeros = (num1, num2) => {
    let suma = parseInt(num1) + parseInt(num2);
    console.log(suma + " suma en el hijo");
  };

  const resultadoSumaParent = props.sumarNumeros;
  console.log(resultadoSumaParent);
  return (
    <div style={{ backgroundColor: color }}>
      {sumarNumeros(numero1, numero2)}
      <p>Resultado en la consola</p>
    </div>
  );
}
export default Sumas;
