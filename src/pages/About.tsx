import { useState } from "react";
import { PageTransition } from "../components/common/PageTransition";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Building2,
} from "lucide-react";
import fabricRollsImg from "../assets/images/pure_fabric_rolls_textiles_1788780174893.jpg";
import {
  aboutHeroData,
  aboutMetrics,
  aboutPhilosophyData,
  aboutPillars,
  aboutMilestones,
  aboutCtaData,
} from "../data/aboutData";

export function About() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">("mission");

  return (
    <PageTransition>
      <div className="w-full bg-[#020509] text-white">
        
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-white/[0.06] overflow-hidden">
          <div className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-[#dfb277]/[0.03] blur-[180px]" />
          <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] rounded-full bg-blue-900/[0.04] blur-[180px]" />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 z-10">
            <div className="max-w-4xl">
              <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase flex items-center gap-2">
                <span className="opacity-60">{aboutHeroData.sectionNumber}</span>
                <span className="h-[1px] w-6 bg-[#dfb277]/60" />
                {aboutHeroData.badge}
              </span>

              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight mt-5 leading-[1.08]">
                {aboutHeroData.title} <br />
                <span className="font-georgia text-[#dfb277]">{aboutHeroData.titleHighlight}</span>
              </h1>

              <p className="mt-8 text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-3xl">
                {aboutHeroData.description}
              </p>
            </div>

            {/* METRICS BAR */}
            <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/10">
              {aboutMetrics.map((m) => (
                <div key={m.label} className="bg-[#030712]/80 border border-white/[0.06] p-6 rounded-xl hover:border-[#dfb277]/40 transition-colors">
                  <div className="font-editorial text-3xl sm:text-4xl text-[#dfb277] font-light">{m.value}</div>
                  <div className="text-xs font-mono tracking-wider text-white uppercase mt-2 font-semibold">{m.label}</div>
                  <div className="text-[11px] text-zinc-500 font-light mt-1">{m.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BRAND OVERVIEW & VISION TAB SECTION */}
        <section className="py-20 sm:py-28 border-b border-white/[0.06] bg-[#020509] relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Image Showcase */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src={fabricRollsImg}
                    alt="Lunar Eclipse Textile Manufacturing Facility"
                    className="w-full h-full object-cover filter brightness-90 contrast-105 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020509] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Inset Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-[#030712]/90 border border-white/10 p-5 rounded-xl backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-[#dfb277]/10 border border-[#dfb277]/30 flex items-center justify-center shrink-0">
                        <Building2 className="h-5 w-5 text-[#dfb277]" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-[#dfb277] uppercase font-bold tracking-wider">
                          {aboutPhilosophyData.verticalSupplyBadge.title}
                        </div>
                        <div className="text-xs text-zinc-300 font-light mt-0.5">
                          {aboutPhilosophyData.verticalSupplyBadge.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Interactive Philosophy */}
              <div className="lg:col-span-6">
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase">
                  {aboutPhilosophyData.badge}
                </span>

                <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight mt-3">
                  {aboutPhilosophyData.title}
                </h2>

                {/* Tab Controls */}
                <div className="flex items-center gap-2 mt-8 mb-6 border-b border-white/10 pb-4">
                  {(["mission", "vision", "values"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`text-xs font-mono uppercase tracking-[0.2em] px-4 py-2 rounded-lg transition-all cursor-pointer ${
                        activeTab === tab
                          ? "bg-[#dfb277] text-black font-bold shadow-[0_0_15px_rgba(223,178,119,0.3)]"
                          : "text-zinc-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="min-h-[160px] text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
                  {activeTab === "mission" && (
                    <p className="animate-in fade-in duration-300">
                      {aboutPhilosophyData.mission}
                    </p>
                  )}
                  {activeTab === "vision" && (
                    <p className="animate-in fade-in duration-300">
                      {aboutPhilosophyData.vision}
                    </p>
                  )}
                  {activeTab === "values" && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      {aboutPhilosophyData.values.map((val) => (
                        <div key={val.title} className="flex items-start gap-3 text-sm text-zinc-300">
                          <CheckCircle2 className="h-4 w-4 text-[#dfb277] shrink-0 mt-1" />
                          <span><strong className="text-white font-normal">{val.title}:</strong> {val.desc}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-6">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 bg-[#dfb277] text-black px-6 py-3 text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-lg hover:bg-white transition-colors"
                  >
                    <span>EXPLORE SERVICES</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/clients"
                    className="text-xs font-mono tracking-[0.2em] text-zinc-300 hover:text-[#dfb277] uppercase transition-colors"
                  >
                    OUR CLIENTS ↗
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CORE STRATEGIC PILLARS */}
        <section className="py-20 sm:py-28 border-b border-white/[0.06] bg-[#030710] relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase">
                STRATEGIC ADVANTAGES
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white tracking-tight mt-3">
                Why Industry Leaders Partner With Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {aboutPillars.map((pillar) => {
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
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#dfb277] tracking-wider uppercase">
                      <span>VERIFIED CAPACITY</span>
                      <span>100% QUALITY</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* HERITAGE & MILESTONES TIMELINE */}
        <section className="py-20 sm:py-28 border-b border-white/[0.06] bg-[#020509] relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-16">
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase">
                COMPANY HERITAGE
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white tracking-tight mt-3">
                Quarter Century of Industrial Growth
              </h2>
            </div>

            <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
              {aboutMilestones.map((m) => (
                <div key={m.year} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 h-4 w-4 rounded-full border-2 border-[#dfb277] bg-[#020509] group-hover:bg-[#dfb277] transition-colors" />

                  <div className="bg-[#030712] border border-white/10 p-6 sm:p-8 rounded-xl max-w-3xl hover:border-[#dfb277]/40 transition-colors">
                    <span className="font-mono text-xs font-bold text-[#dfb277] tracking-widest uppercase bg-[#dfb277]/10 border border-[#dfb277]/20 px-3 py-1 rounded">
                      {m.year}
                    </span>
                    <h3 className="font-editorial text-2xl text-white font-light mt-3 mb-2">{m.title}</h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENTERPRISE CTA */}
        <section className="py-20 sm:py-24 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="bg-gradient-to-r from-[#030712] via-[#081020] to-[#030712] border border-[#dfb277]/30 p-10 sm:p-14 rounded-3xl relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase">
                  {aboutCtaData.badge}
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight mt-3">
                  {aboutCtaData.title}
                </h2>
                <p className="text-sm text-zinc-300 font-light leading-relaxed mt-4">
                  {aboutCtaData.description}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  to={aboutCtaData.buttonLink}
                  className="inline-flex items-center gap-3 bg-[#dfb277] text-black px-8 py-4 text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_25px_rgba(223,178,119,0.3)]"
                >
                  <span>{aboutCtaData.buttonText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
