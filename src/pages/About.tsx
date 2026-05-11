import { Navbar } from "@/components/Navbar";
import { AboutHero } from "@/components/AboutHero";
import { Pillars } from "@/components/Pillars";
import { CoreBeliefs } from "@/components/CoreBeliefs";
import { ProjectGallery } from "@/components/ProjectGallery";
import { VisionMission } from "@/components/VisionMission";
import { WhyUs } from "@/components/WhyUs";
import { ContactFooter } from "@/components/ContactFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
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
