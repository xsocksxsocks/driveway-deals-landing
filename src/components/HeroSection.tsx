import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury sports car in showroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <p className="text-gold font-medium tracking-widest mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            PREMIUM AUTOMOTIVE EXPERIENCE
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-foreground leading-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            DRIVE YOUR
            <br />
            <span className="text-gradient-gold">DREAMS</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-xl mb-8 leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            Discover an exclusive selection of luxury and performance vehicles.
            Where excellence meets the road.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
            <Button variant="gold" size="xl">
              Browse Inventory
            </Button>
            <Button variant="hero" size="xl">
              Schedule Test Drive
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#inventory" className="text-primary-foreground/50 hover:text-gold transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
