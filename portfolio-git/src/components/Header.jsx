import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo1.svg"

import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Mi Portfolio Logo" className="logo-img" />
          </Link>
        </div>
        <h2>Carla Pajuelo | Diseño Web</h2>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          className="hamburger"
        > 

        {/* ANIMACIÓN DEL NAV */}
          <span className={`bar ${open ? "bar1" : ""}`} /> 
          <span className={`bar ${open ? "bar2" : ""}`} />
          <span className={`bar ${open ? "bar3" : ""}`} />
        </button>
      </div>

      {/* Menú universal */}
      {open && (
        <nav className="nav">
          <Link to="https://www.linkedin.com/in/carla-pajuelo-paniagua-06425820a/" onClick={() => setOpen(false)}>
            LinkedIn
          </Link>
          <Link to="https://carlapajuelopaniag.wixsite.com/portfolio" onClick={() => setOpen(false)}>
            Portfolio Diseño
          </Link>
   
        </nav>
      )}
    </header>
  );
}
