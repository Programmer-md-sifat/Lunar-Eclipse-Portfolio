import { useState } from "react";
import { PageTransition } from "../components/common/PageTransition";
import { Link } from "react-router-dom";
import {
  Building2,
  Globe,
  Shield,
  Truck,
  ArrowRight,
  CheckCircle2,
  Users,
  TrendingUp,
  MapPin,
  ExternalLink,
  Award,
} from "lucide-react";

export function Group() {
  const [activeEntity, setActiveEntity] = useState<string>("sourcing");

  const subsidiaries = [
    {
      id: "sourcing",
      name: "Lunar Eclipse Sourcing Ltd.",
      focus: "GLOBAL FABRIC & YARN PROCUREMENT",
      location: "Dhaka & Hong Kong SAR",
      capacity: "15M+ Yards Fabrics Annually",
      description:
        "Specializes in raw yarn spinning contracts, mill-direct fabric weaving, indigo denim dyeing, and international raw materials trading for global retail conglomerates.",
      capabilities: [
        "Yarn Spinning & Fiber Procurement",
        "Lab Dip Spectral Shade Matching",
        "Eco-Dyeing & Water Recycling",
        "Direct Mill Tariffs & Cost Optimization",
      ],
      icon: Globe,
    },
    {
      id: "manufacturing",
      name: "Lunar Apparel Manufacturing Co.",
      focus: "GARMENT INDUSTRIAL SEWING & FINISHING",
      location: "Dhaka Industrial Zone, Bangladesh",
      capacity: "12M+ Units Garments Annually",
      description:
        "Operates state-of-the-art automated cutting tables, laser pattern alignment, high-velocity sewing lines, and automated packaging systems.",
      capabilities: [
        "Automated Gerber Pattern Cutting",
        "Inline AQL 2.5 Quality Auditing",
        "Streetwear & Heavyweight Knitwear",
        "Tailored Suiting & Canvas Construction",
      ],
      icon: Building2,
    },
    {
      id: "defense",
      name: "Lunar Defence & Tactical Insignia",
      focus: "INSTITUTIONAL & MILITARY CONTRACTS",
      location: "Dhaka High-Security Complex",
      capacity: "2M+ Insignia & Uniform Sets",
      description:
        "Dedicated high-security production line for military uniforms, hand-embroidered bullion rank epaulettes, die-cast enamel medals, and tactical camouflage wear.",
      capabilities: [
        "NIR Camouflage & Mil-Spec Testing",
        "Hand-Embroidered Bullion Heraldry",
        "Confidential Tender NDA Compliance",
        "Government Tender Tenders Handling",
      ],
      icon: Shield,
    },
    {
      id: "logistics",
      name: "Lunar Logistics & Freight Solutions",
      focus: "INTERNATIONAL EXPORT & CLEARANCE",
      location: "Chittagong Port & Hong Kong Trade Hub",
      capacity: "1,200+ FEU Containers Shipped",
      description:
        "Manages multi-port container logistics, bonded warehousing, sea/air freight forwarding, customs clearance, and DDP direct-to-warehouse shipping.",
      capabilities: [
        "Flexible FOB / CIF / DDP Terms",
        "Bonded Warehouse Inventory Storage",
        "Real-Time Container Shipment Tracking",
        "Customs Clearance & Tariff Exemption",
      ],
      icon: Truck,
    },
  ];

  const globalHubs = [
    {
      city: "Dhaka",
      country: "Bangladesh",
      role: "Global Manufacturing & Sourcing HQ",
      desc: "Central operational command, 6 integrated production plants, and primary fabric testing laboratory.",
      icon: MapPin,
    },
    {
      city: "Hong Kong",
      country: "Hong Kong SAR",
      role: "East Asia Trade & Procurement Hub",
      desc: "Regional yarn trading office, mill-direct material negotiations, and Asia-Pacific export logistics.",
      icon: MapPin,
    },
    {
      city: "London",
      country: "United Kingdom",
      role: "European Client Relations Office",
      desc: "Direct liaison office for European fashion conglomerates, design teams, and UK government tenders.",
      icon: MapPin,
    },
    {
      city: "New York",
      country: "United States",
      role: "Americas Merchandise Liaison",
      desc: "Servicing North American retail brands, corporate uniform programs, and transatlantic freight routes.",
      icon: MapPin,
    },
  ];

  return (
    <PageTransition>
      <div className="w-full bg-[#020509] text-white">

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-white/[0.06] overflow-hidden">
          <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[#dfb277]/[0.03] blur-[180px]" />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 z-10">
            <div className="max-w-4xl">
              <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase flex items-center gap-2">
                <span className="opacity-60">04</span>
                <span className="h-[1px] w-6 bg-[#dfb277]/60" />
                CORPORATE CONGLOMERATE
              </span>

              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight mt-5 leading-[1.08]">
                Lunar Eclipse <br />
                <span className="font-georgia text-[#dfb277]">International Group</span>
              </h1>

              <p className="mt-8 text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-3xl">
                A multi-billion BDT corporate conglomerate integrating every vertical of the apparel supply chain — from raw fiber trading and fabric weaving to high-capacity garment sewing, defense heraldry, and international freight forwarding.
              </p>
            </div>

            {/* CONGLOMERATE METRICS */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/10">
              <div className="bg-[#030712] border border-white/10 p-5 rounded-xl">
                <div className="font-editorial text-3xl text-[#dfb277]">4 Entities</div>
                <div className="text-xs font-mono uppercase text-white mt-1">Specialized Subsidiaries</div>
              </div>
              <div className="bg-[#030712] border border-white/10 p-5 rounded-xl">
                <div className="font-editorial text-3xl text-[#dfb277]">2,500+</div>
                <div className="text-xs font-mono uppercase text-white mt-1">Industrial Workforce</div>
              </div>
              <div className="bg-[#030712] border border-white/10 p-5 rounded-xl">
                <div className="font-editorial text-3xl text-[#dfb277]">4 Hubs</div>
                <div className="text-xs font-mono uppercase text-white mt-1">Global Liaison Offices</div>
              </div>
              <div className="bg-[#030712] border border-white/10 p-5 rounded-xl">
                <div className="font-editorial text-3xl text-[#dfb277]">100%</div>
                <div className="text-xs font-mono uppercase text-white mt-1">Audit Transparency</div>
              </div>
            </div>
          </div>
        </section>

        {/* SUBSIDIARIES INTERACTIVE SHOWCASE */}
        <section className="py-20 sm:py-28 border-b border-white/[0.06] relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12">
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase">
                GROUP STRUCTURE
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white tracking-tight mt-3">
                Our Four Core Corporate Entities
              </h2>
            </div>

            {/* Entity Navigation Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
              {subsidiaries.map((sub) => {
                const isActive = activeEntity === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setActiveEntity(sub.id)}
                    className={`p-5 text-left border rounded-xl transition-all ${
                      isActive
                        ? "bg-[#dfb277] text-black border-[#dfb277] shadow-[0_0_20px_rgba(223,178,119,0.3)] font-bold"
                        : "bg-[#030712] text-zinc-300 border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div className="text-[10px] font-mono uppercase tracking-widest opacity-75">{sub.focus}</div>
                    <div className="font-editorial text-lg mt-1 leading-tight">{sub.name}</div>
                  </button>
                );
              })}
            </div>

            {/* Selected Subsidiary Detail Panel */}
            {subsidiaries.map((sub) => {
              if (sub.id !== activeEntity) return null;
              const Icon = sub.icon;
              return (
                <div key={sub.id} className="bg-[#030712] border border-[#dfb277]/40 p-8 sm:p-12 rounded-3xl animate-in fade-in duration-300 shadow-2xl">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-8">
                    <div>
                      <span className="text-xs font-mono font-bold text-[#dfb277] uppercase tracking-widest">
                        {sub.focus}
                      </span>
                      <h3 className="font-editorial text-3xl sm:text-4xl text-white font-light mt-2">{sub.name}</h3>
                      <p className="text-xs text-zinc-400 font-mono mt-1">HQ Location: {sub.location}</p>
                    </div>

                    <div className="bg-white/[0.04] border border-white/10 px-5 py-3 rounded-xl shrink-0">
                      <div className="text-[10px] font-mono text-zinc-500 uppercase">Annual Operational Capacity</div>
                      <div className="text-lg font-editorial text-[#dfb277]">{sub.capacity}</div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed mb-8 max-w-4xl">
                    {sub.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {sub.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-3 bg-white/[0.02] border border-white/10 p-4 rounded-xl text-xs text-zinc-200">
                        <CheckCircle2 className="h-4 w-4 text-[#dfb277] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

          </div>
        </section>

        {/* GLOBAL TRADE HUBS */}
        <section className="py-20 sm:py-28 border-b border-white/[0.06] bg-[#030710] relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase">
                STRATEGIC NETWORK
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white tracking-tight mt-3">
                Global Trade & Liaison Hubs
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {globalHubs.map((hub) => (
                <div key={hub.city} className="bg-[#030712] border border-white/10 p-7 rounded-2xl hover:border-[#dfb277]/40 transition-colors">
                  <MapPin className="h-7 w-7 text-[#dfb277] mb-4" />
                  <span className="text-[10px] font-mono text-[#dfb277] font-bold tracking-widest uppercase block mb-1">
                    {hub.country}
                  </span>
                  <h3 className="font-editorial text-2xl text-white font-light mb-2">{hub.city}</h3>
                  <div className="text-xs font-mono text-zinc-300 font-semibold mb-3">{hub.role}</div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">{hub.desc}</p>
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
                Corporate Joint Ventures & Buyer Partnerships
              </h2>
              <p className="text-sm text-zinc-400 font-light max-w-2xl mx-auto mt-4 mb-8 leading-relaxed">
                Connect directly with the Group Executive Board to explore corporate sourcing contracts, vendor registration, or equity joint ventures.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-[#dfb277] text-black px-8 py-4 text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_25px_rgba(223,178,119,0.3)]"
              >
                <span>INITIATE CORPORATE DIALOGUE</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
