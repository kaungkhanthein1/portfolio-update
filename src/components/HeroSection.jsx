import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-4">
              <p
                className="text-primary text-sm font-semibold tracking-widest uppercase"
                style={{ opacity: 0, animation: "fade-in-up 0.6s ease-out 0.2s forwards" }}
              >
                Full-Stack Developer
              </p>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ opacity: 0, animation: "fade-in-up 0.6s ease-out 0.4s forwards" }}
              >
                Hi, I&apos;m
                <br />
                <span className="text-primary">Kaung Khant Hein</span>
              </h1>
              <p
                className="text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0"
                style={{
                  color: "var(--text-secondary)",
                  opacity: 0,
                  animation: "fade-in-up 0.6s ease-out 0.6s forwards",
                }}
              >
                I create stellar web experiences with modern technologies.
                Specializing in front-end development, I build interfaces that are
                both beautiful and functional.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              style={{ opacity: 0, animation: "fade-in-up 0.6s ease-out 0.8s forwards" }}
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-6 pt-8 max-w-md mx-auto lg:mx-0"
              style={{ opacity: 0, animation: "fade-in-up 0.6s ease-out 1s forwards" }}
            >
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">5+</div>
                <div className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                  Projects
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">35+</div>
                <div className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                  Skills
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">2+</div>
                <div className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                  Years Exp
                </div>
              </div>
            </div>
          </div>

          {/* Photo Section */}
          <div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            style={{ opacity: 0, animation: "fade-in-right 0.8s ease-out 0.3s forwards" }}
          >
            <div className="relative">
              <div
                className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid var(--border-subtle)",
                  background: "var(--bg-secondary)",
                }}
              >
                <img
                  src="/KKH.jpg"
                  alt="Kaung Khant Hein"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              {/* Accent element */}
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl"
                style={{
                  border: "1px solid var(--border-subtle)",
                  background: "var(--bg-secondary)",
                  opacity: 0.5,
                  zIndex: -1,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
        aria-label="Scroll to About section"
      >
        <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
          Scroll Down
        </span>
        <ArrowDown className="h-4 w-4" style={{ color: "var(--text-muted)" }} />
      </a>
    </section>
  );
};
