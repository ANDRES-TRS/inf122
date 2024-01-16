import React, { useState } from 'react';
import '../style/Tablero.css';
import Cuadro from './Cuadro';

function Tablero() {
    const [valor, setValor] = useState("X");

    const click = () => {
        if (valor === "X") {
            setValor("0");
        } else {
            setValor("X");
        }
    };

    return (
        <div className="tablero">
            <Cuadro valor={valor} funcion={click} />
            <Cuadro valor={valor} funcion={click} />
            <Cuadro valor={valor} funcion={click} />
            <Cuadro valor={valor} funcion={click} />
            <Cuadro valor={valor} funcion={click} />
            <Cuadro valor={valor} funcion={click} />
            <Cuadro valor={valor} funcion={click} />
            <Cuadro valor={valor} funcion={click} />
            <Cuadro valor={valor} funcion={click} />
        </div>
    );
}

export default Tablero;
