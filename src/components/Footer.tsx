import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const links = [
    { name: "About", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Start Test", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative border-t border-border/30 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-2xl font-thin text-foreground">
              Peak<span className="text-neon-cyan">IELTS</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              AI-Powered IELTS Speaking Tutor
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-neon-cyan"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 border-t border-border/30 pt-12 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 PeakIELTS. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border/30 text-muted-foreground transition-all duration-300 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
