'use client';

import { useState } from 'react';

interface IntroOverlayProps {
  onSealClick: () => void;
}

export default function IntroOverlay({ onSealClick }: IntroOverlayProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleSealClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onSealClick();
    }, 800);
  };

  return (
    <div 
      className="fixed inset-0 bg-paper-cream z-50 flex items-center justify-center overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Mitad superior del sobre (solapa) */}
      <div
        className={`absolute top-0 left-0 w-full h-1/2 bg-paper-cream ${
          isOpening ? 'animate-envelope-3d-open-top animate-envelope-blur' : ''
        }`}
        style={{
          transformOrigin: 'top',
          transformStyle: 'preserve-3d',
        }}
      />

      {/* Mitad inferior del sobre */}
      <div
        className={`absolute bottom-0 left-0 w-full h-1/2 bg-paper-cream ${
          isOpening ? 'animate-envelope-3d-open-bottom animate-envelope-blur' : ''
        }`}
        style={{
          transformOrigin: 'top center',
          transformStyle: 'preserve-3d',
        }}
      />

      {/* Texto "ESTÁS INVITADO A" */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-full z-10 mb-8">
        <p className="font-sans text-coffee-deep/80 text-sm md:text-base uppercase tracking-[0.25rem] text-center">
          ESTÁS INVITADO A
        </p>
      </div>

      {/* Sello de lacre */}
      <button
        onClick={handleSealClick}
        disabled={isOpening}
        className={`relative z-10 w-32 h-32 md:w-40 md:h-40 bg-pastel-blue-title rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
          isOpening
            ? 'opacity-0 scale-0'
            : 'hover:scale-110 hover:shadow-2xl shadow-lg'
        } disabled:cursor-not-allowed`}
        aria-label="Abrir sobre"
      >
        <span className="text-white font-sans font-bold text-2xl md:text-3xl tracking-wider">
          F & M
        </span>
      </button>

      {/* Texto "NUESTRA BODA" */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-full z-10 mt-8">
        <p className="font-sans text-coffee-deep/80 text-sm md:text-base uppercase tracking-[0.25rem] text-center">
          NUESTRA BODA
        </p>
      </div>

      {/* Tarjeta de invitación que se desliza */}
      {isOpening && (
        <div className="absolute inset-0 flex items-center justify-center animate-card-spring-up z-20">
          <div className="text-center px-4 bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-soft">
            <h1 className="text-pastel-blue-title font-sans font-bold text-4xl md:text-6xl mb-4 uppercase tracking-widest">
              ¡NOS CASAMOS!
            </h1>
            <p className="text-pastel-blue-title/80 font-sans text-lg md:text-xl tracking-wide">
              Felipe & María
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

