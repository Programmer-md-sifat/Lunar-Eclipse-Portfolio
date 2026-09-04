import { PageTransition } from "../components/common/PageTransition";
import { Link } from "react-router-dom";
import { Globe, MapPin, Building, ArrowRight, ShieldCheck, Ship } from "lucide-react";
import { footerData } from "../data/common/navigation";

export function Global() {
  const exportDestinations = [
    { region: "North America", countries: "United States, Canada, Mexico", volume: "4.5M Units / Year" },
    { region: "Europe & UK", countries: "United Kingdom, Germany, France, Netherlands, Italy", volume: "5.2M Units / Year" },
    { region: "Asia-Pacific", countries: "Japan, Australia, Hong Kong SAR, Singapore", volume: "1.8M Units / Year" },
    { region: "GCC & Middle East", countries: "UAE, Saudi Arabia, Qatar, Kuwait", volume: "1.2M Units / Year" },
  ];

  return (
    <PageTransition>
      <div className="w-full bg-[#020509] text-white">

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-white/[0.06] overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#dfb277]/[0.03] blur-[180px]" />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 z-10">
            <div className="max-w-4xl">
              <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase flex items-center gap-2">
                <span className="opacity-60">07</span>
                <span className="h-[1px] w-6 bg-[#dfb277]/60" />
                INTERNATIONAL PRESENCE
              </span>

              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight mt-5 leading-[1.08]">
                Global Supply & <br />
                <span className="font-georgia text-[#dfb277]">Trade Network</span>
              </h1>

              <p className="mt-8 text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-3xl">
                Operating across strategic textile capitals with integrated logistics lines connecting spinning mills, automated sewing complexes, testing laboratories, and major sea export ports worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* REGIONAL LOCATIONS GRID */}
        <section className="py-20 sm:py-28 border-b border-white/[0.06] relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-14">
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase">
                STRATEGIC FOOTPRINT
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white tracking-tight mt-3">
                Key Liaison & Operations Hubs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {footerData.locations.map((loc) => (
                <div key={loc.city} className="bg-[#030712] border border-white/10 p-8 rounded-2xl hover:border-[#dfb277]/40 transition-colors">
                  <div className="flex items-center gap-2 text-[#dfb277] mb-4">
                    <MapPin className="h-5 w-5" />
                    <span className="text-xs font-mono uppercase tracking-widest">{loc.country}</span>
                  </div>
                  <h3 className="font-editorial text-3xl text-white font-light mb-2">{loc.city}</h3>
                  <p className="text-xs text-zinc-400 font-mono font-semibold leading-relaxed mb-6">{loc.role}</p>
                  <div className="text-[11px] text-zinc-500 font-light border-t border-white/10 pt-4">
                    Dedicated regional procurement & QA inspection teams.
                  </div>
                </div>
              ))}
            </div>

            {/* EXPORT REGIONS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exportDestinations.map((dest) => (
                <div key={dest.region} className="bg-[#030712] border border-white/10 p-8 rounded-2xl">
                  <span className="text-[10px] font-mono text-[#dfb277] uppercase tracking-widest font-bold block mb-1">
                    {dest.volume}
                  </span>
                  <h3 className="font-editorial text-2xl text-white font-light mb-2">{dest.region}</h3>
                  <p className="text-xs text-zinc-400 font-light">{dest.countries}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENTERPRISE CTA */}
        <section className="py-20 sm:py-24 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center">
            <div className="bg-[#030712] border border-[#dfb277]/30 p-12 sm:p-16 rounded-3xl relative">
              <Globe className="h-10 w-10 text-[#dfb277] mx-auto mb-4" />
              <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white tracking-tight">
                Inquire for Regional Supply & Distribution
              </h2>
              <p className="text-sm text-zinc-400 font-light max-w-2xl mx-auto mt-4 mb-8 leading-relaxed">
                Our global shipping division handles multi-port FOB, CIF, and DDP shipments directly to your regional distribution centers.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-[#dfb277] text-black px-8 py-4 text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_25px_rgba(223,178,119,0.3)]"
              >
                <span>CONTACT REGIONAL LIAISON</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
