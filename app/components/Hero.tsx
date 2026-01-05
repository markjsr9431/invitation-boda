'use client';

import { useState, useEffect } from 'react';
import { calculateTimeRemaining, TimeRemaining } from '@/app/utils/countdown';
import Image from 'next/image';

const heroImages = [
  '/IMG_2141.PNG',
  '/IMG_4392.JPG',
  '/IMG_4404.JPG',
  '/IMG_9536.JPG',
];

export default function Hero() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(
    calculateTimeRemaining()
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(imageTimer);
  }, []);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <section className="bg-paper-cream animate-newspaper-reveal">
      {/* Cabecera Minimalista */}
      <div className="bg-paper-cream">
        <div className="w-full max-w-full px-4 md:px-8 py-12 md:py-16">
          <div className="flex flex-col items-center justify-center text-center space-y-3 md:space-y-4">
            {/* Título Principal */}
            <h1 className="text-pastel-blue-title font-sans font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-widest leading-tight">
              ¡Nos casamos!
            </h1>

            {/* Subtítulo */}
            <h2 className="text-pastel-pink font-sans font-semibold text-2xl md:text-4xl lg:text-5xl tracking-wide leading-tight">
              Felipe y María
            </h2>

            {/* Texto Informativo */}
            <p className="text-black text-sm md:text-base font-sans font-normal tracking-normal">
              ¿Cuándo?
            </p>

            {/* Fecha */}
            <p className="text-black text-lg md:text-xl lg:text-2xl font-sans font-bold uppercase tracking-wider">
              17 de Mayo de 2026
            </p>
          </div>
        </div>
      </div>

      {/* Carrusel Hero Automático */}
      <div className="bg-paper-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="relative w-full max-w-2xl mx-auto aspect-[4/5] max-h-[500px] overflow-hidden bg-paper-cream rounded-[30px]" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}>
            <Image
              key={currentImageIndex}
              src={heroImages[currentImageIndex]}
              alt="Felipe y María"
              fill
              className="object-cover transition-opacity duration-1000"
              priority={currentImageIndex === 0}
            />
          </div>
        </div>
      </div>

      {/* Contador estilo Anuncio Clasificado */}
      <div className="bg-paper-cream py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="p-8 md:p-12 bg-pastel-blue-title rounded-[24px]" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}>
            <p className="text-white text-xs md:text-sm font-sans font-bold uppercase tracking-widest mb-6 text-center">
              Faltan
            </p>
            <div className="grid grid-cols-4 gap-4 md:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square bg-white flex items-center justify-center mb-3 rounded-[16px]" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}>
                  <span className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold text-black">
                    {formatNumber(timeRemaining.days)}
                  </span>
                </div>
                <span className="text-white text-xs md:text-sm uppercase tracking-widest font-sans font-bold">
                  Días
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square bg-white flex items-center justify-center mb-3 rounded-[16px]" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}>
                  <span className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold text-black">
                    {formatNumber(timeRemaining.hours)}
                  </span>
                </div>
                <span className="text-white text-xs md:text-sm uppercase tracking-widest font-sans font-bold">
                  Horas
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square bg-white flex items-center justify-center mb-3 rounded-[16px]" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}>
                  <span className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold text-black">
                    {formatNumber(timeRemaining.minutes)}
                  </span>
                </div>
                <span className="text-white text-xs md:text-sm uppercase tracking-widest font-sans font-bold">
                  Minutos
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square bg-white flex items-center justify-center mb-3 rounded-[16px]" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}>
                  <span className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold text-black">
                    {formatNumber(timeRemaining.seconds)}
                  </span>
                </div>
                <span className="text-white text-xs md:text-sm uppercase tracking-widest font-sans font-bold">
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
