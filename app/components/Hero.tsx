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
        <div className="mb-12 space-y-6 animate-slide-up">
          <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase">
            andrés felipe
          </h1>
          <div className="flex items-center justify-center gap-6 my-6">
            <div className="h-px w-20 md:w-32 bg-gold"></div>
            <span className="text-gold text-xl md:text-2xl font-sans font-light">&</span>
            <div className="h-px w-20 md:w-32 bg-gold"></div>
          </div>
          <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase">
            maría isabel
          </h1>
        </div>

        {/* Fecha */}
        <p className="text-gold text-lg md:text-xl mb-16 tracking-widest font-sans font-light">
          17 de Mayo de 2026
        </p>

        {/* Countdown Timer */}
        <div className="mt-16">
          <p className="text-gold-light text-sm md:text-base mb-6 tracking-widest uppercase font-sans">
            Faltan
          </p>
          <div className="grid grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square border border-gold flex items-center justify-center mb-2 transition-all hover:bg-gold/10">
                <span className="font-sans text-3xl md:text-5xl lg:text-6xl font-bold">
                  {formatNumber(timeRemaining.days)}
                </span>
              </div>
              <span className="text-gold-light text-xs md:text-sm uppercase tracking-widest font-sans">
                Días
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square border border-gold flex items-center justify-center mb-2 transition-all hover:bg-gold/10">
                <span className="font-serif text-3xl md:text-5xl lg:text-6xl font-light">
                  {formatNumber(timeRemaining.hours)}
                </span>
              </div>
              <span className="text-gold-light text-xs md:text-sm uppercase tracking-widest font-sans">
                Horas
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square border border-gold flex items-center justify-center mb-2 transition-all hover:bg-gold/10">
                <span className="font-serif text-3xl md:text-5xl lg:text-6xl font-light">
                  {formatNumber(timeRemaining.minutes)}
                </span>
              </div>
              <span className="text-gold-light text-xs md:text-sm uppercase tracking-widest font-sans">
                Minutos
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square border border-gold flex items-center justify-center mb-2 transition-all hover:bg-gold/10">
                <span className="font-serif text-3xl md:text-5xl lg:text-6xl font-light">
                  {formatNumber(timeRemaining.seconds)}
                </span>
              </div>
              <span className="text-gold-light text-xs md:text-sm uppercase tracking-widest font-sans">
                Segundos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

