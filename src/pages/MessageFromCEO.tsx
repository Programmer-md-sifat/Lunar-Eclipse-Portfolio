import { PageTransition } from "../components/common/PageTransition";
import { Link } from "react-router-dom";
import {
  Quote,
  Zap,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { executiveMessages } from "../data/aboutData";

export function MessageFromCEO() {
  const ceo = executiveMessages.ceo;

  const ceoStrategicPillars = [
    {
      icon: Zap,
      number: "01",
      title: "Agile Sourcing Velocity & Rapid Sampling",
      description:
        "We have compressed conventional design-to-production cycles through 7-day lab dip turnarounds and high-fidelity 3D digital garment prototyping for unprecedented retail market speed.",
    },
    {
      icon: Cpu,
      number: "02",
      title: "Digital Supply Chain & Circular Transparency",
      description:
        "Our proprietary ERP ecosystem gives international buying directors direct visibility into spinning, stitching, and ex-factory shipping, integrated with certified sustainable, traceable fibers.",
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
              <span className="text-[#dfb277]">Message from CEO</span>
            </div>

            <div className="max-w-4xl">
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight mt-2 leading-[1.08]">
                Pioneering Velocity, Sustainability &{" "}
                <span className="font-georgia text-[#dfb277]">Digital Sourcing</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-3xl">
                A strategic outlook from Chief Executive Officer Victoria Lin on scaling agile supply architectures, eco-conscious circular fibers, and frictionless global client fulfillment.
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
                          src={ceo.portrait}
                          alt={ceo.name}
                          className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#030712]/50 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300" />
                      </div>

                      {/* Designation and Name */}
                      <span className="text-[10px] font-mono font-bold text-[#dfb277] uppercase tracking-wider block">
                        CHIEF EXECUTIVE OFFICER
                      </span>
                      <span className="font-editorial text-2xl text-white font-light block mt-1">
                        {ceo.name}
                      </span>
                    </div>

                    {/* Executive Details */}
                    <div className="space-y-3 pt-2 text-xs font-mono text-zinc-400">
                      <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                        <span className="text-zinc-500 uppercase">Tenure & Experience</span>
                        <span className="text-zinc-200">20+ Years Global Sourcing</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                        <span className="text-zinc-500 uppercase">Strategic Focus</span>
                        <span className="text-zinc-200">Digital Supply Chains</span>
                      </div>
                    </div>

                    {/* Navigation to MD Message */}
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <Link
                        to="/message-from-md"
                        className="flex items-center justify-between text-xs font-mono text-[#dfb277] hover:text-white transition-colors group/link p-2 rounded-lg hover:bg-white/5"
                      >
                        <span>Read Message from Managing Director</span>
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
                    "{ceo.headlineQuote}"
                  </p>
                </div>

                {/* Narrative Body */}
                <div className="space-y-6 text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                  <p>
                    The global textile landscape is undergoing a monumental transformation. Modern consumer expectations, omnichannel retailing, and tightened inventory windows require fashion brands and institutional buyers to act with speed and environmental responsibility.
                  </p>
                  <p>
                    As Chief Executive Officer, my mission is to ensure that Lunar Eclipse International Group is not merely keeping pace with these shifts, but actively setting the benchmark. We have architected our operations around three core tenets: <strong>Velocity</strong>, <strong>Digital Transparency</strong>, and <strong>Sustainable Circularity</strong>.
                  </p>
                  <p>
                    We have reimagined the conventional sampling bottleneck. Through our in-house 3D digital sampling studios and high-speed in-house laboratory dye kitchens, we deliver physical lab-dip strike-offs and fit samples in as fast as 7 business days. This enables our retail clients to react to emerging runway and streetwear trends in real time without sacrificing structural quality.
                  </p>
                  <p>
                    Furthermore, true sustainability cannot simply be a marketing badge—it must be structurally embedded in the fabric itself. We have expanded our certified collections to incorporate OEKO-TEX® Standard 100 Class 1 fabrics, Global Recycled Standard (GRS) post-consumer poly-blends, and fully traceable organic cottons.
                  </p>
                  <p>
                    Together with our Managing Director and our dedicated teams across Dhaka, Hong Kong, Germany, and Japan, we stand ready to empower your brand with dependable, forward-looking textile solutions.
                  </p>
                </div>

                {/* Official Signature Card */}
                <div className="bg-[#030712] border border-white/10 p-8 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-10">
                  <div>
                    <span className="font-georgia text-2xl sm:text-3xl text-white font-normal block italic tracking-wider">
                      {ceo.name}
                    </span>
                    <span className="text-xs font-mono text-[#dfb277] uppercase tracking-widest block mt-1">
                      Chief Executive Officer, Lunar Eclipse Group
                    </span>
                  </div>

                  <div className="text-right sm:text-right border-t sm:border-t-0 pt-4 sm:pt-0 border-white/10">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                      GLOBAL OPERATIONS DIRECTORATE
                    </span>
                    <span className="text-xs font-mono text-zinc-300 block mt-0.5">
                      Hong Kong Hub · International Trading Network
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* STRATEGIC ROADMAP PILLARS */}
        <section className="py-20 sm:py-28 border-b border-white/[0.06] bg-[#020509] relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase">
                STRATEGIC ROADMAP
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white tracking-tight mt-3">
                Future-Ready Supply Architecture
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-xl mx-auto">
                Key operational pillars driving growth, digital innovation, and market velocity under the CEO's leadership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {ceoStrategicPillars.map((pillar) => {
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
                      <span>GLOBAL AGILITY</span>
                      <span>TRACEABLE FIBERS</span>
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
                  GLOBAL SOURCING CONSULTATION
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight mt-3">
                  Accelerate Your Supply Chain
                </h2>
                <p className="text-sm text-zinc-300 font-light leading-relaxed mt-4">
                  Engage our international sourcing team to optimize lead times, evaluate custom fabrics, or establish high-volume manufacturing lines.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-[#dfb277] text-black px-8 py-4 text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_25px_rgba(223,178,119,0.3)]"
                >
                  <span>CONNECT WITH CEO OFFICE</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-4 text-xs font-mono tracking-[0.2em] uppercase rounded-xl hover:bg-white/10 transition-colors"
                >
                  <span>EXPLORE SOURCING</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
