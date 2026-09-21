import { useState, type FormEvent } from "react";
import { Reveal } from "@/lib/motion";
import { IMG, WHATSAPP } from "@/data";
import { Monogram, SectionLabel } from "./Brand";

export function FinalCta() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="relative scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:py-28">
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[2.5rem] bg-ink-950 px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <img
            src={IMG.heroSalon}
            alt=""
            className="h-full w-full object-cover opacity-25"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-950/92 to-ink-900/80" />
          <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(211,169,95,0.42),transparent_62%)] blur-3xl animate-drift" />
          <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(180,89,108,0.4),transparent_62%)] blur-3xl animate-drift [animation-delay:-9s]" />
          <div className="noise-overlay absolute inset-0 opacity-20 mix-blend-overlay" />
        </div>

        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Reveal>
              <SectionLabel light>Tu turno</SectionLabel>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-5 font-display text-[2.2rem] font-light leading-[1.06] tracking-[-0.03em] text-cream-50 sm:text-[3.2rem]">
                Reserva hoy y recibe tu{" "}
                <span className="italic font-medium text-gradient-gold">
                  diagnóstico capilar gratis
                </span>
              </h2>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-5 max-w-lg text-[1rem] leading-relaxed text-cream-200/75">
                Cupos limitados por semana para garantizar atención personalizada. Déjanos tus datos
                y te confirmamos tu cita el mismo día.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
                {["Sin costo ni compromiso", "Atención con cita", "Parqueadero cercano"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-[0.85rem] text-cream-200/80">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-gold-300/20 text-[0.6rem] text-gold-200">
                      ✓
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal direction="scale" delay={200}>
            <div className="glass-dark rounded-3xl p-6 sm:p-8">
              {sent ? (
                <div className="flex min-h-[19rem] flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-gold-200 to-gold-500 text-2xl text-ink-950">
                    ✓
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-cream-50">
                    ¡Listo{name ? `, ${name.split(" ")[0]}` : ""}!
                  </h3>
                  <p className="mt-3 max-w-xs text-[0.9rem] leading-relaxed text-cream-200/75">
                    Recibimos tu solicitud. Una asesora de Casa Suntuosa te escribirá muy pronto
                    para confirmar tu cita.
                  </p>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 rounded-full bg-cream-50 px-6 py-3 text-[0.82rem] font-semibold text-ink-950 transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Escribir ahora por WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold-200"
                    >
                      Nombre completo
                    </label>
                    <input
                      id="nombre"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="María Fernanda Ruiz"
                      className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[0.9rem] text-cream-50 placeholder:text-cream-200/35 transition-all duration-300 focus:border-gold-300/60 focus:bg-white/10 focus:outline-none"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="tel"
                        className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold-200"
                      >
                        WhatsApp
                      </label>
                      <input
                        id="tel"
                        type="tel"
                        required
                        placeholder="300 123 4567"
                        className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[0.9rem] text-cream-50 placeholder:text-cream-200/35 transition-all duration-300 focus:border-gold-300/60 focus:bg-white/10 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="servicio"
                        className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold-200"
                      >
                        Interés
                      </label>
                      <select
                        id="servicio"
                        className="mt-2 w-full appearance-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[0.9rem] text-cream-50 transition-all duration-300 focus:border-gold-300/60 focus:bg-white/10 focus:outline-none"
                      >
                        {[
                          "Botox capilar",
                          "Keratina orgánica",
                          "Hidratación molecular",
                          "Color / Balayage",
                          "Comprar productos",
                          "Membresía",
                        ].map((o) => (
                          <option key={o} className="bg-ink-900">
                            {o}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="mensaje"
                      className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold-200"
                    >
                      Cuéntanos sobre tu cabello (opcional)
                    </label>
                    <textarea
                      id="mensaje"
                      rows={3}
                      placeholder="Ej: cabello teñido, muy reseco en las puntas…"
                      className="mt-2 w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[0.9rem] text-cream-50 placeholder:text-cream-200/35 transition-all duration-300 focus:border-gold-300/60 focus:bg-white/10 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-gold-200 via-gold-300 to-gold-500 py-4 text-[0.9rem] font-bold text-ink-950 transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <span className="relative z-10">Quiero mi diagnóstico gratis</span>
                    <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.65)_50%,transparent_70%)] bg-[length:250%_100%] animate-shimmer" />
                  </button>
                  <p className="text-center text-[0.68rem] leading-relaxed text-cream-200/50">
                    Al enviar aceptas nuestra política de tratamiento de datos. Nunca compartimos tu
                    información.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const footerCols = [
  {
    title: "Servicios",
    links: [
      "Botox capilar",
      "Keratina orgánica",
      "Hidratación molecular",
      "Color & Balayage",
      "Peinados y eventos",
    ],
  },
  {
    title: "Productos",
    links: [
      "Línea Oro Líquido",
      "Línea Reconstrucción",
      "Línea Cuidado Diario",
      "Línea Densidad",
      "Kits personalizados",
    ],
  },
  {
    title: "Casa Suntuosa",
    links: ["Sobre nosotras", "Nuestro método", "Trabaja con nosotras", "Blog capilar", "Contacto"],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink-900/8 bg-cream-100 pt-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,0.8fr)]">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <Monogram className="h-11 w-11" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-semibold tracking-tight text-ink-950">
                  Casa Suntuosa
                </span>
                <span className="mt-1 text-[0.58rem] font-medium uppercase tracking-[0.3em] text-gold-600">
                  Salón de belleza · Montería
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-[0.88rem] leading-relaxed text-ink-700">
              Un espacio donde la técnica profesional y el cuidado genuino se encuentran. Cabello
              sano, brillante y manejable — todos los días, no solo el día de la cita.
            </p>

            <address className="mt-6 space-y-2 not-italic text-[0.85rem] text-ink-700">
              <p className="flex items-start gap-2">
                <span className="text-gold-600">◆</span> Cra. 6 #62-31, Barrio La Castellana,
                Montería, Córdoba
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gold-600">◆</span>
                <a href="tel:+573001234567" className="transition-colors hover:text-ink-950">
                  (+57) 300 123 4567
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gold-600">◆</span>
                <a
                  href="mailto:hola@casasuntuosa.co"
                  className="transition-colors hover:text-ink-950"
                >
                  hola@casasuntuosa.co
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gold-600">◆</span> Lun – Sáb · 8:00 a.m. a 7:00 p.m.
              </p>
            </address>

            <div className="mt-6 flex gap-2.5">
              {[
                { label: "Instagram", d: "M12 7.4a4.6 4.6 0 100 9.2 4.6 4.6 0 000-9.2zm0 7.6a3 3 0 110-6 3 3 0 010 6zm5.9-7.8a1.07 1.07 0 11-2.15 0 1.07 1.07 0 012.15 0zM21 8.1c-.05-1.4-.37-2.65-1.4-3.67-1.02-1.02-2.26-1.34-3.67-1.42-1.45-.08-5.8-.08-7.25 0-1.4.07-2.64.39-3.67 1.41S3.67 6.68 3.6 8.09c-.08 1.45-.08 5.8 0 7.25.05 1.41.37 2.65 1.4 3.67s2.26 1.34 3.67 1.42c1.45.08 5.8.08 7.25 0 1.41-.06 2.65-.38 3.67-1.42 1.02-1.02 1.34-2.26 1.42-3.67.08-1.45.08-5.79 0-7.24zm-1.9 8.8a3.04 3.04 0 01-1.71 1.71c-1.18.47-3.99.36-5.3.36s-4.12.1-5.3-.36a3.04 3.04 0 01-1.71-1.71c-.47-1.18-.36-3.99-.36-5.3s-.1-4.12.36-5.3a3.04 3.04 0 011.71-1.71c1.18-.47 3.99-.36 5.3-.36s4.12-.1 5.3.36a3.04 3.04 0 011.71 1.71c.47 1.18.36 3.99.36 5.3s.11 4.12-.36 5.3z" },
                { label: "Facebook", d: "M14 8.5h2.2V5.6c-.4-.05-1.6-.17-3-.17-3 0-5 1.8-5 5.2v2.6H5.7v3.2h2.5V24h3.2v-7.6h2.5l.4-3.2h-2.9v-2.3c0-.9.3-1.4 1.6-1.4z" },
                { label: "TikTok", d: "M16.5 3h-2.8v12.2a2.4 2.4 0 11-2.4-2.4c.25 0 .5.04.72.11v-2.9a5.3 5.3 0 105.3 5.3V9.1a6.3 6.3 0 003.68 1.18V7.4A3.62 3.62 0 0116.5 3z" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-ink-900/10 bg-white text-ink-800 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:text-gold-600"
                >
                  <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current" aria-hidden="true">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-950">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#top"
                      className="group inline-flex items-center gap-1.5 text-[0.85rem] text-ink-700 transition-colors duration-300 hover:text-ink-950"
                    >
                      <span className="h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-3" />
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-900/8 py-7 text-[0.75rem] text-ink-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Casa Suntuosa. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#top" className="transition-colors hover:text-ink-950">
              Política de privacidad
            </a>
            <a href="#top" className="transition-colors hover:text-ink-950">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none select-none bg-gradient-to-b from-ink-900/8 to-transparent bg-clip-text text-center font-display text-[17vw] font-light leading-[0.8] tracking-tighter text-transparent"
      >
        Suntuosa
      </p>
    </footer>
  );
}
