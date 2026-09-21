import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { useScrollY } from "@/lib/motion";
import { WHATSAPP, SALON_INFO } from "@/data/salon";
import { Monogram } from "./Brand";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#productos", label: "Productos" },
  // { href: "#planes", label: "Planes" },
  // { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const y = useScrollY();
  const [open, setOpen] = useState(false);
  const scrolled = y > 24;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#servicios"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink-900 focus:px-5 focus:py-3 focus:text-sm focus:text-cream-50"
      >
        Saltar al contenido
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-2.5" : "py-4 sm:py-6",
        )}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <nav
            aria-label="Principal"
            className={cn(
              "flex items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5",
              scrolled
                ? "glass-light shadow-[0_18px_50px_-24px_rgba(27,16,22,0.5)] border border-white/60"
                : "border border-transparent bg-transparent",
            )}
          >
            <a href="#top" className="group flex items-center gap-3">
              <Monogram className="h-9 w-9 shrink-0 transition-transform duration-500 group-hover:rotate-[14deg]" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-[1.08rem] font-semibold tracking-tight text-ink-900">
                  {SALON_INFO.name}
                </span>
                <span className="mt-0.5 text-[0.58rem] font-medium uppercase tracking-[0.3em] text-gold-600">
                  Montería · La Castellana
                </span>
              </span>
            </a>

            <ul className="hidden items-center gap-1 lg:flex">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group/link relative inline-flex rounded-full px-4 py-2 text-[0.86rem] font-medium text-ink-700 transition-colors duration-300 hover:text-ink-950"
                  >
                    <span className="relative z-10">{l.label}</span>
                    <span className="absolute inset-0 scale-75 rounded-full bg-cream-200/80 opacity-0 transition-all duration-300 group-hover/link:scale-100 group-hover/link:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${SALON_INFO.whatsappNumber}`}
                className="hidden rounded-full border border-ink-900/12 px-4 py-2 text-[0.82rem] font-medium text-ink-700 transition-all duration-300 hover:border-gold-400 hover:text-ink-950 md:inline-flex"
              >
                {SALON_INFO.phone}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group relative hidden overflow-hidden rounded-full bg-ink-900 px-5 py-2.5 text-[0.85rem] font-semibold text-cream-50 shadow-[0_12px_30px_-12px_rgba(27,16,22,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:text-ink-950 sm:inline-flex"
              >
                <span className="relative z-10">Agendar cita</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 transition-transform duration-500 group-hover:translate-x-0" />
              </a>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={open ? "Cerrar menú" : "Abrir menú"}
                className="grid h-10 w-10 place-items-center rounded-full border border-ink-900/12 bg-white/70 lg:hidden"
              >
                <span className="relative block h-3.5 w-4.5">
                  <span
                    className={cn(
                      "absolute left-0 h-[1.6px] w-4.5 bg-ink-900 transition-all duration-300",
                      open ? "top-1.5 rotate-45" : "top-0",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 top-1.5 h-[1.6px] w-4.5 bg-ink-900 transition-all duration-300",
                      open && "opacity-0",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 h-[1.6px] w-4.5 bg-ink-900 transition-all duration-300",
                      open ? "top-1.5 -rotate-45" : "top-3",
                    )}
                  />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink-950/50 backdrop-blur-sm transition-opacity duration-400",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute inset-x-3 top-20 origin-top rounded-3xl bg-cream-50 p-6 shadow-2xl transition-all duration-500",
            open ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0",
          )}
        >
          <ul className="flex flex-col">
            {links.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: `${open ? 80 + i * 50 : 0}ms` }}
                  className={cn(
                    "block border-b border-ink-900/8 py-3.5 font-display text-xl text-ink-900 transition-all duration-500",
                    open ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0",
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 block rounded-full bg-ink-900 py-3.5 text-center text-sm font-semibold text-cream-50 shadow-md"
          >
            Agendar por WhatsApp
          </a>
          <p className="mt-4 text-center text-xs text-ink-600">
            {SALON_INFO.address} · {SALON_INFO.city}
          </p>
        </div>
      </div>
    </>
  );
}
