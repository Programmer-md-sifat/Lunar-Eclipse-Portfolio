import { useState, type FormEvent } from "react";
import { PageTransition } from "../components/common/PageTransition";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Building2,
  ShieldCheck,
  FileCheck2,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { footerData } from "../data/common/navigation";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    serviceType: "Global Fabric & Raw Materials Sourcing",
    estimatedVolume: "1,000 - 10,000 pcs",
    incoterm: "FOB Port of Exit",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "What is your standard turnaround time for fabric lab dips and sample prototypes?",
      a: "Lab dips, shade swatches, and pre-production garment prototypes are dispatched via express international courier within 7 business days of receiving your tech pack or reference swatch.",
    },
    {
      q: "What payment and commercial terms does Lunar Eclipse Group accept?",
      a: "We support flexible Incoterms including FOB Dhaka/Chittagong, CIF destination port, and DDP direct warehouse delivery. Commercial payment options include Irrevocable L/C at Sight, 90-day Usance L/C, and Wire Transfer (T/T).",
    },
    {
      q: "Can your defence division handle confidential government tenders under NDAs?",
      a: "Yes. Our institutional division operates isolated production lines for mil-spec uniforms, NIR camouflage textiles, and rank insignia. All tender documentation is managed under strict non-disclosure protocols.",
    },
    {
      q: "Do you supply certified eco-friendly and organic textiles?",
      a: "All organic cotton and recycled polyester lines carry GOTS (Global Organic Textile Standard) and OEKO-TEX Standard 100 certifications, complete with full supply chain transaction certificates.",
    },
  ];

  return (
    <PageTransition>
      <div className="w-full bg-[#020509] text-white">

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 border-b border-white/[0.06] overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#dfb277]/[0.03] blur-[180px]" />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 z-10">
            <div className="max-w-4xl">
              <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase flex items-center gap-2">
                <span className="opacity-60">05</span>
                <span className="h-[1px] w-6 bg-[#dfb277]/60" />
                GLOBAL MERCHANDISING & INQUIRIES
              </span>

              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight mt-5 leading-[1.08]">
                Initiate Commercial <br />
                <span className="font-georgia text-[#dfb277]">Inquiry & Tenders</span>
              </h1>

              <p className="mt-8 text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-3xl">
                Connect directly with our senior merchandising leads, fabric procurement directors, and defense tender specialists for instant cost quotations, factory audits, or material swatches.
              </p>
            </div>

            {/* SLA BADGE BAR */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 bg-[#030712] border border-white/10 p-4 rounded-xl">
                <Clock className="h-5 w-5 text-[#dfb277]" />
                <div>
                  <div className="text-xs font-mono text-white font-bold uppercase">24-Hour Response SLA</div>
                  <div className="text-[11px] text-zinc-400">Guaranteed feedback on tech packs</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#030712] border border-white/10 p-4 rounded-xl">
                <ShieldCheck className="h-5 w-5 text-[#dfb277]" />
                <div>
                  <div className="text-xs font-mono text-white font-bold uppercase">Confidential NDAs</div>
                  <div className="text-[11px] text-zinc-400">Secure government tender handling</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#030712] border border-white/10 p-4 rounded-xl">
                <FileCheck2 className="h-5 w-5 text-[#dfb277]" />
                <div>
                  <div className="text-xs font-mono text-white font-bold uppercase">7-Day Express Sampling</div>
                  <div className="text-[11px] text-zinc-400">Rapid lab dips & prototypes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN FORM & DIRECTORY SECTION */}
        <section className="py-20 sm:py-28 border-b border-white/[0.06] relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Form Column */}
              <div className="lg:col-span-7">
                <div className="bg-[#030712] border border-white/10 p-8 sm:p-10 rounded-2xl shadow-2xl">
                  {submitted ? (
                    <div className="py-16 text-center animate-in fade-in duration-300">
                      <div className="h-16 w-16 bg-[#dfb277]/10 border border-[#dfb277] rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="h-8 w-8 text-[#dfb277]" />
                      </div>
                      <h3 className="font-editorial text-3xl text-white font-light mb-2">Inquiry Successfully Registered</h3>
                      <p className="text-sm text-zinc-300 font-light max-w-md mx-auto mb-8 leading-relaxed">
                        Thank you for contacting Lunar Eclipse International Group. A senior Merchandising Director has been assigned to your request and will follow up within 24 hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="bg-[#dfb277] text-black px-6 py-3 text-xs font-mono font-bold tracking-widest uppercase rounded-lg hover:bg-white transition-colors"
                      >
                        SUBMIT ANOTHER INQUIRY
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="border-b border-white/10 pb-4 mb-6">
                        <h2 className="font-editorial text-2xl text-white font-light">Commercial Specification Form</h2>
                        <p className="text-xs text-zinc-400 font-light mt-1">Fields marked with an asterisk (*) are required for quotation.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full border border-white/15 bg-black/50 px-4 py-3 text-sm text-white placeholder-zinc-600 rounded-lg focus:border-[#dfb277] focus:outline-none transition-colors"
                            placeholder="e.g., Alexander Vance"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                            Company / Brand Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full border border-white/15 bg-black/50 px-4 py-3 text-sm text-white placeholder-zinc-600 rounded-lg focus:border-[#dfb277] focus:outline-none transition-colors"
                            placeholder="e.g., Vanguard Retail Group"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                            Work Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full border border-white/15 bg-black/50 px-4 py-3 text-sm text-white placeholder-zinc-600 rounded-lg focus:border-[#dfb277] focus:outline-none transition-colors"
                            placeholder="alexander@vanguardretail.com"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                            Direct Phone / WhatsApp
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full border border-white/15 bg-black/50 px-4 py-3 text-sm text-white placeholder-zinc-600 rounded-lg focus:border-[#dfb277] focus:outline-none transition-colors"
                            placeholder="+1 (555) 019-2831"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                            Primary Requirement
                          </label>
                          <select
                            value={formData.serviceType}
                            onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                            className="w-full border border-white/15 bg-[#070d18] px-4 py-3 text-sm text-white rounded-lg focus:border-[#dfb277] focus:outline-none transition-colors"
                          >
                            <option value="Global Fabric & Raw Materials Sourcing">Global Fabric & Raw Materials Sourcing</option>
                            <option value="Custom Garment Manufacturing">Custom Garment Manufacturing</option>
                            <option value="Uniforms, Badges & Defense Tender">Uniforms, Badges & Defense Tender</option>
                            <option value="Export & Freight Supply Logistics">Export & Freight Supply Logistics</option>
                            <option value="Corporate Joint Venture / Vendor Reg.">Corporate Joint Venture / Vendor Reg.</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                            Estimated Order Volume
                          </label>
                          <select
                            value={formData.estimatedVolume}
                            onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                            className="w-full border border-white/15 bg-[#070d18] px-4 py-3 text-sm text-white rounded-lg focus:border-[#dfb277] focus:outline-none transition-colors"
                          >
                            <option value="Sampling / Prototyping">Sampling / Prototyping (Lab Dips)</option>
                            <option value="1,000 - 10,000 pcs">1,000 - 10,000 pcs</option>
                            <option value="10,000 - 50,000 pcs">10,000 - 50,000 pcs</option>
                            <option value="50,000+ pcs (Enterprise)">50,000+ pcs (Enterprise Program)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                          Tech Pack Details & Target Specifications
                        </label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full border border-white/15 bg-black/50 px-4 py-3 text-sm text-white placeholder-zinc-600 rounded-lg focus:border-[#dfb277] focus:outline-none transition-colors"
                          placeholder="Please specify target fabric GSM, fiber compositions, target FOB price, delivery timelines, or tender requirements..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-3 bg-[#dfb277] text-black py-4 text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(223,178,119,0.3)]"
                      >
                        <span>SUBMIT COMMERCIAL SPECIFICATION</span>
                        <Send className="h-4 w-4" />
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Directory Column */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Global HQ Directory Card */}
                <div className="bg-[#030712] border border-white/10 p-8 rounded-2xl">
                  <h3 className="font-editorial text-2xl text-white font-light mb-6 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-[#dfb277]" />
                    <span>Global Headquarters</span>
                  </h3>

                  <div className="space-y-5 text-sm">
                    <div className="flex items-start gap-3.5">
                      <Mail className="h-5 w-5 text-[#dfb277] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">Commercial Email</div>
                        <div className="text-white font-medium">{footerData.contactInfo.email}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3.5">
                      <Phone className="h-5 w-5 text-[#dfb277] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">Direct Hotline</div>
                        <div className="text-white font-medium">{footerData.contactInfo.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3.5">
                      <MapPin className="h-5 w-5 text-[#dfb277] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">Corporate Complex</div>
                        <div className="text-zinc-300 font-light">{footerData.contactInfo.address}, Dhaka, Bangladesh</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Regional Hubs Quick Reference */}
                <div className="bg-[#030712] border border-white/10 p-8 rounded-2xl">
                  <h4 className="font-editorial text-xl text-white font-light mb-4">Regional Liaison Offices</h4>
                  
                  <div className="space-y-4 text-xs font-mono">
                    <div className="border-b border-white/5 pb-3 flex justify-between">
                      <span className="text-white">Hong Kong Hub</span>
                      <span className="text-[#dfb277]">hk@lunareclipsegroup.com</span>
                    </div>
                    <div className="border-b border-white/5 pb-3 flex justify-between">
                      <span className="text-white">London Office</span>
                      <span className="text-[#dfb277]">uk@lunareclipsegroup.com</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white">New York Hub</span>
                      <span className="text-[#dfb277]">usa@lunareclipsegroup.com</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="py-20 sm:py-28 bg-[#030710] relative">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <div className="text-center mb-16">
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase">
                PROCUREMENT GUIDANCE
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white tracking-tight mt-3">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={faq.q}
                    className="bg-[#030712] border border-white/10 rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4"
                    >
                      <span className="font-editorial text-xl text-white font-light">{faq.q}</span>
                      <ChevronDown className={`h-5 w-5 text-[#dfb277] transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
