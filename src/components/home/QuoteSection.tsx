import { homeQuoteData } from "../../data/home/aboutData";
import { Quote } from "lucide-react";
import quoteAuthorImg from "../../assets/images/quote_author.jpg";

export function QuoteSection() {
  return (
    <section
      id="home-quote-section"
      className="relative w-full overflow-hidden border-y border-white/10 bg-[#04070c] py-24 sm:py-28 lg:py-36"
      aria-label="Executive Philosophy and Vision"
    >
      {/* Background Ambience & Orbital Halo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(223,178,119,0.06),transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03] opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[950px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.02] opacity-40" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 border border-[#dfb277]/30 bg-[#dfb277]/5 px-4 py-1 text-[16px] font-bold tracking-[0.3em] text-[#dfb277]">
          <Quote className="h-3 w-3 fill-[#dfb277]" />
          <span>{homeQuoteData.badge}</span>
        </div>

        {/* Large Decorative Icon */}
        <div className="mb-6 flex justify-center">
          <svg
            className="h-10 w-10 text-[#dfb277]/40 sm:h-14 sm:w-14"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Main Quote Statement */}
        <blockquote
          id="executive-quote-text"
          className="font-editorial text-2xl font-light leading-[1.35] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[42px]"
        >
          <span>{homeQuoteData.quoteText}</span>
          <span className="font-georgia font-normal text-[#dfb277]">
            {homeQuoteData.highlightedPhrase}
          </span>
        </blockquote>

        {/* Supporting Narrative / Explanatory Text */}
        {homeQuoteData.supportingText && (
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base md:text-lg">
            {homeQuoteData.supportingText}
          </p>
        )}

        {/* Author Details & Brand Monogram */}
        <div className="mt-12 flex flex-col items-center justify-center">
          {/* Subtle horizontal accent line */}
          <div className="mb-6 h-[1px] w-16 bg-gradient-to-r from-transparent via-[#dfb277] to-transparent" />

          <div
            id="quote-author-name"
            className="font-display-modern text-xs font-semibold uppercase tracking-[0.26em] text-white sm:text-sm"
          >
            {homeQuoteData.author}
          </div>

          <div className="mt-1 text-xs tracking-widest text-zinc-400">
            {homeQuoteData.role}
          </div>

          <div className="mt-0.5 text-[11px] uppercase tracking-[0.2em] text-[#dfb277]/80">
            {homeQuoteData.organization}
          </div>

          {/* Author Circular Portrait */}
          <div className="mt-7 flex justify-center">
            <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full p-[2px] bg-gradient-to-tr from-[#dfb277] via-[#dfb277]/50 to-[#dfb277]/20 shadow-[0_0_30px_rgba(223,178,119,0.2)]">
              <div className="h-full w-full rounded-full overflow-hidden border-2 border-[#04070c] bg-zinc-900">
                <img
                  src={quoteAuthorImg}
                  alt={homeQuoteData.author}
                  className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
