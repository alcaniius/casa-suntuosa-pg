import { Counter, Reveal, useScrollY } from "@/lib/motion";
import { IMG, WHATSAPP } from "@/data";
import { SectionLabel, Stars } from "./Brand";

export default function Hero() {
  const y = useScrollY();

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-28 sm:pt-32 lg:pb-32 lg:pt-40">
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100 via-cream-50 to-cream-50" />
        <div className="animate-drift absolute -left-40 -top-32 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(211,169,95,0.34),transparent_62%)] blur-2xl" />
        <div className="animate-drift absolute -right-32 top-20 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(232,184,191,0.38),transparent_62%)] blur-2xl [animation-delay:-8s]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream-50 to-transparent" />
        <div className="noise-overlay absolute inset-0 opacity-[0.16] mix-blend-multiply" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10">
        {/* Copy */}
        <div className="relative">
          <Reveal delay={60}>
            <SectionLabel>Salón de alta gama · Montería</SectionLabel>
          </Reveal>

          <Reveal delay={140}>
            <h1 className="mt-6 font-display text-[2.6rem] font-light leading-[1.04] tracking-[-0.03em] text-ink-950 sm:text-6xl lg:text-[4.35rem]">
              Tu cabello merece
              <br />
              <span className="italic font-medium text-gradient-gold">una casa suntuosa</span>
            </h1>
          </Reveal>

          <Reveal delay={230}>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-ink-700 sm:text-lg">
              Tratamientos capilares de autor, color de precisión y productos profesionales
              formulados para el clima de Montería. Diagnóstico gratuito, resultados que se ven
              desde la primera sesión.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-ink-900 px-7 py-4 text-sm font-semibold text-cream-50 shadow-[0_20px_45px_-18px_rgba(27,16,22,0.85)] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_28px_60px_-20px_rgba(27,16,22,0.9)]"
              >
                <span className="relative z-10">Agenda tu diagnóstico gratis</span>
                <svg
                  viewBox="0 0 20 20"
                  className="relative z-10 h-4 w-4 transition-transform duration-400 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M4 10h11M11 5.5l4.5 4.5L11 14.5" strokeLinecap="round" />
                </svg>
                <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(240,220,180,0.45)_50%,transparent_75%)] bg-[length:250%_100%] animate-shimmer" />
              </a>

              <a
                href="#productos"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-ink-900/15 bg-white/60 px-7 py-4 text-sm font-semibold text-ink-900 backdrop-blur transition-all duration-400 hover:border-gold-400 hover:bg-white"
              >
                Ver productos
                <span className="grid h-5 w-5 place-items-center rounded-full bg-gold-300/40 text-[0.6rem] transition-transform duration-400 group-hover:rotate-90">
                  ↓
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[
                    "https://images.pexels.com/photos/7752815/pexels-photo-7752815.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=120&w=120",
                    "https://images.pexels.com/photos/7752818/pexels-photo-7752818.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=120&w=120",
                    "https://images.pexels.com/photos/7752791/pexels-photo-7752791.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=120&w=120",
                    "https://images.pexels.com/photos/29132010/pexels-photo-29132010.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=120&w=120",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      loading="lazy"
                      className="h-10 w-10 rounded-full border-2 border-cream-50 object-cover shadow-sm transition-transform duration-300 hover:-translate-y-1"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <Stars />
                  <p className="mt-0.5 text-[0.8rem] text-ink-600">
                    <strong className="font-semibold text-ink-900">4.9/5</strong> · +1.200 clientas
                    felices
                  </p>
                </div>
              </div>

              <div className="h-10 w-px bg-ink-900/10 max-sm:hidden" />

              <div className="text-sm">
                <p className="font-display text-2xl font-semibold text-ink-900">
                  <Counter value={12} suffix="+" />
                </p>
                <p className="text-[0.8rem] text-ink-600">años embelleciendo Montería</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Visual composition */}
        <div className="relative">
          <Reveal direction="scale" delay={200} className="relative z-10">
            <div
              className="relative overflow-hidden rounded-[2.2rem] shadow-[0_40px_90px_-40px_rgba(27,16,22,0.7)] ring-1 ring-white/50"
              style={{ transform: `translateY(${Math.min(y * -0.035, 0)}px)` }}
            >
              <img
                src={IMG.heroPortrait}
                alt="Clienta de Casa Suntuosa luciendo ondas brillantes tras un tratamiento capilar"
                className="h-[26rem] w-full object-cover object-center transition-transform duration-[1.6s] ease-out hover:scale-105 sm:h-[32rem] lg:h-[36rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-transparent to-transparent" />

              <div className="absolute inset-x-4 bottom-4 glass-dark rounded-2xl p-4 text-cream-50 sm:inset-x-5 sm:bottom-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold-200">
                      Ritual destacado
                    </p>
                    <p className="mt-1 font-display text-lg leading-tight">Botox Capilar Suntuoso</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-gold-300 px-3 py-1.5 text-[0.7rem] font-bold text-ink-950">
                    120 min
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Floating detail card */}
          <Reveal
            direction="left"
            delay={480}
            className="absolute -left-2 top-8 z-20 hidden sm:block lg:-left-14"
          >
            <div className="animate-float glass-light w-52 rounded-2xl p-4 shadow-[0_24px_50px_-24px_rgba(27,16,22,0.55)]">
              <div className="flex items-center gap-3">
                <img
                  src={IMG.heroDetail}
                  alt=""
                  className="h-12 w-12 rounded-xl object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-widest text-gold-600">
                    Sin formol
                  </p>
                  <p className="text-[0.78rem] font-medium text-ink-800">Fórmulas seguras</p>
                </div>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-cream-200">
                <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-gold-500 to-gold-300" />
              </div>
              <p className="mt-2 text-[0.7rem] text-ink-600">94% menos frizz a las 4 semanas</p>
            </div>
          </Reveal>

          <Reveal
            direction="right"
            delay={600}
            className="absolute -bottom-6 -right-1 z-20 hidden md:block lg:-right-8"
          >
            <div className="animate-float-slow glass-light flex items-center gap-3 rounded-2xl px-5 py-4 shadow-[0_24px_50px_-24px_rgba(27,16,22,0.55)]">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-ink-900 text-cream-50">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  aria-hidden="true"
                >
                  <path d="M12 3l2.4 5.2 5.6.7-4.2 3.9 1.1 5.6L12 15.7 7.1 18.4l1.1-5.6L4 8.9l5.6-.7L12 3z" />
                </svg>
              </span>
              <div>
                <p className="font-display text-xl leading-none text-ink-950">
                  <Counter value={4300} suffix="+" />
                </p>
                <p className="text-[0.72rem] text-ink-600">rituales capilares realizados</p>
              </div>
            </div>
          </Reveal>

          <div
            aria-hidden="true"
            className="absolute -right-10 -top-10 -z-10 h-40 w-40 rounded-full border border-gold-400/30 animate-spin-slow"
          />
        </div>
      </div>
    </section>
  );
}
