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
        <div className="relative bg-white/95 backdrop-blur-md p-12 md:p-16 rounded-[24px]" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}>
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
                className="w-full px-4 py-3 bg-white text-black placeholder:text-gray-500 border border-pastel-blue-title/50 focus:outline-none focus:ring-2 focus:ring-pastel-blue-title/50 focus:border-pastel-blue-title transition-all font-sans rounded-xl" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}
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
              className="w-full py-3 bg-pastel-blue-title text-white font-sans font-bold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-sm rounded-[50px]" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}
            >
              {isChecking ? 'Verificando...' : 'Acceder'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

