'use client';

import { useState } from 'react';
import IntroOverlay from './components/IntroOverlay';
import Envelope from './components/Envelope';
import Hero from './components/Hero';
import Location from './components/Location';
import RSVP from './components/RSVP';
import GiftRegistry from './components/GiftRegistry';

export default function Home() {
  const [hasAccess, setHasAccess] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showEnvelope, setShowEnvelope] = useState(false);

  const handleSealClick = () => {
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
    <main className="min-h-screen bg-paper-cream">
      <Hero />
      <Location />
      <RSVP />
      <GiftRegistry />
    </main>
  );
}
