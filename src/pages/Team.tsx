import { useState } from "react";
import { PageTransition } from "../components/common/PageTransition";
import { Link } from "react-router-dom";
import {
  Quote,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import {
  teamHeroData,
  teamDepartments,
  teamMembersList,
} from "../data/teamData";

export function Team() {
  const [selectedDept, setSelectedDept] = useState<string>("all");

  const filteredMembers =
    selectedDept === "all"
      ? teamMembersList
      : teamMembersList.filter((member) => member.department === selectedDept);

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
                <span className="opacity-60">{teamHeroData.sectionNumber}</span>
                <span className="h-[1px] w-6 bg-[#dfb277]/60" />
                {teamHeroData.badge}
              </span>

              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight mt-5 leading-[1.08]">
                {teamHeroData.title} <br />
                <span className="font-georgia text-[#dfb277]">{teamHeroData.titleHighlight}</span>
              </h1>

              <p className="mt-8 text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-3xl">
                {teamHeroData.description}
              </p>
            </div>

            {/* Department Filter Tabs */}
            <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center gap-3">
              {teamDepartments.map((dept) => {
                const isActive = selectedDept === dept.id;
                return (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDept(dept.id)}
                    className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-[0.18em] transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#dfb277] text-black font-bold shadow-[0_0_20px_rgba(223,178,119,0.3)]"
                        : "bg-[#030712] border border-white/10 text-zinc-300 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    <span>{dept.name}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded ${
                        isActive
                          ? "bg-black/20 text-black font-bold"
                          : "bg-white/5 text-zinc-500"
                      }`}
                    >
                      {dept.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* TEAM MEMBERS GRID */}
        <section className="py-20 sm:py-28 border-b border-white/[0.06] bg-[#030710] relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-[#030712] border border-white/10 rounded-2xl overflow-hidden hover:border-[#dfb277]/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Portrait Photo */}
                    <div className="aspect-[4/3] overflow-hidden bg-zinc-900 relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-90" />
                      
                      <div className="absolute top-4 right-4">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#dfb277] bg-black/70 border border-[#dfb277]/30 px-2.5 py-1 rounded backdrop-blur-sm">
                          {member.experience}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-6 flex items-center gap-2 text-[11px] font-mono text-zinc-300">
                        <MapPin className="h-3.5 w-3.5 text-[#dfb277]" />
                        <span>{member.location}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <h3 className="font-editorial text-2xl text-white font-light mb-1 group-hover:text-[#dfb277] transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs text-zinc-400 font-light mb-5">
                        {member.role}
                      </p>

                      {/* Quote */}
                      <div className="border-t border-white/10 pt-4 mb-6">
                        <Quote className="h-4 w-4 text-[#dfb277]/40 mb-2" />
                        <p className="text-xs text-zinc-300 font-light leading-relaxed italic">
                          "{member.quote}"
                        </p>
                      </div>

                      {/* Specializations Tags */}
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                          Core Specializations:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {member.specialization.map((spec) => (
                            <span
                              key={spec}
                              className="text-[10px] font-mono bg-white/5 border border-white/5 text-zinc-300 px-2 py-0.5 rounded"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-7 py-4 border-t border-white/5 bg-black/40 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#dfb277]" />
                      Verified Leader
                    </span>
                    <Link
                      to="/contact"
                      className="text-[#dfb277] hover:text-white transition-colors"
                    >
                      Connect ↗
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM CULTURE & STANDARDS */}
        <section className="py-20 sm:py-28 border-b border-white/[0.06] relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-[#030712] border border-white/10 p-8 rounded-2xl">
                <Sparkles className="h-6 w-6 text-[#dfb277] mb-4" />
                <h3 className="font-editorial text-2xl text-white font-light mb-3">Global Mindset, Local Mastery</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  Our merchandisers and QA directors live where the fabrics are woven and garments are crafted, while maintaining direct communication lines with buyers across Europe, the US, and Asia.
                </p>
              </div>

              <div className="bg-[#030712] border border-white/10 p-8 rounded-2xl">
                <CheckCircle2 className="h-6 w-6 text-[#dfb277] mb-4" />
                <h3 className="font-editorial text-2xl text-white font-light mb-3">Continuous Technical Audits</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  Every senior technician undergoes biannual certifications in automated patterning, AQL 2.5 defect minimization, and international workplace safety protocols.
                </p>
              </div>

              <div className="bg-[#030712] border border-white/10 p-8 rounded-2xl">
                <Quote className="h-6 w-6 text-[#dfb277] mb-4" />
                <h3 className="font-editorial text-2xl text-white font-light mb-3">Institutional Accountability</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  Direct board-level oversight on all government defence uniforms and major international brand accounts guarantees complete transparency from purchase order to port handover.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-24 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="bg-gradient-to-r from-[#030712] via-[#081020] to-[#030712] border border-[#dfb277]/30 p-10 sm:p-14 rounded-3xl relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase">
                  DIRECT CONSULTATION
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight mt-3">
                  Connect With Our Leadership Team
                </h2>
                <p className="text-sm text-zinc-300 font-light leading-relaxed mt-4">
                  Discuss bulk orders, tech pack evaluations, or schedule a formal factory audit directly with our merchandising directors.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-[#dfb277] text-black px-8 py-4 text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_25px_rgba(223,178,119,0.3)]"
                >
                  <span>SCHEDULE CONSULTATION</span>
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
