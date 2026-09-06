import { PageHero } from '../components/Shared.jsx'
import { kontakt } from '../data/kontakt.js'

/* TODO (Julia): Noch offen ist die Umsatzsteuer-Angabe – entweder die
   Umsatzsteuer-ID oder der Hinweis auf die Kleinunternehmerregelung. Die
   Angaben vor dem Livegang rechtlich prüfen lassen. */

export default function Impressum() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" />

      <section className="max-w-3xl mx-auto px-5 lg:px-8 py-16 md:py-20 space-y-8 text-anthrazit/85 font-light leading-relaxed">
        <div>
          <h2 className="font-serif text-2xl text-petrol mb-3">Angaben gemäß § 5 DDG</h2>
          <p>
            {kontakt.betrieb}
            <br />
            {kontakt.name}
            <br />
            {kontakt.strasse}
            <br />
            {kontakt.ort}
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-petrol mb-3">Kontakt</h2>
          <p>
            Telefon:{' '}
            <a href={kontakt.telefonHref} className="text-petrol underline hover:text-gold transition-colors">
              {kontakt.telefon}
            </a>
            <br />
            E-Mail:{' '}
            <a href={`mailto:${kontakt.email}`} className="text-petrol underline hover:text-gold transition-colors">
              {kontakt.email}
            </a>
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-petrol mb-3">Verantwortlich für den Inhalt</h2>
          <p>
            {kontakt.name}, Anschrift wie oben.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-petrol mb-3">Umsatzsteuer</h2>
          <p>[Umsatzsteuer-Identifikationsnummer bzw. Hinweis auf Kleinunternehmerregelung nach § 19 UStG]</p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-petrol mb-3">Streitschlichtung</h2>
          <p>
            Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-petrol mb-3">Bildnachweis</h2>
          <p>Fotografie: {kontakt.fotoCredit}</p>
        </div>
      </section>
    </>
  )
}
