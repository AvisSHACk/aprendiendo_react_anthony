import React from 'react';
import Titulo from './Titulo';

const pais = "Perú";
const amigos = ["Pedro", "Miguel", "Anderson", "Anghelo"];

const Usuario = () => {
    return(
        <>
            <Titulo color="blue" usuario="Anthony"/>
            <Titulo color="grey" usuario="Katherine"/>
            <p>Que tengas un buen dia</p>
            {pais && <p>Tu eres de: {pais}</p>}
            <ul>
                {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
            </ul>
        </>
    )
}

export default Usuario;