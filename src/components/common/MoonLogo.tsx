import { Link } from "react-router-dom";

interface MoonLogoProps {
  className?: string;
  isScrolled?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  imgClassName?: string;
  showText?: boolean;
}

export function MoonLogo({
  className = "",
  isScrolled = false,
  size = "md",
  imgClassName = "",
  showText = false,
}: MoonLogoProps) {
  // Elegant, balanced height scaling based on requested size & scroll state
  const heightClass =
    imgClassName ||
    (size === "xl"
      ? "h-24 sm:h-28 md:h-32"
      : size === "lg"
      ? "h-18 sm:h-22 md:h-26"
      : size === "sm"
      ? "h-9 sm:h-10"
      : isScrolled
      ? "h-12 sm:h-14 md:h-15"
      : "h-16 sm:h-18 md:h-20");

  return (
    <Link
      to="/"
      id="brand-logo"
      className={`group inline-flex items-center transition-all duration-300 ${className}`}
      aria-label="Lunar Eclipse - Home"
    >
      <div className="relative flex items-center">
        <img
          src="/lunar-eclipse-logo.png"
          alt="Lunar Eclipse"
          className={`${heightClass} w-auto object-contain transition-all duration-300 group-hover:brightness-125 group-hover:scale-[1.03] filter drop-shadow-[0_2px_12px_rgba(255,255,255,0.1)]`}
          loading="eager"
        />

        {/* Ambient glowing halo on hover */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[#dfb277]/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {showText && (
        <div className="flex flex-col ml-3 sm:ml-4 border-l border-white/10 pl-3 sm:pl-4 text-left transition-all duration-300">
          <span className="font-editorial text-sm sm:text-base font-light tracking-[0.16em] text-white leading-tight">
            LUNAR ECLIPSE
          </span>
          <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.15em] text-[#dfb277] uppercase leading-none mt-1">
            INTERNATIONAL GROUP
          </span>
        </div>
      )}
    </Link>
  );
}


