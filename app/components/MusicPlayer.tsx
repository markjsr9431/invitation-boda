'use client';

import { useState, useEffect } from 'react';

interface MusicPlayerProps {
  playlistId?: string;
  videoId?: string;
  isMuted?: boolean;
}

export default function MusicPlayer({ playlistId, videoId, isMuted: externalMuted }: MusicPlayerProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Sincronizar con el estado externo si se proporciona
  useEffect(() => {
    if (externalMuted !== undefined) {
      setIsMuted(externalMuted);
    }
  }, [externalMuted]);

  // Si no se proporciona playlistId ni videoId, usar valores por defecto
  // El usuario deberá reemplazar estos con su playlist/video de YouTube
  const defaultPlaylistId = playlistId || 'PL_DEFAULT_PLAYLIST_ID';
  const defaultVideoId = videoId || 'dQw4w9WgXcQ'; // Video de ejemplo - reemplazar

  // Construir la URL del iframe
  // Para playlist: usar playlist=PLAYLIST_ID
  // Para video único: usar el videoId directamente
  const embedUrl = playlistId
    ? `https://www.youtube.com/embed/videoseries?list=${playlistId}&autoplay=1&loop=1&mute=${isMuted ? 1 : 0}&controls=0&modestbranding=1&rel=0`
    : `https://www.youtube.com/embed/${videoId || defaultVideoId}?autoplay=1&loop=1&playlist=${videoId || defaultVideoId}&mute=${isMuted ? 1 : 0}&controls=0&modestbranding=1&rel=0`;

  // Actualizar el iframe cuando cambie el estado de mute o el videoId
  useEffect(() => {
    const iframe = document.getElementById('youtube-player') as HTMLIFrameElement;
    if (iframe && embedUrl) {
      iframe.src = embedUrl;
    }
  }, [isMuted, embedUrl, videoId, playlistId]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 w-12 h-12 bg-white border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 z-50"
        aria-label="Mostrar reproductor de música"
      >
        <span className="font-sans font-black text-xl">♪</span>
      </button>
    );
  }

  return (
    <>
      {/* Iframe de YouTube (oculto pero activo, fuera de la pantalla) */}
      <div style={{ 
        position: 'fixed', 
        left: '-9999px', 
        top: '-9999px',
        width: '1px', 
        height: '1px', 
        overflow: 'hidden',
        zIndex: -1
      }}>
        <iframe
          id="youtube-player"
          width="1"
          height="1"
          src={embedUrl}
          title="Música de fondo"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ 
            opacity: 0, 
            pointerEvents: 'none',
            border: 'none'
          }}
        />
      </div>

      <div className="fixed bottom-4 right-4 z-50">
        {/* Contenedor del reproductor */}
        <div className="bg-white border-2 border-black p-2 flex flex-col gap-2">
          {/* Controles */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
            >
              <span className="font-sans font-black text-lg">
                {isMuted ? '🔇' : '🔊'}
              </span>
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              aria-label="Ocultar reproductor"
            >
              <span className="font-sans font-black text-lg">×</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

