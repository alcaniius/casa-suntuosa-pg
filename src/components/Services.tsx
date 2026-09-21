import { useState } from "react";
import { Reveal } from "@/lib/motion";
import { services, getWhatsAppServiceUrl } from "@/data/salon";
import { cn } from "@/utils/cn";
import { SectionLabel } from "./Brand";

export default function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="servicios" className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-3/4 bg-[linear-gradient(90deg,rgba(232,184,191,0.16)_0%,rgba(211,169,95,0.08)_45%,transparent_100%)]"
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel>Servicios & Rituales</SectionLabel>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-5 font-display text-[2.1rem] font-light leading-[1.08] tracking-[-0.025em] text-ink-950 sm:text-5xl">
              Tratamientos profesionales pensados para{" "}
              <span className="italic font-medium text-gradient-gold">tu tipo de cabello</span>
            </h2>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-700">
              Protocolos de alta gama, formulaciones sin formol y tratamientos diseñados para
              resistir los 32°C y la humedad de Montería. Diagnóstico previo personalizado incluido.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          {/* Selector list */}
          <div className="flex flex-col gap-3">
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <Reveal key={s.name} delay={i * 80} direction="left">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={cn(
                      "group relative w-full overflow-hidden rounded-2xl border px-5 py-5 text-left transition-all duration-500",
                      isActive
                        ? "border-gold-400 bg-white shadow-[0_24px_55px_-30px_rgba(27,16,22,0.6)]"
                        : "border-gold-300/30 bg-white/60 hover:border-gold-400/60 hover:bg-white/90",
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold-600">
                          {s.tag}
                        </span>
                        <h3 className="mt-1.5 font-display text-xl text-ink-950 sm:text-[1.35rem]">
                          {s.name}
                        </h3>
                        <p
                          className={cn(
                            "grid text-[0.88rem] leading-relaxed text-ink-700 transition-all duration-500",
                            isActive
                              ? "mt-2 grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0",
                          )}
                        >
                          <span className="overflow-hidden">{s.description}</span>
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="font-display text-base font-semibold text-ink-900">
                          {s.price}
                        </p>
                        <p className="mt-0.5 text-[0.7rem] text-ink-600">{s.duration}</p>
                      </div>
                    </div>

                    <div
                      className={cn(
                        "flex flex-wrap gap-2 overflow-hidden transition-all duration-500",
                        isActive ? "mt-4 max-h-24 opacity-100" : "max-h-0 opacity-0",
                      )}
                    >
                      {s.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full bg-cream-100 px-3 py-1 text-[0.7rem] font-medium text-ink-700"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>

          {/* Live Preview */}
          <Reveal direction="right" delay={180} className="lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 shadow-[0_44px_90px_-46px_rgba(27,16,22,0.72)] bg-ink-950">
              {services.map((s, i) => (
                <img
                  key={s.name}
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  className={cn(
                    "h-[24rem] w-full object-cover transition-all duration-[1.1s] ease-out sm:h-[32rem]",
                    i === active
                      ? "scale-100 opacity-100"
                      : "absolute inset-0 scale-110 opacity-0 pointer-events-none",
                  )}
                />
              ))}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/25 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div key={current.name} className="reveal is-visible">
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-gold-200">
                    {current.tag} · {current.duration}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-cream-50 sm:text-3xl">
                    {current.name}
                  </h3>
                  <p className="mt-3 max-w-md text-[0.9rem] leading-relaxed text-cream-200/85">
                    {current.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <span className="font-display text-xl font-bold text-gold-300">
                      {current.price}
                    </span>
                    <a
                      href={getWhatsAppServiceUrl(current.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-cream-50 px-5 py-3 text-[0.82rem] font-semibold text-ink-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-300"
                    >
                      Reservar este ritual
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
