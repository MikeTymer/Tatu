import { motion } from "motion/react";
import biometric from "@/assets/biometric.jpg";
import webDev from "@/assets/web-dev.jpg";

export const CoreBeliefs = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col gap-24 lg:gap-32">
          {/* Row 1 */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video overflow-hidden rounded-[2.5rem] border border-border/60 shadow-elegant"
            >
              <img
                src={biometric}
                alt="High security systems"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                Integrity & Security
              </div>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
                Securing the{" "}
                <span className="bg-gradient-fire bg-clip-text text-transparent">
                  Physical and Digital
                </span>{" "}
                World.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We bridge the gap between heavy engineering and high-tech security. 
                Our biometric and automated access systems ensure that your physical 
                assets are as secure as your digital ones.
              </p>
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Innovation First
              </div>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
                Software that{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Powers Growth
                </span>{" "}
                Beyond Limits.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Our bespoke software solutions like Jena POS are designed to handle 
                the complexities of modern business. We build systems that are 
                scalable, intuitive, and future-proof.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative aspect-video overflow-hidden rounded-[2.5rem] border border-border/60 shadow-elegant"
            >
              <img
                src={webDev}
                alt="Custom software development"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
