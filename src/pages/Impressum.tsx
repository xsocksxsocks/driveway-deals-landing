import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Button variant="ghost" asChild className="mb-8 text-muted-foreground hover:text-foreground">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Startseite
          </Link>
        </Button>

        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-8">IMPRESSUM</h1>

        <div className="prose prose-invert max-w-3xl space-y-8 text-muted-foreground">
          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              Elite Motors GmbH<br />
              Luxusallee 123<br />
              10117 Berlin
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">Kontakt</h2>
            <p>
              Telefon: (030) 123-4567<br />
              E-Mail: <a href="mailto:info@elitemotors.de" className="text-gold hover:underline">info@elitemotors.de</a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">Vertreten durch</h2>
            <p>
              Geschäftsführer: Max Mustermann
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">Registereintrag</h2>
            <p>
              Eintragung im Handelsregister<br />
              Registergericht: Amtsgericht Berlin-Charlottenburg<br />
              Registernummer: HRB 123456
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE 123456789
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Max Mustermann<br />
              Luxusallee 123<br />
              10117 Berlin
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
              Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;