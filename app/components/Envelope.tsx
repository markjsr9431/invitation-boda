'use client';

import { useState } from 'react';
import { isAuthorizedGuest } from '@/app/utils/guestList';

interface EnvelopeProps {
  onAccessGranted: () => void;
}

export default function Envelope({ onAccessGranted }: EnvelopeProps) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsChecking(true);

    setTimeout(() => {
      if (isAuthorizedGuest(name)) {
        localStorage.setItem('wedding_access', 'granted');
        setIsOpening(true);
        setTimeout(() => {
          onAccessGranted();
        }, 800);
      } else {
        setError('Nombre no encontrado en la lista de invitados');
        setIsChecking(false);
      }
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 bg-paper-cream z-50 flex items-center justify-center px-4 transition-all ${
        isOpening ? 'animate-envelope-slide-out' : 'animate-fade-in'
      }`}
    >
      <div className="relative w-full max-w-md">
        <div className="relative bg-white border border-black p-12 md:p-16 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-black text-xs mb-2 uppercase tracking-widest font-sans font-semibold"
              >
                Ingresa tu nombre completo
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError('');
                }}
                placeholder="Tu nombre completo"
                className="w-full px-4 py-3 bg-white border border-black text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition-all font-sans"
                required
                disabled={isChecking}
                autoFocus
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm font-sans animate-pulse">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isChecking || !name.trim()}
              className="w-full py-3 bg-black text-white font-sans font-bold hover:bg-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-sm"
            >
              {isChecking ? 'Verificando...' : 'Acceder'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

