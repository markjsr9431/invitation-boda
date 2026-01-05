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
    <section className="bg-[#F9F7F2]">
      {/* Masthead Periodístico de 3 Columnas */}
      <div className="bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-black">
            {/* Columna Izquierda */}
            <div className="flex flex-col items-center justify-center text-center py-4 md:py-0 px-4">
              <p className="font-sans text-base md:text-lg uppercase tracking-widest font-bold text-black mb-1">
                EDICIÓN ESPECIAL
              </p>
              <p className="font-sans text-base md:text-lg uppercase tracking-widest font-normal text-black">
                CALI, COLOMBIA
              </p>
            </div>

            {/* Columna Centro */}
            <div className="text-center py-4 md:py-0 px-4">
              <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-widest text-black">
                FELIPE & MARÍA
              </h1>
            </div>

            {/* Columna Derecha */}
            <div className="flex flex-col items-center justify-center text-center py-4 md:py-0 px-4">
              <p className="font-sans text-base md:text-lg uppercase tracking-widest font-bold text-black">
                17 DE MAYO DE 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Titular Principal */}
      <div className="bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <h2 className="font-sans text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-widest text-black text-center">
            ¡NOS CASAMOS!
          </h2>
        </div>
      </div>

      {/* Carrusel Hero Automático */}
      <div className="bg-[#F9F7F2] border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="relative w-full max-w-full mx-auto bg-white border-2 border-black flex items-center justify-center">
            <div className="relative w-full" style={{ maxWidth: '100%' }}>
              <Image
                key={currentImageIndex}
                src={heroImages[currentImageIndex]}
                alt="Felipe y María"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-contain transition-opacity duration-1000"
                priority={currentImageIndex === 0}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contador estilo Anuncio Clasificado */}
      <div className="bg-[#F9F7F2] py-12 md:py-16 border-b-2 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="p-8 md:p-12 bg-white border-2 border-black">
            <p className="text-black text-xs md:text-sm font-sans font-bold uppercase tracking-widest mb-6 text-center">
              Faltan
            </p>
            <div className="grid grid-cols-4 gap-4 md:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square bg-[#F9F7F2] border-2 border-black flex items-center justify-center mb-3">
                  <span className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold text-black">
                    {formatNumber(timeRemaining.days)}
                  </span>
                </div>
                <span className="text-black text-xs md:text-sm uppercase tracking-widest font-sans font-bold">
                  Días
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square bg-[#F9F7F2] border-2 border-black flex items-center justify-center mb-3">
                  <span className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold text-black">
                    {formatNumber(timeRemaining.hours)}
                  </span>
                </div>
                <span className="text-black text-xs md:text-sm uppercase tracking-widest font-sans font-bold">
                  Horas
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square bg-[#F9F7F2] border-2 border-black flex items-center justify-center mb-3">
                  <span className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold text-black">
                    {formatNumber(timeRemaining.minutes)}
                  </span>
                </div>
                <span className="text-black text-xs md:text-sm uppercase tracking-widest font-sans font-bold">
                  Minutos
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square bg-[#F9F7F2] border-2 border-black flex items-center justify-center mb-3">
                  <span className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold text-black">
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
