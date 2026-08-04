import { Github, Linkedin, Facebook, ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      className="relative"
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div className="space-y-4">
            <a className="text-xl font-bold text-foreground" href="#hero">
              KKH<span className="text-primary">.</span>
            </a>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Full-Stack Mobile & Web Engineer
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold" style={{ color: "var(--text-muted)" }}>
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm transition-colors duration-200 hover:text-foreground"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold" style={{ color: "var(--text-muted)" }}>
              Connect
            </h4>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com/kaungkhanthein1", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/kaung-khant-536521297/", label: "LinkedIn" },
                { icon: Facebook, href: "https://www.facebook.com/share/19Z9kCiL44/", label: "Facebook" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <div className="space-y-1 pt-2">
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                kaungkhantheinkkh2003@gmail.com
              </p>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Khuê Mỹ Đông, Đà Nẵng, Vietnam
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="py-4 px-4"
        style={{ borderTop: "1px solid var(--border-subtle)" }}
      >
        <div className="container flex flex-wrap justify-between items-center gap-4">
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} Kaung Khant Hein. All rights reserved.
          </p>
          <a
            href="#hero"
            className="social-link"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};
