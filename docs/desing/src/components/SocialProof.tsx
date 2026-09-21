import { Reveal } from "@/lib/motion";

const brands = [
  "L'ORÉAL PROFESSIONNEL",
  "KÉRASTASE",
  "OLAPLEX",
  "WELLA",
  "SCHWARZKOPF",
  "MORROCCANOIL",
  "REDKEN",
];

const badges = [
  { label: "Certificación Invima", detail: "Productos registrados" },
  { label: "Estilistas certificadas", detail: "Formación internacional" },
  { label: "Libre de formol", detail: "Protocolos seguros" },
  { label: "Domicilios en Montería", detail: "Envíos en 24 h" },
];

export default function SocialProof() {
  return (
    <section aria-label="Marcas y garantías" className="relative border-y border-ink-900/8 bg-white/60 py-10 backdrop-blur-sm">
      <Reveal>
        <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-ink-600">
          Trabajamos con las marcas más exigentes del mundo
        </p>
      </Reveal>

      <div className="marquee-mask relative mt-7 flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-sm font-medium tracking-[0.2em] text-ink-900/35 transition-colors duration-300 hover:text-ink-900/80 sm:text-base"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-9 grid w-full max-w-6xl grid-cols-2 gap-3 px-4 sm:px-6 lg:grid-cols-4">
        {badges.map((b, i) => (
          <Reveal key={b.label} delay={i * 90}>
            <div className="group flex h-full items-start gap-3 rounded-2xl border border-ink-900/8 bg-cream-50/80 px-4 py-3.5 transition-all duration-400 hover:-translate-y-1 hover:border-gold-400/50 hover:shadow-[0_18px_38px_-22px_rgba(27,16,22,0.45)]">
              <svg
                viewBox="0 0 24 24"
                className="mt-0.5 h-4 w-4 shrink-0 text-gold-500 transition-transform duration-400 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden="true"
              >
                <path d="M4 12.5l5 5L20 6.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <p className="text-[0.82rem] font-semibold leading-tight text-ink-900">{b.label}</p>
                <p className="mt-0.5 text-[0.72rem] text-ink-600">{b.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
