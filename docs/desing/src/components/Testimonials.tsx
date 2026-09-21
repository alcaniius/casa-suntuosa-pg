import { Reveal } from "@/lib/motion";
import { testimonials } from "@/data";
import { SectionLabel, Stars } from "./Brand";

export default function Testimonials() {
  const row = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[30rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(232,184,191,0.3),transparent_65%)] blur-3xl"
      />

      <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6">
        <Reveal>
          <SectionLabel>Lo que dicen ellas</SectionLabel>
        </Reveal>
        <Reveal delay={90}>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-[2.1rem] font-light leading-[1.08] tracking-[-0.025em] text-ink-950 sm:text-5xl">
            Más de <span className="italic font-medium text-gradient-gold">1.200 monterianas</span>{" "}
            confían su cabello a la Casa
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-ink-900/8 bg-white/70 px-5 py-2.5 backdrop-blur">
            <Stars />
            <span className="text-sm text-ink-700">
              <strong className="font-semibold text-ink-950">4.9</strong> sobre 5 en Google ·{" "}
              <strong className="font-semibold text-ink-950">386</strong> reseñas
            </span>
          </div>
        </Reveal>
      </div>

      <div className="marquee-mask group relative mt-14 flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 gap-5 pr-5 group-hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <figure
              key={i}
              className="flex w-[19rem] shrink-0 flex-col justify-between rounded-3xl border border-ink-900/8 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(27,16,22,0.45)] transition-all duration-500 hover:-translate-y-2 hover:border-gold-400/50 sm:w-[23rem]"
            >
              <div>
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 fill-gold-300"
                  aria-hidden="true"
                >
                  <path d="M9.5 6C6.5 7.5 4.6 10.4 4.6 13.9c0 2.5 1.6 4.1 3.7 4.1 1.9 0 3.4-1.4 3.4-3.3 0-1.8-1.3-3.1-3-3.1-.3 0-.7 0-.9.1.4-1.6 1.9-3.1 3.6-3.9L9.5 6zm8.4 0c-3 1.5-4.9 4.4-4.9 7.9 0 2.5 1.6 4.1 3.7 4.1 1.9 0 3.4-1.4 3.4-3.3 0-1.8-1.3-3.1-3-3.1-.3 0-.7 0-.9.1.4-1.6 1.9-3.1 3.6-3.9L17.9 6z" />
                </svg>
                <blockquote className="mt-4 text-left text-[0.92rem] leading-relaxed text-ink-800">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-900/8 pt-4 text-left">
                <img
                  src={t.avatar}
                  alt=""
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-[0.88rem] font-semibold text-ink-950">{t.name}</p>
                  <p className="text-[0.72rem] text-ink-600">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
