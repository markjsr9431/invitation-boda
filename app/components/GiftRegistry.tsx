'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { REGALOS } from '@/app/data/regalos';

interface GiftItem {
  id: string;
  title: string;
  image: string;
  link: string;
  precio?: string;
}

export default function GiftRegistry() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGiftLink, setSelectedGiftLink] = useState<string>('');
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Mapear REGALOS a formato GiftItem
  const gifts: GiftItem[] = REGALOS.map((regalo) => ({
    id: regalo.id.toString(),
    title: regalo.nombre,
    image: regalo.image,
    link: regalo.link,
    precio: regalo.precio,
  }));
  
  const handleOpenModal = (link: string) => {
    setSelectedGiftLink(link);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedGiftLink('');
  };
  
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };
  
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320; // Ancho aproximado de una tarjeta + gap
      const scrollDirection = direction === 'left' ? -scrollAmount : scrollAmount;
      carouselRef.current.scrollBy({
        left: scrollDirection,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-paper-cream">
      <div className="max-w-7xl mx-auto">
        <div className="bg-pastel-blue-title p-8 md:p-12 mb-12 md:mb-16 rounded-[30px]" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 uppercase tracking-widest text-white">
            Lista de Deseos
          </h2>
          <p className="text-center text-white mb-0 text-sm md:text-base tracking-wide font-sans leading-relaxed">
            Tu presencia es el mejor regalo, pero si deseas obsequiarnos algo especial
          </p>
        </div>
        
        {/* Carrusel de Regalos / Grid Móvil */}
        <div className="relative">
          {/* Flecha Izquierda - Solo visible en desktop */}
          <button
            onClick={() => scrollCarousel('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 rounded-full" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}
            aria-label="Anterior"
          >
            <span className="font-sans font-bold text-3xl text-pastel-pink">‹</span>
          </button>
          
          {/* Contenedor: Grid en móvil, Carrusel en desktop */}
          <div
            ref={carouselRef}
            className="grid grid-cols-2 gap-3 md:flex md:overflow-x-auto md:scrollbar-hide md:gap-6 md:px-16 md:snap-x md:snap-mandatory md:scroll-smooth md:touch-pan-x"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              touchAction: 'pan-x',
            }}
          >
            {gifts.map((gift) => (
              <div
                key={gift.id}
                className="w-full md:flex-shrink-0 md:w-64 lg:w-72 md:snap-start"
              >
                {/* Tarjeta Portrait */}
                <div className="bg-paper-cream rounded-[24px] overflow-hidden md:hover:-translate-y-2 transition-all duration-300 h-full flex flex-col" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}>
                  {/* Imagen en la parte superior */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={gift.image}
                      alt={gift.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Contenido de la tarjeta */}
                  <div className="p-3 md:p-6 flex-1 flex flex-col justify-between bg-paper-cream">
                    <div>
                      <h3 className="font-sans text-sm md:text-xl font-bold mb-2 uppercase tracking-tight">
                        {gift.title}
                      </h3>
                      {gift.precio && (
                        <p className="font-sans text-xs md:text-sm text-black/70 mb-4">
                          {gift.precio}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => handleOpenModal(gift.link)}
                      className="w-full text-center bg-pastel-blue-title text-white px-3 py-1.5 md:px-6 md:py-3 hover:opacity-90 transition-all duration-300 text-xs md:text-sm uppercase tracking-widest font-sans font-bold rounded-[50px]" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}
                    >
                      Contribuir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Flecha Derecha - Solo visible en desktop */}
          <button
            onClick={() => scrollCarousel('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 rounded-full" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}
            aria-label="Siguiente"
          >
            <span className="font-sans font-bold text-3xl text-pastel-pink">›</span>
          </button>
        </div>
      </div>

      {/* Modal de Confirmación */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fade-in"
          onClick={handleOverlayClick}
        >
          {/* Overlay oscuro semi-transparente */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Modal */}
          <div className="relative bg-paper-cream/95 backdrop-blur-md max-w-md w-full p-8 md:p-12 animate-slide-up rounded-[24px] shadow-soft border-subtle">
            {/* Botón de cerrar */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 rounded-full shadow-soft"
              aria-label="Cerrar modal"
            >
              <span className="font-sans font-black text-lg text-black">×</span>
            </button>
            
            {/* Contenido del Modal */}
            <div className="space-y-6">
              <h3 className="font-sans text-3xl md:text-4xl font-bold uppercase tracking-widest text-center text-pastel-blue-title">
                Detalle para Felipe & María
              </h3>
              
              <p className="font-sans text-base md:text-lg leading-relaxed text-center text-black">
                ¡Gracias por ser parte de nuestra historia! Para tu comodidad, hemos habilitado un portal seguro para recibir tu detalle.
              </p>
              
              <a
                href={selectedGiftLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-pastel-blue-title text-white px-6 py-4 hover:opacity-90 transition-all duration-300 text-sm md:text-base uppercase tracking-widest font-sans font-bold rounded-[50px]" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}
              >
                Ir al portal seguro de regalos
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
