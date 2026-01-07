'use client';

export default function ThankYouPage() {
  const googleMapsUrl = 'https://maps.app.goo.gl/iezznv1cWpSeaWdJ7';
  const weddingDate = '17 de Mayo de 2026';

  return (
    <main className="min-h-screen bg-[#F9F7F2] flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl w-full">
        {/* Contenedor Principal */}
        <div className="bg-white border-2 border-black p-8 md:p-16">
          {/* Título */}
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-widest text-black text-center mb-8 md:mb-12">
            ¡GRACIAS!
          </h1>

          {/* Mensaje de Agradecimiento */}
          <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
            <p className="font-sans text-base md:text-lg lg:text-xl leading-relaxed tracking-wide text-black text-center">
              Gracias por hacer parte de esta historia. Tu generoso detalle significa mucho para nosotros y nos llena de alegría saber que compartirás este momento tan especial en nuestras vidas.
            </p>
            
            <p className="font-sans text-base md:text-lg lg:text-xl leading-relaxed tracking-wide text-black text-center">
              Recuerda que nos vemos el 17 de Mayo muy puntuales para disfrutar de tu compañía juntos. Tu presencia es el mejor regalo que podríamos recibir.
            </p>
          </div>

          {/* Información de la Boda */}
          <div className="border-t-2 border-black pt-8 md:pt-12 mb-8 md:mb-12">
            <div className="space-y-4 md:space-y-6 text-center">
              <div>
                <p className="font-sans text-sm md:text-base uppercase tracking-widest font-bold text-black mb-2">
                  FECHA
                </p>
                <p className="font-sans text-lg md:text-xl lg:text-2xl font-black uppercase tracking-wide text-black">
                  {weddingDate}
                </p>
                <p className="font-sans text-base md:text-lg lg:text-xl font-normal uppercase tracking-wide text-black mt-2">
                  3:00 PM
                </p>
              </div>
              
              <div>
                <p className="font-sans text-sm md:text-base uppercase tracking-widest font-bold text-black mb-2">
                  UBICACIÓN
                </p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white px-6 py-3 hover:opacity-90 transition-opacity text-xs md:text-sm uppercase tracking-widest font-sans font-black mt-2"
                >
                  VER EN GOOGLE MAPS
                </a>
              </div>
            </div>
          </div>

          {/* Firma */}
          <div className="border-t-2 border-black pt-8 md:pt-12">
            <p className="font-sans text-base md:text-lg lg:text-xl leading-relaxed tracking-wide text-black text-center">
              Atentamente,
            </p>
            <p className="font-sans text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-widest text-black text-center mt-4">
              Felipe y María
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

