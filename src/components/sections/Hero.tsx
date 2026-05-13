import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// Realistic professional stock images
const posMachine = "https://images.unsplash.com/photo-1556742049-97ef31d06371?auto=format&fit=crop&q=80&w=1200";
const softwareMeeting = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200";
import { WhatsAppButton } from "../common/WhatsAppButton";

const projects = [
  {
    id: 0,
    label: "Enterprise Software",
    title: "Scaling business operations with robust cloud infrastructure",
    image: posMachine,
    link: "https://jena-pos-business-suit-app.vercel.app?ref=VFKM2H",
  },
  {
    id: 1,
    label: "Digital Transformation",
    title: "Modernizing legacy systems for growth beyond limits",
    image: softwareMeeting,
    link: "https://jena-pos-business-suit-app.vercel.app?ref=VFKM2H",
  },
];

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-gradient-dark pt-28 pb-16 md:pt-32 md:pb-24"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-glow opacity-80" />
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-[500px] w-[500px] rounded-full bg-primary/30 blur-[120px] animate-glow-pulse" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px] animate-glow-pulse" />

      {/* Grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--accent)/0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)/0.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container relative grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Growth Beyond Limits
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Software that Powers{" "}
            <span className="bg-gradient-fire bg-clip-text text-transparent">
              Growth Beyond Limits
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Tatu Enterprises delivers innovative technology and engineering
            solutions that power businesses, protect lives, and build smarter
            environments across Uganda and Kenya.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <WhatsAppButton label="Start a project" size="xl" className="shadow-brand" />
            <Button asChild variant="defaultGold" size="xl" className="px-12">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-border/60 pt-6">
            {[
              { k: "2", v: "Country offices" },
              { k: "9+", v: "Specialized services" },
              { k: "100%", v: "Tailored solutions" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl font-bold text-accent">
                  {s.k}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-fire opacity-30 blur-2xl" />
          
          <div className="relative h-[420px] md:h-[480px] overflow-hidden rounded-[2rem] border border-border/60 shadow-elegant bg-background/20 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={projects[index].image}
                  alt={projects[index].title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                <a
                  href={projects[index].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group absolute bottom-6 left-6 right-6 block rounded-2xl border border-border/60 bg-background/70 p-5 backdrop-blur-xl transition-all hover:border-accent/60 hover:bg-background/90"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-accent">
                      {projects[index].label}
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <div className="mt-1 font-display text-lg font-bold text-foreground leading-snug">
                    {projects[index].title}
                  </div>
                </a>
              </motion.div>
            </AnimatePresence>

            {/* Indicators */}
            <div className="absolute top-6 right-6 flex gap-1.5 z-10">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-accent" : "w-1.5 bg-accent/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -left-6 top-10 hidden animate-float rounded-2xl border border-accent/30 bg-card/80 px-5 py-4 shadow-gold backdrop-blur-xl md:block z-20">
            <div className="text-[0.65rem] uppercase tracking-[0.2em] text-accent">
              Quality Assured
            </div>
            <div className="font-display text-base font-semibold text-foreground">
              ISO-grade execution
            </div>
          </div>
        </div>
      </div>


      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-foreground p-1">
          <div className="h-2 w-1 rounded-full bg-foreground" />
        </div>
      </div>
    </section>
  );
};