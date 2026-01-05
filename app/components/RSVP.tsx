'use client';

export default function RSVP() {
  const googleFormsUrl = 'https://forms.gle/LUvamZ3poQaqahJg6';

  return (
    <section className="py-16 md:py-24 px-4 bg-paper-cream">
      <div className="max-w-2xl mx-auto">
        <div className="bg-pastel-blue-title p-8 md:p-12 mb-12 rounded-[30px]" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 uppercase tracking-widest text-white">
            Confirmación de Asistencia
          </h2>
        </div>

        <div className="bg-paper-cream p-8 md:p-12 text-center rounded-[24px]" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}>
          <p className="text-black mb-8 leading-relaxed tracking-wide font-sans text-sm md:text-base">
            Por favor, confirma tu asistencia a través del siguiente formulario.
          </p>
          
          <a
            href={googleFormsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pastel-blue-title text-white px-8 py-4 hover:opacity-90 transition-all duration-300 text-sm md:text-base uppercase tracking-widest font-sans font-bold rounded-[50px]" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}
          >
            Confirmar Asistencia
          </a>
        </div>
      </div>
    </section>
  );
}
