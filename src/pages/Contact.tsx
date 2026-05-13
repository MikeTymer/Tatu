import { Navbar } from "@/components/layout/Navbar";
import { ContactFooter } from "@/components/layout/ContactFooter";
import { ContactSection } from "@/components/sections/ContactSection";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { SEO } from "@/components/common/SEO";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
      <SEO 
        title="Contact Us"
        description="Get in touch with Tatu Enterprises. We are ready to help you with your next technology or engineering project in Kenya and East Africa."
        canonical="/contact"
      />
      <Navbar />
      <div className="pt-20">
        <ContactSection />
      </div>
      <ContactFooter />
      <div className="fixed bottom-6 right-6 z-[60] animate-float">
        <WhatsAppButton size="icon" className="h-14 w-14 rounded-full shadow-2xl hover:scale-110 transition-transform" />
      </div>
    </main>
  );
};

export default ContactPage;
