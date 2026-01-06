'use client';

import { useState } from 'react';
import IntroOverlay from './components/IntroOverlay';
import Envelope from './components/Envelope';
import Hero from './components/Hero';
import Location from './components/Location';
import RSVP from './components/RSVP';
import GiftRegistry from './components/GiftRegistry';
import DressCode from './components/DressCode';
import MusicPlayer from './components/MusicPlayer';
import AudioControl from './components/AudioControl';

export default function Home() {
  const [hasAccess, setHasAccess] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [shouldStartMusic, setShouldStartMusic] = useState(false);

  const handleSealClick = () => {
    // Iniciar música cuando se hace clic en "Abrir"
    setShouldStartMusic(true);
    // Después de que se abre el sobre, mostrar el formulario de acceso
    setTimeout(() => {
      setShowIntro(false);
      setShowEnvelope(true);
    }, 1000);
  };

  const handleAccessGranted = () => {
    setHasAccess(true);
    setShowEnvelope(false);
  };

  if (showIntro) {
    return <IntroOverlay onSealClick={handleSealClick} />;
  }

  if (!hasAccess && showEnvelope) {
    return <Envelope onAccessGranted={handleAccessGranted} />;
  }

  return (
    <main className="min-h-screen bg-[#F9F7F2]">
      <Hero />
      <Location />
      <RSVP />
      <GiftRegistry />
      <DressCode />
      {/* Control de Audio */}
      <AudioControl onMuteChange={setIsAudioMuted} />
      {/* MusicPlayer - Configurado con el video de YouTube */}
      {shouldStartMusic && (
        <MusicPlayer videoId="ByfFurjQDb0" isMuted={isAudioMuted} />
      )}
    </main>
  );
}
