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
  const [isExiting, setIsExiting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsChecking(true);

    setTimeout(() => {
      if (isAuthorizedGuest(name)) {
        localStorage.setItem('wedding_access', 'granted');
        setIsExiting(true);
        setTimeout(() => {
          onAccessGranted();
        }, 400);
      } else {
        setError('Nombre no encontrado en la lista de invitados');
        setIsChecking(false);
      }
    }, 300);
  };

  return (
    <div className={`fixed inset-0 bg-[#F9F7F2] z-50 flex items-center justify-center px-4 ${isExiting ? 'animate-slide-out' : 'animate-slide-in'}`}>
      <div className="relative w-full max-w-md">
        <div className="relative bg-white border-2 border-black p-12 md:p-16">
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
                className="w-full px-4 py-3 bg-white text-black placeholder:text-gray-500 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all font-sans"
                required
                disabled={isChecking}
                autoFocus
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm font-sans">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isChecking || !name.trim()}
              className="w-full py-3 bg-black text-white font-sans font-black hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-sm"
            >
              {isChecking ? 'Verificando...' : 'Acceder'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

