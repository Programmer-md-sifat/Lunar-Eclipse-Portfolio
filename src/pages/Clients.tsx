import { useState } from "react";
import { PageTransition } from "../components/common/PageTransition";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { clientBrandsList, ClientBrand } from "../data/clientsData";

function PureLogoTile({ brand }: { brand: ClientBrand }) {
  const [hasError, setHasError] = useState(false);
  const src = `https://lh3.googleusercontent.com/d/${brand.id}`;

  return (
    <div className="group relative flex h-36 sm:h-44 md:h-48 w-full items-center justify-center rounded-2xl bg-[#030712] border border-white/[0.07] p-6 sm:p-8 transition-all duration-300 hover:border-[#dfb277]/40 hover:bg-[#040914] hover:shadow-[0_0_30px_rgba(223,178,119,0.08)]">
      {/* Subtle hover background glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#dfb277]/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {hasError ? (
        <div className="text-center select-none">
          <span className="font-editorial text-lg sm:text-xl font-light text-white tracking-wider uppercase block group-hover:text-[#dfb277] transition-colors">
            {brand.name}
          </span>
          <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest mt-1 block">
            GLOBAL BRAND
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={`${brand.name} Client Logo`}
          title={`${brand.name}`}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="max-h-[65%] max-w-[80%] object-contain opacity-100 transition-all duration-300 group-hover:scale-110"
        />
      )}

      {/* Minimal Brand Name tooltip label on bottom */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        <span className="text-[9.5px] font-mono text-zinc-400 tracking-wider uppercase bg-[#020509]/90 border border-white/10 px-2 py-0.5 rounded-full">
          {brand.name}
        </span>
      </div>
    </div>
  );
}

export function Clients() {
  return (
    <PageTransition>
      <div className="w-full bg-[#020509] text-white">
        
        {/* HEADER SECTION */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-white/[0.06] overflow-hidden">
          <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#dfb277]/[0.03] blur-[160px]" />
          <div className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] rounded-full bg-blue-900/[0.03] blur-[160px]" />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 z-10 text-center">
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase">
              GLOBAL CLIENT PARTNERSHIPS
            </span>

            <h1 className="font-editorial text-4xl sm:text-6xl font-light text-white tracking-tight mt-4">
              We Are Proud to Be{" "}
              <span className="font-georgia text-[#dfb277]">
                Associated With
              </span>
            </h1>

            <p className="mt-5 text-sm sm:text-base text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
              Trusted by international fashion houses, global retail chains, and leading lifestyle brands worldwide.
            </p>
          </div>
        </section>

        {/* PURE LOGO GRID */}
        <section className="py-16 sm:py-24 bg-[#030710] relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
              {clientBrandsList.map((brand) => (
                <PureLogoTile key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </section>

        {/* SIMPLE WORK WITH US CTA */}
        <section className="py-16 sm:py-20 border-t border-white/[0.06] relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="font-editorial text-2xl sm:text-3xl text-white font-light mb-3">
              Explore Partnership Opportunities
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-lg mx-auto mb-8">
              Connect with our global merchandising team to discuss fabric sourcing, garment manufacturing, or institutional procurement.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 bg-[#dfb277] text-black px-7 py-3 text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(223,178,119,0.2)]"
            >
              <span>WORK WITH US</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
