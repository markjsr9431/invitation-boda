'use client';

import { useState } from 'react';
import Image from 'next/image';

interface IntroOverlayProps {
  onSealClick: () => void;
}

export default function IntroOverlay({ onSealClick }: IntroOverlayProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      onSealClick();
    }, 400);
  };

  return (
    <div className={`fixed inset-0 bg-[#F9F7F2] z-50 flex items-center justify-center overflow-hidden ${isExiting ? 'animate-fade-out' : 'animate-fade-in-smooth'}`}>
      
      {/* 1. Cambio aquí: Usamos inset-0 para que el contenedor sea TODA la pantalla */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/portada.png"
          alt="Portada"
          fill
          /* 2. Cambio aquí: object-cover quita los bordes blancos y llena el celular */
          className="object-cover object-center" 
          priority
        />
      </div>
{/* Texto superior */}
<div 
  className="absolute z-10 w-full text-center"
  style={{ top: '6%' }} // Ajusta este porcentaje para subir o bajar el texto
>
<h1 className="text-[#ffffff] font-serif font-medium text-4xl md:text-6xl tracking-[0.2em] drop-shadow-sm">
  Nuestra Boda
</h1>
</div>
      {/* Texto "ABRIR" - Se mantiene igual pero aseguramos que esté sobre la imagen */}
      <button
        onClick={handleClick}
        className={`absolute z-10 cursor-pointer ${isExiting ? 'animate-fade-out' : ''}`}
        style={{
          left: '51%', // Ajustado a 50% para que el translate lo centre perfecto
          top: '74%',
          transform: 'translate(-50%, -50%)',
        }}
        aria-label="Abrir invitación"
        disabled={isExiting}
      >
        <span className="text-white font-serif font-light text-xs md:text-sm tracking-[0.3em] animate-pulse hover:scale-105 transition-all">
  ABRIR
</span>
      </button>
    </div>
  );
}