import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="section-padding relative"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container">
        <div className="text-center mb-12">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--accent-primary)" }}
          >
            Contact
          </p>
          <h2 className="section-heading">
            Get In Touch
          </h2>
          <p className="section-subtitle mt-4">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I&apos;m always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-semibold mb-6" style={{ color: "var(--text-primary)" }}>
              Contact Information
            </h3>

            <div className="space-y-5">
              <a
                href="mailto:kaungkhantheinkkh2003@gmail.com"
                className="flex items-center gap-4 p-4 contact-card group"
              >
                <div
                  className="p-3 rounded-xl"
                  style={{ background: "var(--bg-card-hover)" }}
                >
                  <Mail size={20} style={{ color: "var(--accent-primary)" }} />
                </div>
                <div>
                  <div className="text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>
                    Email
                  </div>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    kaungkhantheinkkh2003@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:0378320387"
                className="flex items-center gap-4 p-4 contact-card group"
              >
                <div
                  className="p-3 rounded-xl"
                  style={{ background: "var(--bg-card-hover)" }}
                >
                  <Phone size={20} style={{ color: "var(--accent-primary)" }} />
                </div>
                <div>
                  <div className="text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>
                    Phone
                  </div>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    0378320387
                  </div>
                </div>
              </a>

              <div
                className="flex items-center gap-4 p-4 contact-card"
              >
                <div
                  className="p-3 rounded-xl"
                  style={{ background: "var(--bg-card-hover)" }}
                >
                  <MapPin size={20} style={{ color: "var(--accent-primary)" }} />
                </div>
                <div>
                  <div className="text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>
                    Location
                  </div>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Khuê Mỹ Đông, Đà Nẵng, Vietnam
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-4" style={{ color: "var(--text-muted)" }}>
                Connect With Me
              </h4>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/kaung-khant-536521297/", label: "LinkedIn" },
                  { icon: Facebook, href: "https://www.facebook.com/share/19Z9kCiL44/", label: "Facebook" },
                  { icon: Github, href: "https://github.com/kaungkhanthein1", label: "GitHub" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              className="p-6 md:p-8 rounded-2xl"
              style={{
                background: "var(--bg-primary)",
                border: "1px solid var(--border-subtle)",
              }}
              onSubmit={handleSubmit}
            >
              <h3 className="text-xl font-semibold mb-6" style={{ color: "var(--text-primary)" }}>
                Send a Message
              </h3>

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="input-base"
                      placeholder="John Carter"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="input-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="input-base resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send size={16} />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
