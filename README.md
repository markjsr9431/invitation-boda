# Landing Page de Boda - Black Tie Elegance

Landing page elegante y minimalista para la boda de Andrés Felipe Rubio Castro y María Isabel Marín.

## Características

- ✨ Diseño minimalista tipo Black Tie
- 🔒 Sistema de acceso por nombre
- ⏰ Countdown timer animado
- 📍 Sección de ubicaciones con Google Maps
- ✅ Formulario RSVP
- 🎁 Mesa de regalos elegante
- 📱 Totalmente responsive y mobile-first

## Tecnologías

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Google Fonts (Playfair Display, Inter)

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Configuración Post-Desarrollo

### 1. Lista de Invitados
Edita `app/utils/guestList.ts` y agrega los nombres de los invitados autorizados.

### 2. URLs de Google Maps
Actualiza las direcciones en `app/components/Location.tsx`:
- Dirección de la ceremonia
- Dirección de la recepción

### 3. Webhook RSVP
Configura la variable de entorno `RSVP_WEBHOOK_URL` en `.env.local`:
```
RSVP_WEBHOOK_URL=https://tu-webhook-url.com/rsvp
```

O edita directamente `app/api/rsvp/route.ts` y actualiza la constante `WEBHOOK_URL`.

### 4. Enlaces de Pago (Mesa de Regalos)
Edita `app/components/GiftRegistry.tsx` y actualiza los enlaces en el array `gifts` con las URLs de Bold/ePayco.

### 5. Imágenes de Regalos
Reemplaza los placeholders en `public/images/gifts/` con las imágenes reales:
- `vajilla.jpg`
- `sofacama.jpg`
- `olla.jpg`
- `sala.jpg`

## Build para Producción

```bash
npm run build
npm start
```

## Estructura del Proyecto

```
matricidio/
├── app/
│   ├── api/rsvp/route.ts      # API route para RSVP
│   ├── components/             # Componentes React
│   ├── utils/                  # Utilidades (guestList, countdown)
│   ├── layout.tsx              # Layout principal
│   ├── page.tsx                # Página principal
│   └── globals.css             # Estilos globales
├── public/
│   └── images/gifts/           # Imágenes de regalos
└── package.json
```

## Paleta de Colores

- **Negro**: #000000
- **Blanco**: #FFFFFF
- **Dorado**: #D4AF37

## Licencia

Privado - Uso exclusivo para la boda.

