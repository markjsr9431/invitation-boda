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
        <div className="bg-white border-2 border-black p-8 md:p-12 mb-12 md:mb-16">
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black text-center mb-4 uppercase tracking-widest text-black">
            LISTA DE DESEOS EDITORIAL
          </h2>
          <p className="text-center text-black mb-0 text-sm md:text-base tracking-wide font-sans leading-relaxed">
            Tu presencia es el mejor regalo, pero si deseas obsequiarnos algo especial
          </p>
        </div>
        
        {/* Carrusel de Regalos / Grid Móvil */}
        <div className="relative flex items-center gap-4">
          {/* Flecha Izquierda - Solo visible en desktop */}
          <button
            onClick={() => scrollCarousel('left')}
            className="hidden md:flex w-16 h-16 items-center justify-center bg-white border-2 border-black hover:bg-black hover:text-white transition-all duration-300 flex-shrink-0 z-10"
            aria-label="Anterior"
          >
            <span className="font-sans font-black text-4xl text-black hover:text-white">‹</span>
          </button>
          
          {/* Contenedor: Grid en móvil, Carrusel en desktop */}
          <div
            ref={carouselRef}
            className="flex-1 grid grid-cols-2 gap-3 md:flex md:overflow-x-auto md:scrollbar-hide md:gap-6 md:snap-x md:snap-mandatory md:scroll-smooth md:touch-pan-x"
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
                <div className="bg-white border-2 border-black overflow-hidden md:hover:opacity-90 transition-opacity h-full flex flex-col">
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
                  <div className="p-3 md:p-6 flex-1 flex flex-col justify-between bg-white">
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
                      className="w-full text-center bg-black text-white px-3 py-1.5 md:px-6 md:py-3 hover:opacity-90 transition-opacity text-xs md:text-sm uppercase tracking-widest font-sans font-black"
                    >
                      CONTRIBUIR
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Flecha Derecha - Solo visible en desktop */}
          <button
            onClick={() => scrollCarousel('right')}
            className="hidden md:flex w-16 h-16 items-center justify-center bg-white border-2 border-black hover:bg-black hover:text-white transition-all duration-300 flex-shrink-0 z-10"
            aria-label="Siguiente"
          >
            <span className="font-sans font-black text-4xl text-black hover:text-white">›</span>
          </button>
        </div>
      </div>

      {/* Modal de Confirmación */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={handleOverlayClick}
        >
          {/* Overlay oscuro semi-transparente */}
          <div className="absolute inset-0 bg-black/50"></div>
          
              {/* Modal */}
              <div className="relative bg-white border-2 border-black max-w-md w-full p-8 md:p-12">
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
                <h3 className="font-sans text-3xl md:text-4xl font-black uppercase tracking-widest text-center text-black">
                  DETALLE PARA FELIPE & MARÍA
                </h3>
                
                <p className="font-sans text-base md:text-lg leading-relaxed text-center text-black">
                  ¡Gracias por ser parte de nuestra historia! Para tu comodidad, hemos habilitado un portal seguro para recibir tu detalle.
                </p>
                
                <a
                  href={selectedGiftLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-black text-white px-6 py-4 hover:opacity-90 transition-opacity text-sm md:text-base uppercase tracking-widest font-sans font-black"
                >
                  IR AL PORTAL SEGURO DE REGALOS
                </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
