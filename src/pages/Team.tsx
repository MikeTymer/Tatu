import { Navbar } from "@/components/layout/Navbar";
import { TeamHero } from "@/components/sections/TeamHero";
import { Team } from "@/components/sections/Team";
import { ContactFooter } from "@/components/layout/ContactFooter";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { SEO } from "@/components/common/SEO";
import { useEffect } from "react";

const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
      <SEO 
        title="Our Team"
        description="Meet the leadership team at Tatu Enterprises—experts in engineering, technology, and operational excellence."
        canonical="/team"
      />
      <Navbar />
      <div>
        <TeamHero />
        <Team />
      </div>
      <ContactFooter />
      <div className="fixed bottom-6 right-6 z-[60] animate-float">
        <WhatsAppButton size="icon" className="h-14 w-14 rounded-full shadow-2xl hover:scale-110 transition-transform" />
      </div>
    </main>
  );
};

export default TeamPage;
