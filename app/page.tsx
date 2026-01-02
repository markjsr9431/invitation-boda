'use client';

import { useState, useEffect } from 'react';
import AccessGate from './components/AccessGate';
import Hero from './components/Hero';
import Location from './components/Location';
import RSVP from './components/RSVP';
import GiftRegistry from './components/GiftRegistry';

export default function Home() {
  const [hasAccess, setHasAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar acceso al cargar
    const access = localStorage.getItem('wedding_access');
    if (access === 'granted') {
      setHasAccess(true);
    }
    setIsLoading(false);
  }, []);

  const handleAccessGranted = () => {
    setHasAccess(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-gold animate-pulse">Cargando...</div>
      </div>
    );
  }

  if (!hasAccess) {
    return <AccessGate onAccessGranted={handleAccessGranted} />;
  }

  return (
    <main className="min-h-screen">
      <Hero />
      <Location />
      <RSVP />
      <GiftRegistry />
    </main>
  );
}

