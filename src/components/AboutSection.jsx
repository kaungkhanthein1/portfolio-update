import { Code, Smartphone, Server, Brain } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-padding relative"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo + Stats */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid var(--border-subtle)",
                background: "var(--bg-secondary)",
              }}
            >
              <img
                src="/KKH.jpg"
                alt="Kaung Khant Hein"
                className="w-full h-80 md:h-[420px] object-cover"
              />
            </div>
            {/* Experience badge */}
            <div
              className="absolute -bottom-6 -right-4 md:right-8 p-5 rounded-xl"
              style={{
                background: "var(--accent-primary)",
                boxShadow: "0 12px 40px rgba(79, 70, 229, 0.3)",
              }}
            >
              <div className="text-3xl font-bold text-foreground">2+</div>
              <div className="text-sm font-medium text-foreground/80">Years of Experience</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p
                className="text-sm font-semibold tracking-widest uppercase mb-3"
                style={{ color: "var(--accent-primary)" }}
              >
                About Me
              </p>
              <h2 className="section-heading text-left">
                Full-Stack Mobile & Web Engineer
              </h2>
            </div>

            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
              I build production-ready web and mobile applications with a focus on
              performance, localization, and maintainable architecture. My
              experience spans React, React Native (CLI & Expo), TypeScript,
              Tailwind CSS, Go backends, and Medusa.js e-commerce platforms.
            </p>

            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
              I deliver end-to-end features: ERD-backed API design, atomic UI,
              multi-tenant backend patterns, offline-first local storage
              (MMKV), push notifications (FCM / Notifee), and multilingual
              experiences using i18n. I combine practical engineering with
              AI-assisted workflows to accelerate design-to-code delivery.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { icon: Smartphone, label: "Mobile & Native" },
                { icon: Code, label: "Frontend & UI" },
                { icon: Server, label: "Backend & APIs" },
                { icon: Brain, label: "Architecture & AI" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg transition-colors duration-200"
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <item.icon size={18} style={{ color: "var(--accent-primary)" }} />
                  <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
              <a href="/Kaung_Khant_Hein_Resume.pdf" download="Kaung_Khant_Hein_Resume.pdf" className="btn-outline">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
