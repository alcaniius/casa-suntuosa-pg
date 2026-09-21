import { useState } from "react";
import { Reveal } from "@/lib/motion";
import { plans, WHATSAPP } from "@/data";
import { cn } from "@/utils/cn";
import { SectionLabel } from "./Brand";

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  const fmt = (price: string) => {
    if (!annual) return `$${price}`;
    const n = Number(price.replace(/\./g, ""));
    const discounted = Math.round((n * 0.85) / 1000) * 1000;
    return `$${discounted.toLocaleString("es-CO")}`;
  };

  return (
    <section id="planes" className="relative scroll-mt-24 overflow-hidden bg-cream-100 py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_top,rgba(211,169,95,0.25),transparent_70%)]"
      />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel>Planes & membresías</SectionLabel>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-5 font-display text-[2.1rem] font-light leading-[1.08] tracking-[-0.025em] text-ink-950 sm:text-5xl">
              Belleza constante,{" "}
              <span className="italic font-medium text-gradient-gold">precio transparente</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-700">
              Sin letra pequeña ni sorpresas al pagar. Elige el plan que se ajusta a tu rutina y
              cancela cuando quieras.
            </p>
          </Reveal>

          <Reveal delay={230}>
            <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-ink-900/10 bg-white p-1.5">
              {[
                { label: "Mensual", value: false },
                { label: "Anual · -15%", value: true },
              ].map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setAnnual(opt.value)}
                  aria-pressed={annual === opt.value}
                  className={cn(
                    "relative rounded-full px-5 py-2 text-[0.82rem] font-semibold transition-colors duration-300",
                    annual === opt.value ? "text-cream-50" : "text-ink-700 hover:text-ink-950",
                  )}
                >
                  {annual === opt.value && (
                    <span className="absolute inset-0 rounded-full bg-ink-900 transition-transform duration-300" />
                  )}
                  <span className="relative z-10">{opt.label}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-center">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 110} direction="scale">
              <div
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-7 transition-all duration-500 hover:-translate-y-2",
                  p.featured
                    ? "bg-ink-950 text-cream-100 shadow-[0_44px_90px_-44px_rgba(27,16,22,0.9)] lg:scale-[1.04]"
                    : "border border-ink-900/8 bg-white text-ink-900 hover:shadow-[0_34px_70px_-42px_rgba(27,16,22,0.5)]",
                )}
              >
                {p.featured && (
                  <>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(211,169,95,0.4),transparent_65%)] blur-2xl animate-float-slow"
                    />
                    <span className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-ink-950">
                      Más elegido
                    </span>
                  </>
                )}

                <div className="relative">
                  <h3
                    className={cn(
                      "font-display text-2xl",
                      p.featured ? "text-cream-50" : "text-ink-950",
                    )}
                  >
                    {p.name}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-[0.86rem] leading-relaxed",
                      p.featured ? "text-cream-200/70" : "text-ink-600",
                    )}
                  >
                    {p.blurb}
                  </p>

                  <div className="mt-6 flex items-end gap-2">
                    <span
                      className={cn(
                        "font-display text-4xl font-light tracking-tight transition-all duration-300",
                        p.featured ? "text-gold-200" : "text-ink-950",
                      )}
                    >
                      {fmt(p.price)}
                    </span>
                    <span
                      className={cn(
                        "pb-1.5 text-[0.75rem]",
                        p.featured ? "text-cream-200/60" : "text-ink-600",
                      )}
                    >
                      COP · {p.cadence}
                    </span>
                  </div>

                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-[0.85rem] font-semibold transition-all duration-300",
                      p.featured
                        ? "bg-gradient-to-r from-gold-200 via-gold-300 to-gold-500 text-ink-950 hover:brightness-110"
                        : "border border-ink-900/15 text-ink-900 hover:bg-ink-900 hover:text-cream-50",
                    )}
                  >
                    {p.cta}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>

                  <ul className="mt-7 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <svg
                          viewBox="0 0 24 24"
                          className={cn(
                            "mt-0.5 h-4 w-4 shrink-0",
                            p.featured ? "text-gold-300" : "text-gold-500",
                          )}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          aria-hidden="true"
                        >
                          <path d="M4 12.5l5 5L20 6.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span
                          className={cn(
                            "text-[0.85rem] leading-relaxed",
                            p.featured ? "text-cream-200/85" : "text-ink-700",
                          )}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-center text-[0.76rem] text-ink-600">
            *Peinados ilimitados sujetos a disponibilidad de agenda. Todos los planes incluyen
            diagnóstico capilar gratuito. Precios en pesos colombianos, IVA incluido.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
