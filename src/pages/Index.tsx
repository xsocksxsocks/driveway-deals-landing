import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LocationSection />
      <Footer />
    </main>
  );
};

export default Index;
