import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Refund Policy", href: "/refund" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-border/30 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-12 md:grid-cols-3">
          {/* Brand Section */}
          <div>
            <h3 className="mb-2 text-2xl font-thin text-foreground">
              PeakIELTS
            </h3>
            <p className="text-sm text-muted-foreground">
              AI-Powered IELTS Speaking Practice
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-light text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
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

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-light text-foreground">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:pnethpriya2002@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-neon-cyan"
              >
                <Mail className="h-4 w-4" />
                pnethpriya2002@gmail.com
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>PeakIELTS, 264/2, Gorakagahawaththa, Thanthirimulla, Panadura, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-6 border-t border-border/30 pt-8">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">Payments securely processed by Paddle.com</p>
          </div>
          
          <p className="text-center text-sm text-muted-foreground">
            © 2025 PeakIELTS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
