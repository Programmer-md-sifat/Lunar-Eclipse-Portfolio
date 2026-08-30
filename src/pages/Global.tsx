import { PageTransition } from "../components/common/PageTransition";
import { Link } from "react-router-dom";
import { Globe, MapPin, Building, ArrowRight } from "lucide-react";
import { footerData } from "../data/common/navigation";

export function Global() {
  return (
    <PageTransition>
      <div className="w-full bg-[#06090e] pt-32 pb-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#dfb277]">
              International Presence
            </span>
            <h1 className="font-editorial mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-white">
              Global Supply & <span className="font-georgia text-[#dfb277]">Trade Network</span>
            </h1>
            <p className="mt-6 text-base text-zinc-300 leading-relaxed">
              Operating across strategic textile capitals with integrated logistics lines connecting manufacturers, testing laboratories, and global distribution ports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {footerData.locations.map((loc) => (
              <div key={loc.city} className="border border-white/10 bg-white/[0.02] p-8">
                <div className="flex items-center gap-2 text-[#dfb277] mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-xs uppercase tracking-widest">{loc.country}</span>
                </div>
                <h3 className="font-editorial text-2xl text-white mb-2">{loc.city}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">{loc.role}</p>
                <div className="text-[11px] text-zinc-500 border-t border-white/5 pt-4">
                  Dedicated regional procurement & QA inspection teams.
                </div>
              </div>
            ))}
          </div>

          <div className="border border-white/10 bg-white/[0.02] p-8 md:p-12 text-center">
            <Globe className="h-10 w-10 text-[#dfb277] mx-auto mb-4" />
            <h3 className="font-editorial text-3xl text-white mb-2">Export Destinations</h3>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto mb-8">
              Regularly exporting bulk apparel consignments to over 35 countries across North America, Europe, Australia, and GCC regions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#dfb277] text-black px-7 py-3 text-xs font-semibold tracking-[0.2em] hover:bg-white transition-colors"
            >
              <span>INQUIRE FOR REGIONAL SUPPLY</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
