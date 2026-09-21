import { Reveal, useTilt } from "@/lib/motion";
import { products, getWhatsAppProductUrl, SALON_INFO, WHATSAPP, type Product } from "@/data/salon";
import { SectionLabel, Stars } from "./Brand";

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(6);

  return (
    <Reveal delay={index * 80} direction="scale">
      <article
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-900/8 bg-white transition-[transform,box-shadow] duration-500 ease-out will-change-transform hover:shadow-[0_40px_80px_-42px_rgba(27,16,22,0.6)]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(211,169,95,0.18), transparent 60%)",
          }}
        />

        {/* Product Visual Container */}
        <div className={`relative flex items-center justify-center p-6 bg-gradient-to-br ${product.accent} overflow-hidden min-h-[260px]`}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-56 max-h-56 w-auto object-contain drop-shadow-xl transition-transform duration-[1.2s] ease-out group-hover:scale-108"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink-800 backdrop-blur shadow-sm">
            {product.line}
          </span>
          {product.badge && (
            <span className="absolute right-4 top-4 rounded-full bg-gold-400 px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-wider text-ink-950 shadow-sm">
              {product.badge}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-[1.15rem] leading-snug text-ink-950">
              {product.name}
            </h3>
            <p className="shrink-0 font-display text-lg font-bold text-gold-600">
              {product.price}
            </p>
          </div>
          <p className="mt-1.5 text-[0.78rem] text-ink-600">{product.note}</p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.features.map((feat) => (
              <span
                key={feat}
                className="rounded-full bg-cream-100 px-2.5 py-0.5 text-[0.68rem] font-medium text-ink-700"
              >
                {feat}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between gap-2 border-t border-ink-900/6 pt-3">
            <div className="flex items-center gap-1.5">
              <Stars />
              <span className="text-[0.7rem] text-ink-600">(48)</span>
            </div>
            <span className="text-[0.7rem] font-medium text-gold-600">Fórmula de Laboratorio</span>
          </div>

          <a
            href={getWhatsAppProductUrl(product.name)}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-ink-900/12 py-2.5 text-[0.82rem] font-semibold text-ink-900 transition-all duration-300 hover:border-ink-900 hover:bg-ink-900 hover:text-cream-50"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </article>
    </Reveal>
  );
}

export default function Products() {
  return (
    <section
      id="productos"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100 py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-2/3 bg-[linear-gradient(90deg,rgba(211,169,95,0.14)_0%,rgba(232,184,191,0.06)_45%,transparent_100%)]"
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <SectionLabel>Línea Oficial Casa Suntuosa</SectionLabel>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-5 font-display text-[2.1rem] font-light leading-[1.08] tracking-[-0.025em] text-ink-950 sm:text-5xl">
                Productos profesionales de nuestro laboratorio en{" "}
                <span className="italic font-medium text-gradient-gold">tu rutina diaria</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-700">
                Formulados con ingredientes botánicos, libres de sal, sulfatos agresivos y parabenos.
                Pensados para neutralizar el calor y la humedad del Sinú y prolongar la vida de tus alisados.
              </p>
            </Reveal>
          </div>
          <Reveal delay={220}>
            <div className="glass-light rounded-2xl px-5 py-4 border border-gold-300/30">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-600">
                Domicilio en Montería
              </p>
              <p className="mt-1 text-sm text-ink-800">
                Por solo <strong>{SALON_INFO.domicilioPrice}</strong> · Entrega rápida
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>

        <Reveal delay={120}>
          <div className="relative mt-12 overflow-hidden rounded-3xl bg-ink-900 px-6 py-8 text-cream-50 sm:px-10 sm:py-10 shadow-2xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(211,169,95,0.18)_0%,transparent_65%)]"
            />
            <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-gold-300">
                  Asesoría capilar gratuita
                </p>
                <h3 className="mt-2 font-display text-2xl leading-snug sm:text-3xl">
                  ¿No estás segura de qué producto necesita tu cabello?
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-cream-200/80">
                  Escríbenos por WhatsApp y te hacemos un diagnóstico digital rápido sin costo para
                  recomendarte el kit exacto según tu tipo de hebra y porosidad.
                </p>
              </div>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-7 py-4 text-sm font-bold text-ink-950 transition-transform duration-300 hover:-translate-y-1 shadow-lg"
              >
                Pedir recomendación
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
