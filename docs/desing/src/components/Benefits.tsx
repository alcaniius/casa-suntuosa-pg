import { Counter, Reveal } from "@/lib/motion";
import { IMG } from "@/data";
import { SectionLabel } from "./Brand";

const benefits = [
  {
    title: "Diagnóstico capilar digital",
    body: "Microcámara y análisis de porosidad antes de cualquier aplicación. Sabemos qué necesita tu cabello, no adivinamos.",
    icon: (
      <path d="M11 4a7 7 0 100 14 7 7 0 000-14zm9 16l-4.2-4.2" />
    ),
  },
  {
    title: "Fórmulas libres de formol",
    body: "Protocolos seguros, avalados y sin olores agresivos. Puedes venir embarazada o con cabello químicamente tratado.",
    icon: <path d="M12 3l7 3v6c0 4.4-3 8.2-7 9-4-0.8-7-4.6-7-9V6l7-3z" />,
  },
  {
    title: "Anti-humedad del Sinú",
    body: "Adaptamos cada tratamiento al clima de Montería: 32°C y alta humedad no volverán a arruinar tu peinado.",
    icon: <path d="M12 3s6 6.4 6 10.2A6 6 0 116 13.2C6 9.4 12 3 12 3z" />,
  },
  {
    title: "Puntualidad garantizada",
    body: "Agenda controlada con cupos reales. Si te atendemos más de 15 minutos tarde, tu lavado va por la casa.",
    icon: <path d="M12 6v6l4 2M12 21a9 9 0 110-18 9 9 0 010 18z" />,
  },
  {
    title: "Acompañamiento en casa",
    body: "Rutina escrita, recordatorios por WhatsApp y seguimiento a los 15 días para asegurar que el resultado dure.",
    icon: <path d="M4 10l8-6 8 6v9a2 2 0 01-2 2H6a2 2 0 01-2-2v-9z" />,
  },
  {
    title: "Espacio que se siente lujo",
    body: "Sala climatizada, sillas ergonómicas, bebidas de cortesía y música pensada para desconectarte del día.",
    icon: <path d="M5 20V9l7-5 7 5v11M9 20v-6h6v6" />,
  },
];

const stats = [
  { value: 1200, suffix: "+", label: "Clientas activas" },
  { value: 4.9, suffix: "/5", label: "Calificación Google", decimals: 1 },
  { value: 94, suffix: "%", label: "Repiten su tratamiento" },
  { value: 12, suffix: " años", label: "De trayectoria" },
];

export default function Benefits() {
  return (
    <section id="experiencia" className="relative scroll-mt-24 overflow-hidden bg-ink-950 py-24 text-cream-100 lg:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(211,169,95,0.2),transparent_62%)] blur-3xl animate-drift" />
        <div className="absolute -right-32 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(180,89,108,0.28),transparent_62%)] blur-3xl animate-drift [animation-delay:-11s]" />
        <div className="noise-overlay absolute inset-0 opacity-[0.22] mix-blend-overlay" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <Reveal>
              <SectionLabel light>Por qué Casa Suntuosa</SectionLabel>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-5 font-display text-[2.1rem] font-light leading-[1.08] tracking-[-0.025em] text-cream-50 sm:text-5xl">
                No vendemos servicios.
                <br />
                <span className="italic font-medium text-gradient-gold">Cuidamos tu cabello.</span>
              </h2>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-5 max-w-lg text-[1rem] leading-relaxed text-cream-200/75">
                Durante 12 años hemos escuchado la misma historia: tratamientos que prometen y no
                cumplen. Por eso construimos un método propio, medible y honesto.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                {stats.map((s) => (
                  <div key={s.label} className="bg-ink-950/80 px-5 py-6 backdrop-blur">
                    <p className="font-display text-3xl font-light text-gold-200">
                      <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                    </p>
                    <p className="mt-1 text-[0.76rem] uppercase tracking-[0.14em] text-cream-200/60">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[IMG.salonA, IMG.salonB, IMG.salonC].map((src, i) => (
                  <div
                    key={i}
                    className="group overflow-hidden rounded-xl border border-white/10"
                  >
                    <img
                      src={src}
                      alt="Interior del salón Casa Suntuosa en Montería"
                      loading="lazy"
                      className="h-24 w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 sm:h-28"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80} direction="scale">
                <div className="group glass-dark h-full rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-300/40 hover:bg-white/10">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold-300/25 to-gold-600/15 text-gold-200 ring-1 ring-gold-300/25 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {b.icon}
                    </svg>
                  </span>
                  <h3 className="mt-4 font-display text-lg text-cream-50">{b.title}</h3>
                  <p className="mt-2 text-[0.86rem] leading-relaxed text-cream-200/70">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
