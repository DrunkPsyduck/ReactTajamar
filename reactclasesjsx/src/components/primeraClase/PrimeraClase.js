import React from "react";
import "./primeraClase.css";

class PrimeraClase extends React.Component {
    render() {
        //Evaluado en todo momento

        return (
            <React.Fragment>
                <h1 className="rojo">Primer componente class</h1>
            </React.Fragment >
        )
    }
}

export default PrimeraClase;
