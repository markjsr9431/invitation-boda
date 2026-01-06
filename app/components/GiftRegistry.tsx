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
      // Calcular el ancho de la tarjeta según el breakpoint
      let cardWidth: number;
      let gap: number;
      
      if (window.innerWidth >= 1024) {
        // lg: w-72 (288px)
        cardWidth = 288;
        gap = 24; // gap-6
      } else if (window.innerWidth >= 768) {
        // md: w-64 (256px)
        cardWidth = 256;
        gap = 24; // gap-6
      } else {
        // móvil: w-[80vw]
        cardWidth = window.innerWidth * 0.8;
        gap = 12; // gap-3
      }
      
      // En desktop: pasar de a 2 tarjetas, en móvil: pasar de a 1 tarjeta
      const cardsToScroll = window.innerWidth >= 768 ? 2 : 1;
      const scrollAmount = (cardWidth + gap) * cardsToScroll;
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
        
        {/* Carrusel de Regalos */}
        <div className="relative flex items-center gap-2 md:gap-4">
          {/* Flecha Izquierda - Visible en todos los tamaños */}
          <button
            onClick={() => scrollCarousel('left')}
            className="flex w-12 h-12 md:w-16 md:h-16 items-center justify-center bg-white border-2 border-black hover:bg-black hover:text-white transition-all duration-300 flex-shrink-0 z-10"
            aria-label="Anterior"
          >
            <span className="font-sans font-black text-3xl md:text-4xl text-black hover:text-white">‹</span>
          </button>
          
          {/* Contenedor: Carrusel en todos los tamaños */}
          <div
            ref={carouselRef}
            className="flex-1 flex overflow-x-auto scrollbar-hide gap-3 md:gap-6 snap-x snap-mandatory scroll-smooth touch-pan-x"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              touchAction: 'pan-x',
              scrollBehavior: 'smooth',
            }}
          >
            {gifts.map((gift) => (
              <div
                key={gift.id}
                className="flex-shrink-0 w-[80vw] md:w-64 lg:w-72 snap-start"
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
          
          {/* Flecha Derecha - Visible en todos los tamaños */}
          <button
            onClick={() => scrollCarousel('right')}
            className="flex w-12 h-12 md:w-16 md:h-16 items-center justify-center bg-white border-2 border-black hover:bg-black hover:text-white transition-all duration-300 flex-shrink-0 z-10"
            aria-label="Siguiente"
          >
            <span className="font-sans font-black text-3xl md:text-4xl text-black hover:text-white">›</span>
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
