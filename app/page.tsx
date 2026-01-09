'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import IntroOverlay from './components/IntroOverlay';
import Envelope from './components/Envelope';
import Hero from './components/Hero';
import DressCode from './components/DressCode';
import MusicPlayer from './components/MusicPlayer';
import LazySection from './components/LazySection';

// Lazy load components que están debajo del fold - solo se cargan cuando el usuario hace scroll hacia ellos
const Location = dynamic(() => import('./components/Location'), {
  ssr: false,
});

const RSVP = dynamic(() => import('./components/RSVP'), {
  ssr: false,
});

const GiftRegistry = dynamic(() => import('./components/GiftRegistry'), {
  ssr: false,
});

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
          <LazySection>
            <Location />
          </LazySection>
          <LazySection>
            <RSVP />
          </LazySection>
          <DressCode />
          <LazySection>
            <GiftRegistry />
          </LazySection>
        </main>
      )}
    </>
  );
}
