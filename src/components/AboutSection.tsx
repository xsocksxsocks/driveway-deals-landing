import { Car, Users, ThumbsUp, MapPin } from "lucide-react";

const stats = [
  { number: "10+", label: "Jahre Erfahrung" },
  { number: "500+", label: "Zufriedene Kunden" },
  { number: "100+", label: "Fahrzeuge verkauft" },
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
              IHR AUTOHAUS MIT
              <br />
              <span className="text-gradient-gold">PERSÖNLICHKEIT</span>
            </h2>
            <div className="space-y-4 text-primary-foreground/70">
              <p>
                MSG Intercars Germany ist Ihr zuverlässiger Partner für 
                Gebrauchtwagen in Gerolzhofen und Umgebung. Wir setzen auf 
                ehrliche Beratung und faire Preise.
              </p>
              <p>
                Wir glauben, dass der Autokauf unkompliziert und transparent 
                sein sollte. Unser Team nimmt sich Zeit für Sie und hilft 
                Ihnen dabei, das passende Fahrzeug für Ihre Bedürfnisse zu finden.
              </p>
              <p>
                Jedes Fahrzeug in unserem Bestand wird sorgfältig geprüft, 
                damit Sie sich auf Ihren neuen Gebrauchtwagen verlassen können.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gold/10 rounded-lg">
                  <Car className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold">
                    Geprüfte Autos
                  </h4>
                  <p className="text-primary-foreground/60 text-sm">
                    Vor dem Verkauf gecheckt
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gold/10 rounded-lg">
                  <ThumbsUp className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold">
                    Faire Preise
                  </h4>
                  <p className="text-primary-foreground/60 text-sm">
                    Keine versteckten Kosten
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gold/10 rounded-lg">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold">
                    Persönlich
                  </h4>
                  <p className="text-primary-foreground/60 text-sm">
                    Wir nehmen uns Zeit
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gold/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold">
                    Regional
                  </h4>
                  <p className="text-primary-foreground/60 text-sm">
                    Aus der Region
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