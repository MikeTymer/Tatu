import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ContactFooter } from "@/components/layout/ContactFooter";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { SEO } from "@/components/common/SEO";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
      <SEO 
        description="East Africa's leading technology and engineering firm. We merge digital innovation with physical infrastructure to build smarter environments."
      />
      <Navbar />
      <Hero />
      <div className="container relative py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary blur-3xl animate-pulse" />
          <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-accent blur-3xl" />
        </div>
        
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Welcome to Tatu Enterprises
          </div>
          
          <h2 className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl tracking-tighter">
            Software that Powers{" "}
            <span className="bg-gradient-fire bg-clip-text text-transparent">
              Growth Beyond Limits
            </span>
          </h2>
          <p className="mt-8 text-xl leading-relaxed text-muted-foreground md:px-20">
            We are East Africa's leading technology and engineering firm. 
            By merging digital innovation with physical infrastructure, 
            we create solutions that shape the future.
          </p>
          
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="defaultGold" size="xl" className="px-10 rounded-full h-16 text-lg">
              <Link to="/services">Explore Our Services</Link>
            </Button>
            <Button asChild variant="outlineGold" size="xl" className="px-10 rounded-full h-16 text-lg">
              <Link to="/about">About the Agency</Link>
            </Button>
          </div>
        </div>
      </div>
      <ContactFooter />
      
      {/* Floating WhatsApp Action */}
      <div className="fixed bottom-6 right-6 z-[60] animate-float">
        <WhatsAppButton 
          size="icon" 
          className="h-14 w-14 rounded-full shadow-2xl hover:scale-110 transition-transform" 
        />
      </div>
    </main>
  );
};

export default Index;
