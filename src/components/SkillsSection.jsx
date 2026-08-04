import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Mobile
  { name: "React Native (CLI & Expo)", level: 88, category: "mobile" },
  { name: "TypeScript", level: 85, category: "mobile" },
  { name: "i18n", level: 80, category: "mobile" },
  { name: "MMKV", level: 75, category: "mobile" },
  { name: "Notifee", level: 70, category: "mobile" },
  { name: "Firebase Cloud Messaging", level: 80, category: "mobile" },

  // Frontend
  { name: "React 18", level: 92, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
  { name: "TypeScript", level: 88, category: "frontend" },
  { name: "Next.js", level: 82, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "SCSS / CSS", level: 85, category: "frontend" },
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "React Hook Form", level: 78, category: "frontend" },
  { name: "Framer Motion", level: 80, category: "frontend" },

  // Backend
  { name: "Go (Golang) REST APIs", level: 80, category: "backend" },
  { name: "Medusa.js", level: 72, category: "backend" },
  { name: "Node.js", level: 82, category: "backend" },
  { name: "PostgreSQL", level: 78, category: "backend" },
  { name: "Docker", level: 70, category: "backend" },

  // State & Data
  { name: "Redux Toolkit", level: 86, category: "state" },
  { name: "Zustand", level: 80, category: "state" },
  { name: "React Query", level: 82, category: "state" },
  { name: "Axios", level: 84, category: "state" },
  { name: "MMKV local storage", level: 75, category: "state" },

  // Architecture
  { name: "ERD Design", level: 78, category: "architecture" },
  { name: "Atomic Design", level: 80, category: "architecture" },
  { name: "MVP Feature Scoping", level: 82, category: "architecture" },
  { name: "AI-powered SDLC", level: 76, category: "architecture" },

  // AI & Tools
  { name: "MCP Server Integration", level: 72, category: "tools" },
  { name: "AI-assisted Workflows", level: 78, category: "tools" },
  { name: "Cursor", level: 85, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
  { name: "VS Code", level: 88, category: "tools" },
  { name: "Git / GitHub", level: 86, category: "tools" },
  { name: "Vite", level: 80, category: "tools" },
  { name: "ESLint", level: 78, category: "tools" },

  // Testing
  { name: "React Testing Library", level: 72, category: "testing" },
  { name: "Cypress", level: 70, category: "testing" },
  { name: "Real-device QA", level: 68, category: "testing" },
];

const categories = [
  "all",
  "mobile",
  "frontend",
  "backend",
  "state",
  "architecture",
  "tools",
  "testing",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="section-padding relative"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container">
        <div className="text-center mb-12">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--accent-primary)" }}
          >
            My Skills
          </p>
          <h2 className="section-heading">
            Technologies & Tools
          </h2>
          <p className="section-subtitle mt-4">
            A curated set of technologies I use to build high-quality products
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 capitalize",
                activeCategory === category
                  ? "text-foreground"
                  : "hover:border-border-hover"
              )}
              style={{
                background: activeCategory === category ? "var(--accent-primary)" : "var(--bg-primary)",
                border: `1px solid ${activeCategory === category ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                color: activeCategory === category ? "white" : "var(--text-secondary)",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="p-4 rounded-xl card-base card-base-hover"
            >
              <h3
                className="font-medium text-sm leading-snug mb-3 line-clamp-2"
                style={{ color: "var(--text-primary)" }}
              >
                {skill.name}
              </h3>
              <div className="flex items-center gap-2">
                <div
                  className="flex-1 h-1.5 rounded-full overflow-hidden"
                  style={{ background: "var(--bg-card-hover)" }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: skill.level + "%",
                      background: "var(--accent-primary)",
                    }}
                  />
                </div>
                <span
                  className="text-xs font-medium shrink-0"
                  style={{ color: "var(--text-muted)" }}
                >
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
