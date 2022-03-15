import React from 'react';

const Titulo = ({color, usuario}) => {
    return(
        <h2 style={{color:color}}>{usuario}</h2>
    )
}

export default Titulo;