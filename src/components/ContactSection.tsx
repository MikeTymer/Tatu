import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "motion/react";
import { WhatsAppButton } from "./WhatsAppButton";

export const ContactSection = () => {
  return (
    <section id="contact-info" className="py-20 lg:py-32">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Get in touch
            </div>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
              Let's start a{" "}
              <span className="bg-gradient-fire bg-clip-text text-transparent">
                conversation.
              </span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Whether you have a specific project in mind or just want to explore how 
              we can help your business grow through technology, we're here to help.
            </p>
            <div className="mt-8">
              <WhatsAppButton size="lg" className="px-8" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <ContactBlock
              icon={MapPin}
              label="Uganda Office"
              lines={[{ text: "Lira, Uganda" }]}
              index={0}
            />
            <ContactBlock
              icon={MapPin}
              label="Kenya Office"
              lines={[{ text: "Westlands, Nairobi" }]}
              index={1}
            />
            <ContactBlock
              icon={Phone}
              label="Phone"
              lines={[
                { text: "+256 784 311 839 (WA/UG)", href: "tel:+256784311839" },
                { text: "+256 783 723 782", href: "tel:+256783723782" },
                { text: "+254 714 366 344 (KE)", href: "tel:+254714366344" },
              ]}
              index={2}
            />
            <ContactBlock
              icon={Mail}
              label="Digital"
              lines={[
                { text: "admin@tatuenterprises.com", href: "mailto:admin@tatuenterprises.com" },
              ]}
              extraLine={{ text: "www.tatuenterprises.com", href: "https://www.tatuenterprises.com" }}
              index={3}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface BlockProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  lines: { text: string; href?: string }[];
  extraLine?: { text: string; href?: string };
  index: number;
}

const ContactBlock = ({ icon: Icon, label, lines, extraLine, index }: BlockProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="rounded-2xl border border-border/60 bg-card/40 p-5 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-accent/30"
  >
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary-glow">
        <Icon className="h-4 w-4" />
      </div>
      <div className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
        {label}
      </div>
    </div>
    <div className="mt-4 space-y-1 text-sm text-foreground">
      {lines.map((l) => (
        l.href ? (
          <a
            key={l.text}
            href={l.href}
            className="block hover:text-accent transition-colors"
          >
            {l.text}
          </a>
        ) : (
          <div key={l.text}>{l.text}</div>
        )
      ))}
    </div>
    {extraLine && (
      <div className="mt-3 flex items-center gap-2 border-t border-border/60 pt-3 text-sm text-muted-foreground">
        <Mail className="h-3.5 w-3.5 text-accent" />
        {extraLine.href ? (
          <a
            href={extraLine.href}
            target={extraLine.href.startsWith("http") ? "_blank" : undefined}
            rel={extraLine.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="hover:text-accent transition-colors"
          >
            {extraLine.text}
          </a>
        ) : (
          <span>{extraLine.text}</span>
        )}
      </div>
    )}
  </motion.div>
);
