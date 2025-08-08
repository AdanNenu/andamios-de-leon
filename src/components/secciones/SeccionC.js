// SeccionA.js
import React from 'react';
import './EstiloSecciones.css';
import { motion } from 'framer-motion';
import { useEffect } from "react";

// Datos de productos separados arriba
const productos = [
  {
    titulo: 'Andamio Especial',
    descripcion: 'Descripción del producto especial. Descripción del producto especial. Descripción del producto especial.',
    imagen: '/seccionA/1.jpg',
    mensajeWhatsapp: 'Hola, me interesa el modelo *Andamio Especial.*\n¿Podrías darme más información?'
  },
  {
    titulo: 'Andamio Industrial',
    descripcion: 'Ideal para trabajos pesados en construcción.',
    imagen: '/seccionA/2.jpg',
    mensajeWhatsapp: 'Hola, me interesa el modelo *Andamio Industrial.*\n¿Podrías darme más información?'
  }
];

const SeccionC = () => {
	
	useEffect(() => {
	  window.scrollTo(0, 0);
	}, []);

return (
<div className="seccion fondo-repetido">
    <header className="header">
      <motion.img
        src="/logo.png"
        alt="Logo"
        className="logo-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      />
      <motion.h1
        className="titulo-convencional"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        Seccion C
      </motion.h1>
    </header>

    <div className="productos">
      {productos.map((producto, index) => (
        <motion.div
          className="producto"
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.3, type: 'spring' }}
        >
          <div className="imagen">
            <img src={producto.imagen} alt={producto.titulo} />
          </div>

          {/* BOTÓN MOVIDO DENTRO DE CARACTERÍSTICAS */}
          <div className="caracteristicas">
            <h2>{producto.titulo}</h2>
            <p>{producto.descripcion}</p>
            <div className="boton">
              <a
                href={`https://wa.me/524775770721?text=${encodeURIComponent(producto.mensajeWhatsapp)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir Informes
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

};

export default SeccionC;
