export const ContactFooter = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-dark py-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-fire opacity-60" />
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Tatu Enterprises. All rights reserved.
          </div>
          
          <div className="font-display text-[0.65rem] font-bold uppercase tracking-[0.4em] text-accent/80">
            Building Beyond The Obvious
          </div>
        </div>
      </div>
    </footer>
  );
};
