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
      {/* Imagen de fondo completa - Ampliada 20% para ocultar marca de agua */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full" style={{ transform: 'scale(1.2)' }}>
          <Image
            src="/portada.png"
            alt="Portada"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </div>
      
      {/* Texto "ABRIR" sin relleno - Clicable, posicionado en el círculo del sello */}
      <button
        onClick={handleClick}
        className={`absolute z-10 cursor-pointer ${isExiting ? 'animate-fade-out' : ''}`}
        style={{
          left: '53%',
          top: '51%',
          transform: 'translate(-50%, -50%)',
        }}
        aria-label="Abrir invitación"
        disabled={isExiting}
      >
        <span className="text-white font-sans font-black text-xl md:text-2xl tracking-wider hover:opacity-80 transition-opacity">
          ABRIR
        </span>
      </button>
    </div>
  );
}

