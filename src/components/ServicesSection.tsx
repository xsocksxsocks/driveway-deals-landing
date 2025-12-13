import { Wrench, CreditCard, FileCheck, RefreshCw, Truck, Headphones } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Fahrzeugprüfung",
    description:
      "Jedes Fahrzeug wird vor dem Verkauf gründlich geprüft, damit Sie sicher unterwegs sind.",
  },
  {
    icon: CreditCard,
    title: "Flexible Finanzierung",
    description:
      "Wir bieten verschiedene Finanzierungsmöglichkeiten, die zu Ihrem Budget passen.",
  },
  {
    icon: RefreshCw,
    title: "Inzahlungnahme",
    description:
      "Wir nehmen Ihren Gebrauchtwagen gerne in Zahlung – fair und unkompliziert.",
  },
  {
    icon: Wrench,
    title: "Werkstatt-Service",
    description:
      "Unser Werkstatt-Team kümmert sich um Wartung und Reparaturen Ihres Fahrzeugs.",
  },
  {
    icon: Truck,
    title: "Fahrzeuglieferung",
    description:
      "Auf Wunsch liefern wir Ihr neues Auto direkt zu Ihnen nach Hause.",
  },
  {
    icon: Headphones,
    title: "Kundenservice",
    description:
      "Bei Fragen sind wir für Sie da – vor, während und nach dem Kauf.",
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
            Wir bieten Ihnen mehr als nur Fahrzeuge – unser Service begleitet Sie 
            von der Beratung bis zur Wartung.
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