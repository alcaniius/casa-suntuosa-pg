import { cn } from "@/utils/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/assets/logo.svg"
      alt="Casa Suntuosa"
      className={cn("h-10 w-auto object-contain", className)}
      loading="eager"
    />
  );
}

export function Monogram({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span
      className={cn(
        "relative grid place-items-center rounded-xl p-1.5 shadow-sm",
        light
          ? "bg-gradient-to-br from-gold-200 via-gold-400 to-gold-600"
          : "bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950",
        className,
      )}
    >
      <span
        className={cn(
          "absolute inset-[1.5px] rounded-[10px] border",
          light ? "border-ink-950/25" : "border-gold-300/35",
        )}
      />
      <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
        <defs>
          <linearGradient id="csGoldBrand" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={light ? "#3B2530" : "#F0DCB4"} />
            <stop offset="55%" stopColor={light ? "#1B1016" : "#D3A95F"} />
            <stop offset="100%" stopColor={light ? "#3B2530" : "#E3C58C"} />
          </linearGradient>
        </defs>
        <path
          d="M23.2 10.4c-1.5-2.1-3.9-3.4-6.6-3.4C11.9 7 8.4 10.9 8.4 16s3.5 9 8.2 9c2.7 0 5.1-1.3 6.6-3.4"
          fill="none"
          stroke="url(#csGoldBrand)"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <path
          d="M16 4.5c3.4 3.6 3.4 19.4 0 23"
          fill="none"
          stroke="url(#csGoldBrand)"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.75"
        />
      </svg>
    </span>
  );
}

export function SectionLabel({
  children,
  light = false,
  className,
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.26em]",
        light ? "text-gold-200" : "text-gold-600",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-5 shrink-0",
          light ? "bg-gold-300/60" : "bg-gold-500/70",
        )}
      />
      <span>{children}</span>
    </span>
  );
}

export function Stars({ className, count = 5 }: { className?: string; count?: number }) {
  return (
    <span className={cn("inline-flex gap-0.5", className)} aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-gold-400" aria-hidden="true">
          <path d="M10 1.5l2.47 5.3 5.53.62-4.1 3.9 1.12 5.68L10 14.2l-5.02 2.8L6.1 11.3 2 7.42l5.53-.62L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}
