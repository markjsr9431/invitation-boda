'use client';

interface LocationCardProps {
  title: string;
  address: string;
  googleMapsUrl: string;
}

function LocationCard({ title, address, googleMapsUrl }: LocationCardProps) {
  return (
    <div className="border border-black p-6 md:p-8 bg-white hover:bg-gold-light transition-colors duration-300 animate-slide-up">
      <h3 className="font-serif text-2xl md:text-3xl mb-4">{title}</h3>
      <p className="text-gray-700 mb-6 leading-relaxed">{address}</p>
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-black px-6 py-3 text-black hover:bg-black hover:text-white transition-all duration-300 text-sm uppercase tracking-wider"
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
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-12 md:mb-16">
          Ubicaciones
        </h2>
        
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

