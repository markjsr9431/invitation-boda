'use client';

import { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

interface MusicPlayerProps {
  isMuted?: boolean;
}

export interface MusicPlayerRef {
  play: () => void;
}

const MusicPlayer = forwardRef<MusicPlayerRef, MusicPlayerProps>(
  ({ isMuted: externalMuted }, ref) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isMuted, setIsMuted] = useState(externalMuted !== undefined ? externalMuted : false);
    const fadeIntervalRef = useRef<number | null>(null);

    // Sincronizar con el estado externo si se proporciona
    useEffect(() => {
      if (externalMuted !== undefined) {
        setIsMuted(externalMuted);
      }
    }, [externalMuted]);

    // Sincronizar el volumen con el estado de mute
    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.muted = isMuted;
      }
    }, [isMuted]);

    // Limpiar intervalos al desmontar
    useEffect(() => {
      return () => {
        if (fadeIntervalRef.current !== null) {
          window.clearInterval(fadeIntervalRef.current);
        }
      };
    }, []);

    // Exponer el método play mediante useImperativeHandle
    useImperativeHandle(ref, () => ({
      play: () => {
        const audio = audioRef.current;
        if (!audio) return;

        // Asegurar que el volumen inicial esté en 0
        audio.volume = 0;

        // Intentar reproducir el audio
        const playPromise = audio.play();

        // Manejar la promesa con catch para evitar errores que congelen la aplicación
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Fade-in gradual: aumentar volumen de 0 a 1 en 1 segundo
              const fadeDuration = 1000; // 1 segundo en milisegundos
              const fadeSteps = 50; // Número de pasos para una transición suave
              const stepDuration = fadeDuration / fadeSteps;
              const volumeStep = 1 / fadeSteps;

              let currentStep = 0;

              // Limpiar cualquier intervalo anterior
              if (fadeIntervalRef.current) {
                clearInterval(fadeIntervalRef.current);
              }

              fadeIntervalRef.current = window.setInterval(() => {
                currentStep++;
                const newVolume = Math.min(currentStep * volumeStep, 1);

                if (audio) {
                  audio.volume = newVolume;
                }

                // Detener el intervalo cuando llegamos al volumen máximo
                if (currentStep >= fadeSteps || newVolume >= 1) {
                  if (audio) {
                    audio.volume = 1;
                  }
                  if (fadeIntervalRef.current !== null) {
                    window.clearInterval(fadeIntervalRef.current);
                    fadeIntervalRef.current = null;
                  }
                }
              }, stepDuration);
            })
            .catch((error) => {
              // Manejar errores silenciosamente (conexión lenta, políticas del navegador, etc.)
              console.warn('No se pudo reproducir el audio:', error);
            });
        }
      },
    }));

    const toggleMute = () => {
      setIsMuted(!isMuted);
    };

    return (
      <>
        {/* Elemento audio oculto */}
        <audio
          ref={audioRef}
          src="/backgroundmusic/backgroundmusic.mp3"
          loop
          preload="auto"
          style={{ display: 'none' }}
        />

        {/* Botón flotante de mute/unmute */}
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={toggleMute}
            className="w-12 h-12 bg-white/90 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 shadow-lg"
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
          >
            <span className="font-sans font-black text-lg">
              {isMuted ? '🔇' : '🔊'}
            </span>
          </button>
        </div>
      </>
    );
  }
);

MusicPlayer.displayName = 'MusicPlayer';

export default MusicPlayer;
