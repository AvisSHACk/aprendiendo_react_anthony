import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import FormularioInicioSesion from './components/FormularioInicioSesion';
import Usuario from './components/Usuario';
import Contador from './components/Contador';


const App = () => {
  const [sesion, cambiarSesion] = useState(true);

  return(
    <>
      {sesion ? 
        <>
          <Usuario />
          <button onClick={() => cambiarSesion(false)}>Cerrar Sesion</button>
          <Contador incrementar={1} disminuir={1}/>
        </>
        :

        <>
          <FormularioInicioSesion cambiarSesion={cambiarSesion}/>
        </>
      }
    </>
    
  )
}

ReactDOM.render(<App />,document.getElementById('root'));
