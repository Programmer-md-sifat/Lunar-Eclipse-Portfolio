import { Hero } from "../components/home/Hero";
import { HomeAbout } from "../components/home/HomeAbout";
import { CompanyJourney } from "../components/home/CompanyJourney";
import { QuoteSection } from "../components/home/QuoteSection";
import { MarqueeLogos } from "../components/home/MarqueeLogos";
import { WhatWeDo } from "../components/home/WhatWeDo";
import { StrategicCapability } from "../components/home/StrategicCapability";
import { SupplyProcess } from "../components/home/SupplyProcess";
import { GlobalNetworkMap } from "../components/home/GlobalNetworkMap";
import { PageTransition } from "../components/common/PageTransition";

export function Home() {
  return (
    <PageTransition>
      <main id="home-page-content" className="w-full">
        {/* 1. Hero Section with 3-second auto carousel */}
        <Hero />

        {/* 2. About Us Section */}
        <HomeAbout />

        {/* 2.5. Company Journey Section */}
        <CompanyJourney />

        {/* 3. Executive Quotes & Vision Section */}
        <QuoteSection />

        {/* 3.5. Partner & Market Network Marquee Slider */}
        <MarqueeLogos />

        {/* 3.8. What We Do Core Capabilities Grid */}
        <WhatWeDo />

        {/* 3.9. Strategic Capability Section (Defence & Institutional Supply) */}
        <StrategicCapability />

        {/* 3.95. Supply Process (From Requirement to Delivery) */}
        <SupplyProcess />

        {/* 4. Global Reach & Sourcing Network Map */}
        <GlobalNetworkMap />
      </main>
    </PageTransition>
  );
}

