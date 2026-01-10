'use client';

import { useState, useEffect } from 'react';
import { calculateTimeRemaining, TimeRemaining } from '@/app/utils/countdown';
import Image from 'next/image';

const heroImages = [
  '/carrusel fotos/1.jpg',
  '/carrusel fotos/2.jpg',
  '/carrusel fotos/3.jpg',
  '/carrusel fotos/4.jpg',
  '/carrusel fotos/5.jpg',
  '/carrusel fotos/6.jpg',
  '/carrusel fotos/7.jpg',
  '/carrusel fotos/8.jpg',
  '/carrusel fotos/9.jpg',
  '/carrusel fotos/10.JPG',
];

export default function Hero() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(
    calculateTimeRemaining()
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      // Fade out
      setIsTransitioning(true);
      setOpacity(0);
      
      setTimeout(() => {
        // Cambiar imagen
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        
        // Fade in
        setTimeout(() => {
          setOpacity(1);
          setIsTransitioning(false);
        }, 50);
      }, 350);
    }, 3000);

    return () => clearInterval(imageTimer);
  }, []);

  const changeImage = (newIndex: number) => {
    // Fade out
    setIsTransitioning(true);
    setOpacity(0);
    
    setTimeout(() => {
      // Cambiar imagen
      setCurrentImageIndex(newIndex);
      
      // Fade in
      setTimeout(() => {
        setOpacity(1);
        setIsTransitioning(false);
      }, 50);
    }, 350);
  };

  const handlePrevious = () => {
    const newIndex = (currentImageIndex - 1 + heroImages.length) % heroImages.length;
    changeImage(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentImageIndex + 1) % heroImages.length;
    changeImage(newIndex);
  };

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <section className="relative">
      {/* Contenedor con imagen de fondo hasta el counter */}
      <div className="relative">
        {/* Imagen de fondo que cubre hasta el counter */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/7.jpg"
            alt="Fondo Hero"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* Overlay oscuro sutil */}
        <div className="absolute inset-0 z-0 bg-black/30"></div>
        
        {/* Contenido centrado vertical y horizontalmente */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Masthead Periodístico de 3 Columnas */}
          <div className="bg-transparent border-b-2 border-white/50 w-full">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/50">
                {/* Columna Izquierda */}
                <div className="flex flex-col items-center justify-center text-center py-4 md:py-0 px-4">
                  <p className="font-serif text-base md:text-lg uppercase tracking-widest font-bold text-white mb-1">
                    EDICIÓN ESPECIAL
                  </p>
                  <p className="font-serif text-base md:text-lg uppercase tracking-widest font-normal text-white">
                    CALI, COLOMBIA
                  </p>
                </div>

                {/* Columna Centro */}
                <div className="text-center py-4 md:py-0 px-4">
                  <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-widest text-white">
                    FELIPE & MARÍA
                  </h1>
                </div>

                {/* Columna Derecha */}
                <div className="flex flex-col items-center justify-center text-center py-4 md:py-0 px-4">
                  <p className="font-serif text-base md:text-lg uppercase tracking-widest font-bold text-white">
                    17 DE MAYO DE 2026
                  </p>
                  <p className="font-serif text-base md:text-lg uppercase tracking-widest font-normal text-white mt-1">
                    3:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Titular Principal */}
          <div className="bg-transparent border-b-2 border-white/50 w-full">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-widest text-white text-center">
                ¡NOS CASAMOS!
              </h2>
            </div>
          </div>

          {/* Contador estilo Anuncio Clasificado */}
          <div className="bg-transparent py-12 md:py-16 border-b-2 border-white/50 w-full">
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
      </div>
      </div>

      {/* Carrusel Hero Automático */}
<div className="bg-[#F9F7F2] border-b-2 border-black">
  <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
    <div className="group relative w-full max-w-full mx-auto bg-white border border-stone-200 flex items-center justify-center gap-4">
      
      {/* Flecha Izquierda */}
      <button
        onClick={handlePrevious}
        className="absolute left-2 md:left-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center hover:bg-white/80 transition-all duration-300 flex-shrink-0 z-20 opacity-30 md:opacity-0 md:group-hover:opacity-100"
        aria-label="Foto anterior"
      >
        <span className="font-sans font-black text-lg md:text-xl text-black">‹</span>
      </button>

      {/* NUEVO CONTENEDOR DE IMAGEN (Optimizado) */}
      <div className="relative w-full flex-1 aspect-[4/5] md:aspect-video overflow-hidden">
        {heroImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Felipe y María ${index + 1}`}
            fill
            className={`object-contain transition-opacity duration-700 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            priority={index <= 1} // Precarga las primeras para evitar el lag
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        ))}
      </div>

      {/* Flecha Derecha */}
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center hover:bg-white/80 transition-all duration-300 flex-shrink-0 z-20 opacity-30 md:opacity-0 md:group-hover:opacity-100"
        aria-label="Foto siguiente"
      >
        <span className="font-sans font-black text-lg md:text-xl text-black">›</span>
      </button>

    </div>
  </div>
</div>
    </section>
  );
}
