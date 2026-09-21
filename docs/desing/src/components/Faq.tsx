import { useState } from "react";
import { Reveal } from "@/lib/motion";
import { faqs, WHATSAPP } from "@/data";
import { cn } from "@/utils/cn";
import { SectionLabel } from "./Brand";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionLabel>Preguntas frecuentes</SectionLabel>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-5 font-display text-[2.1rem] font-light leading-[1.08] tracking-[-0.025em] text-ink-950 sm:text-[2.75rem]">
              Resolvemos tus dudas{" "}
              <span className="italic font-medium text-gradient-gold">antes de tu cita</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-ink-700">
              ¿Te queda una pregunta por fuera? Escríbenos por WhatsApp: una asesora real te
              responde en menos de 10 minutos en horario laboral.
            </p>
          </Reveal>
          <Reveal delay={230}>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="group mt-7 inline-flex items-center gap-3 rounded-2xl border border-ink-900/10 bg-white p-4 pr-6 transition-all duration-400 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-[0_24px_50px_-28px_rgba(27,16,22,0.5)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#25D366]/12 text-[#128C4B]">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                  <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 4.99L2 22l5.19-1.36a9.93 9.93 0 004.85 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0012.04 2zm5.83 14.06c-.24.68-1.42 1.3-1.95 1.35-.5.05-.96.24-3.23-.67-2.72-1.07-4.44-3.85-4.57-4.03-.13-.18-1.09-1.45-1.09-2.77s.69-1.96.94-2.23c.24-.27.53-.34.71-.34.18 0 .35 0 .51.01.16.01.38-.06.6.46.23.54.77 1.86.84 2 .07.13.11.29.02.47-.09.18-.13.29-.27.45-.13.16-.28.35-.4.47-.13.13-.27.28-.12.54.16.27.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.27.13.42.11.58-.07.16-.18.67-.78.85-1.05.18-.27.35-.22.6-.13.24.09 1.56.74 1.83.87.27.13.45.2.51.31.07.11.07.63-.17 1.31z" />
                </svg>
              </span>
              <span>
                <span className="block text-[0.85rem] font-semibold text-ink-950">
                  Hablar con una asesora
                </span>
                <span className="block text-[0.75rem] text-ink-600">
                  Respuesta promedio: 8 minutos
                </span>
              </span>
              <span className="ml-auto text-ink-600 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </Reveal>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 70} direction="right">
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-all duration-500",
                    isOpen
                      ? "border-gold-400/50 bg-white shadow-[0_26px_60px_-38px_rgba(27,16,22,0.5)]"
                      : "border-ink-900/8 bg-white/60 hover:border-ink-900/16 hover:bg-white/90",
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="group flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="font-display text-[1.05rem] leading-snug text-ink-950 sm:text-[1.15rem]">
                        {f.q}
                      </span>
                      <span
                        className={cn(
                          "relative grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-500",
                          isOpen
                            ? "rotate-180 border-gold-400 bg-gold-300/25"
                            : "border-ink-900/12 bg-cream-100 group-hover:border-gold-400/50",
                        )}
                      >
                        <span className="absolute h-[1.5px] w-3.5 rounded bg-ink-900" />
                        <span
                          className={cn(
                            "absolute h-3.5 w-[1.5px] rounded bg-ink-900 transition-transform duration-500",
                            isOpen ? "scale-y-0" : "scale-y-100",
                          )}
                        />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    className={cn(
                      "grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-6 pr-12 text-[0.9rem] leading-relaxed text-ink-700 sm:px-6">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
