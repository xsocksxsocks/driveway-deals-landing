import { Wrench, CreditCard, FileCheck, RefreshCw, Truck, Headphones } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Fahrzeuginspektion",
    description:
      "Umfassende 150-Punkte-Inspektion bei jedem Fahrzeug, die Premium-Qualität und Zuverlässigkeit garantiert.",
  },
  {
    icon: CreditCard,
    title: "Flexible Finanzierung",
    description:
      "Wettbewerbsfähige Konditionen und maßgeschneiderte Finanzierungslösungen, die zu Ihrem Budget passen.",
  },
  {
    icon: RefreshCw,
    title: "Inzahlungnahme",
    description:
      "Erhalten Sie den besten Wert für Ihr aktuelles Fahrzeug mit unserem fairen und transparenten Prozess.",
  },
  {
    icon: Wrench,
    title: "Servicecenter",
    description:
      "Werkstechniker mit Originalteilen, um die Höchstleistung Ihres Fahrzeugs zu erhalten.",
  },
  {
    icon: Truck,
    title: "Deutschlandweite Lieferung",
    description:
      "Sichere, geschlossene Transportmöglichkeiten, um Ihr Traumauto überall in Deutschland zu liefern.",
  },
  {
    icon: Headphones,
    title: "Concierge-Service",
    description:
      "Dedizierte Spezialisten, die rund um die Uhr für alle Ihre automobilen Bedürfnisse verfügbar sind.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold font-medium tracking-widest mb-3">
            WAS WIR BIETEN
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            UNSERE LEISTUNGEN
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Neben außergewöhnlichen Fahrzeugen bieten wir umfassende Services,
            um sicherzustellen, dass Ihr Besitzerlebnis nichts weniger als außergewöhnlich ist.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-card"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;