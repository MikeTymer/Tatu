import { TatuLogo } from "../common/TatuLogo";

export const ContactFooter = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-dark py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-fire opacity-60" />
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex flex-col items-center sm:items-start gap-4">
            <TatuLogo className="h-10" />
            <div className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Tatu Enterprises. All rights reserved.
            </div>
          </div>
          
          <div className="flex flex-col items-center sm:items-end gap-2">
            <div className="font-display text-[0.65rem] font-bold uppercase tracking-[0.4em] text-accent/80">
              Growth Beyond Limits
            </div>
            <div className="text-[0.6rem] text-muted-foreground/60 uppercase tracking-widest">
              Kenya • Uganda
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
