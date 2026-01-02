'use client';

interface GiftItem {
  id: string;
  title: string;
  image: string;
  link: string; // URL de pago (Bold/ePayco)
}

export default function GiftRegistry() {
  // Lista de regalos - Actualiza los enlaces con las URLs reales de pago
  const gifts: GiftItem[] = [
    {
      id: '1',
      title: 'Vajilla',
      image: '/images/gifts/vajilla.jpg',
      link: '#', // Reemplazar con URL de Bold/ePayco
    },
    {
      id: '2',
      title: 'Sofácama',
      image: '/images/gifts/sofacama.jpg',
      link: '#', // Reemplazar con URL de Bold/ePayco
    },
    {
      id: '3',
      title: 'Olla a presión',
      image: '/images/gifts/olla.jpg',
      link: '#', // Reemplazar con URL de Bold/ePayco
    },
    {
      id: '4',
      title: 'Sala comedor',
      image: '/images/gifts/sala.jpg',
      link: '#', // Reemplazar con URL de Bold/ePayco
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">
          Mesa de Regalos
        </h2>
        <p className="text-center text-gray-600 mb-12 md:mb-16 text-sm md:text-base">
          Tu presencia es el mejor regalo, pero si deseas obsequiarnos algo especial
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {gifts.map((gift, index) => (
            <div
              key={gift.id}
              className="group border border-black overflow-hidden hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Placeholder para imagen */}
              <div className="aspect-[4/3] bg-gold-light flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-light to-gold-dark opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <span className="font-serif text-2xl md:text-3xl text-black/30 z-10 group-hover:text-black/40 transition-colors">
                  {gift.title}
                </span>
              </div>
              
              <div className="p-6 bg-white">
                <h3 className="font-serif text-2xl md:text-3xl mb-4">
                  {gift.title}
                </h3>
                <a
                  href={gift.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center border border-black px-6 py-3 text-black hover:bg-black hover:text-white transition-all duration-300 text-sm uppercase tracking-wider"
                >
                  Regalar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

