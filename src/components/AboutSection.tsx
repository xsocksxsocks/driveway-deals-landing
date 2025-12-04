import { Award, Users, Clock, Shield } from "lucide-react";

const stats = [
  { number: "25+", label: "Years of Excellence" },
  { number: "15K+", label: "Happy Customers" },
  { number: "500+", label: "Vehicles Sold Yearly" },
  { number: "100%", label: "Customer Satisfaction" },
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
              ABOUT US
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              A LEGACY OF
              <br />
              <span className="text-gradient-gold">EXCELLENCE</span>
            </h2>
            <div className="space-y-4 text-primary-foreground/70">
              <p>
                Since 1998, Elite Motors has been the premier destination for
                discerning automotive enthusiasts. Our commitment to excellence
                has made us the trusted choice for luxury and performance
                vehicles.
              </p>
              <p>
                We believe that purchasing a vehicle should be an experience as
                exceptional as the car itself. Our team of automotive experts
                provides personalized service, ensuring every client finds their
                perfect match.
              </p>
              <p>
                From rare collectibles to the latest high-performance models, our
                curated inventory represents the finest automobiles available.
                Each vehicle undergoes a rigorous 150-point inspection process.
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
                    Certified Dealer
                  </h4>
                  <p className="text-primary-foreground/60 text-sm">
                    Award-winning service
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gold/10 rounded-lg">
                  <Shield className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold">
                    Quality Guarantee
                  </h4>
                  <p className="text-primary-foreground/60 text-sm">
                    150-point inspection
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gold/10 rounded-lg">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold">
                    Expert Team
                  </h4>
                  <p className="text-primary-foreground/60 text-sm">
                    Passionate specialists
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gold/10 rounded-lg">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold">
                    Lifetime Support
                  </h4>
                  <p className="text-primary-foreground/60 text-sm">
                    Always here for you
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
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
