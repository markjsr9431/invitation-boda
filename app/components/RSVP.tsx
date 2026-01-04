'use client';

import { useState, FormEvent } from 'react';

interface RSVPFormData {
  name: string;
  attending: 'yes' | 'no' | '';
  dietaryRestrictions: string;
}

export default function RSVP() {
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    attending: '',
    dietaryRestrictions: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: '',
          attending: '',
          dietaryRestrictions: '',
        });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setError('Error al enviar la confirmación. Por favor intenta de nuevo.');
      }
    } catch (err) {
      setError('Error de conexión. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-white border-t border-black">
      <div className="max-w-2xl mx-auto">
        <div className="bg-rose-palo border border-black p-8 md:p-12 mb-12">
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black text-center mb-4 uppercase tracking-tight">
            Confirmación de Asistencia
          </h2>
        </div>

        {isSuccess && (
          <div className="mb-8 p-6 border-2 border-eucalyptus bg-peach animate-fade-in">
            <p className="text-black text-lg font-sans font-black uppercase tracking-widest text-center">
              ¡Gracias por tu confirmación!
            </p>
            <p className="text-black text-sm mt-2 tracking-widest font-sans font-medium text-center">
              Tu respuesta ha sido registrada exitosamente.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 bg-white border border-black p-8 md:p-12">
          <div>
            <label
              htmlFor="name"
              className="block text-black text-xs mb-2 uppercase tracking-widest font-sans font-bold"
            >
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full px-4 py-3 bg-white border border-black text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-eucalyptus transition-all font-sans"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label className="block text-black text-xs mb-4 uppercase tracking-widest font-sans font-bold">
              ¿Asistirás a nuestra boda?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center cursor-pointer group flex-1">
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  checked={formData.attending === 'yes'}
                  onChange={(e) =>
                    setFormData({ ...formData, attending: e.target.value as 'yes' })
                  }
                  required
                  className="sr-only"
                />
                <span
                  className={`w-full px-6 py-3 border-2 border-black text-center transition-all tracking-widest font-sans font-bold text-sm uppercase ${
                    formData.attending === 'yes'
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-peach'
                  }`}
                >
                  Sí, asistiré
                </span>
              </label>
              <label className="flex items-center cursor-pointer group flex-1">
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  checked={formData.attending === 'no'}
                  onChange={(e) =>
                    setFormData({ ...formData, attending: e.target.value as 'no' })
                  }
                  required
                  className="sr-only"
                />
                <span
                  className={`w-full px-6 py-3 border-2 border-black text-center transition-all tracking-widest font-sans font-bold text-sm uppercase ${
                    formData.attending === 'no'
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-peach'
                  }`}
                >
                  No podré asistir
                </span>
              </label>
            </div>
          </div>

          <div>
            <label
              htmlFor="dietary"
              className="block text-black text-xs mb-2 uppercase tracking-widest font-sans font-bold"
            >
              Restricciones Alimentarias
            </label>
            <textarea
              id="dietary"
              value={formData.dietaryRestrictions}
              onChange={(e) =>
                setFormData({ ...formData, dietaryRestrictions: e.target.value })
              }
              rows={4}
              className="w-full px-4 py-3 bg-white border border-black text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-eucalyptus transition-all resize-none font-sans"
              placeholder="Ej: Vegetariano, sin gluten, alergias, etc. (opcional)"
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm font-sans">{error}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-black text-white font-sans font-black hover:bg-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-sm border-2 border-black"
          >
            {isSubmitting ? 'Enviando...' : 'Confirmar Asistencia'}
          </button>
        </form>
      </div>
    </section>
  );
}
