import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "./WhatsAppButton";

const reasons = [
  "One-stop solution for tech and engineering needs",
  "Skilled professionals with practical experience",
  "Tailored solutions, not one-size-fits-all",
  "Commitment to quality and long-term support",
];

export const WhyUs = () => {
  return (
    <section id="why" className="relative py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-fire p-1 shadow-brand">
          <div className="relative rounded-[1.85rem] bg-background/95 p-10 md:p-16">
            {/* Blueprint pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <div className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
                  Why choose us
                </div>
                <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
                  Because ordinary solutions rarely solve{" "}
                  <span className="bg-gradient-fire bg-clip-text text-transparent">
                    complex problems.
                  </span>
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                  We pair deep technical expertise with disciplined execution —
                  so every system we deliver is one you can rely on for years.
                </p>
                <WhatsAppButton label="Talk to our team" className="mt-8" />
              </div>

              <ul className="grid gap-4">
                {reasons.map((r, i) => (
                  <li
                    key={r}
                    className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur-sm"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-fire text-primary-foreground">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-accent">
                        Reason 0{i + 1}
                      </div>
                      <div className="mt-0.5 font-medium text-foreground">{r}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};