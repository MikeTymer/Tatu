import { Navbar } from "@/components/layout/Navbar";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { Services } from "@/components/sections/Services";
import { ContactFooter } from "@/components/layout/ContactFooter";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { SEO } from "@/components/common/SEO";
import { useEffect } from "react";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
      <SEO 
        title="Our Services"
        description="Explore our range of engineering and software services: from urban surveillance and biometric systems to custom cloud infrastructure."
        canonical="/services"
      />
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
