import { Reveal, useTilt } from "@/lib/motion";
import { products, WHATSAPP, type Product } from "@/data";
import { SectionLabel, Stars } from "./Brand";

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(6);

  return (
    <Reveal delay={index * 90} direction="scale">
      <article
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="group relative h-full overflow-hidden rounded-3xl border border-ink-900/8 bg-white transition-[transform,box-shadow] duration-500 ease-out will-change-transform hover:shadow-[0_40px_80px_-42px_rgba(27,16,22,0.6)]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(211,169,95,0.18), transparent 60%)",
          }}
        />
        <div className={`relative overflow-hidden bg-gradient-to-br ${product.accent}`}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-56 w-full object-cover mix-blend-multiply transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink-800 backdrop-blur">
            {product.line}
          </span>
        </div>

        <div className="flex flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-[1.15rem] leading-snug text-ink-950">
              {product.name}
            </h3>
            <p className="shrink-0 font-display text-base font-semibold text-gold-600">
              {product.price}
            </p>
          </div>
          <p className="mt-1.5 text-[0.78rem] text-ink-600">{product.note}</p>
          <div className="mt-3 flex items-center gap-2">
            <Stars />
            <span className="text-[0.72rem] text-ink-600">(48 reseñas)</span>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-ink-900/12 py-2.5 text-[0.8rem] font-semibold text-ink-900 transition-all duration-300 hover:border-ink-900 hover:bg-ink-900 hover:text-cream-50"
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
        className="pointer-events-none absolute right-0 top-10 -z-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(211,169,95,0.25),transparent_65%)] blur-3xl animate-drift"
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <SectionLabel>Línea Casa Suntuosa</SectionLabel>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-5 font-display text-[2.1rem] font-light leading-[1.08] tracking-[-0.025em] text-ink-950 sm:text-5xl">
                El salón en casa:{" "}
                <span className="italic font-medium text-gradient-gold">productos profesionales</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-700">
                Formulados con activos de grado profesional y pensados para el calor y la humedad
                del Sinú. Lo que usamos en el salón, ahora en tu baño.
              </p>
            </Reveal>
          </div>
          <Reveal delay={220}>
            <div className="glass-light rounded-2xl px-5 py-4">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-600">
                Envío gratis
              </p>
              <p className="mt-1 text-sm text-ink-800">
                En Montería por compras desde <strong>$150.000</strong>
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>

        <Reveal delay={120}>
          <div className="relative mt-10 overflow-hidden rounded-3xl bg-ink-900 px-6 py-8 text-cream-50 sm:px-10 sm:py-10">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(211,169,95,0.45),transparent_65%)] blur-2xl animate-float-slow"
            />
            <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-gold-300">
                  Kit personalizado
                </p>
                <h3 className="mt-2 font-display text-2xl leading-snug sm:text-3xl">
                  ¿No sabes cuál producto necesitas?
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-cream-200/80">
                  Haz el diagnóstico capilar gratuito y armamos tu kit exacto: ni un producto de
                  más, ni uno de menos. Ahorra hasta 20% frente a comprarlos por separado.
                </p>
              </div>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-7 py-4 text-sm font-bold text-ink-950 transition-transform duration-300 hover:-translate-y-1"
              >
                Armar mi kit
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
