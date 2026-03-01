import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  return (
    <section id="location" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold font-medium tracking-widest mb-3">
            BESUCHEN SIE UNS
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
            UNSER STANDORT
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Besuchen Sie uns vor Ort in Gerolzhofen. Unser Team
            freut sich darauf, Sie zu begrüßen und Ihnen bei der Suche nach
            Ihrem passenden Fahrzeug zu helfen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2570.123456789!2d10.3549!3d49.9000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a2f8a1234567890%3A0x1234567890abcdef!2sLohm%C3%BChlenweg%206%2C%2097447%20Gerolzhofen!5e0!3m2!1sde!2sde!4v1643228273308!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MSG Intercars Standort"
            />
          </div>

          {/* Contact Info */}
          <div className="bg-charcoal-light/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gold/10">
            <h3 className="font-display text-3xl text-primary-foreground mb-8">
              KONTAKTIEREN SIE UNS
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold mb-1">
                    Adresse
                  </h4>
                  <p className="text-primary-foreground/70">
                    Lohmühlenweg 6
                    <br />
                    97447 Gerolzhofen
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-lg">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold mb-1">
                    Telefon
                  </h4>
                  <p className="text-primary-foreground/70">
                    Auf Anfrage
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-lg">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold mb-1">
                    E-Mail
                  </h4>
                  <p className="text-primary-foreground/70">
                    <a href="mailto:kontakt@msg-intercars.com" className="hover:text-gold transition-colors">kontakt@msg-intercars.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-lg">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold mb-1">
                    Öffnungszeiten
                  </h4>
                  <p className="text-primary-foreground/70">
                    Mo - Fr: 9:00 - 20:00 Uhr
                    <br />
                    Samstag: 10:00 - 18:00 Uhr
                    <br />
                    Sonntag: Geschlossen
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gold/10">
              <Button variant="gold" size="lg" className="w-full" asChild>
                <a href="mailto:kontakt@msg-intercars.com">E-Mail schreiben</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;