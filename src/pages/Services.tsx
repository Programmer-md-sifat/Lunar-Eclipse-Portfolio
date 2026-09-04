import { PageTransition } from "../components/common/PageTransition";
import { Link } from "react-router-dom";
import {
  Layers,
  Scissors,
  ShieldCheck,
  Truck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  FileCheck2,
  Building2,
  Ship,
  Scale,
  Award,
} from "lucide-react";
import fabricRollsImg from "../assets/images/fabric_rolls_textiles_1788067226249.jpg";

export function Services() {
  const serviceList = [
    {
      number: "01",
      icon: Layers,
      title: "Global Fabric & Raw Materials Sourcing",
      category: "RAW MATERIAL PROCUREMENT",
      description:
        "Direct procurement of certified foreign and domestic woven fabrics, circular knits, indigo denims, custom dye lots, luxury interlinings, and bespoke metal accessories with full spectral shade reports.",
      capabilities: [
        "Organic GOTS & BCI Cotton",
        "High-GSM Technical Weaves",
        "Die-Cast Brass & Zinc Trims",
        "Lab-Dipped Shade Approvals",
        "Anti-Pilling & Color Fastness Reports",
      ],
      image: fabricRollsImg,
    },
    {
      number: "02",
      icon: Scissors,
      title: "Custom Garment & Apparel Manufacturing",
      category: "INDUSTRIAL SEWING & CUTTING",
      description:
        "High-velocity production lines specializing in ready-made garments, dresses, hoodies, caps, activewear, tailored outerwear, and private label collections for international retail brands.",
      capabilities: [
        "Automated Gerber Pattern Cutting",
        "7-Day Prototyping & Sample Dip",
        "Inline AQL 2.5/4.0 Auditing",
        "Custom Embroidery & Screen Printing",
        "Steam Pressing & Retail Barcoding",
      ],
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop",
    },
    {
      number: "03",
      icon: ShieldCheck,
      title: "Uniforms, Insignia & Defence Tenders",
      category: "INSTITUTIONAL & MIL-SPEC",
      description:
        "Specialized high-security contracts for government ministries, defense forces, aviation carriers, rank badges, bullion epaulettes, tactical ripstop uniforms, and healthcare workwear.",
      capabilities: [
        "Flame-Retardant & Anti-Static Finishes",
        "Bullion Wire & Jacquard Epaulettes",
        "NIR Camouflage & Teflon Coating",
        "Confidential Tender NDA Compliance",
        "Mil-Spec Standard Fabric Testing",
      ],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    },
    {
      number: "04",
      icon: Truck,
      title: "Global Freight & Supply Chain Logistics",
      category: "INTERNATIONAL TRADE LOGISTICS",
      description:
        "Comprehensive sea and air freight forwarding, customs clearance, bonded warehousing, multi-port container consolidation, and door-to-door delivery across Europe, Americas, and Asia.",
      capabilities: [
        "Flexible FOB / CIF / DDP Incoterms",
        "Bonded Warehouse Inventory Management",
        "Real-Time Container Tracking",
        "Customs Duty & Tariff Clearance",
        "Multi-Country Consignment Split",
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const workflowSteps = [
    { step: "01", title: "Tech Pack Analysis", desc: "Our merchandising team evaluates your tech pack, fabric compositions, GSM specs, and target FOB pricing." },
    { step: "02", title: "Rapid Sampling (7 Days)", desc: "Lab dips, fabric swatches, and pre-production sample prototypes are dispatched via express courier for sign-off." },
    { step: "03", title: "Mill Weaving & Bulk Sewing", desc: "Automated pattern cutting and high-velocity sewing commence with inline AQL 2.5 quality control checks." },
    { step: "04", title: "Final Audit & Packaging", desc: "Pre-shipment inspection, needle detector screening, steam pressing, and retail-ready polybag packing." },
    { step: "05", title: "Port Freight Delivery", desc: "Container loading, bill of lading issuance, customs clearance, and multi-port shipment to your warehouse." },
  ];

  return (
    <PageTransition>
      <div className="w-full bg-[#020509] text-white">

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-white/[0.06] overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[#dfb277]/[0.03] blur-[180px]" />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 z-10">
            <div className="max-w-4xl">
              <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase flex items-center gap-2">
                <span className="opacity-60">03</span>
                <span className="h-[1px] w-6 bg-[#dfb277]/60" />
                OUR BUSINESS & SOLUTIONS
              </span>

              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight mt-5 leading-[1.08]">
                End-to-End Apparel & <br />
                <span className="font-georgia text-[#dfb277]">Supply Chain Lifecycle</span>
              </h1>

              <p className="mt-8 text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-3xl">
                From fiber selection and bulk weaving to automated cutting, precision stitching, mil-spec testing, and international freight delivery — we manage every link of the global garment supply chain.
              </p>
            </div>

            {/* Hero section brief description */}
          </div>
        </section>

        {/* CORE SERVICES DETAILED BREAKDOWN */}
        <section className="py-20 sm:py-28 border-b border-white/[0.06] relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 space-y-20">
            {serviceList.map((s, index) => {
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
                Discuss Your Procurement Requirements
              </h2>
              <p className="text-sm text-zinc-400 font-light max-w-2xl mx-auto mt-4 mb-8 leading-relaxed">
                Connect directly with our senior merchandising directors for a formal cost quotation, fabric lab dips, or technical feasibility report.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-[#dfb277] text-black px-8 py-4 text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_25px_rgba(223,178,119,0.3)]"
              >
                <span>INITIATE PROJECT INQUIRY</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
