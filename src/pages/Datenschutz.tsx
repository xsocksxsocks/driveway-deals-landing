import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Button variant="ghost" asChild className="mb-8 text-muted-foreground hover:text-foreground">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Startseite
          </Link>
        </Button>

        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-8">DATENSCHUTZERKLÄRUNG</h1>

        <div className="prose prose-invert max-w-3xl space-y-8 text-muted-foreground">
          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl text-foreground mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-xl text-foreground mb-2">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
              gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">3. Verantwortliche Stelle</h2>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              Elite Motors GmbH<br />
              Luxusallee 123<br />
              10117 Berlin<br />
              <br />
              Telefon: (030) 123-4567<br />
              E-Mail: <a href="mailto:datenschutz@elitemotors.de" className="text-gold hover:underline">datenschutz@elitemotors.de</a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">4. Datenerfassung auf dieser Website</h2>
            <h3 className="text-xl text-foreground mb-2">Cookies</h3>
            <p>
              Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine
              Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder
              vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft
              (permanente Cookies) auf Ihrem Endgerät gespeichert.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">5. Kontaktformular und E-Mail-Kontakt</h2>
            <p>
              Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre
              Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
              Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen
              bei uns gespeichert.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">6. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten</li>
              <li>Berichtigung unrichtiger Daten zu verlangen</li>
              <li>Löschung Ihrer Daten zu verlangen</li>
              <li>Einschränkung der Datenverarbeitung zu verlangen</li>
              <li>Der Datenverarbeitung zu widersprechen</li>
              <li>Datenübertragbarkeit zu verlangen</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">7. Widerspruchsrecht</h2>
            <p>
              Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen
              verarbeitet werden, haben Sie das Recht, Widerspruch gegen die Verarbeitung Ihrer
              personenbezogenen Daten einzulegen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">8. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p>
              Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht
              bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in
              datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des
              Bundeslandes, in dem unser Unternehmen seinen Sitz hat.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">9. SSL- bzw. TLS-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
              vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
              Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf
              „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">10. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Dezember 2024.
              Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund
              geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig
              werden, diese Datenschutzerklärung zu ändern.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;