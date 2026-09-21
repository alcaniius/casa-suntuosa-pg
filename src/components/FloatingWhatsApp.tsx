import { useEffect, useState } from "react";
import { WHATSAPP } from "@/data/salon";
import { cn } from "@/utils/cn";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp para agendar tu cita"
      className={cn(
        "group fixed bottom-5 right-4 z-50 flex items-center gap-3 rounded-full bg-ink-950 py-3 pl-3 pr-5 text-cream-50 shadow-[0_20px_45px_-18px_rgba(27,16,22,0.9)] transition-all duration-500 sm:bottom-7 sm:right-7 border border-gold-300/30 hover:border-gold-300 hover:scale-105",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0",
      )}
    >
      <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#25D366] text-ink-950">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]/60" />
        <svg viewBox="0 0 24 24" className="relative h-5 w-5 fill-white" aria-hidden="true">
          <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 4.99L2 22l5.19-1.36a9.93 9.93 0 004.85 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0012.04 2zm5.83 14.06c-.24.68-1.42 1.3-1.95 1.35-.5.05-.96.24-3.23-.67-2.72-1.07-4.44-3.85-4.57-4.03-.13-.18-1.09-1.45-1.09-2.77s.69-1.96.94-2.23c.24-.27.53-.34.71-.34.18 0 .35 0 .51.01.16.01.38-.06.6.46.23.54.77 1.86.84 2 .07.13.11.29.02.47-.09.18-.13.29-.27.45-.13.16-.28.35-.4.47-.13.13-.27.28-.12.54.16.27.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.27.13.42.11.58-.07.16-.18.67-.78.85-1.05.18-.27.35-.22.6-.13.24.09 1.56.74 1.83.87.27.13.45.2.51.31.07.11.07.63-.17 1.31z" />
        </svg>
      </span>
      <span className="text-[0.82rem] font-semibold max-sm:hidden">Agenda por WhatsApp</span>
    </a>
  );
}
