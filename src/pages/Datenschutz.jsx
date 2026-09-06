import { PageHero } from '../components/Shared.jsx'
import { kontakt } from '../data/kontakt.js'

/* TODO (Julia): Diese Datenschutzerklärung ist ein Grundgerüst und muss vor
   dem Livegang ergänzt und rechtlich geprüft werden – noch offen sind die
   Angaben des Hosting-Anbieters. */

export default function Datenschutz() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Datenschutzerklärung" />

      <section className="max-w-3xl mx-auto px-5 lg:px-8 py-16 md:py-20 space-y-8 text-anthrazit/85 font-light leading-relaxed">
        <div>
          <h2 className="font-serif text-2xl text-petrol mb-3">Verantwortliche Stelle</h2>
          <p>
            {kontakt.betrieb}
            <br />
            {kontakt.name}
            <br />
            {kontakt.strasse}, {kontakt.ort}
            <br />
            E-Mail:{' '}
            <a href={`mailto:${kontakt.email}`} className="text-petrol underline hover:text-gold transition-colors">
              {kontakt.email}
            </a>
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-petrol mb-3">Aufruf dieser Website</h2>
          <p>
            Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch Daten
            verarbeitet, die dein Browser übermittelt (unter anderem IP-Adresse, Datum und Uhrzeit
            des Zugriffs sowie die aufgerufene Seite). Diese Verarbeitung erfolgt auf Grundlage von
            Art. 6 Abs. 1 lit. f DSGVO zum Zweck eines sicheren und stabilen Betriebs der Website.
          </p>
          <p className="mt-3">Hosting-Anbieter: [Name und Anschrift des Anbieters]</p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-petrol mb-3">Kontaktaufnahme</h2>
          <p>
            Wenn du mich per E-Mail, Telefon oder über Instagram kontaktierst, verarbeite ich die
            von dir mitgeteilten Daten ausschließlich zur Bearbeitung deiner Anfrage. Rechtsgrundlage
            ist Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO. Die Daten werden gelöscht, sobald sie für
            den Zweck nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten
            entgegenstehen.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-petrol mb-3">Schriftarten</h2>
          <p>
            Diese Website bindet Schriftarten von Google Fonts ein. Dabei wird eine Verbindung zu
            Servern von Google aufgebaut und deine IP-Adresse übertragen. [Vor dem Livegang prüfen:
            Schriften lokal einbinden oder eine Einwilligung einholen.]
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-petrol mb-3">Deine Rechte</h2>
          <p>
            Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
            Verarbeitung deiner personenbezogenen Daten sowie auf Datenübertragbarkeit und
            Widerspruch. Außerdem steht dir ein Beschwerderecht bei einer Aufsichtsbehörde zu.
          </p>
        </div>
      </section>
    </>
  )
}
