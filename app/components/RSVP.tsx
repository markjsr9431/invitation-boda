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
        // Ocultar mensaje de éxito después de 5 segundos
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
    <section className="py-16 md:py-24 px-4 bg-black text-white">
      <div className="max-w-2xl mx-auto animate-slide-up">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-12 md:mb-16">
          Confirmación de Asistencia
        </h2>

        {isSuccess && (
          <div className="mb-8 p-6 border border-gold bg-gold/10 text-center animate-fade-in">
            <p className="text-gold text-lg font-semibold">
              ¡Gracias por tu confirmación!
            </p>
            <p className="text-gold-light text-sm mt-2">
              Tu respuesta ha sido registrada exitosamente.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gold-light text-sm mb-2 uppercase tracking-wider"
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
              className="w-full px-4 py-3 bg-transparent border border-gold text-white placeholder:text-gold-light focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label className="block text-gold-light text-sm mb-4 uppercase tracking-wider">
              ¿Asistirás a nuestra boda?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center cursor-pointer group">
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
                  className={`px-6 py-3 border border-gold text-center transition-all ${
                    formData.attending === 'yes'
                      ? 'bg-gold text-black'
                      : 'text-gold hover:bg-gold/10'
                  }`}
                >
                  Sí, asistiré
                </span>
              </label>
              <label className="flex items-center cursor-pointer group">
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
                  className={`px-6 py-3 border border-gold text-center transition-all ${
                    formData.attending === 'no'
                      ? 'bg-gold text-black'
                      : 'text-gold hover:bg-gold/10'
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
              className="block text-gold-light text-sm mb-2 uppercase tracking-wider"
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
              className="w-full px-4 py-3 bg-transparent border border-gold text-white placeholder:text-gold-light focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none"
              placeholder="Ej: Vegetariano, sin gluten, alergias, etc. (opcional)"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gold text-black font-semibold hover:bg-gold-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
          >
            {isSubmitting ? 'Enviando...' : 'Confirmar Asistencia'}
          </button>
        </form>
      </div>
    </section>
  );
}

