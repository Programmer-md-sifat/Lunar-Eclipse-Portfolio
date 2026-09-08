import { useState } from "react";

interface LogoItem {
  id: string;
  name: string;
}

const ROW_1_LOGOS: LogoItem[] = [
  { id: "1xqivOJAAstqtCE34vSZycHwcqoZZ9K-h", name: "G-Star RAW" },
  { id: "1eqVHVQKGyOGAzcGk3NiqmYsUMxmjUQM7", name: "Zara" },
  { id: "17f-FFmpLYu253rJrrw0XGlBJBtjPYcv-", name: "Pull & Bear" },
  { id: "1uLAOfXIAkSCpO_DjWuxlqT6HGlR0Ba6_", name: "Mango" },
  { id: "1MoNPj8XBRndxMG_0g0VYLSlfJjbV6_pq", name: "Jack & Jones" },
  { id: "1AFuRkudG0Wf1lLOjsUk3iyGYuMV8cNEb", name: "Tommy Hilfiger" },
  { id: "12wVYG-CDuxS1qRN2cZxdSIfP7GjNQ2wr", name: "Calvin Klein" },
  { id: "1vWpjnQeMTmFEYHo5D0x255y9IHEYrB33", name: "Uniqlo" },
  { id: "1RydntMalc5q6FOLkrcUKfKFOulGqlrZT", name: "H&M" },
];

const ROW_2_LOGOS: LogoItem[] = [
  { id: "1cqJD5J4BOBnDRm-9Z-MGY5ZpKQew8G57", name: "Next" },
  { id: "1qQJ-FP3TFCjecbP17SAU_D-D5uzK9Vhf", name: "Lindex" },
  { id: "16Ua3xOZmZyoJLGbqD9xHucmKnqgVVH2i", name: "Puma" },
  { id: "1s1FkgMh_PcqZxrF3vOm_Urc_5DcIywBP", name: "Decathlon" },
  { id: "1-etgNMoYp-RcTzS-80CrBEuegwyAsXYK", name: "Carrefour" },
  { id: "1vZKuwTpH_4VLnJbOOhBBGDQ9FC1kSDIb", name: "Primark" },
  { id: "1HMtOv6EUN14VhuqQGAVkQrS90rcVT6X7", name: "Marks & Spencer" },
  { id: "1N_6csoDD1JY9doTlQ2Z9ERXzFQjkqHqr", name: "ASOS" },
  { id: "1iTRF4cvgvgjLCkg_5fXKdegVbyQq2622", name: "Target" },
];

function LogoImage({ id, name }: LogoItem) {
  const [hasError, setHasError] = useState(false);
  const src = `https://lh3.googleusercontent.com/d/${id}`;

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-3">
        <span className="font-editorial text-[13px] sm:text-sm font-light text-[#dfb277] tracking-widest uppercase">
          {name}
        </span>
        <span className="text-[7.5px] font-mono text-zinc-500 tracking-wider uppercase mt-1">
          GLOBAL BRAND
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`${name} Global Client Logo`}
      title={`${name} Client Partnership`}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className="max-w-[75%] max-h-[60%] object-contain opacity-100 group-hover:scale-105 transition-all duration-300"
    />
  );
}

export function MarqueeLogos() {
  // Duplicate rows once to ensure continuous seamless loop with 50% translation logic
  const row1Duplicated = [...ROW_1_LOGOS, ...ROW_1_LOGOS];
  const row2Duplicated = [...ROW_2_LOGOS, ...ROW_2_LOGOS];

  return (
    <section
      id="marquee-logos-section"
      className="relative w-full overflow-hidden bg-[#020509] py-16 sm:py-20 border-y border-white/[0.05]"
      aria-label="Global Client Portfolio"
    >
      {/* Self-contained CSS for high performance infinite hardware-accelerated marquees */}
      <style>{`
        @keyframes marquee-to-right {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes marquee-to-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-to-right 32s linear infinite;
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-to-left 32s linear infinite;
        }
        .animate-marquee-right:hover,
        .animate-marquee-left:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Subtle edge-fade overlay to blend seamlessly into dark background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#020509] via-transparent to-[#020509] z-20" />

      <div className="max-w-7xl mx-auto px-6 mb-10 sm:mb-12 text-center">
        <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase">
          GLOBAL PARTNERSHIPS
        </span>
        <h2 className="font-editorial text-3xl sm:text-4xl font-light text-white tracking-tight mt-2.5">
          WE ARE PROUD TO BE ASSOCIATED WITH...
        </h2>
      </div>

      <div className="flex flex-col gap-5 sm:gap-6 relative w-full overflow-hidden">
        {/* Row 1: Moving to the Right */}
        <div className="w-full overflow-hidden">
          <div className="animate-marquee-right">
            {row1Duplicated.map((logo, index) => (
              <div
                key={`r1-${logo.id}-${index}`}
                className="flex items-center justify-center w-36 h-20 sm:w-44 sm:h-24 bg-[#030710]/50 border border-white/[0.04] rounded-[16px] mx-2.5 sm:mx-3 hover:border-[#dfb277]/30 hover:bg-[#040914] transition-all duration-300 relative group select-none cursor-pointer"
              >
                <LogoImage id={logo.id} name={logo.name} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moving to the Left */}
        <div className="w-full overflow-hidden">
          <div className="animate-marquee-left">
            {row2Duplicated.map((logo, index) => (
              <div
                key={`r2-${logo.id}-${index}`}
                className="flex items-center justify-center w-36 h-20 sm:w-44 sm:h-24 bg-[#030710]/50 border border-white/[0.04] rounded-[16px] mx-2.5 sm:mx-3 hover:border-[#dfb277]/30 hover:bg-[#040914] transition-all duration-300 relative group select-none cursor-pointer"
              >
                <LogoImage id={logo.id} name={logo.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
