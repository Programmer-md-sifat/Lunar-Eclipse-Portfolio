import { useState, type FormEvent } from "react";
import { PageTransition } from "../components/common/PageTransition";
import {
  Send,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import {
  contactHeroData,
  contactSlaBadges,
  contactFaqs,
  contactFormConfig,
  directContactChannels,
} from "../data/contactData";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <div className="w-full bg-[#020509] text-white">

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 border-b border-white/[0.06] overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#dfb277]/[0.03] blur-[180px]" />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 z-10">
            <div className="max-w-4xl">
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08]">
                {contactHeroData.title} <br />
                <span className="font-georgia text-[#dfb277]">{contactHeroData.titleHighlight}</span>
              </h1>

              <p className="mt-8 text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-3xl">
                {contactHeroData.description}
              </p>
            </div>

            {/* SLA BADGE BAR */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10">
              {contactSlaBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div key={badge.title} className="flex items-center gap-3 bg-[#030712] border border-white/10 p-4 rounded-xl">
                    <Icon className="h-5 w-5 text-[#dfb277]" />
                    <div>
                      <div className="text-xs font-mono text-white font-bold uppercase">{badge.title}</div>
                      <div className="text-[11px] text-zinc-400">{badge.detail}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* MAIN FORM & DIRECTORY SECTION */}
        <section className="py-20 sm:py-28 border-b border-white/[0.06] relative">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            
            {/* Centered Form Card */}
            <div className="bg-[#030712] border border-white/10 p-8 sm:p-12 rounded-3xl shadow-2xl relative">
              {submitted ? (
                <div className="py-16 text-center animate-in fade-in duration-300">
                  <div className="h-16 w-16 bg-[#dfb277]/10 border border-[#dfb277] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-8 w-8 text-[#dfb277]" />
                  </div>
                  <h3 className="font-editorial text-3xl text-white font-light mb-2">{contactFormConfig.successTitle}</h3>
                  <p className="text-sm text-zinc-300 font-light max-w-md mx-auto mb-8 leading-relaxed">
                    {contactFormConfig.successMessage}
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
                  <div className="border-b border-white/10 pb-5 mb-8 text-center">
                    <span className="inline-block text-[10px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase mb-2">
                      COMMERCIAL SPECIFICATION
                    </span>
                    <h2 className="font-editorial text-2xl sm:text-3xl text-white font-light">{contactFormConfig.title}</h2>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1.5">{contactFormConfig.subtitle}</p>
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
                        className="w-full border border-white/15 bg-black/50 px-4 py-3 text-sm text-white placeholder-zinc-600 rounded-xl focus:border-[#dfb277] focus:outline-none transition-colors"
                        placeholder="e.g., Md. Sifat"
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
                        className="w-full border border-white/15 bg-black/50 px-4 py-3 text-sm text-white placeholder-zinc-600 rounded-xl focus:border-[#dfb277] focus:outline-none transition-colors"
                        placeholder="e.g., Lunar Group"
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
                        className="w-full border border-white/15 bg-black/50 px-4 py-3 text-sm text-white placeholder-zinc-600 rounded-xl focus:border-[#dfb277] focus:outline-none transition-colors"
                        placeholder="contact@lunargroup.com"
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
                        className="w-full border border-white/15 bg-black/50 px-4 py-3 text-sm text-white placeholder-zinc-600 rounded-xl focus:border-[#dfb277] focus:outline-none transition-colors"
                        placeholder="+88 (017) 586-2728"
                      />
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
                      className="w-full border border-white/15 bg-black/50 px-4 py-3 text-sm text-white placeholder-zinc-600 rounded-xl focus:border-[#dfb277] focus:outline-none transition-colors"
                      placeholder="Please specify target fabric GSM, fiber compositions, target FOB price, delivery timelines, or tender requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 bg-[#dfb277] text-black py-4 text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(223,178,119,0.3)] cursor-pointer"
                  >
                    <span>SUBMIT COMMERCIAL SPECIFICATION</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact Channels Below Centered Form */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {directContactChannels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <div
                    key={channel.label}
                    className="bg-[#030712] border border-white/10 p-6 sm:p-7 rounded-2xl flex flex-col justify-between hover:border-[#dfb277]/40 transition-all duration-300 group h-full shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="h-11 w-11 rounded-xl bg-[#dfb277]/10 border border-[#dfb277]/25 flex items-center justify-center text-[#dfb277] group-hover:bg-[#dfb277] group-hover:text-black transition-all">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded">
                          {channel.badge}
                        </span>
                      </div>

                      <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#dfb277] mb-2">
                        {channel.label}
                      </div>

                      {channel.href ? (
                        <a
                          href={channel.href}
                          className="text-white font-medium text-sm sm:text-base hover:text-[#dfb277] transition-colors break-words block leading-snug"
                        >
                          {channel.value}
                        </a>
                      ) : (
                        <div className="text-white font-medium text-sm sm:text-base leading-snug">
                          {channel.value}
                        </div>
                      )}
                    </div>

                    <div className="mt-6 pt-3.5 border-t border-white/5 text-[11px] text-zinc-400 font-light flex items-center justify-between">
                      <span>{channel.subtext}</span>
                    </div>
                  </div>
                );
              })}
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
              {contactFaqs.map((faq, i) => {
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
