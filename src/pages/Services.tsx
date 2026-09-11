import { PageTransition } from "../components/common/PageTransition";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import {
  servicesHeroData,
  servicesList,
  workflowSteps,
  servicesCtaData,
} from "../data/servicesData";

export function Services() {
  return (
    <PageTransition>
      <div className="w-full bg-[#020509] text-white">

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-white/[0.06] overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[#dfb277]/[0.03] blur-[180px]" />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 z-10">
            <div className="max-w-4xl">
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08]">
                {servicesHeroData.title} <br />
                <span className="font-georgia text-[#dfb277]">{servicesHeroData.titleHighlight}</span>
              </h1>

              <p className="mt-8 text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-3xl">
                {servicesHeroData.description}
              </p>
            </div>
          </div>
        </section>

        {/* CORE SERVICES DETAILED BREAKDOWN */}
        <section className="py-20 sm:py-28 border-b border-white/[0.06] relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 space-y-20">
            {servicesList.map((s, index) => {
              const Icon = s.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={s.title}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Left Info */}
                  <div className={`lg:col-span-7 ${isEven ? "" : "lg:order-2"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono font-bold text-[#dfb277] bg-[#dfb277]/10 border border-[#dfb277]/30 px-3 py-1 rounded">
                        {s.number}
                      </span>
                      <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-400 uppercase">
                        {s.category}
                      </span>
                    </div>

                    <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight mb-4">
                      {s.title}
                    </h2>

                    <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed mb-8">
                      {s.description}
                    </p>

                    {/* Capabilities Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {s.capabilities.map((cap) => (
                        <div key={cap} className="flex items-center gap-2.5 text-xs text-zinc-300 bg-white/[0.02] border border-white/10 p-3 rounded-lg">
                          <CheckCircle2 className="h-4 w-4 text-[#dfb277] shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-[#dfb277] text-black px-6 py-3 text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-lg hover:bg-white transition-colors"
                    >
                      <span>INQUIRE FOR THIS SERVICE</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Right Image Card */}
                  <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020509] via-transparent to-transparent opacity-80" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* WORKFLOW PROCESS TIMELINE */}
        <section className="py-20 sm:py-28 border-b border-white/[0.06] bg-[#030710] relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase">
                PRODUCTION WORKFLOW
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white tracking-tight mt-3">
                From Tech Pack to Container Delivery
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {workflowSteps.map((w) => (
                <div key={w.step} className="bg-[#030712] border border-white/10 p-6 rounded-2xl relative hover:border-[#dfb277]/40 transition-colors">
                  <span className="font-mono text-2xl font-bold text-[#dfb277] block mb-3">{w.step}</span>
                  <h3 className="font-editorial text-xl text-white font-light mb-2">{w.title}</h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENTERPRISE CTA */}
        <section className="py-20 sm:py-24 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center">
            <div className="bg-[#030712] border border-[#dfb277]/30 p-12 sm:p-16 rounded-3xl relative">
              <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white tracking-tight">
                {servicesCtaData.title}
              </h2>
              <p className="text-sm text-zinc-400 font-light max-w-2xl mx-auto mt-4 mb-8 leading-relaxed">
                {servicesCtaData.description}
              </p>
              <Link
                to={servicesCtaData.buttonLink}
                className="inline-flex items-center gap-3 bg-[#dfb277] text-black px-8 py-4 text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_25px_rgba(223,178,119,0.3)]"
              >
                <span>{servicesCtaData.buttonText}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
