import React from "react";
import Tarjeta from "./Tarjeta"; // importamos la tarjeta individual
import proyecto1 from "../assets/img/ss2.PNG";
import proyecto2 from "../assets/img/otgw.PNG";
import "./Tarjetas.css"; // estilos del contenedor de tarjetas

export default function Tarjetas() {
  const proyectos = [
    {
      titulo: "Sparkly Shop - Tienda Online",
      descripcion: "Mi primer proyecto de HTML con JS integrado para modales de deseos y cesta",
      tecnologias: ["HTML", "Bootstrap", "JS"],
      imagen: proyecto1,
      enlace: "https://sparklyshop.netlify.app/"
    },
    {
      titulo: "Over The Garden Wall - Librería Musical Online",
      descripcion: "Librería de música hecho con HTML y Express. Incluye API propia y lectura de servidores.",
      tecnologias: ["HTML", "Express", "CRUDs"],
      imagen: proyecto2,
      enlace: "https://otgw-musiclibrary-nu.vercel.app/"
    }
  ];

  return (
    <div className="tarjetas-container">
      {proyectos.map((proyecto, i) => (
        <Tarjeta
          key={i}
          titulo={proyecto.titulo}
          descripcion={proyecto.descripcion}
          tecnologias={proyecto.tecnologias}
          imagen={proyecto.imagen}
          enlace={proyecto.enlace}
        />
      ))}
    </div>
  );
}
