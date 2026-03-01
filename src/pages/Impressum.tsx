import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-8 text-muted-foreground hover:text-gold transition-colors">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Startseite
            </Link>
          </Button>

          <div className="max-w-4xl">
            <p className="text-gold font-medium tracking-widest mb-3">RECHTLICHES</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">IMPRESSUM</h1>

            <div className="space-y-10 text-muted-foreground">
              <section className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
                <p className="leading-relaxed">
                  MSG Intercars Germany UG<br />
                  Lohmühlenweg 6<br />
                  97447 Gerolzhofen
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl text-foreground mb-4">Kontakt</h2>
                <p className="leading-relaxed">
                  Telefon: Auf Anfrage<br />
                  E-Mail: <a href="mailto:info@msg-intercars.de" className="text-gold hover:underline transition-colors">info@msg-intercars.de</a>
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl text-foreground mb-4">Vertreten durch</h2>
                <p className="leading-relaxed">
                  Geschäftsführer: Moreno Dalpiaz
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl text-foreground mb-4">Registereintrag</h2>
                <p className="leading-relaxed">
                  Eintragung im Handelsregister<br />
                  Registergericht: Amtsgericht Schweinfurt<br />
                  Registernummer: HRB 5895
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl text-foreground mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p className="leading-relaxed">
                  Moreno Dalpiaz<br />
                  Lohmühlenweg 6<br />
                  97447 Gerolzhofen
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl text-foreground mb-4">Streitschlichtung</h2>
                <p className="leading-relaxed mb-4">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline transition-colors">
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>
                <p className="leading-relaxed">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl text-foreground mb-4">Haftung für Inhalte</h2>
                <p className="leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                  Tätigkeit hinweisen.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl text-foreground mb-4">Haftung für Links</h2>
                <p className="leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
                  übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
                  Betreiber der Seiten verantwortlich.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl text-foreground mb-4">Urheberrecht</h2>
                <p className="leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                  Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Impressum;