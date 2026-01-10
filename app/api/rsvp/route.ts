import { NextRequest, NextResponse } from 'next/server';

// TODO: Configurar la URL del webhook aquí
const WEBHOOK_URL = process.env.RSVP_WEBHOOK_URL || '';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, attending, dietaryRestrictions } = body;

  // Validación básica
    if (!name || !attending) {
      return NextResponse.json(
        { error: 'Campos requeridos faltantes' },
        { status: 400 }
      );
    }

    // Preparar datos para el webhook
    const webhookData = {
      name,
      attending: attending === 'yes',
      dietaryRestrictions: dietaryRestrictions || '',
      timestamp: new Date().toISOString(),
    };

    // Si hay URL de webhook configurada, enviar los datos
    if (WEBHOOK_URL) {
      try {
        const webhookResponse = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookData),
        });

        if (!webhookResponse.ok) {
          console.error('Error al enviar al webhook:', webhookResponse.status);
          // Aún así retornamos éxito al usuario
        }
      } catch (webhookError) {
        console.error('Error de conexión con webhook:', webhookError);
        // Aún así retornamos éxito al usuario
      }
    } else {
      // Si no hay webhook, solo loguear (en producción deberías tener webhook)
      console.log('RSVP recibido:', webhookData);
    }

    return NextResponse.json(
      { success: true, message: 'Confirmación recibida' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error procesando RSVP:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

