import { useState, type FormEvent } from "react";
import { PageTransition } from "../components/common/PageTransition";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { footerData } from "../data/common/navigation";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    serviceType: "Global Sourcing & Fabrics",
    estimatedVolume: "1,000 - 10,000 pcs",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <div className="w-full bg-[#06090e] pt-32 pb-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#dfb277]">
              Work With Us
            </span>
            <h1 className="font-editorial mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-white">
              Initiate Your <span className="font-georgia text-[#dfb277]">Inquiry</span>
            </h1>
            <p className="mt-6 text-base text-zinc-300 leading-relaxed">
              Connect directly with our global merchandising, fabric sourcing, and manufacturing leads to receive quotations, material swatches, or schedule factory audits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur-sm">
                {submitted ? (
                  <div className="py-12 text-center">
                    <CheckCircle2 className="h-16 w-16 text-[#dfb277] mx-auto mb-4" />
                    <h3 className="font-editorial text-3xl text-white mb-2">Inquiry Submitted</h3>
                    <p className="text-zinc-300 text-sm max-w-md mx-auto mb-6">
                      Thank you for contacting Lunar Eclipse International Group. A senior merchandising representative will review your requirements and respond within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="border border-[#dfb277] text-[#dfb277] px-6 py-2.5 text-xs font-semibold tracking-widest hover:bg-[#dfb277] hover:text-black transition-colors"
                    >
                      SEND ANOTHER INQUIRY
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-[#dfb277] focus:outline-none"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">
                          Company / Brand *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-[#dfb277] focus:outline-none"
                          placeholder="Global Retail Corp"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-[#dfb277] focus:outline-none"
                          placeholder="jane@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-[#dfb277] focus:outline-none"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">
                          Primary Service
                        </label>
                        <select
                          value={formData.serviceType}
                          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                          className="w-full border border-white/15 bg-black/60 px-4 py-3 text-sm text-white focus:border-[#dfb277] focus:outline-none"
                        >
                          <option value="Global Sourcing & Fabrics">Global Sourcing & Fabrics</option>
                          <option value="Custom Garment Manufacturing">Custom Garment Manufacturing</option>
                          <option value="Uniforms & Badges Tender">Uniforms & Badges Tender</option>
                          <option value="Export & Logistics Supply">Export & Logistics Supply</option>
                          <option value="General Corporate Partnership">General Corporate Partnership</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">
                          Estimated Volume
                        </label>
                        <select
                          value={formData.estimatedVolume}
                          onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                          className="w-full border border-white/15 bg-black/60 px-4 py-3 text-sm text-white focus:border-[#dfb277] focus:outline-none"
                        >
                          <option value="Sampling / Prototyping">Sampling / Prototyping</option>
                          <option value="1,000 - 10,000 pcs">1,000 - 10,000 pcs</option>
                          <option value="10,000 - 50,000 pcs">10,000 - 50,000 pcs</option>
                          <option value="50,000+ pcs (Enterprise)">50,000+ pcs (Enterprise)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">
                        Project Details & Specifications
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-[#dfb277] focus:outline-none"
                        placeholder="Please include target materials, order quantities, delivery timelines, or tender requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-3 bg-white px-8 py-4 text-xs font-semibold tracking-[0.2em] text-zinc-950 hover:bg-[#dfb277] transition-all"
                    >
                      <span>SUBMIT INQUIRY</span>
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Direct Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="border border-white/10 bg-white/[0.02] p-8">
                <h3 className="font-editorial text-2xl text-white mb-6">Direct Channels</h3>
                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-[#dfb277] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs uppercase tracking-widest text-zinc-400">General Inquiries</div>
                      <div className="text-white font-medium">{footerData.contactInfo.email}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-[#dfb277] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs uppercase tracking-widest text-zinc-400">Headquarters Direct</div>
                      <div className="text-white font-medium">{footerData.contactInfo.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-[#dfb277] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs uppercase tracking-widest text-zinc-400">Global Hub</div>
                      <div className="text-white">{footerData.contactInfo.address}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-white/10 bg-white/[0.02] p-8">
                <h4 className="font-editorial text-xl text-white mb-3">Response SLA</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  All commercial sourcing requests, tech packs, and production proposals are assigned to a dedicated Merchandising Director with guaranteed initial review within 1 business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
