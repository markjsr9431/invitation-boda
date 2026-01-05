'use client';

export default function Location() {
  const googleMapsUrl = 'https://maps.app.goo.gl/iezznv1cWpSeaWdJ7';

  return (
    <section className="py-16 md:py-24 px-4 bg-paper-cream">
      <div className="max-w-7xl mx-auto">
        <div className="bg-pastel-blue-title p-8 md:p-12 mb-12 md:mb-16 rounded-[30px]" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 uppercase tracking-widest text-white">
            Ubicación
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="p-8 md:p-12 bg-paper-cream hover:bg-peach/30 transition-all duration-300 rounded-[24px]" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}>
            <p className="text-black mb-8 leading-relaxed tracking-wide font-sans text-sm md:text-base">
              Te esperamos en nuestro día especial. Haz clic en el botón para ver la ubicación exacta.
            </p>
            
            <div className="flex justify-center">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pastel-blue-title text-white px-6 py-3 hover:opacity-90 transition-all duration-300 text-xs md:text-sm uppercase tracking-widest font-sans font-bold text-center rounded-[50px]" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}
              >
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
