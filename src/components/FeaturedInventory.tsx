import { Button } from "@/components/ui/button";

const featuredCars = [
  {
    name: "Opel Astra Sports Tourer",
    year: 2022,
    price: "19.900 €",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Opel_Astra_Sports_Tourer_1.2_DI_Turbo_Edition_%28L%29_%E2%80%93_f_30062021.jpg/1280px-Opel_Astra_Sports_Tourer_1.2_DI_Turbo_Edition_%28L%29_%E2%80%93_f_30062021.jpg",
    specs: "110 PS | Schaltgetriebe | Benzin",
  },
  {
    name: "Seat Leon ST",
    year: 2021,
    price: "17.500 €",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/SEAT_Le%C3%B3n_ST_Style_1.0_TSI_%28KL%29_%E2%80%93_f_22032021.jpg/1280px-SEAT_Le%C3%B3n_ST_Style_1.0_TSI_%28KL%29_%E2%80%93_f_22032021.jpg",
    specs: "115 PS | Schaltgetriebe | Diesel",
  },
  {
    name: "Toyota Corolla Touring",
    year: 2023,
    price: "23.900 €",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/2019_Toyota_Corolla_Trek_Hybrid_1.8.jpg/1280px-2019_Toyota_Corolla_Trek_Hybrid_1.8.jpg",
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
            Entdecken Sie unsere handverlesene Auswahl an Premium-Automobilen, 
            jedes geprüft und zertifiziert nach höchsten Standards.
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