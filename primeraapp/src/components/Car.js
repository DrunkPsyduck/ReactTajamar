import React, { useState } from "react";

function Car(props) {
    let coche = {
        marca: props.marca,
        modelo: props.modelo,
        velocidadMaxima: props.velocidadMaxima,
        aceleracion: parseInt(props.aceleracion)
    };
    /**
     * TODO Se va a tener un estado para saber si el coche esta arrancado o no (boolean).
     * TODO Dicho estado puede cambiar e ira sobre una variable state. Por defecto parado.
     * */
    const [estado, setEstado] = useState(false);

    const comprobarEstado = () => {
        if (estado === true) {
            return <span style={{ color: "green" }}> Arrancado</span>;
        } else {
            return <span style={{ color: "red" }}> Parado</span>;
        }
    };
    const [velocidad, setVelocidad] = useState(0);
    const acelerarCoche = () => {
        if (estado && velocidad < coche.velocidadMaxima) {
            setVelocidad(velocidad + coche.aceleracion);
        } else if (velocidad === coche.velocidadMaxima) {
            alert("Velocidad maxima alcanzada");
        } else if (!estado) {
            alert("Arranca el coche primero");
        }
    };
    const frenarCoche = () => {
        if (estado && velocidad > 0) {
            setVelocidad(velocidad - 20);
        }
    };

    //const comprobarVelocidad = () => { };
    return (
        <div>
            <h1 style={{ color: "blue" }}>
                {coche.marca} {coche.modelo}
            </h1>
            <h2>El coche esta: {comprobarEstado()}</h2>
            <h2>La velocidad es: {velocidad}</h2>
            <button
                onClick={() => {
                    setEstado(!estado);
                    if (!estado) {
                        setVelocidad(0);
                    }
                }}
            >
                Start&stop
      </button>
            <button
                onClick={() => {
                    acelerarCoche();
                }}
            >
                Acelerar
      </button>

            <button
                onClick={() => {
                    frenarCoche();
                }}
            >
                Frenar
      </button>
        </div>
    );
}

export default Car;
