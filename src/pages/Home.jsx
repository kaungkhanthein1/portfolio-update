/* eslint-disable react/prop-types */
import {
  ArrowRight,
  Facebook,
  Github,
  Linkedin,
  Menu,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import {
  aboutIntro,
  capabilityCards,
  footerLinks,
  hero,
  navItems,
  projects,
  socials,
  surpriseBlocks,
  utilityBlocks,
} from "../data/portfolioContent.jsx";

const pageCards = projects;

const SectionTitle = ({ eyebrow, title, subtitle, align = "center" }) => (
  <div className={`section-heading-block ${align === "left" ? "is-left" : ""}`}>
    {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
    <h2 className="section-title">{title}</h2>
    {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
  </div>
);

const ProjectCard = ({ project, className = "" }) => (
  <a
    className={`project-card group ${className}`.trim()}
    href={project.href}
    target="_blank"
    rel="noreferrer"
  >
    <div className="project-card-categories">
      {project.categories.map((cat) => (
        <span key={cat.label} className={`project-card-category-pill category-${cat.color}`}>
          {cat.label}
        </span>
      ))}
    </div>

    <div className="project-card-brand">
      <span className="project-card-brand-icon">
        {project.icon}
      </span>
      <span className="project-card-brand-name">{project.role}</span>
    </div>

    <h3 className="project-card-title">{project.title}</h3>
    <p className="project-card-description">{project.description}</p>

    <div className="project-card-tags">
      {project.tags.map((tag) => (
        <span key={tag} className="tag-badge">
          {tag}
        </span>
      ))}
    </div>

    <div className={`project-card-media${project.lightImage ? " has-light" : ""}`}>
      <img src={project.image} alt={project.title} className="project-banner-dark" />
      {project.lightImage && (
        <img src={project.lightImage} alt={project.title} className="project-banner-light" />
      )}
    </div>
  </a>
);

const UtilityCard = ({ title, description }) => (
  <div className="utility-card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const FooterLink = ({ label, href }) => (
  <a className="footer-link sibling-opacity-item" href={href}>
    {label}
  </a>
);

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [badgePos, setBadgePos] = useState({ x: 0, y: 0 });
  const dragStart = useRef(null);
  const badgeRef = useRef(null);
  const heroWork = projects.slice(0, 3);

  const handlePointerDown = (e) => {
    if (e.button !== 0) return;
    const rect = badgeRef.current.getBoundingClientRect();
    dragStart.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      elX: rect.left,
      elY: rect.top,
    };
    setIsDragging(true);
    e.preventDefault();
  };

  const handlePointerMove = (e) => {
    if (!isDragging || !dragStart.current) return;
    const dx = e.clientX - dragStart.current.mouseX;
    const dy = e.clientY - dragStart.current.mouseY;
    setBadgePos({ x: dx, y: dy });

    const trashZone = document.querySelector(".trash-bin-zone");
    if (trashZone && badgeRef.current) {
      const trashRect = trashZone.getBoundingClientRect();
      const badgeRect = badgeRef.current.getBoundingClientRect();
      const cx = badgeRect.left + badgeRect.width / 2 + dx;
      const cy = badgeRect.top + badgeRect.height / 2 + dy;
      const overTrash =
        cx >= trashRect.left && cx <= trashRect.right && cy >= trashRect.top && cy <= trashRect.bottom;
      trashZone.classList.toggle("drop-active", overTrash);
    }
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    const trashZone = document.querySelector(".trash-bin-zone");
    if (trashZone) {
      const trashRect = trashZone.getBoundingClientRect();
      const badgeRect = badgeRef.current.getBoundingClientRect();
      const badgeCenterX = badgeRect.left + badgeRect.width / 2;
      const badgeCenterY = badgeRect.top + badgeRect.height / 2;
      if (
        badgeCenterX >= trashRect.left &&
        badgeCenterX <= trashRect.right &&
        badgeCenterY >= trashRect.top &&
        badgeCenterY <= trashRect.bottom
      ) {
        setIsDismissed(true);
      }
    }
    setIsDragging(false);
    setBadgePos({ x: 0, y: 0 });
    dragStart.current = null;
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
      return () => {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerup", handlePointerUp);
      };
    }
  }, [isDragging]);

  return (
    <div className="page-wrapper">
      <header className="header-wrapper">
        <div className="container-default">
          <div className="header-content-wrapper">
            <a className="brand-mark" href="#home" aria-label="Home">
              <span className="brand-mark-icon">&lt;/&gt;</span>
              <span>Kaung Khant Hein</span>
            </a>

            <nav className="header-nav-menu-wrapper desktop-nav" aria-label="Primary">
              {navItems.map((item) => (
                <a key={item.label} className="header-nav-link" href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="header-actions">
              <ThemeToggle />
              <button
                type="button"
                className="hamburger-menu-wrapper mobile-only"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>

        <div className={`mobile-nav-panel ${menuOpen ? "is-open" : ""}`}>
          <div className="mobile-nav-shell">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="btn-primary" href="#contact" onClick={() => setMenuOpen(false)}>
              Contact me
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="section hero-page">
          <div className="container-default">
            <div className="hero-shell">
              <div className="hero-composition">
                <div className="hero-grid">
                  <div className="hero-copy">
                    <div className="hero-kicker">{hero.eyebrow}</div>
                    <h1 className="hero-title">{hero.title}</h1>
                    <div className="hero-bio-row">
                      <div className="hero-portrait-frame">
                        <div className="hero-portrait-glow" />
                        <img
                          src="/portrait.jpg"
                          alt="Kaung Khant Hein"
                          className="hero-inline-portrait-image portrait-dark"
                        />
                        <img
                          src="/portrait-white.png"
                          alt="Kaung Khant Hein"
                          className="hero-inline-portrait-image portrait-light"
                        />
                      </div>
                      <div className="hero-bio-text">
                        <p className="hero-subtitle">{hero.subtitle}</p>
                        <div className="hero-actions">
                          <a className="btn-hero-primary" href={hero.primaryCta.href}>
                            {hero.primaryCta.label}
                          </a>
                          <a className="btn-hero-secondary" href={hero.secondaryCta.href}>
                            {hero.secondaryCta.label}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <aside className="hero-aside">
                    <div className="hero-side-block">
                      <p className="hero-side-label">Follow Me</p>
                      <div className="hero-social-row">
                        {socials.map((social, index) => {
                          const icons = [Github, Facebook, Linkedin];
                          const Icon = icons[index] || Github;
                          return (
                            <a
                              key={social.label}
                              className="hero-social-link"
                              href={social.href}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={social.label}
                            >
                              <Icon size={20} />
                            </a>
                          );
                        })}
                      </div>
                    </div>

                    <div className="hero-gradient-divider" />

                    <div className="hero-side-block">
                      <p className="hero-side-label">My Work</p>
                      <div className="hero-work-list">
                        {heroWork.map((project) => (
                          <a key={project.title} className="hero-work-card" href="#portfolio">
                            <div>
                              <strong>{project.title}</strong>
                              <small>{project.role}</small>
                            </div>
                            <ArrowRight size={16} className="hero-work-arrow" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section pd-120px">
          <div className="container-default">
            <div className="about-band">
              <p className="section-eyebrow">About Me</p>
              <div className="about-band-grid">
                <h2 className="about-band-title">
                  I build production-ready web and mobile products.
                </h2>
                <div className="about-band-stat">
                  <strong>{aboutIntro.stats[2].value}</strong>
                  <span>{aboutIntro.stats[2].label}</span>
                </div>
              </div>
              <div className="about-band-content">
                <p>{aboutIntro.paragraphs[1]}</p>
                <p>{aboutIntro.paragraphs[2]}</p>
              </div>
            </div>

            <div className="stats-grid">
              {aboutIntro.stats.map((stat) => (
                <div key={stat.label} className="stats-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="section pd-120px bg-neutral-700">
          <div className="container-default">
            <div className="portfolio-staggered">
              <div className="portfolio-col-left">
                <div className="portfolio-intro">
                  <p className="section-eyebrow portfolio-eyebrow">
                    <span style={{ color: "var(--accent-primary)" }}>/ </span>MY PORTFOLIO
                  </p>
                  <h2 className="portfolio-intro-title">Take a look at the latest projects I&apos;ve done</h2>
                  <a className="portfolio-browse-link" href="#contact" style={{ borderBottom: "2px solid var(--text-primary)", paddingBottom: "2px" }}>
                    Browse all projects <ArrowRight size={24} />
                  </a>
                </div>

                <ProjectCard project={pageCards[0]} />
                {pageCards[3] && <ProjectCard project={pageCards[3]} />}
              </div>

              <div className="portfolio-col-right">
                {pageCards[1] && <ProjectCard project={pageCards[1]} />}
                {pageCards[2] && <ProjectCard project={pageCards[2]} />}
                {pageCards[4] && <ProjectCard project={pageCards[4]} />}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section pd-120px">
          <div className="container-default">
            <div className="inner-container _680px center">
              <SectionTitle
                align="center"
                eyebrow="Capabilities"
                title="Skills & systems"
                subtitle="A concise summary of the systems and tools that sit behind the portfolio work."
              />
            </div>

            <div className="utility-grid">
              {utilityBlocks.map((block) => (
                <UtilityCard key={block.title} {...block} />
              ))}
            </div>

            <div className="capability-strip">
              {capabilityCards.map((item) => (
                <span key={item} className="tag-badge">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section pd-120px bg-neutral-700">
          <div className="container-default">
            <SectionTitle
              align="center"
              eyebrow="Details"
              title="Built with intent. Scaled with precision."
              subtitle="The systems, architecture, and engineering principles behind every project I deliver."
            />

            <div className="surprise-grid">
              {surpriseBlocks.map((block, index) => (
                <article key={block.title} className={`surprise-card ${index % 2 === 0 ? "" : "is-alt"}`}>
                  <h3>{block.title}</h3>
                  <p>{block.body}</p>
                  <a href="#contact" className="text-link">
                    Start a conversation <ArrowRight size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-home-pages">
          <div className="container-default">
            <div className="cta-grid">
              <div>
                <p className="section-eyebrow">Contact</p>
                <h2 className="cta-title">Get in touch</h2>
                <p className="cta-copy">
                  If you want a build that looks polished and feels deliberate,
                  I can help shape the frontend, connect the backend, and keep the
                  structure maintainable.
                </p>
              </div>
              <div className="cta-actions" id="contact">
                <a className="btn-primary" href="mailto:kaungkhantheinkkh2003@gmail.com">
                  Email me
                </a>
                <a className="btn-secondary" href="tel:0378320387">
                  Call me
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-wrapper">
        <div className="container-default">
          <div className="footer-top">
            <div className="footer-brand">
              <img src="/public/portrait.jpg" alt="Kaung Khant Hein" className="footer-avatar" />
              <div>
                <h3>Kaung Khant Hein</h3>
                <p>Full-Stack Mobile & Web Engineer</p>
              </div>
            </div>

            <div className="footer-contact-block">
              <a className="display-3 text-decoration-none mg-bottom-40px" href="#contact">
                Get in touch <ArrowRight size={20} />
              </a>
              <div className="footer-contact-lines">
                <div>
                  <span>Email me:</span>
                  <a href="mailto:kaungkhantheinkkh2003@gmail.com">kaungkhantheinkkh2003@gmail.com</a>
                </div>
                <div>
                  <span>Call me:</span>
                  <a href="tel:0378320387">0378320387</a>
                </div>
                <div>
                  <span>Location:</span>
                  <a href="https://www.google.com/maps/search/Khuê+Mỹ+Đông,+Đà+Nẵng,+Vietnam" target="_blank" rel="noreferrer">
                    Khuê Mỹ Đông, Đà Nẵng, Vietnam
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-mid">
            <div className="footer-socials">
              <a className="social-icon" href={socials[0].href} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a className="social-icon" href={socials[1].href} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a className="social-icon" href={socials[2].href} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>

            <nav className="footer-nav" aria-label="Footer">
              {footerLinks.map((item) => (
                <FooterLink key={item.label} {...item} />
              ))}
            </nav>
          </div>

          <div className="footer-bottom">
            <p>Copyright © {new Date().getFullYear()} Kaung Khant Hein</p>
            <a className="footer-link sibling-opacity-item" href="#home">
              Back to top
            </a>
          </div>
        </div>
      </footer>

      {!isDismissed && (
        <a
          className={`more-templates-badge-wrapper active ${isDragging ? "is-dragging" : ""}`}
          href="#contact"
          ref={badgeRef}
          onPointerDown={handlePointerDown}
          style={{
            transform: isDragging
              ? `translate(${badgePos.x}px, ${badgePos.y}px)`
              : undefined,
            transition: isDragging ? "none" : "transform 0.3s ease",
            userSelect: "none",
            touchAction: "none",
          }}
        >
          <div className="more-templates-badge">
            <div className="badge-pulse-ring" />
            <div className="more-templates-badge-icon">
              <img src="/collab-icon.png" alt="Portfolio" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }} />
            </div>
            <div>
              <p>Have a product in mind?</p>
              <span>Let's bring it to life.</span>
            </div>
          </div>
        </a>
      )}

      <div className={`trash-bin-zone ${isDragging ? "visible" : ""}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18"/>
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
          <line x1="10" y1="11" x2="10" y2="17"/>
          <line x1="14" y1="11" x2="14" y2="17"/>
        </svg>
        <span>Drop to dismiss</span>
      </div>
    </div>
  );
};
