'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function DressCode() {
  const [isModalOpen, setIsModalOpen] = useState<'hombres' | 'mujeres' | null>(null);

  const handleOpenModal = (type: 'hombres' | 'mujeres') => {
    setIsModalOpen(type);
  };

  const handleCloseModal = () => {
    setIsModalOpen(null);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  // Rutas de imágenes
  const hombresImage = '/codigos de vestimenta/caballeros/WhatsApp Image 2026-01-03 at 14.24.51.jpeg';
  const mujeresImage = '/codigos de vestimenta/damas/WhatsApp Image 2026-101-03 at 14.24.51.jpeg';

  return (
    <>
      <section className="py-16 md:py-24 px-4 bg-[#F9F7F2] border-b-2 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border-2 border-black p-8 md:p-12 mb-12 md:mb-16">
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black text-center mb-4 uppercase tracking-widest text-black">
              CÓDIGO DE VESTIMENTA
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
              {/* Botón HOMBRES */}
              <button
                onClick={() => handleOpenModal('hombres')}
                className="bg-white border-2 border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-widest font-sans font-black text-base md:text-lg"
              >
                HOMBRES
              </button>

              {/* Botón MUJERES */}
              <button
                onClick={() => handleOpenModal('mujeres')}
                className="bg-white border-2 border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-widest font-sans font-black text-base md:text-lg"
              >
                MUJERES
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={handleOverlayClick}
        >
          {/* Overlay oscuro semi-transparente */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Modal */}
          <div className="relative bg-white border-2 border-black max-w-2xl w-full p-6 md:p-8 pt-12 md:pt-16 z-10">
            {/* Botón de cerrar */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
              aria-label="Cerrar modal"
            >
              <span className="font-sans font-black text-lg">×</span>
            </button>

            {/* Contenido del Modal */}
            <div className="space-y-4 pt-2">
              {/* Imagen */}
              <div className="relative w-full h-[60vh] bg-white overflow-hidden flex items-center justify-center">
                <Image
                  src={isModalOpen === 'hombres' ? hombresImage : mujeresImage}
                  alt={`Código de vestimenta para ${isModalOpen === 'hombres' ? 'hombres' : 'mujeres'}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* Texto de Advertencia */}
              <p className="font-sans text-base md:text-lg font-bold text-black text-center">
                Agradecemos evitar el uso de tonos blancos y azules.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

