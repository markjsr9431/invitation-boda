'use client';

import { useState } from 'react';

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
    <div className={`fixed inset-0 bg-[#F9F7F2] z-50 flex items-center justify-center ${isExiting ? 'animate-fade-out' : 'animate-fade-in-smooth'}`}>
      {/* Botón con animación */}
      <button
        onClick={handleClick}
        className={`relative z-10 w-32 h-32 md:w-40 md:h-40 bg-black rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity ${isExiting ? 'animate-fade-out' : ''}`}
        aria-label="Abrir invitación"
        disabled={isExiting}
      >
        <span className="text-white font-sans font-black text-2xl md:text-3xl tracking-wider">
          ABRIR
        </span>
      </button>
    </div>
  );
}

