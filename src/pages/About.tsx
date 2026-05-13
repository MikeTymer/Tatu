import { Navbar } from "@/components/layout/Navbar";
import { AboutHero } from "@/components/sections/AboutHero";
import { Pillars } from "@/components/sections/Pillars";
import { CoreBeliefs } from "@/components/sections/CoreBeliefs";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { VisionMission } from "@/components/sections/VisionMission";
import { WhyUs } from "@/components/sections/WhyUs";
import { ContactFooter } from "@/components/layout/ContactFooter";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { SEO } from "@/components/common/SEO";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
      <SEO 
        title="About Us"
        description="Learn about Tatu Enterprises' vision, mission, and the expert team behind East Africa's most innovative engineering and software solutions."
        canonical="/about"
      />
      <Navbar />
      <div>
        <AboutHero />
        <Pillars />
        <CoreBeliefs />
        <ProjectGallery />
        <VisionMission />
        <WhyUs />
      </div>
      <ContactFooter />
      <div className="fixed bottom-6 right-6 z-[60] animate-float">
        <WhatsAppButton size="icon" className="h-14 w-14 rounded-full shadow-2xl hover:scale-110 transition-transform" />
      </div>
    </main>
  );
};

export default AboutPage;
