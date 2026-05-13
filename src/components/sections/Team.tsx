import { motion } from "motion/react";
import { Linkedin, Twitter, Mail, User } from "lucide-react";

const teamMembers = [
  {
    name: "Eric Jefferson Ogang",
    role: "Co-Founder & Lead Engineer",
    initials: "EO",
  },
  {
    name: "Charles Merrisho",
    role: "Director",
    initials: "CM",
  },
  {
    name: "Micheal Sakwa",
    role: "Operations Lead & Systems Developer",
    initials: "MS",
  },
  {
    name: "Derrick",
    role: "Smart Systems Specialist",
    initials: "D",
  },
  {
    name: "Mechazedek Ongiro",
    role: "Technology Solutions Lead",
    initials: "MO",
  },
  {
    name: "Kenneth",
    role: "Project & Client Director",
    initials: "K",
  },
];

export const Team = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">The Leadership Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our multi-disciplinary team brings together decades of expertise in 
            technology, engineering, and strategic management.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-full aspect-[4/5] bg-muted rounded-[2rem] mb-6 overflow-hidden relative border border-border/60 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <User className="w-10 h-10 text-primary/40" />
                  </div>
                  <span className="text-4xl font-bold text-muted-foreground/30 tabular-nums">
                    {member.initials}
                  </span>
                </div>
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" title="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" title="Twitter">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" title="Email">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-accent uppercase tracking-widest text-[0.65rem] font-bold mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
