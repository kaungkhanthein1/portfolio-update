import {
  ArrowRight,
  CodeXml,
  Swords,
  ShoppingBag,
  Map,
  Code,
  Package,
} from "lucide-react";

const projects = [
  {
    id: 6,
    title: "react-native-liquid-pill-tabbar",
    brand: { name: "Liquid Pill Tabbar", description: "React Native glass UI kit", icon: <Package size={20} /> },
    video: "/projects/package_demo.mov",
    tags: ["React Native", "TypeScript", "npm", "Expo"],
    categories: ["React Native", "npm"],
    demoUrl: "#",
    githubUrl: "https://www.npmjs.com/package/react-native-liquid-pill-tabbar",
    description: "A React Native component kit with an Apple Liquid Glass-inspired feel — translucent surfaces, animated pill motion, zero native modules.",
    ctaLabel: "View npm package →",
    ctaUrl: "https://www.npmjs.com/package/react-native-liquid-pill-tabbar",
  },
  {
    id: 1,
    title: "NextBite — Multi-Tenant QSR Platform",
    brand: { name: "NextBite", description: "Multi-tenant QSR platform", icon: <ShoppingBag size={20} /> },
    image: "/projects/NextBiteBanner.jpg",
    lightImage: "/projects/NextBiteBanenrWhite.jpg",
    tags: ["React Native", "Expo", "Go", "TypeScript"],
    categories: ["React Native", "Go"],
    demoUrl: "https://next-bite.netlify.app/",
    githubUrl: "https://next-bite.netlify.app/",
    description: "A white-label Quick Service Restaurant platform built for scalability across multiple restaurant brands.",
    ctaLabel: "Explore live project →",
    ctaUrl: "https://next-bite.netlify.app/",
  },
  {
    id: 3,
    title: "Zawgyi Mythic Run — Multiplayer Browser Game",
    brand: { name: "Zawgyi", description: "Multiplayer browser game", icon: <Swords size={20} /> },
    image: "/projects/ZawgyiBanner.png",
    lightImage: "/projects/ZawgyiBannerWhite.jpg",
    tags: ["Phaser 3", "Babylon.js", "Socket.IO", "Node.js"],
    categories: ["Phaser 3", "Babylon.js"],
    demoUrl: "#",
    githubUrl: "https://zawgyigame.onrender.com/",
    description: "A 2D/3D side-scrolling multiplayer game featuring a Myanmar alchemist with Levitate, Staff Strike, and Alchemic Pill abilities.",
    ctaLabel: "Explore live project →",
    ctaUrl: "https://zawgyigame.onrender.com/",
  },
  {
    id: 4,
    title: "Veteran Tour Guide App",
    brand: { name: "Veteran", description: "Tourist experience platform", icon: <Map size={20} /> },
    image: "/projects/VeteranBanner.png",
    lightImage: "/projects/VeteranBannerWhite.jpg",
    tags: ["React", "Redux Toolkit", "TailwindCSS", "Zustand"],
    categories: ["React", "Redux Toolkit"],
    demoUrl: "https://vd-demo-11.netlify.app/",
    githubUrl: "https://github.com/kaungkhanthein1/veteran-driver-v1",
    description: "A multilingual Southeast Asia tourists web app.",
    ctaLabel: "Explore live project →",
    ctaUrl: "https://vd-demo-11.netlify.app/",
  },
  {
    id: 2,
    title: "AppleThings — Full-Stack E-Commerce App",
    brand: { name: "AppleThings", description: "Full-stack e-commerce app", icon: <Code size={20} /> },
    image: "/projects/AppleThingsBanner.jpg",
    lightImage: "/projects/AppleThingsBannerWhite.jpg",
    tags: ["React Native", "TypeScript", "Medusa.js", "PostgreSQL"],
    categories: ["React Native", "Medusa.js"],
    demoUrl: "#",
    githubUrl: "https://ap-things-12321.netlify.app/",
    description: "An end-to-end mobile e-commerce platform built with an AI-powered SDLC.",
    ctaLabel: "Explore live project →",
    ctaUrl: "https://ap-things-12321.netlify.app/",
  },
  {
    id: 5,
    title: "Personal Developer Portfolio",
    brand: { name: "Portfolio", description: "Interactive showcase", icon: <CodeXml size={20} /> },
    image: "/projects/PortfolioBanner.png",
    tags: ["React", "TailwindCSS", "Framer Motion", "Markdown"],
    categories: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/kaungkhanthein1/portfolio",
    description: "A space-themed interactive portfolio showcasing skills, experience, and projects.",
    ctaLabel: "View project →",
    ctaUrl: "https://github.com/kaungkhanthein1/portfolio",
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="section-padding relative"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container-default">
        <div className="portfolio-section-grid">
          {/* Left Column: Intro Text */}
          <div className="portfolio-intro">
            <p className="portfolio-eyebrow section-eyebrow">
              <span style={{ color: "var(--accent-primary)" }}>/ </span>MY PORTFOLIO
            </p>
            <h2 className="portfolio-intro-title">
              Take a look at the latest projects I've done
            </h2>
            <a
              href="#"
              className="portfolio-browse-link"
              style={{ borderBottom: "2px solid var(--text-primary)", paddingBottom: "2px", marginBottom: "0px" }}
            >
              Browse all projects <ArrowRight size={24} />
            </a>
          </div>

          {/* Right Column: Projects Grid */}
          <div className="pages-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card group">
                {/* Header with Brand and Pills */}
                <div className="project-card-header">
                  <div className="project-card-brand">
                    <div className="project-card-brand-icon">
                      {project.brand.icon}
                    </div>
                    <span className="project-card-brand-name">
                      {project.brand.description}
                    </span>
                  </div>
                  <div className="project-card-tags project-card-tags--overlay">
                    {project.categories.map((tag, i) => (
                      <span key={i} className="project-card-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3 className="project-card-title">{project.title}</h3>

                {/* Description */}
                <p className="project-card-description">
                  {project.description}
                </p>

                {/* Footer Tags */}
                <div className="project-card-footer">
                  <div className="project-card-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag-badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Link */}
                <div className="project-card-cta">
                  <a
                    href={project.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-cta-link"
                    aria-label={project.ctaLabel}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.ctaLabel}
                  </a>
                </div>

                {/* Overlapping Media at Bottom */}
                {project.video ? (
                  <div className="project-card-media">
                    <video src={project.video} autoPlay muted loop playsInline />
                  </div>
                ) : (
                  <div className={`project-card-media${project.lightImage ? " has-light" : ""}`}>
                    <img src={project.image} alt={project.title} className="project-banner-dark" />
                    {project.lightImage && (
                      <img src={project.lightImage} alt={project.title} className="project-banner-light" />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
