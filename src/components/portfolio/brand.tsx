type BrandMarkProps = {
  className?: string;
  decorative?: boolean;
};

export function BrandMark({ className = "h-11 w-11", decorative = false }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : "MC monogram"}
      aria-hidden={decorative ? true : undefined}
    >
      <circle cx="32" cy="32" r="29.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M13 43V21L23 34L33 21V43"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51 25C49 22.5 46 21 42.5 21C35.5 21 31 25.7 31 32C31 38.3 35.5 43 42.5 43C46 43 49 41.5 51 39"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Brand({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <BrandMark decorative className="h-10 w-10 shrink-0" />
      <span className="font-serif text-[1.65rem] leading-none tracking-[-0.02em]">Maria Carletto</span>
    </span>
  );
}
