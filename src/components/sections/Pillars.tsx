import { motion } from "motion/react";

export const Pillars = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Principles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border rounded-[2rem] bg-background/50">
            <h3 className="text-xl font-bold mb-4 text-primary">Excellence</h3>
            <p className="text-muted-foreground">We deliver uncompromising quality in every project.</p>
          </div>
          <div className="p-8 border rounded-[2rem] bg-background/50">
            <h3 className="text-xl font-bold mb-4 text-primary">Innovation</h3>
            <p className="text-muted-foreground">Pushing boundaries with next-generation technologies.</p>
          </div>
          <div className="p-8 border rounded-[2rem] bg-background/50">
            <h3 className="text-xl font-bold mb-4 text-primary">Integrity</h3>
            <p className="text-muted-foreground">Building lasting relationships founded on trust.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
