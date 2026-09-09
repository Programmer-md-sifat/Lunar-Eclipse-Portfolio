import { PageTransition } from "../components/common/PageTransition";
import { Link } from "react-router-dom";
import {
  Quote,
  ShieldCheck,
  Building2,
  ArrowRight,
} from "lucide-react";
import { executiveMessages } from "../data/aboutData";

export function MessageFromMD() {
  const md = executiveMessages.managingDirector;

  const mdStrategicPillars = [
    {
      icon: ShieldCheck,
      number: "01",
      title: "Ethical Manufacturing & Human Dignity",
      description:
        "Every garment produced under our banner represents safe working conditions, fair living wages, and strict adherence to Sedex, BSCI, and WRAP international labor standards across our entire supply chain.",
    },
    {
      icon: Building2,
      number: "02",
      title: "Robust Backward Linkages & Mill Scale",
      description:
        "Direct partnerships with premier spinning, weaving, and dyeing mills guarantee total control over yarn consistency, fabric durability, colorfastness, and dependable on-time ex-factory delivery.",
    },
  ];

  return (
    <PageTransition>
      <div className="w-full bg-[#020509] text-white">
        
        {/* HERO BANNER */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-white/[0.06] overflow-hidden">
          <div className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-[#dfb277]/[0.035] blur-[180px]" />
          <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] rounded-full bg-blue-900/[0.04] blur-[180px]" />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 z-10">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-6 uppercase tracking-wider">
              <Link to="/about" className="hover:text-[#dfb277] transition-colors">About</Link>
              <span>/</span>
              <span className="text-[#dfb277]">Message from Managing Director</span>
            </div>

            <div className="max-w-4xl">
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight mt-2 leading-[1.08]">
                Building Industrial Scale with{" "}
                <span className="font-georgia text-[#dfb277]">Uncompromising Integrity</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-3xl">
                A personal message from our Founder and Managing Director, Tariqul Islam Chowdhury, on two and a half decades of textile stewardship, vertical integration, and ethical global commerce.
              </p>
            </div>
          </div>
        </section>

        {/* KEYNOTE ADDRESS SECTION */}
        <section className="py-20 sm:py-28 border-b border-white/[0.06] bg-[#03060d] relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Left Column: Portrait & Credentials */}
              <div className="lg:col-span-5 h-full">
                <div className="sticky top-28 sm:top-32 space-y-6">
                  {/* Portrait Card */}
                  <div className="bg-[#030712] border border-white/10 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl group hover:border-[#dfb277]/40 transition-all">
                    <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#dfb277]/[0.05] group-hover:bg-[#dfb277]/[0.1] blur-2xl transition-all" />

                    {/* Circular Portrait Photo */}
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="h-44 w-44 sm:h-52 sm:w-52 rounded-full overflow-hidden border-2 border-[#dfb277]/40 relative bg-zinc-900 shadow-[0_0_30px_rgba(223,178,119,0.2)] group-hover:border-[#dfb277] group-hover:shadow-[0_0_40px_rgba(223,178,119,0.35)] transition-all duration-500 mb-5">
                        <img
                          src={md.portrait}
                          alt={md.name}
                          className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#030712]/50 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300" />
                      </div>

                      {/* Designation and Name */}
                      <span className="text-[10px] font-mono font-bold text-[#dfb277] uppercase tracking-wider block">
                        FOUNDER & MANAGING DIRECTOR
                      </span>
                      <span className="font-editorial text-2xl text-white font-light block mt-1">
                        {md.name}
                      </span>
                    </div>

                    {/* Executive Details */}
                    <div className="space-y-3 pt-2 text-xs font-mono text-zinc-400">
                      <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                        <span className="text-zinc-500 uppercase">Tenure & Experience</span>
                        <span className="text-zinc-200">28+ Years Leadership</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                        <span className="text-zinc-500 uppercase">Specialization</span>
                        <span className="text-zinc-200">Institutional Trade</span>
                      </div>
                    </div>

                    {/* Navigation to CEO Message */}
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <Link
                        to="/message-from-ceo"
                        className="flex items-center justify-between text-xs font-mono text-[#dfb277] hover:text-white transition-colors group/link p-2 rounded-lg hover:bg-white/5"
                      >
                        <span>Read Message from CEO</span>
                        <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Full Keynote Address */}
              <div className="lg:col-span-7 space-y-8">
                {/* Pull Quote Box */}
                <div className="bg-[#030712] border-l-4 border-[#dfb277] border-y border-r border-white/10 p-8 sm:p-10 rounded-2xl relative shadow-xl">
                  <Quote className="h-10 w-10 text-[#dfb277]/20 absolute right-6 top-6 pointer-events-none" />
                  <p className="font-editorial text-2xl sm:text-3xl text-white font-light leading-snug italic">
                    "{md.headlineQuote}"
                  </p>
                </div>

                {/* Narrative Body */}
                <div className="space-y-6 text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                  <p>
                    When we established Lunar Eclipse International Group, our founding premise was simple yet uncompromising: to build an industrial enterprise capable of serving the world's most discerning apparel brands with absolute transparency, technical excellence, and deep social respect.
                  </p>
                  <p>
                    Over the past 28 years, the global garment and textile industry has evolved dramatically. Fashions change with ever-increasing velocity, supply chains face geopolitical complexities, and the imperative for verifiable sustainability has rightfully moved to the center of international commerce. Through every cycle, our compass has remained constant.
                  </p>
                  <p>
                    We invested early and decisively in direct backward linkages. By maintaining direct integration with certified spinning mills, high-capacity weaving units, and advanced finishing houses across Bangladesh, India, China, and Vietnam, we eliminate unvetted intermediaries. This gives our brand partners unmatched consistency in yarn counts, color fastness, shrinkage stability, and on-time ex-factory delivery.
                  </p>
                  <p>
                    Equally critical is our institutional defense uniform division. Supplying high-specification tactical camouflage, rank insignia, combat trousers, and ceremonial accoutrements to national defense ministries requires zero margin for error. We bring that exact same rigorous military-grade quality discipline into every commercial collection we produce.
                  </p>
                  <p>
                    I invite you to explore our capabilities, review our certifications, and join hands with us as we shape a resilient, responsible, and prosperous future for global textiles.
                  </p>
                </div>

                {/* Official Signature Card */}
                <div className="bg-[#030712] border border-white/10 p-8 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-10">
                  <div>
                    <span className="font-georgia text-2xl sm:text-3xl text-white font-normal block italic tracking-wider">
                      {md.name}
                    </span>
                    <span className="text-xs font-mono text-[#dfb277] uppercase tracking-widest block mt-1">
                      Founder & Managing Director, Lunar Eclipse Group
                    </span>
                  </div>

                  <div className="text-right sm:text-right border-t sm:border-t-0 pt-4 sm:pt-0 border-white/10">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                      CORPORATE HEADQUARTERS
                    </span>
                    <span className="text-xs font-mono text-zinc-300 block mt-0.5">
                      Dhaka, Bangladesh · International Directorate
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* STRATEGIC COMMITMENTS */}
        <section className="py-20 sm:py-28 border-b border-white/[0.06] bg-[#020509] relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase">
                CORE PRINCIPLES
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white tracking-tight mt-3">
                Key Strategic Commitments
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-xl mx-auto">
                Foundational pillars established under the Managing Director's leadership to safeguard client trust and manufacturing excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {mdStrategicPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="bg-[#030712] border border-white/10 p-8 rounded-2xl hover:border-[#dfb277]/40 transition-all duration-300 group relative flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="h-12 w-12 rounded-xl bg-[#dfb277]/10 border border-[#dfb277]/30 flex items-center justify-center text-[#dfb277] group-hover:bg-[#dfb277] group-hover:text-black transition-all">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="font-mono text-xs text-zinc-600 font-bold">{pillar.number}</span>
                      </div>

                      <h3 className="font-editorial text-2xl font-light text-white mb-3 group-hover:text-[#dfb277] transition-colors">
                        {pillar.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#dfb277] tracking-wider uppercase">
                      <span>EXECUTIVE MANDATE</span>
                      <span>100% COMPLIANCE</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA TO WORK WITH US */}
        <section className="py-20 sm:py-24 relative overflow-hidden bg-[#030710]">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="bg-gradient-to-r from-[#030712] via-[#081020] to-[#030712] border border-[#dfb277]/30 p-10 sm:p-14 rounded-3xl relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase">
                  DIRECT PARTNERSHIP INQUIRIES
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight mt-3">
                  Initiate a Strategic Partnership
                </h2>
                <p className="text-sm text-zinc-300 font-light leading-relaxed mt-4">
                  Connect directly with our executive office to schedule factory audits, request bulk fabric catalogs, or submit technical garment specifications.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-[#dfb277] text-black px-8 py-4 text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_25px_rgba(223,178,119,0.3)]"
                >
                  <span>CONNECT WITH MD OFFICE</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-4 text-xs font-mono tracking-[0.2em] uppercase rounded-xl hover:bg-white/10 transition-colors"
                >
                  <span>EXPLORE COMPANY</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
