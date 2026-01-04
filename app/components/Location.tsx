'use client';

interface LocationCardProps {
  title: string;
  address: string;
  googleMapsUrl: string;
}

function LocationCard({ title, address, googleMapsUrl }: LocationCardProps) {
  return (
    <div className="border border-black p-8 md:p-12 bg-white hover:bg-peach transition-colors duration-300">
      <h3 className="font-sans text-2xl md:text-3xl font-black mb-6 uppercase tracking-tight">
        {title}
      </h3>
      <p className="text-black mb-8 leading-relaxed tracking-wide font-sans text-sm md:text-base">
        {address}
      </p>
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border-2 border-eucalyptus bg-black text-white px-6 py-3 hover:bg-eucalyptus hover:text-black transition-all duration-300 text-xs md:text-sm uppercase tracking-widest font-sans font-bold"
      >
        Ver en Google Maps
      </a>
    </div>
  );
}

export default function Location() {
  // URLs de Google Maps - Actualiza con las direcciones reales
  const ceremonyAddress = 'Dirección de la Ceremonia, Ciudad, País';
  const receptionAddress = 'Dirección de la Recepción, Ciudad, País';
  
  // Generar URLs de Google Maps (reemplaza con las URLs reales)
  const ceremonyMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ceremonyAddress)}`;
  const receptionMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(receptionAddress)}`;

  return (
    <section className="py-16 md:py-24 px-4 bg-paper-cream border-t border-black">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border border-black p-8 md:p-12 mb-12 md:mb-16">
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black text-center mb-4 uppercase tracking-tight">
            Ubicaciones
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <LocationCard
            title="Ceremonia"
            address={ceremonyAddress}
            googleMapsUrl={ceremonyMapsUrl}
          />
          <LocationCard
            title="Recepción"
            address={receptionAddress}
            googleMapsUrl={receptionMapsUrl}
          />
        </div>
      </div>
    </section>
  );
}
