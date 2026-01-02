'use client';

import { useState, useEffect } from 'react';
import { calculateTimeRemaining, TimeRemaining } from '@/app/utils/countdown';

export default function Hero() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(
    calculateTimeRemaining()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-black text-white animate-fade-in">
      <div className="text-center max-w-4xl mx-auto">
        {/* Nombres de los novios */}
        <div className="mb-8 space-y-2 animate-slide-up">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-wide">
            Andrés Felipe
          </h1>
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="h-px w-16 md:w-24 bg-gold"></div>
            <span className="text-gold text-2xl md:text-3xl">&</span>
            <div className="h-px w-16 md:w-24 bg-gold"></div>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-wide">
            María Isabel
          </h1>
        </div>

        {/* Fecha */}
        <p className="text-gold text-lg md:text-xl mb-12 tracking-wider">
          17 de Mayo de 2026
        </p>

        {/* Countdown Timer */}
        <div className="mt-16">
          <p className="text-gold-light text-sm md:text-base mb-6 tracking-widest uppercase">
            Faltan
          </p>
          <div className="grid grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square border border-gold flex items-center justify-center mb-2 transition-all hover:bg-gold/10">
                <span className="font-serif text-3xl md:text-5xl lg:text-6xl font-light">
                  {formatNumber(timeRemaining.days)}
                </span>
              </div>
              <span className="text-gold-light text-xs md:text-sm uppercase tracking-wider">
                Días
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square border border-gold flex items-center justify-center mb-2 transition-all hover:bg-gold/10">
                <span className="font-serif text-3xl md:text-5xl lg:text-6xl font-light">
                  {formatNumber(timeRemaining.hours)}
                </span>
              </div>
              <span className="text-gold-light text-xs md:text-sm uppercase tracking-wider">
                Horas
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square border border-gold flex items-center justify-center mb-2 transition-all hover:bg-gold/10">
                <span className="font-serif text-3xl md:text-5xl lg:text-6xl font-light">
                  {formatNumber(timeRemaining.minutes)}
                </span>
              </div>
              <span className="text-gold-light text-xs md:text-sm uppercase tracking-wider">
                Minutos
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square border border-gold flex items-center justify-center mb-2 transition-all hover:bg-gold/10">
                <span className="font-serif text-3xl md:text-5xl lg:text-6xl font-light">
                  {formatNumber(timeRemaining.seconds)}
                </span>
              </div>
              <span className="text-gold-light text-xs md:text-sm uppercase tracking-wider">
                Segundos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

