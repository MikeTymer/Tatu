import { motion } from "motion/react";
// Realistic professional stock images
const heroVilla = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200";

export const AboutHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroVilla}
          alt="Large scale engineering project - Smart Residence"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      </div>
      
      <div className="container relative flex h-full flex-col items-center justify-center text-center">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="text-xs font-bold uppercase tracking-[0.4em] text-accent/80">
              Our Journey
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl">
              Pioneering the{" "}
              <span className="bg-gradient-fire bg-clip-text text-transparent">
                Future
              </span>{" "}
              of Engineering.
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Tatu Enterprises was founded on the belief that technology and engineering 
              should work in harmony to solve the complex challenges of the modern world.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-fire opacity-50" />
    </section>
  );
};
