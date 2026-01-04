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
    <div className="fixed inset-0 bg-eucalyptus z-50 flex items-center justify-center overflow-hidden">
      {/* Mitad superior del sobre */}
      <div
        className={`absolute top-0 left-0 w-full h-1/2 bg-paper-cream border-b-2 border-black ${
          isOpening ? 'animate-envelope-open-top' : ''
        }`}
        style={{
          transformOrigin: 'bottom center',
        }}
      />

      {/* Mitad inferior del sobre */}
      <div
        className={`absolute bottom-0 left-0 w-full h-1/2 bg-paper-cream border-t-2 border-black ${
          isOpening ? 'animate-envelope-open-bottom' : ''
        }`}
        style={{
          transformOrigin: 'top center',
        }}
      />

      {/* Sello de lacre */}
      <button
        onClick={handleSealClick}
        disabled={isOpening}
        className={`relative z-10 w-32 h-32 md:w-40 md:h-40 bg-rose-palo rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
          isOpening
            ? 'opacity-0 scale-0'
            : 'hover:scale-110 hover:shadow-2xl shadow-lg'
        } disabled:cursor-not-allowed`}
        aria-label="Abrir sobre"
      >
        <span className="text-white font-sans font-black text-2xl md:text-3xl tracking-wider">
          A & M
        </span>
      </button>

      {/* Contenido de la invitación que se revela */}
      {isOpening && (
        <div className="absolute inset-0 flex items-center justify-center animate-invitation-reveal z-20">
          <div className="text-center px-4">
            <h1 className="text-white font-sans font-black text-4xl md:text-6xl mb-4 uppercase tracking-tight">
              ¡NOS CASAMOS!
            </h1>
            <p className="text-white/90 font-sans text-lg md:text-xl tracking-wide">
              Andrés & María
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

