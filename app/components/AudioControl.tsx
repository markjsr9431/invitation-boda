'use client';

import { useState, useEffect } from 'react';

interface AudioControlProps {
  onMuteChange?: (isMuted: boolean) => void;
}

export default function AudioControl({ onMuteChange }: AudioControlProps) {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Notificar al componente padre cuando cambia el estado de mute
    if (onMuteChange) {
      onMuteChange(isMuted);
    }
  }, [isMuted, onMuteChange]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <button
      onClick={toggleMute}
      className="fixed top-4 right-4 w-12 h-12 bg-white border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 z-50"
      aria-label={isMuted ? 'Activar audio' : 'Silenciar audio'}
    >
      <span className="font-sans font-black text-xl">
        {isMuted ? '🔇' : '🔊'}
      </span>
    </button>
  );
}

