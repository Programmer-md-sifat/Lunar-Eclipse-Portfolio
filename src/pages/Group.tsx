import { PageTransition } from "../components/common/PageTransition";
import { Link } from "react-router-dom";
import { Building2, Compass, ShieldCheck, ArrowRight } from "lucide-react";

export function Group() {
  const companies = [
    {
      name: "Lunar Eclipse Sourcing Ltd.",
      focus: "Global Fabric & Trims Procurement",
      desc: "Direct mill partnerships and specialized raw materials trading.",
    },
    {
      name: "Lunar Eclipse Apparel Manufacturing",
      focus: "Garment Industrial Production",
      desc: "State-of-the-art automated sewing, cutting, and packaging complexes.",
    },
    {
      name: "Lunar Defense & Tactical Insignia",
      focus: "Institutional & Uniform Contracts",
      desc: "High-security production lines for badges, regalia, and tactical uniforms.",
    },
    {
      name: "Lunar Logistics & Freight Solutions",
      focus: "International Export-Import Logistics",
      desc: "Bonded warehousing, maritime transport, and customs compliance.",
    },
  ];

  return (
    <PageTransition>
      <div className="w-full bg-[#06090e] pt-32 pb-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#dfb277]">
              Corporate Structure
            </span>
            <h1 className="font-editorial mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-white">
              Lunar Eclipse <span className="italic font-georgia text-[#dfb277]">International Group</span>
            </h1>
            <p className="mt-6 text-base text-zinc-300 leading-relaxed">
              A diversified corporate enterprise integrating every vertical of the international apparel supply chain, raw material sourcing, and specialized manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {companies.map((company) => (
              <div
                key={company.name}
                className="border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-[#dfb277]/40"
              >
                <div className="flex items-center gap-3 text-[#dfb277] mb-3">
                  <Building2 className="h-5 w-5" />
                  <span className="text-xs uppercase tracking-widest">{company.focus}</span>
                </div>
                <h3 className="font-editorial text-2xl text-white mb-3">{company.name}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{company.desc}</p>
              </div>
            ))}
          </div>

          <div className="border border-white/10 bg-white/[0.02] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-editorial text-2xl text-white">Partner with Lunar Eclipse Group</h3>
              <p className="text-sm text-zinc-400 mt-1">Explore corporate joint ventures, vendor registration, and global buyer partnerships.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-xs font-semibold tracking-[0.2em] hover:bg-[#dfb277] transition-all"
            >
              <span>CORPORATE INQUIRY</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
