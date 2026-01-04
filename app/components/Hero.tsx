'use client';

import { useState, useEffect } from 'react';
import { calculateTimeRemaining, TimeRemaining } from '@/app/utils/countdown';
import Image from 'next/image';

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
    <section className="bg-paper-cream animate-newspaper-reveal">
      {/* Cabecera del Periódico (The Masthead) */}
      <div className="bg-white border-b border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-lavender">
            {/* Columna Izquierda */}
            <div className="px-4 md:px-8 py-6 md:py-8">
              <p className="text-black text-xs md:text-sm font-sans font-bold uppercase tracking-widest mb-2">
                EDICIÓN ESPECIAL
              </p>
              <p className="text-black text-xs md:text-sm font-sans font-normal uppercase tracking-wider">
                Cali, Colombia
              </p>
            </div>

            {/* Columna Centro */}
            <div className="px-4 md:px-8 py-6 md:py-8 flex items-center justify-center">
              <h1 className="text-black font-sans font-black text-3xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-tight leading-tight text-center">
                ANDRÉS & MARÍA
              </h1>
            </div>

            {/* Columna Derecha */}
            <div className="px-4 md:px-8 py-6 md:py-8 flex items-center justify-end">
              <p className="text-black text-xs md:text-sm font-sans font-bold uppercase tracking-widest text-right">
                17 DE MAYO<br />DE 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Titular Principal */}
      <div className="bg-white border-b border-black py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-black font-sans font-black text-5xl md:text-7xl lg:text-8xl xl:text-9xl uppercase tracking-tight leading-none">
            ¡NOS CASAMOS!
          </h2>
        </div>
      </div>

      {/* Imagen Hero con efecto blanco y negro */}
      <div className="bg-white border-b border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="relative w-full aspect-[4/3] border border-black overflow-hidden bg-paper-cream">
            <Image
              src="/IMG_9536.JPG"
              alt="Andrés y María"
              fill
              className="object-cover grayscale"
              priority
            />
          </div>
        </div>
      </div>

      {/* Contador estilo Anuncio Clasificado */}
      <div className="bg-white border-b border-black py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="border-2 border-black p-8 md:p-12 bg-paper-cream">
            <p className="text-black text-xs md:text-sm font-sans font-bold uppercase tracking-widest mb-6 text-center">
              Faltan
            </p>
            <div className="grid grid-cols-4 gap-4 md:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square border-2 border-eucalyptus bg-white flex items-center justify-center mb-3">
                  <span className="font-sans text-4xl md:text-6xl lg:text-7xl font-black text-black">
                    {formatNumber(timeRemaining.days)}
                  </span>
                </div>
                <span className="text-black text-xs md:text-sm uppercase tracking-widest font-sans font-bold">
                  Días
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square border-2 border-eucalyptus bg-white flex items-center justify-center mb-3">
                  <span className="font-sans text-4xl md:text-6xl lg:text-7xl font-black text-black">
                    {formatNumber(timeRemaining.hours)}
                  </span>
                </div>
                <span className="text-black text-xs md:text-sm uppercase tracking-widest font-sans font-bold">
                  Horas
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square border-2 border-eucalyptus bg-white flex items-center justify-center mb-3">
                  <span className="font-sans text-4xl md:text-6xl lg:text-7xl font-black text-black">
                    {formatNumber(timeRemaining.minutes)}
                  </span>
                </div>
                <span className="text-black text-xs md:text-sm uppercase tracking-widest font-sans font-bold">
                  Minutos
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square border-2 border-eucalyptus bg-white flex items-center justify-center mb-3">
                  <span className="font-sans text-4xl md:text-6xl lg:text-7xl font-black text-black">
                    {formatNumber(timeRemaining.seconds)}
                  </span>
                </div>
                <span className="text-black text-xs md:text-sm uppercase tracking-widest font-sans font-bold">
                  Segundos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
