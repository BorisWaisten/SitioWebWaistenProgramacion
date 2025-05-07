"use client"

import Introduction from "@/components/introduction";
import WhyDigital from "@/components/why-digital";
import PortfolioPage from "@/components/portafolio-preview";
import CallToAction from "@/components/call-to-action";
export default function Home() {
  return (
    <main>
      <Introduction />
      <WhyDigital />
      <PortfolioPage />
      <CallToAction />
    </main>
  );
}
