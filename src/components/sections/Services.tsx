import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Services = () => {
  const services = [
    { title: "Engineering", desc: "Expert engineering solutions tailored to your needs.", color: "primary" },
    { title: "Technology", desc: "Cutting-edge tech integration for business growth.", color: "accent" },
    { title: "Automation", desc: "Smart systems for efficient operations.", color: "primary" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">What we do</div>
          <h2 className="text-4xl font-bold tracking-tight">Our Core Services</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col p-8 border rounded-3xl bg-card/50 transition-all hover:bg-card hover:shadow-elegant hover:border-accent/30"
            >
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-muted-foreground mb-8 flex-grow">{s.desc}</p>
              <Button asChild variant="ghost" className="w-fit p-0 hover:bg-transparent text-accent group-hover:translate-x-2 transition-transform">
                <Link to="/contact" className="flex items-center gap-2">
                  Get a quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
