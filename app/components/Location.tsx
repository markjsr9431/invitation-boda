'use client';

interface LocationCardProps {
  title: string;
  address: string;
  googleMapsUrl: string;
}

function LocationCard({ title, address, googleMapsUrl }: LocationCardProps) {
  return (
    <div className="border border-black p-8 md:p-12 bg-white hover:bg-gold-light transition-colors duration-300 animate-slide-up">
      <h3 className="font-sans text-2xl md:text-3xl font-bold mb-6">{title}</h3>
      <p className="text-gray-700 mb-8 leading-relaxed tracking-widest font-sans">{address}</p>
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-black px-6 py-3 text-black hover:bg-black hover:text-white transition-all duration-300 text-sm uppercase tracking-widest font-sans"
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
    <section className="py-24 md:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-center mb-16 md:mb-24">
          Ubicaciones
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
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

