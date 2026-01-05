'use client';

interface IntroOverlayProps {
  onSealClick: () => void;
}

export default function IntroOverlay({ onSealClick }: IntroOverlayProps) {
  return (
    <div className="fixed inset-0 bg-[#F9F7F2] z-50 flex items-center justify-center">
      {/* Botón simple sin animaciones */}
      <button
        onClick={onSealClick}
        className="relative z-10 w-32 h-32 md:w-40 md:h-40 bg-black rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
        aria-label="Abrir invitación"
      >
        <span className="text-white font-sans font-black text-2xl md:text-3xl tracking-wider">
          ABRIR
        </span>
      </button>
    </div>
  );
}

