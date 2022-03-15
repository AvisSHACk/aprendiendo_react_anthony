import React, { useState } from 'react';

const Contador = ({incrementar, disminuir}) => {
    const [contador, cambiarContador] = useState(0);

    return(
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={() => cambiarContador(contador + incrementar)}>Incrementar</button>
            <button onClick={() => cambiarContador(contador - disminuir)}>Decrementar</button>
        </div>
    )
}

export default Contador;