import { cn } from "@/utils/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/assets/logo-cs.svg"
      alt="Casa Suntuosa"
      className={cn("h-10 w-auto object-contain", className)}
      loading="eager"
      width={40}
      height={40}
    />
  );
}

export function Monogram({ className }: { className?: string; light?: boolean }) {
  return (
    <img
      src="/assets/logo-cs.svg"
      alt="Casa Suntuosa"
      className={cn("rounded-full object-contain shrink-0 shadow-sm", className)}
      loading="eager"
      width={44}
      height={44}
    />
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
