import { useState } from "react";
import { PageTransition } from "../components/common/PageTransition";
import { Link } from "react-router-dom";
import { ArrowRight, User } from "lucide-react";
import {
  teamHeroData,
  teamSections,
  teamCultureData,
  teamCtaData,
  TeamMember,
} from "../data/teamData";

function MemberCard({ member }: { member: TeamMember }) {
  const [retryStage, setRetryStage] = useState(0); // 0: primary lh3, 1: drive thumbnail, 2: monogram fallback

  const isExecutiveAvatar = Boolean(
    member.useAvatar ||
    member.name.toLowerCase().includes("saidur") ||
    member.name.toLowerCase().includes("saidaur")
  );

  // Extract Google Drive ID if present
  const driveIdMatch = member.image.match(/\/d\/([a-zA-Z0-9_-]+)/) || member.image.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  const driveId = driveIdMatch
    ? driveIdMatch[1]
    : member.image.includes("lh3.googleusercontent.com/d/")
    ? member.image.split("/d/")[1]
    : null;

  let currentSrc = member.image;
  if (driveId) {
    if (retryStage === 0) {
      currentSrc = `https://lh3.googleusercontent.com/d/${driveId}`;
    } else if (retryStage === 1) {
      currentSrc = `https://drive.google.com/thumbnail?id=${driveId}&sz=w800`;
    }
  }

  const handleImageError = () => {
    if (driveId && retryStage === 0) {
      setRetryStage(1);
    } else {
      setRetryStage(2);
    }
  };

  // Compute initials for fallback
  const initials = member.name
    .replace(/^Md\.\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="bg-[#030712] border border-white/10 rounded-2xl p-6 sm:p-7 hover:border-[#dfb277]/40 hover:bg-[#040914] transition-all duration-300 group flex flex-col items-center text-center justify-between shadow-xl relative overflow-hidden">
      {/* Subtle top corner ambient glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#dfb277]/[0.02] group-hover:bg-[#dfb277]/[0.06] blur-2xl transition-all duration-500" />

      {/* Circular Portrait Photo / Avatar */}
      <div className="relative mb-5 sm:mb-6">
        <div className={`h-36 w-36 sm:h-44 sm:w-44 rounded-full overflow-hidden bg-zinc-900 border-2 ${isExecutiveAvatar ? "border-[#dfb277]/60 shadow-[0_0_25px_rgba(223,178,119,0.2)]" : "border-white/15"} group-hover:border-[#dfb277] group-hover:shadow-[0_0_30px_rgba(223,178,119,0.3)] transition-all duration-500 relative flex items-center justify-center`}>
          {isExecutiveAvatar ? (
            <div className="w-full h-full flex items-center justify-center relative bg-gradient-to-b from-[#101826] via-[#080d16] to-[#020409] select-none">
              {/* Soft ambient center glow */}
              <div className="absolute w-24 h-24 rounded-full bg-[#dfb277]/10 blur-xl pointer-events-none" />

              {/* Executive Avatar Figure */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#dfb277]/25 via-[#dfb277]/10 to-transparent border border-[#dfb277]/40 flex items-center justify-center shadow-[inset_0_0_15px_rgba(223,178,119,0.2)] group-hover:scale-105 transition-transform duration-500">
                  <User className="w-9 h-9 sm:w-11 sm:h-11 text-[#dfb277]" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          ) : retryStage < 2 && currentSrc ? (
            <img
              src={currentSrc}
              alt={member.name}
              referrerPolicy="no-referrer"
              onError={handleImageError}
              className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0c1424] via-[#050811] to-[#0c1424] text-[#dfb277] select-none">
              <span className="font-editorial text-3xl sm:text-4xl tracking-widest font-light">
                {initials || member.name.slice(0, 2).toUpperCase()}
              </span>
            </div>
          )}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#030712]/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>

      {/* Name and Designation */}
      <div className="w-full">
        <h3 className="font-editorial text-lg sm:text-xl text-white font-light group-hover:text-[#dfb277] transition-colors leading-snug mb-1.5">
          {member.name}
        </h3>
        <p className="text-xs text-[#dfb277] font-mono font-medium tracking-wide uppercase">
          {member.role}
        </p>
      </div>
    </div>
  );
}

export function Team() {
  return (
    <PageTransition>
      <div className="w-full bg-[#020509] text-white">
        
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-white/[0.06] overflow-hidden">
          <div className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-[#dfb277]/[0.03] blur-[180px]" />
          <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] rounded-full bg-blue-900/[0.04] blur-[180px]" />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 z-10 text-center sm:text-left">
            <div className="max-w-4xl">
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08]">
                {teamHeroData.title} <br />
                <span className="font-georgia text-[#dfb277]">{teamHeroData.titleHighlight}</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-3xl">
                {teamHeroData.description}
              </p>
            </div>
          </div>
        </section>

        {/* TEAM SECTIONS BY DEPARTMENT */}
        <div className="bg-[#030710]">
          {teamSections.map((section, idx) => (
            <section
              key={section.id}
              id={section.id}
              className={`py-16 sm:py-24 relative ${
                idx !== teamSections.length - 1 ? "border-b border-white/[0.06]" : ""
              }`}
            >
              <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16 border-b border-white/10 pb-6">
                  <div>
                    <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
                      {section.heading}
                    </h2>
                  </div>
                  {section.subheading && (
                    <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-md">
                      {section.subheading}
                    </p>
                  )}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                  {section.members.map((member) => (
                    <MemberCard key={member.name} member={member} />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* TEAM CULTURE & STANDARDS */}
        <section className="py-20 sm:py-24 border-t border-b border-white/[0.06] bg-[#020509] relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {teamCultureData.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-[#030712] border border-white/10 p-8 rounded-2xl">
                    <Icon className="h-6 w-6 text-[#dfb277] mb-4" />
                    <h3 className="font-editorial text-2xl text-white font-light mb-3">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-24 relative overflow-hidden bg-[#030710]">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="bg-gradient-to-r from-[#030712] via-[#081020] to-[#030712] border border-[#dfb277]/30 p-10 sm:p-14 rounded-3xl relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
                  {teamCtaData.title}
                </h2>
                <p className="text-sm text-zinc-300 font-light leading-relaxed mt-4">
                  {teamCtaData.description}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  to={teamCtaData.buttonLink}
                  className="inline-flex items-center gap-3 bg-[#dfb277] text-black px-8 py-4 text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_25px_rgba(223,178,119,0.3)]"
                >
                  <span>{teamCtaData.buttonText}</span>
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
