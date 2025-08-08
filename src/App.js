import React, { useEffect, useState } from 'react';
import './App.css';
import Anuncio from './components/Anuncio';
import Botones from './components/Botones';
import Home from './components/Home';
import Visor from './components/Visor';
import Comida from './components/menu/Comida';
import Bebidas from './components/menu/Bebidas';
import Postres from './components/menu/Postres';

import SeccionA from './components/secciones/SeccionA';
import SeccionB from './components/secciones/SeccionB';
import SeccionC from './components/secciones/SeccionC';


function App() {
  const [componenteActivo, setComponenteActivo] = useState('secciona');

  // Cada vez que cambia la sección activa
  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      const contenedor = document.querySelector('.contenido-principal');
      if (contenedor) contenedor.scrollTop = 0;
    });
  }, [componenteActivo]);

  const renderComponente = () => {
    switch (componenteActivo) {
      case 'home':
        return <Home key="home" />;
      case 'visor':
        return <Visor key="visor" />;
      case 'anuncio':
        return <Anuncio key="anuncio" />;
      case 'comida':
        return <Comida key="comida" />;
      case 'bebidas':
        return <Bebidas key="bebidas" />;
      case 'postres':
        return <Postres key="postres" />;
      case 'secciona':
        return <SeccionA key="secciona" />;
      case 'seccionb':
        return <SeccionB key="seccionb" />;
      case 'seccionc':
        return <SeccionC key="seccionc" />;
      default:
        return <Home key="home" />;
    }
  };

  return (
    <div className="App">
      <div className="contenido-principal">
        {renderComponente()}
      </div>
      <Botones cambiarComponente={setComponenteActivo} />
    </div>
  );
}


export default App;
