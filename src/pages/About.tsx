import { PageTransition } from "../components/common/PageTransition";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Shield, Award, CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <PageTransition>
      <div className="w-full bg-[#06090e] pt-32 pb-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#dfb277]">
              About Lunar Eclipse
            </span>
            <h1 className="font-editorial mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-white">
              Global Sourcing Excellence & <span className="font-georgia text-[#dfb277]">Industrial Precision</span>
            </h1>
            <p className="mt-6 text-base text-zinc-300 leading-relaxed">
              Lunar Eclipse is a premier international apparel buying house, fabric procurement specialist, and multi-tier manufacturing conglomerate. We bridge global fashion brands, government agencies, and institutional buyers with world-class production facilities.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm">
              <Globe className="h-8 w-8 text-[#dfb277] mb-6" />
              <h3 className="text-lg font-semibold text-white tracking-wide mb-3">Global Network</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Direct procurement hubs across Asia, Europe, and the Americas ensuring agile supply chain operations and competitive fabric pricing.
              </p>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm">
              <Shield className="h-8 w-8 text-[#dfb277] mb-6" />
              <h3 className="text-lg font-semibold text-white tracking-wide mb-3">Certified Quality</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Stringent quality assurance protocols meeting OEKO-TEX, BSCI, and ISO international standards on every garment run.
              </p>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm">
              <Award className="h-8 w-8 text-[#dfb277] mb-6" />
              <h3 className="text-lg font-semibold text-white tracking-wide mb-3">Tailored Manufacturing</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                From luxury retail collections to specialized institutional uniforms, badges, and custom tactical apparel.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="border border-white/10 bg-gradient-to-r from-white/[0.03] to-transparent p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-editorial text-white">Ready to initiate your production cycle?</h3>
              <p className="text-sm text-zinc-400 mt-2">Connect with our international sourcing directors today.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#dfb277] text-black px-6 py-3 text-xs font-semibold tracking-[0.2em] hover:bg-white transition-colors"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
