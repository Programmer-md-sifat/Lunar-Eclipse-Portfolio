import { PageTransition } from "../components/common/PageTransition";
import { Link } from "react-router-dom";
import { Layers, Scissors, Truck, ShieldCheck, ArrowRight } from "lucide-react";

export function Services() {
  const serviceList = [
    {
      icon: Layers,
      title: "Global Fabric & Trim Sourcing",
      description:
        "Direct procurement of premium foreign and domestic woven fabrics, knitwear, denim, buttons, zippers, luxury interlinings, and bespoke accessories with verifiable lab dips and testing reports.",
      details: ["Organic & Sustainable Textiles", "High-GSM Custom Weaves", "Luxury Hardware & Trims"],
    },
    {
      icon: Scissors,
      title: "Custom Garment Manufacturing",
      description:
        "High-capacity production lines specializing in ready-made garments, dresses, caps, sportswear, bags, tailored outerwear, and private label collections for international fashion conglomerates.",
      details: ["Pattern Making & Grading", "Sample Prototyping (7 Days)", "Strict In-Line Quality Audits"],
    },
    {
      icon: ShieldCheck,
      title: "Uniforms & Institutional Supply",
      description:
        "Specialized government orders, corporate uniform contracts, precision rank badges, military insignia, tactical utility apparel, and healthcare workwear designed to exact institutional specifications.",
      details: ["Anti-Bacterial & FR Finishes", "Precision Embroidery & Metal Badges", "Government Tenders & Compliance"],
    },
    {
      icon: Truck,
      title: "Global Export & Supply Chain Logistics",
      description:
        "Comprehensive sea and air freight forwarding, customs clearance, bonded warehousing, and multi-port international export delivery to Europe, North America, Middle East, and Asia-Pacific.",
      details: ["FOB / CIF / DDP Terms", "Containerized Logistics", "Real-Time Shipment Tracking"],
    },
  ];

  return (
    <PageTransition>
      <div className="w-full bg-[#06090e] pt-32 pb-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#dfb277]">
              Our Business & Solutions
            </span>
            <h1 className="font-editorial mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-white">
              End-to-End <span className="font-georgia text-[#dfb277]">Apparel Solutions</span>
            </h1>
            <p className="mt-6 text-base text-zinc-300 leading-relaxed">
              From fiber selection and bulk weaving to automated cutting, precision stitching, and international shipment clearance — we manage the complete lifecycle of apparel production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {serviceList.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="border border-white/10 bg-white/[0.02] p-8 lg:p-10 transition-all duration-300 hover:border-[#dfb277]/50 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center justify-between mb-6">
                    <Icon className="h-8 w-8 text-[#dfb277]" />
                    <span className="text-xs font-mono text-zinc-600">0{index + 1}</span>
                  </div>
                  <h3 className="font-editorial text-2xl text-white mb-3">{service.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">{service.description}</p>
                  <div className="border-t border-white/5 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {service.details.map((d) => (
                        <span
                          key={d}
                          className="text-[11px] bg-white/[0.04] text-zinc-300 px-2.5 py-1 border border-white/5"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center bg-[#dfb277]/10 border border-[#dfb277]/30 p-12">
            <h3 className="font-editorial text-3xl text-white mb-4">Request a Bulk Production Quote</h3>
            <p className="text-zinc-300 text-sm max-w-lg mx-auto mb-8">
              Submit your tech pack or procurement specifications for a detailed cost breakdown and lead time evaluation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-xs font-semibold tracking-[0.2em] hover:bg-[#dfb277] transition-all"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
