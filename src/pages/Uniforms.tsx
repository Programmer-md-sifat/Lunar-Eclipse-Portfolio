import { PageTransition } from "../components/common/PageTransition";
import { Link } from "react-router-dom";
import { Shield, Award, CheckCircle2, ArrowRight } from "lucide-react";

export function Uniforms() {
  return (
    <PageTransition>
      <div className="w-full bg-[#06090e] pt-32 pb-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#dfb277]">
              Institutional & Tactical Division
            </span>
            <h1 className="font-editorial mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-white">
              Uniforms, Badges & <span className="font-georgia text-[#dfb277]">Military Insignia</span>
            </h1>
            <p className="mt-6 text-base text-zinc-300 leading-relaxed">
              Specialized manufacturing contracts for government ministries, defense forces, aviation carriers, and corporate security enterprises requiring mil-spec textiles and precision heraldry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="border border-white/10 bg-white/[0.02] p-8">
              <Shield className="h-8 w-8 text-[#dfb277] mb-6" />
              <h3 className="font-editorial text-2xl text-white mb-3">Defense & Tactical Uniforms</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                IR-compliant camouflage fabrics, ripstop combat trousers, flame-retardant flight suits, and tactical outerwear built to withstand extreme operational conditions.
              </p>
            </div>

            <div className="border border-white/10 bg-white/[0.02] p-8">
              <Award className="h-8 w-8 text-[#dfb277] mb-6" />
              <h3 className="font-editorial text-2xl text-white mb-3">Rank Badges & Insignia</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Hand-embroidered bullion wire badges, high-density jacquard shoulder epaulettes, die-cast enamel medals, and laser-cut metallic rank patches.
              </p>
            </div>

            <div className="border border-white/10 bg-white/[0.02] p-8">
              <CheckCircle2 className="h-8 w-8 text-[#dfb277] mb-6" />
              <h3 className="font-editorial text-2xl text-white mb-3">Aviation & Corporate Workwear</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Tailored pilot uniforms, cabin crew bespoke suiting, anti-static utility attire, and corporate security identification apparel.
              </p>
            </div>
          </div>

          <div className="border border-[#dfb277]/30 bg-[#dfb277]/5 p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-editorial text-2xl text-white">Government & Institutional Procurement</h3>
              <p className="text-sm text-zinc-400 mt-1">Our tender division handles strict RFP specifications, confidential NDAs, and bonded delivery.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#dfb277] text-black px-6 py-3 text-xs font-semibold tracking-[0.2em] hover:bg-white transition-colors"
            >
              <span>SUBMIT TENDER INQUIRY</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
