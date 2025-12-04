import { Facebook, Instagram, Twitter, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-gold/10">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-charcoal-light to-charcoal rounded-2xl p-8 md:p-12 border border-gold/20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-3xl md:text-4xl text-primary-foreground mb-2">
              READY TO FIND YOUR DREAM CAR?
            </h3>
            <p className="text-primary-foreground/70">
              Contact us today and let our experts help you.
            </p>
          </div>
          <Button variant="gold" size="xl" className="shrink-0">
            Get Started <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 border-t border-gold/10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-2xl text-gold tracking-wider">
                ELITE
              </span>
              <span className="font-display text-2xl text-primary-foreground tracking-wider">
                MOTORS
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm mb-6">
              Your premier destination for luxury and performance vehicles since
              1998.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-gold/10 rounded-lg hover:bg-gold/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-gold" />
              </a>
              <a
                href="#"
                className="p-2 bg-gold/10 rounded-lg hover:bg-gold/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-gold" />
              </a>
              <a
                href="#"
                className="p-2 bg-gold/10 rounded-lg hover:bg-gold/20 transition-colors"
              >
                <Twitter className="w-5 h-5 text-gold" />
              </a>
              <a
                href="#"
                className="p-2 bg-gold/10 rounded-lg hover:bg-gold/20 transition-colors"
              >
                <Youtube className="w-5 h-5 text-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-primary-foreground mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {["New Inventory", "Pre-Owned", "Specials", "Financing", "Trade-In"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-primary-foreground/60 hover:text-gold transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl text-primary-foreground mb-4">
              SERVICES
            </h4>
            <ul className="space-y-3">
              {[
                "Vehicle Service",
                "Parts & Accessories",
                "Body Shop",
                "Detailing",
                "Warranties",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/60 hover:text-gold transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl text-primary-foreground mb-4">
              CONTACT
            </h4>
            <ul className="space-y-3 text-primary-foreground/60 text-sm">
              <li>123 Luxury Lane</li>
              <li>Manhattan, NY 10001</li>
              <li className="pt-2">(123) 456-7890</li>
              <li>info@elitemotors.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-6 border-t border-gold/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Elite Motors. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-gold transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-gold transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-gold transition-colors text-sm"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
