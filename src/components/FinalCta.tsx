import { useState } from "react";
import { Reveal } from "@/lib/motion";
import { IMG, SALON_INFO } from "@/data/salon";
import { SectionLabel } from "./Brand";

export default function FinalCta() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Tratamiento Alisador (Keratina)");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const getCustomWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hola Casa Suntuosa, mi nombre es ${name || "Cliente"} (Tel: ${phone || "N/A"}). Quiero agendar mi diagnóstico gratuito para "${service}". Detalle: ${message || "Sin observaciones adicionales"}.`
    );
    return `https://wa.me/${SALON_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="contacto" className="relative scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:py-28">
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[2.5rem] bg-ink-950 px-6 py-14 sm:px-10 lg:px-16 lg:py-20 shadow-2xl border border-gold-300/20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <img
            src={IMG.heroSalon}
            alt="Interior del salón"
            className="h-full w-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(211,169,95,0.18)_0%,rgba(180,89,108,0.12)_45%,transparent_85%)]" />
          <div className="noise-overlay absolute inset-0 opacity-20 mix-blend-overlay" />
        </div>

        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Reveal>
              <SectionLabel light>Tu Cita en Casa Suntuosa</SectionLabel>
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
                Cupos controlados por día para garantizar una experiencia privada, sin esperas y con la atención que tu cabello merece.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
                {["Diagnóstico sin costo", "Atención puntual", "Parqueadero cercano", "Café de cortesía"].map((t) => (
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
            <div className="glass-dark rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl">
              {sent ? (
                <div className="flex min-h-[20rem] flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-gold-200 to-gold-500 text-2xl text-ink-950 shadow-md">
                    ✓
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-cream-50">
                    ¡Listo{name ? `, ${name.split(" ")[0]}` : ""}!
                  </h3>
                  <p className="mt-3 max-w-xs text-[0.9rem] leading-relaxed text-cream-200/75">
                    Recibimos tus datos. Para acelerar tu confirmación, haz clic abajo y chatea directamente con nuestra asesora:
                  </p>
                  <a
                    href={getCustomWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3.5 text-[0.85rem] font-bold text-ink-950 transition-transform duration-300 hover:scale-105 shadow-md"
                  >
                    Confirmar ahora por WhatsApp →
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
                        WhatsApp / Celular
                      </label>
                      <input
                        id="tel"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="300 123 4567"
                        className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[0.9rem] text-cream-50 placeholder:text-cream-200/35 transition-all duration-300 focus:border-gold-300/60 focus:bg-white/10 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="servicio"
                        className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold-200"
                      >
                        Servicio o Interés
                      </label>
                      <select
                        id="servicio"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="mt-2 w-full appearance-none rounded-xl border border-white/15 bg-ink-900 px-4 py-3 text-[0.9rem] text-cream-50 transition-all duration-300 focus:border-gold-300/60 focus:outline-none"
                      >
                        {[
                          "Tratamiento Alisador (Keratina)",
                          "Botox Capilar Suntuoso",
                          "Tinte y Mechas de Autor",
                          "Lavado, Cepillado & Planchado",
                          "Corte Dama / Caballero",
                          "Limpieza Facial / Cejas",
                          "Comprar Productos de la Línea",
                          "Planes & Membresías",
                        ].map((o) => (
                          <option key={o} value={o} className="bg-ink-900 text-cream-50">
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
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ej: cabello teñido, reseco por el sol, busco alisar sin formol…"
                      className="mt-2 w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[0.9rem] text-cream-50 placeholder:text-cream-200/35 transition-all duration-300 focus:border-gold-300/60 focus:bg-white/10 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-gold-200 via-gold-300 to-gold-500 py-4 text-[0.9rem] font-bold text-ink-950 transition-transform duration-300 hover:-translate-y-0.5 shadow-lg"
                  >
                    <span className="relative z-10">Quiero mi diagnóstico gratis</span>
                    <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.65)_50%,transparent_70%)] bg-[length:250%_100%] animate-shimmer" />
                  </button>
                  <p className="text-center text-[0.68rem] leading-relaxed text-cream-200/50">
                    Tratamiento confidencial de datos. Una asesora se pondrá en contacto contigo de inmediato.
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
