import { Wrench, CreditCard, FileCheck, RefreshCw, Truck, Headphones } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Vehicle Inspection",
    description:
      "Comprehensive 150-point inspection on every vehicle, ensuring premium quality and reliability.",
  },
  {
    icon: CreditCard,
    title: "Flexible Financing",
    description:
      "Competitive rates and tailored financing solutions to fit your budget and lifestyle.",
  },
  {
    icon: RefreshCw,
    title: "Trade-In Program",
    description:
      "Get the best value for your current vehicle with our fair and transparent trade-in process.",
  },
  {
    icon: Wrench,
    title: "Service Center",
    description:
      "Factory-trained technicians using genuine parts to maintain your vehicle's peak performance.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description:
      "Secure, enclosed transport to deliver your dream car anywhere in the country.",
  },
  {
    icon: Headphones,
    title: "Concierge Service",
    description:
      "Dedicated specialists available 24/7 to assist with all your automotive needs.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold font-medium tracking-widest mb-3">
            WHAT WE OFFER
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            OUR SERVICES
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beyond exceptional vehicles, we provide comprehensive services to
            ensure your ownership experience is nothing short of extraordinary.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
