import { motion } from "motion/react";
// Realistic professional stock images
const cctv = "https://images.unsplash.com/photo-1551808525-51feec1bc9b2?auto=format&fit=crop&q=80&w=1200";

export const TeamHero = () => {
  return (
    <section className="relative h-[40vh] min-h-[350px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={cctv}
          alt="Our expert team"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
      
      <div className="container relative flex h-full items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Our People
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
            The Minds <br />
            <span className="bg-gradient-fire bg-clip-text text-transparent">
              Behind the Work.
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Meet the multidisciplinary team of engineers, developers, and visionaries 
            dedicated to building beyond the obvious.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
