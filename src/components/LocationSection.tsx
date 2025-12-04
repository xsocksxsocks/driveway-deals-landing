import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  return (
    <section id="location" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold font-medium tracking-widest mb-3">
            VISIT US
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
            OUR LOCATION
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Experience our world-class showroom in person. Our team is ready to
            welcome you and help you find your perfect vehicle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1643228273308!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elite Motors Location"
            />
          </div>

          {/* Contact Info */}
          <div className="bg-charcoal-light/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gold/10">
            <h3 className="font-display text-3xl text-primary-foreground mb-8">
              GET IN TOUCH
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold mb-1">
                    Address
                  </h4>
                  <p className="text-primary-foreground/70">
                    123 Luxury Lane
                    <br />
                    Manhattan, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-lg">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold mb-1">
                    Phone
                  </h4>
                  <p className="text-primary-foreground/70">
                    Sales: (123) 456-7890
                    <br />
                    Service: (123) 456-7891
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-lg">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold mb-1">
                    Email
                  </h4>
                  <p className="text-primary-foreground/70">
                    info@elitemotors.com
                    <br />
                    sales@elitemotors.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-lg">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold mb-1">
                    Hours
                  </h4>
                  <p className="text-primary-foreground/70">
                    Mon - Fri: 9:00 AM - 8:00 PM
                    <br />
                    Saturday: 10:00 AM - 6:00 PM
                    <br />
                    Sunday: 12:00 PM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gold/10">
              <Button variant="gold" size="lg" className="w-full">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
