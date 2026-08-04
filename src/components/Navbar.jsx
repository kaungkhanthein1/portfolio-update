import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-[100]"
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border-subtle)",
        background: "rgba(14, 14, 16, 0.85)",
      }}
    >
      <div className="container flex items-center justify-between h-16">
        <a
          className="text-lg font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity"
          href="#hero"
        >
          KKH<span className="text-primary">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm">
            Contact Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
          style={{
            background: "rgba(14, 14, 16, 0.98)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="flex flex-col items-center gap-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
