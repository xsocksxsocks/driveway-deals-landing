import { Facebook, Instagram, Twitter, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-gold/10">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-charcoal-light to-charcoal rounded-2xl p-8 md:p-12 border border-gold/20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-3xl md:text-4xl text-primary-foreground mb-2">
              BEREIT FÜR IHR TRAUMAUTO?
            </h3>
            <p className="text-primary-foreground/70">
              Kontaktieren Sie uns noch heute und lassen Sie sich von unseren Experten beraten.
            </p>
          </div>
          <Button variant="gold" size="xl" className="shrink-0" asChild>
            <a href="mailto:info@msg-intercars.de">
              Jetzt anfragen <ArrowRight className="w-5 h-5 ml-2" />
            </a>
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
                MSG
              </span>
              <span className="font-display text-2xl text-primary-foreground tracking-wider">
                INTERCARS
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm mb-6">
              Ihre erste Adresse für zuverlässige Familienfahrzeuge in Gerolzhofen.
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
              SCHNELLLINKS
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Neufahrzeuge", href: "#inventory" },
                { name: "Gebrauchtwagen", href: "#inventory" },
                { name: "Angebote", href: "#inventory" },
                { name: "Finanzierung", href: "#services" },
                { name: "Inzahlungnahme", href: "#services" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl text-primary-foreground mb-4">
              LEISTUNGEN
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Fahrzeugservice", href: "#services" },
                { name: "Ersatzteile & Zubehör", href: "#services" },
                { name: "Karosserie-Werkstatt", href: "#services" },
                { name: "Fahrzeugaufbereitung", href: "#services" },
                { name: "Garantien", href: "#services" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl text-primary-foreground mb-4">
              KONTAKT
            </h4>
            <ul className="space-y-3 text-primary-foreground/60 text-sm">
              <li>Lohmühlenweg 6</li>
              <li>97447 Gerolzhofen</li>
              <li className="pt-2">+49 0000 000</li>
              <li>
                <a href="mailto:info@msg-intercars.de" className="hover:text-gold transition-colors">
                  info@msg-intercars.de
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-6 border-t border-gold/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} MSG Intercars Germany UG. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link
              to="/datenschutz"
              className="text-primary-foreground/50 hover:text-gold transition-colors text-sm"
            >
              Datenschutz
            </Link>
            <Link
              to="/impressum"
              className="text-primary-foreground/50 hover:text-gold transition-colors text-sm"
            >
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;