import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { TatuLogo } from "../common/TatuLogo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../common/ThemeToggle";
import { Link, useLocation } from "react-router-dom";
import { WhatsAppButton } from "../common/WhatsAppButton";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center">
          <TatuLogo className="h-10" />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                location.pathname === l.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <WhatsAppButton label="Get in touch" size="sm" />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="container flex flex-col gap-4 py-6">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium hover:text-foreground ${
                  location.pathname === l.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <WhatsAppButton label="Get in touch" size="sm" className="mt-2 w-full" />
          </div>
        </div>
      )}
    </header>
  );
};
