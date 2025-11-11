import React, { useState, useEffect, useRef } from "react";
import "./Skills.css";

const MAX_DOTS = 6;

export default function Skill({ name, level }) {
  const [fillLevel, setFillLevel] = useState(0);
  const [hovered, setHovered] = useState(false);
  const animationFrameRef = useRef(null);

  const clampedLevel = Math.min(level);

  // ✅ Nueva función para manejar la animación
  const animate = () => {
    setFillLevel(prev => {
      let next = prev;

      if (hovered && prev < clampedLevel) {
        next = prev + 1;
      } else if (!hovered && prev > 0) {
        next = prev - 1;
      }

      if (
        (hovered && next < clampedLevel) ||
        (!hovered && next > 0)
      ) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }

      return next;
    });
  };

  useEffect(() => {
    // ❗ Solo animar si hay una razón (hover activo o dots por limpiar)
    if ((hovered && fillLevel < clampedLevel) || (!hovered && fillLevel > 0)) {
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [hovered, clampedLevel, fillLevel]); // ✅ importante incluir fillLevel para controlar el flujo

  return (
    <li
      className="skill"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="skill-label">{name}</span>
      <div className="dots">
        {[...Array(MAX_DOTS)].map((_, idx) => (
          <span
            key={idx}
            className={idx < fillLevel ? "filled" : ""}
          ></span>
        ))}
      </div>
    </li>
  );
}
