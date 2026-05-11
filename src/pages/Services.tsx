import { Navbar } from "@/components/Navbar";
import { ServicesHero } from "@/components/ServicesHero";
import { Services } from "@/components/Services";
import { ContactFooter } from "@/components/ContactFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useEffect } from "react";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
      <Navbar />
      <div>
        <ServicesHero />
        <Services />
      </div>
      <ContactFooter />
      <div className="fixed bottom-6 right-6 z-[60] animate-float">
        <WhatsAppButton size="icon" className="h-14 w-14 rounded-full shadow-2xl hover:scale-110 transition-transform" />
      </div>
    </main>
  );
};

export default ServicesPage;
