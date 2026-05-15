import { Navbar } from "@/components/layout/Navbar";
import { AboutHero } from "@/components/sections/AboutHero";
import { Pillars } from "@/components/sections/Pillars";
import { CoreBeliefs } from "@/components/sections/CoreBeliefs";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { VisionMission } from "@/components/sections/VisionMission";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactFooter } from "@/components/layout/ContactFooter";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
        <Testimonials />
        <WhyUs />
        <section className="py-24 border-t">
          <div className="container px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Enjoyed our Work?</h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
              Your feedback helps us grow and serve you better. Share your experience with Tatu Enterprises.
            </p>
            <Button asChild size="lg" className="rounded-full px-12">
              <Link to="/reviews">Write a Review</Link>
            </Button>
          </div>
        </section>
      </div>
      <ContactFooter />
      <div className="fixed bottom-6 right-6 z-[60] animate-float">
        <WhatsAppButton size="icon" className="h-14 w-14 rounded-full shadow-2xl hover:scale-110 transition-transform" />
      </div>
    </main>
  );
};

export default AboutPage;
