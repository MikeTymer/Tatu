
import { motion } from "motion/react";

interface TatuLogoProps {
  className?: string;
}

export const TatuLogo = ({ className = "" }: TatuLogoProps) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <img 
      src="/tatu-logo.png" 
      alt="Tatu Enterprises Logo" 
      className="h-10 w-10 object-contain rounded-full border border-border/10 shadow-lg"
    />
    <div className="leading-tight">
      <div className="font-display text-lg font-bold tracking-tight text-foreground">TATU</div>
      <div className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-accent">Enterprises</div>
    </div>
  </div>
);
