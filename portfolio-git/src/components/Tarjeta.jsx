import React from "react";
import "./Tarjeta.css"; // estilos de la tarjeta individual

export default function Tarjeta({ titulo, descripcion, tecnologias, imagen, enlace }) {
  return (
    <div className="tarjeta">
      {imagen && (
        <div className="tarjeta-imagen">
          <img src={imagen} alt={titulo} />
        </div>
      )}
      <div className="tarjeta-contenido">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        {tecnologias && (
          <ul className="tecnologias">
            {tecnologias.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        )}
        {enlace && (
          <a href={enlace} target="_blank" rel="noopener noreferrer" className="btn-ver">
            Ver Proyecto
          </a>
        )}
      </div>
    </div>
  );
}
