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
    image: '/regalo-placeholder.jpg',
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
    <section className="py-16 md:py-24 px-4 bg-paper-cream border-t border-black">
      <div className="max-w-7xl mx-auto">
        <div className="bg-rose-palo border border-black p-8 md:p-12 mb-12 md:mb-16">
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black text-center mb-4 uppercase tracking-tight">
            Lista de Deseos Editorial
          </h2>
          <p className="text-center text-black mb-0 text-sm md:text-base tracking-wide font-sans leading-relaxed">
            Tu presencia es el mejor regalo, pero si deseas obsequiarnos algo especial
          </p>
        </div>
        
        {/* Carrusel de Regalos */}
        <div className="relative">
          {/* Flecha Izquierda */}
          <button
            onClick={() => scrollCarousel('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-rose-palo border border-black hover:bg-rose-palo/80 transition-all duration-300"
            aria-label="Anterior"
          >
            <span className="font-sans font-black text-2xl md:text-3xl text-black">‹</span>
          </button>
          
          {/* Contenedor del Carrusel */}
          <div
            ref={carouselRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="flex gap-6 px-12 md:px-16">
              {gifts.map((gift) => (
                <div
                  key={gift.id}
                  className="flex-shrink-0 w-[66vw] md:w-64 lg:w-72 snap-start"
                >
                  {/* Tarjeta Portrait */}
                  <div className="bg-lavender border border-eucalyptus overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    {/* Imagen en la parte superior */}
                    <div className="relative aspect-[3/4] w-full border-b border-eucalyptus overflow-hidden bg-lavender">
                      <Image
                        src={gift.image}
                        alt={gift.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Contenido de la tarjeta */}
                    <div className="p-4 md:p-6 flex-1 flex flex-col justify-between bg-white">
                      <div>
                        <h3 className="font-sans text-xl md:text-2xl font-black mb-2 uppercase tracking-tight">
                          {gift.title}
                        </h3>
                        {gift.precio && (
                          <p className="font-sans text-sm md:text-base text-black/70 mb-4">
                            {gift.precio}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => handleOpenModal(gift.link)}
                        className="w-full text-center border-2 border-eucalyptus bg-eucalyptus text-white px-4 py-2 md:px-6 md:py-3 hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-xs md:text-sm uppercase tracking-widest font-sans font-bold"
                      >
                        Contribuir
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Flecha Derecha */}
          <button
            onClick={() => scrollCarousel('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-rose-palo border border-black hover:bg-rose-palo/80 transition-all duration-300"
            aria-label="Siguiente"
          >
            <span className="font-sans font-black text-2xl md:text-3xl text-black">›</span>
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
          <div className="relative bg-lavender border-2 border-black max-w-md w-full p-8 md:p-12 animate-slide-up">
            {/* Botón de cerrar */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border border-black bg-white hover:bg-black hover:text-white transition-all duration-300"
              aria-label="Cerrar modal"
            >
              <span className="font-sans font-black text-lg">×</span>
            </button>
            
            {/* Contenido del Modal */}
            <div className="space-y-6">
              <h3 className="font-sans text-3xl md:text-4xl font-black uppercase tracking-tight text-center">
                Detalle para Andrés & María
              </h3>
              
              <p className="font-sans text-base md:text-lg leading-relaxed text-center">
                ¡Gracias por ser parte de nuestra historia! Para tu comodidad, hemos habilitado un portal seguro para recibir tu detalle.
              </p>
              
              <a
                href={selectedGiftLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-eucalyptus text-white px-6 py-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-sm md:text-base uppercase tracking-widest font-sans font-bold border-2 border-eucalyptus"
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
