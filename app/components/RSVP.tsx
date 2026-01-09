'use client';

export default function RSVP() {
  const googleFormsUrl = 'https://forms.gle/LUvamZ3poQaqahJg6';

  return (
    <section className="py-16 md:py-24 px-4 bg-[#F9F7F2] border-b-2 border-black">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white border-2 border-black p-8 md:p-12 mb-12">
        <h2 className="font-sans text-[min(8vw,2.25rem)] md:text-5xl lg:text-6xl font-black text-center mb-4 uppercase tracking-widest text-black leading-tight">
  CONFIRMACIÓN DE ASISTENCIA
</h2>
        </div>

        <div className="bg-white border-2 border-black p-8 md:p-12 text-center">
          <p className="text-black mb-8 leading-relaxed tracking-wide font-sans text-sm md:text-base">
            Por favor, confirma tu asistencia a través del siguiente formulario.
          </p>
          
          <a
            href={googleFormsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 hover:opacity-90 transition-opacity text-sm md:text-base uppercase tracking-widest font-sans font-black"
          >
            CONFIRMAR ASISTENCIA
          </a>
        </div>
      </div>
    </section>
  );
}
