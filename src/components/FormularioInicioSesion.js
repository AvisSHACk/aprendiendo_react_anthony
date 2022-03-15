import React, {useState} from 'react';


const FormularioInicioSesion = (props) => {
    const [usuario, cambiarUsuario] = useState('');
    const [password, cambiarPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(usuario === 'Anthony' && password === '123'){
            props.cambiarSesion(true);
        } else {
            alert('Datos incorrectos');
            cambiarUsuario('');
            cambiarPassword('');
        }
    }

    return(
        <form action="" onSubmit={onSubmit}>
            <h1>No has iniciado sesion</h1>
            <div>
                <label htmlFor="usuario">Usuario: </label>
                <input 
                type="text" 
                name="usuario"
                value={usuario}
                onChange={(e) => cambiarUsuario(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input
                type="password" 
                name="password"
                value={password}
                onChange={(e) => cambiarPassword(e.target.value)}
                />
            </div>
            <button type="submit">Iniciar Sesion</button>
        </form>
    )
}

export default FormularioInicioSesion;