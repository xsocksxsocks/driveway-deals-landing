import { Award, Users, Clock, Shield } from "lucide-react";

const stats = [
  { number: "25+", label: "Jahre Erfahrung" },
  { number: "15K+", label: "Zufriedene Kunden" },
  { number: "500+", label: "Fahrzeuge pro Jahr" },
  { number: "100%", label: "Kundenzufriedenheit" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-gold font-medium tracking-widest mb-3">
              ÜBER UNS
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              EIN VERMÄCHTNIS DER
              <br />
              <span className="text-gradient-gold">EXZELLENZ</span>
            </h2>
            <div className="space-y-4 text-primary-foreground/70">
              <p>
                Seit 1998 ist Elite Motors die erste Adresse für anspruchsvolle
                Automobilenthusiasten. Unser Engagement für Exzellenz hat uns
                zur vertrauenswürdigen Wahl für Luxus- und Hochleistungsfahrzeuge
                gemacht.
              </p>
              <p>
                Wir glauben, dass der Kauf eines Fahrzeugs ein ebenso
                außergewöhnliches Erlebnis sein sollte wie das Auto selbst. Unser
                Team von Automobilexperten bietet persönlichen Service und stellt
                sicher, dass jeder Kunde sein perfektes Fahrzeug findet.
              </p>
              <p>
                Von seltenen Sammlerstücken bis zu den neuesten Hochleistungsmodellen
                – unser kuratiertes Inventar repräsentiert die feinsten verfügbaren
                Automobile. Jedes Fahrzeug durchläuft einen strengen 150-Punkte-
                Inspektionsprozess.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gold/10 rounded-lg">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold">
                    Zertifizierter Händler
                  </h4>
                  <p className="text-primary-foreground/60 text-sm">
                    Preisgekrönter Service
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gold/10 rounded-lg">
                  <Shield className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold">
                    Qualitätsgarantie
                  </h4>
                  <p className="text-primary-foreground/60 text-sm">
                    150-Punkte-Inspektion
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gold/10 rounded-lg">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold">
                    Experten-Team
                  </h4>
                  <p className="text-primary-foreground/60 text-sm">
                    Leidenschaftliche Spezialisten
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gold/10 rounded-lg">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold">
                    Lebenslanger Support
                  </h4>
                  <p className="text-primary-foreground/60 text-sm">
                    Immer für Sie da
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-charcoal-light/50 backdrop-blur-sm border border-gold/10 rounded-2xl p-8 text-center hover:border-gold/30 transition-colors duration-300"
              >
                <p className="font-display text-5xl md:text-6xl text-gold mb-2">
                  {stat.number}
                </p>
                <p className="text-primary-foreground/70 text-sm tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;