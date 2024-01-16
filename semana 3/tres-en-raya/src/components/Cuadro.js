import React from 'react';
import '../style/Cuadro.css';

function Cuadro({ valor, funcion }) {
    return (
        <button className="cuadro" onClick={funcion}>
            {valor}
        </button>
    );
}

export default Cuadro;