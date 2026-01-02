'use client';

import { useState, useEffect } from 'react';
import { isAuthorizedGuest } from '@/app/utils/guestList';

interface AccessGateProps {
  onAccessGranted: () => void;
}

export default function AccessGate({ onAccessGranted }: AccessGateProps) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    // Verificar si ya tiene acceso guardado
    const hasAccess = localStorage.getItem('wedding_access');
    if (hasAccess === 'granted') {
      onAccessGranted();
    }
  }, [onAccessGranted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsChecking(true);

    // Simular pequeña pausa para mejor UX
    setTimeout(() => {
      if (isAuthorizedGuest(name)) {
        localStorage.setItem('wedding_access', 'granted');
        onAccessGranted();
      } else {
        setError('Nombre no encontrado en la lista de invitados');
        setIsChecking(false);
      }
    }, 300);
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center px-4 animate-fade-in">
      <div className="w-full max-w-md text-center animate-slide-up">
        <h1 className="font-sans text-3xl md:text-4xl font-bold text-white mb-2">
          Invitación de Boda
        </h1>
        <p className="text-gold-light text-sm md:text-base mb-8 tracking-widest">
          Ingresa tu nombre para acceder
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError('');
            }}
            placeholder="Tu nombre completo"
            className="w-full px-4 py-3 bg-transparent border border-gold text-white placeholder:text-gold-light rounded-none focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
            required
            disabled={isChecking}
            autoFocus
          />
          
          {error && (
            <p className="text-red-400 text-sm animate-pulse">{error}</p>
          )}
          
          <button
            type="submit"
            disabled={isChecking || !name.trim()}
            className="w-full py-3 bg-gold text-black font-semibold hover:bg-gold-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest"
          >
            {isChecking ? 'Verificando...' : 'Acceder'}
          </button>
        </form>
      </div>
    </div>
  );
}

