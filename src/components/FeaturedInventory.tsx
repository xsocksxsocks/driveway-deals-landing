import { Button } from "@/components/ui/button";

const featuredCars = [
  {
    name: "Opel Astra Sports Tourer",
    year: 2022,
    price: "19.900 €",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&auto=format&fit=crop&q=80",
    specs: "110 PS | Schaltgetriebe | Benzin",
  },
  {
    name: "Seat Leon ST",
    year: 2021,
    price: "17.500 €",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80",
    specs: "115 PS | Schaltgetriebe | Diesel",
  },
  {
    name: "Toyota Corolla Touring",
    year: 2023,
    price: "23.900 €",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=80",
    specs: "140 PS | Automatik | Hybrid",
  },
];

const FeaturedInventory = () => {
  return (
    <section id="inventory" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold font-medium tracking-widest mb-3">
            UNSERE KOLLEKTION
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            AUSGEWÄHLTE FAHRZEUGE
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie unsere Auswahl an geprüften Gebrauchtwagen, 
            jedes Fahrzeug sorgfältig überprüft und fahrbereit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car, index) => (
            <div
              key={car.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-gold text-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                  {car.year}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-foreground mb-2">
                  {car.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{car.specs}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-bold text-xl">{car.price}</span>
                  <Button variant="dark" size="sm" asChild>
                    <a href="mailto:info@msg-intercars.de">Anfragen</a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-foreground/20 hover:border-gold hover:text-gold" asChild>
            <a href="mailto:info@msg-intercars.de">Alle Fahrzeuge anfragen</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInventory;