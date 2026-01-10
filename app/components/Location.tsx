'use client';

export default function Location() {
  const googleMapsUrl = 'https://maps.app.goo.gl/iezznv1cWpSeaWdJ7';

  return (
    <section className="py-16 md:py-24 px-4 bg-[#F9F7F2] border-b-2 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border-2 border-black p-8 md:p-12 mb-12 md:mb-16">
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black text-center mb-4 uppercase tracking-widest text-black">
            UBICACIÓN
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="p-8 md:p-12 bg-white border-2 border-black">
            <p className="text-black mb-8 leading-relaxed tracking-wide font-sans text-sm md:text-base">
              Te esperamos en nuestro día especial. Haz clic en el botón para ver la ubicación exacta.
            </p>
            
            <div className="flex justify-center">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-6 py-3 hover:opacity-90 transition-opacity text-xs md:text-sm uppercase tracking-widest font-sans font-black text-center"
              >
                VER EN GOOGLE MAPS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
