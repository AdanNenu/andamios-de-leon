// SeccionB.js
import React from 'react';
import './EstiloSecciones.css';

// Datos de productos separados arriba
const productos = [
  {
    titulo: 'Andamio Especial',
    descripcion: 'Descripción del producto especial.',
    imagen: '/seccionA/1.jpg',
    mensajeWhatsapp: 'Hola, me interesa el modelo *Andamio Especial*. ¿Podrías darme más información?'
  },
  {
    titulo: 'Andamio Industrial',
    descripcion: 'Ideal para trabajos pesados en construcción.',
    imagen: '/seccionA/2.jpg',
    mensajeWhatsapp: 'Hola, me interesa el modelo *Andamio Industrial*. ¿Podrías darme más información?'
  }
];

const SeccionC = () => {
  return (
    <div className="seccion">
      <header className="header">
        <h1>Andamios Especiales</h1>
      </header>
      <div className="productos">
        {productos.map((producto, index) => (
          <div className="producto" key={index}>
            <div className="imagen">
              <img src={producto.imagen} alt={producto.titulo} />
            </div>
            <div className="caracteristicas">
              <h2>{producto.titulo}</h2>
              <p>{producto.descripcion}</p>
            </div>
            <div className="boton">
              <a
                href={`https://wa.me/5211234567890?text=${encodeURIComponent(producto.mensajeWhatsapp)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Preguntar por este
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeccionC;
