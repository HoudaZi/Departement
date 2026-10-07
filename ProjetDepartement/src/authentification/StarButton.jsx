import React from 'react';
import './StarButton.css';
import { LogIn } from 'lucide-react';

export default function StarButton({ children, disabled, onClick, type = "submit" }) {
  // SVG de l'étoile réutilisable
  const starSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      version="1.1"
      viewBox="0 0 784.11 815.53"
    >
      <path
        className="fil0"
        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
      />
    </svg>
  );

  return (
    <button type={type} disabled={disabled} onClick={onClick} className="uiverse-button">
      <span className="d-flex align-items-center justify-content-center gap-2">
        <LogIn size={18} />
        {children}
      </span>
      
      <div className="star-1">{starSvg}</div>
      <div className="star-2">{starSvg}</div>
      <div className="star-3">{starSvg}</div>
      <div className="star-4">{starSvg}</div>
      <div className="star-5">{starSvg}</div>
      <div className="star-6">{starSvg}</div>
    </button>
  );
}