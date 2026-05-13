import { motion } from "motion/react";
// Realistic professional stock images
const biometric = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200";
const cctv = "https://images.unsplash.com/photo-1551808525-51feec1bc9b2?auto=format&fit=crop&q=80&w=1200";
const smartHome = "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200";

const galleryProjects = [
  {
    title: "Smart Commercial Automation",
    description: "Integrated building management systems for enterprise efficiency.",
    image: smartHome,
  },
  {
    title: "Advanced Biometrics",
    description: "High-security access control systems for critical infrastructure.",
    image: biometric,
  },
  {
    title: "Urban Surveillance",
    description: "Large-scale IP CCTV networks for smart city initiatives.",
    image: cctv,
  },
];

export const ProjectGallery = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container">
        <div className="mb-16 text-center">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Portfolio Highlights
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Engineering the <span className="bg-gradient-fire bg-clip-text text-transparent">Invisible.</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {galleryProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] border border-border/60 bg-background/50 shadow-elegant"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-8">
                <h3 className="font-display text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
