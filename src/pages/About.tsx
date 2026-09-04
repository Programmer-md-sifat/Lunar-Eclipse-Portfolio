import { useState } from "react";
import { PageTransition } from "../components/common/PageTransition";
import { Link } from "react-router-dom";
import {
  Globe,
  Shield,
  Award,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Factory,
  Users,
  Sparkles,
  Building2,
  FileCheck2,
  Layers,
  Quote,
} from "lucide-react";
import fabricRollsImg from "../assets/images/fabric_rolls_textiles_1788067226249.jpg";
import trimsAccessoriesImg from "../assets/images/trims_accessories_flatlay_1788067248377.jpg";

export function About() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">("mission");

  const metrics = [
    { value: "25+", label: "Years of Excellence", detail: "Established legacy since 1999" },
    { value: "35+", label: "Export Nations", detail: "Europe, Americas & Asia-Pacific" },
    { value: "12M+", label: "Annual Garment Capacity", detail: "Across 6 integrated production units" },
    { value: "100%", label: "Compliance Rate", detail: "OEKO-TEX, BSCI & ISO 9001 Certified" },
  ];

  const pillars = [
    {
      icon: Globe,
      number: "01",
      title: "Global Fabric Sourcing",
      desc: "Direct partnerships with certified yarn spinners, weaving mills, and dye houses across Asia and Europe ensuring competitive fabric tariffs and unbroken supply chain integrity.",
    },
    {
      icon: Factory,
      number: "02",
      title: "Precision Manufacturing",
      desc: "State-of-the-art automated cutting tables, laser pattern alignment, and high-velocity sewing lines calibrated for complex retail garments and specialized workwear.",
    },
    {
      icon: Shield,
      number: "03",
      title: "Defence & Institutional Tenders",
      desc: "High-security production lines dedicated to mil-spec apparel, flame-retardant textiles, embroidered rank epaulettes, and official government uniform tenders.",
    },
    {
      icon: FileCheck2,
      number: "04",
      title: "Zero-Defect Quality Assurance",
      desc: "Four-point fabric inspection systems, inline AQL 2.5/4.0 auditing protocols, color fastness testing, and lab-dipped spectral shade matching.",
    },
  ];

  const milestones = [
    { year: "1999", title: "Founding Era", desc: "Established as a specialized textile trading office in Dhaka, bridging local spinners with regional apparel buyers." },
    { year: "2006", title: "Industrial Expansion", desc: "Commissioned first automated garment manufacturing unit with specialized knit and woven production lines." },
    { year: "2012", title: "Defence & Insignia Division", desc: "Launched military uniform, rank badge, and tactical insignia production line for government procurement." },
    { year: "2018", title: "Global Hub Integration", desc: "Incorporated trade liaison offices in Hong Kong SAR and London to streamline international logistics." },
    { year: "2024", title: "Sustainable Textile Leadership", desc: "Achieved GOTS organic certification and closed-loop water treatment integration across main facilities." },
  ];

  const certifications = [
    { name: "OEKO-TEX Standard 100", category: "Eco-Safety", desc: "Guarantees raw materials free from harmful chemicals and heavy metals." },
    { name: "BSCI Certified", category: "Social Compliance", desc: "Ensures ethical working conditions, fair wages, and worker safety." },
    { name: "ISO 9001:2015", category: "Quality Management", desc: "Internationally verified quality management system across all operations." },
    { name: "GOTS Organic", category: "Raw Materials", desc: "Certified organic cotton procurement and sustainable dyeing processes." },
    { name: "Sedex SMETA", category: "Supply Chain", desc: "Audited labor standards, health, safety, and environmental stewardship." },
    { name: "WRAP Certified", category: "Manufacturing", desc: "Worldwide Responsible Accredited Production certification." },
  ];

  const leadership = [
    {
      name: "Tariqul Islam Chowdhury",
      role: "Group Chairman & Managing Director",
      experience: "28+ Years Textile Industry Veteran",
      quote: "Our founding commitment remains unchanged: delivering industrial precision without compromising on ethical integrity or material quality.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Victoria Lin",
      role: "Director of East Asia Procurement",
      experience: "Based in Hong Kong SAR Hub",
      quote: "By linking mill-direct fabric innovation with rapid prototyping, we shorten buyer lead times from months to days.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Arthur Pendelton",
      role: "European Brand Relations Director",
      experience: "Based in London Office",
      quote: "We provide European fashion houses and institutional clients with complete supply chain transparency from fiber to store front.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    },
  ];

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
                <span className="opacity-60">01</span>
                <span className="h-[1px] w-6 bg-[#dfb277]/60" />
                ABOUT LUNAR ECLIPSE GROUP
              </span>

              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight mt-5 leading-[1.08]">
                Pioneering Global Sourcing & <br />
                <span className="font-georgia text-[#dfb277]">Industrial Precision</span>
              </h1>

              <p className="mt-8 text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-3xl">
                Lunar Eclipse International Group is a premier multi-tier apparel buying house, fabric procurement specialist, and industrial manufacturing enterprise. We bridge international fashion houses, global retail chains, and government defense ministries with certified production complexes worldwide.
              </p>
            </div>

            {/* METRICS BAR */}
            <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/10">
              {metrics.map((m) => (
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
        <section className="py-20 sm:py-28 border-b border-white/[0.06] bg-[#030710] relative">
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
                        <div className="text-xs font-mono text-[#dfb277] uppercase font-bold tracking-wider">INTEGRATED VERTICAL SUPPLY</div>
                        <div className="text-xs text-zinc-300 font-light mt-0.5">Yarn spinning, high-capacity weaving, garment construction & export.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Interactive Philosophy */}
              <div className="lg:col-span-6">
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase">
                  OUR CORPORATE PHILOSOPHY
                </span>

                <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight mt-3">
                  Uncompromising Standards Across Every Thread
                </h2>

                {/* Tab Controls */}
                <div className="flex items-center gap-2 mt-8 mb-6 border-b border-white/10 pb-4">
                  {(["mission", "vision", "values"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`text-xs font-mono uppercase tracking-[0.2em] px-4 py-2 rounded-lg transition-all ${
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
                      Our mission is to empower global apparel brands and government institutions with an unassailable supply ecosystem — combining mill-direct fabric prices, zero-defect quality standards, and rapid sampling turnarounds.
                    </p>
                  )}
                  {activeTab === "vision" && (
                    <p className="animate-in fade-in duration-300">
                      To be the world’s most trusted international apparel procurement conglomerate, setting the gold standard for sustainability, technological precision, and institutional reliability across global retail and defense markets.
                    </p>
                  )}
                  {activeTab === "values" && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <div className="flex items-start gap-3 text-sm text-zinc-300">
                        <CheckCircle2 className="h-4 w-4 text-[#dfb277] shrink-0 mt-1" />
                        <span><strong className="text-white font-normal">Absolute Integrity:</strong> Transparent costing, certified labor compliance, and zero hidden surcharges.</span>
                      </div>
                      <div className="flex items-start gap-3 text-sm text-zinc-300">
                        <CheckCircle2 className="h-4 w-4 text-[#dfb277] shrink-0 mt-1" />
                        <span><strong className="text-white font-normal">Technical Precision:</strong> Laser pattern grading, automated cutting, and spectral shade consistency.</span>
                      </div>
                      <div className="flex items-start gap-3 text-sm text-zinc-300">
                        <CheckCircle2 className="h-4 w-4 text-[#dfb277] shrink-0 mt-1" />
                        <span><strong className="text-white font-normal">Global Agile Shipping:</strong> Multi-port FOB, CIF, and DDP export delivery directly to buyer distribution centers.</span>
                      </div>
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
                    to="/group"
                    className="text-xs font-mono tracking-[0.2em] text-zinc-300 hover:text-[#dfb277] uppercase transition-colors"
                  >
                    CORPORATE GROUP ↗
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CORE STRATEGIC PILLARS */}
        <section className="py-20 sm:py-28 border-b border-white/[0.06] relative">
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
              {pillars.map((pillar) => {
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
        <section className="py-20 sm:py-28 border-b border-white/[0.06] bg-[#030710] relative">
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
              {milestones.map((m) => (
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

        {/* COMPLIANCE & CERTIFICATIONS GRID */}
        <section className="py-20 sm:py-28 border-b border-white/[0.06] relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase">
                  INTERNATIONAL ACCREDITATIONS
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white tracking-tight mt-3">
                  Certified Compliance & Safety
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-md">
                Every manufacturing complex operated under Lunar Eclipse Group undergoes annual third-party social, environmental, and technical audits.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <div key={cert.name} className="bg-[#030712] border border-white/10 p-6 sm:p-7 rounded-xl hover:border-[#dfb277]/40 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <CheckCircle2 className="h-5 w-5 text-[#dfb277]" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 bg-white/5 px-2.5 py-1 rounded">
                      {cert.category}
                    </span>
                  </div>
                  <h3 className="font-editorial text-xl text-white font-light mb-2">{cert.name}</h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXECUTIVE DIRECTORS */}
        <section className="py-20 sm:py-28 border-b border-white/[0.06] bg-[#030710] relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase">
                EXECUTIVE LEADERSHIP
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white tracking-tight mt-3">
                Guided by Industry Veterans
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((leader) => (
                <div key={leader.name} className="bg-[#030712] border border-white/10 rounded-2xl overflow-hidden hover:border-[#dfb277]/40 transition-all duration-300 group">
                  <div className="aspect-[4/3] overflow-hidden bg-zinc-900 relative">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-90" />
                  </div>

                  <div className="p-7">
                    <span className="text-[10px] font-mono text-[#dfb277] font-bold tracking-widest uppercase block mb-1">
                      {leader.experience}
                    </span>
                    <h3 className="font-editorial text-2xl text-white font-light mb-1">{leader.name}</h3>
                    <p className="text-xs text-zinc-400 font-light mb-5">{leader.role}</p>

                    <div className="border-t border-white/10 pt-4 relative">
                      <Quote className="h-4 w-4 text-[#dfb277]/40 mb-2" />
                      <p className="text-xs text-zinc-300 font-light leading-relaxed">
                        "{leader.quote}"
                      </p>
                    </div>
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
                  COMMENCE PARTNERSHIP
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight mt-3">
                  Ready to Initiate Your Sourcing Program?
                </h2>
                <p className="text-sm text-zinc-300 font-light leading-relaxed mt-4">
                  Schedule a factory audit, request fabric swatches, or consult with our international merchandising directors.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-[#dfb277] text-black px-8 py-4 text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_25px_rgba(223,178,119,0.3)]"
                >
                  <span>CONTACT DIRECTORS</span>
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
