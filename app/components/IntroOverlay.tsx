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
          src="/portada.webp"
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
  style={{ top: '9%' }} // Ajusta este porcentaje para subir o bajar el texto
>
<h1 className="text-[#eaeaea] font-serif font-medium text-4xl md:text-6xl tracking-[0.2em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
  Nuestra Boda
</h1>
</div>
{/* Texto Felipe & María - Ahora con control de posición */}
<h2 
  className="absolute z-10 w-full text-center text-[#ffffff] font-serif font-medium text-2xl md:text-4xl tracking-[0.15em] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]"
  style={{ top: '56%' }}
>
  Felipe & María
</h2>
      {/* Texto "ABRIR" - Se mantiene igual pero aseguramos que esté sobre la imagen */}
      <button
  onClick={handleClick}
  className={`absolute z-10 cursor-pointer ${isExiting ? 'animate-fade-out' : ''}`}
  style={{
    left: '50%', // Cambiado a 50% para que el translate(-50%) lo deje exacto
    top: '78%',
    transform: 'translate(-50%, -50%)',
  }}
  aria-label="Abrir invitación"
  disabled={isExiting}
>
  <span className="text-white font-serif font-bold text-xs md:text-sm tracking-[0.4em] drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)] animate-pulse hover:scale-110 transition-all">
    ABRIR
  </span>
</button>
    </div>
  );
}