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

export default function Home() {
  const [hasAccess, setHasAccess] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [isMusicMuted, setIsMusicMuted] = useState(true);

  const handleSealClick = () => {
    // Desmutear la música cuando se hace clic en "Abrir"
    setIsMusicMuted(false);
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

  return (
    <>
      {/* MusicPlayer - Precargado desde el inicio pero silenciado hasta hacer clic en "Abrir" */}
      <MusicPlayer videoId="ByfFurjQDb0" isMuted={isMusicMuted} />
      
      {showIntro && <IntroOverlay onSealClick={handleSealClick} />}
      
      {!hasAccess && showEnvelope && <Envelope onAccessGranted={handleAccessGranted} />}
      
      {hasAccess && (
        <main className="min-h-screen bg-[#F9F7F2]">
          <Hero />
          <Location />
          <RSVP />
          <GiftRegistry />
          <DressCode />
        </main>
      )}
    </>
  );
}
