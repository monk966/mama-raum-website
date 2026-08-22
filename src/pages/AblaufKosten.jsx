import { Link } from 'react-router-dom'
import { PageHero, SectionTitle, CTA } from '../components/Shared.jsx'

const schritte = [
  {
    nr: '01',
    title: 'Unverbindliches Erstgespräch',
    text: 'Wir lernen uns kennen – telefonisch oder bei dir zu Hause. Du erzählst mir, wo du gerade stehst und was du dir wünschst. Gemeinsam schauen wir, ob und wie ich dich unterstützen kann.',
  },
  {
    nr: '02',
    title: 'Voraussetzungen klären',
    text: 'Wir prüfen gemeinsam, ob die Voraussetzungen für eine Kostenübernahme durch deine Krankenkasse gegeben sind – und welche Unterlagen (z. B. eine ärztliche Bescheinigung) dafür nötig sind.',
  },
  {
    nr: '03',
    title: 'Antrag bei der Krankenkasse',
    text: 'Den Antrag auf Haushaltshilfe stellst du bei deiner Krankenkasse. Ich unterstütze dich dabei mit allen Angaben, die die Kasse braucht – etwa Umfang und Zeitraum der Begleitung.',
  },
  {
    nr: '04',
    title: 'Die Begleitung beginnt',
    text: 'Sobald alles geklärt ist, starten wir – in deinem Tempo, nach deinen Bedürfnissen. Kein festes Programm, sondern genau die Entlastung, die du gerade brauchst.',
  },
]

const voraussetzungen = [
  'Du bist schwanger oder hast vor Kurzem entbunden – und kannst deinen Haushalt deshalb zeitweise nicht weiterführen (z. B. nach einer schweren oder operativen Geburt, bei Mehrlingen oder auf ärztliche Empfehlung).',
  'Eine ärztliche Bescheinigung bzw. Verordnung liegt vor.',
  'Es lebt keine andere Person im Haushalt, die den Haushalt übernehmen kann.',
  'Bei einer Haushaltshilfe nach § 38 SGB V: Im Haushalt lebt ein Kind unter 12 Jahren.',
]

export default function AblaufKosten() {
  return (
    <>
      <PageHero eyebrow="Ablauf & Kostenübernahme" title="Vom ersten Gespräch bis zur Begleitung.">
        <p>
          Der Weg zur Mütterpflege ist einfacher, als viele denken – und in vielen Fällen beteiligt
          sich die Krankenkasse an den Kosten.
        </p>
      </PageHero>

      {/* Ablauf */}
      <section className="max-w-5xl mx-auto px-5 lg:px-8 py-16 md:py-24">
        <SectionTitle eyebrow="So läuft es ab" title="In vier Schritten zu deiner Entlastung." />
        <div className="grid md:grid-cols-2 gap-5">
          {schritte.map((s) => (
            <div key={s.nr} className="card flex gap-5">
              <span className="font-serif text-4xl text-gold leading-none">{s.nr}</span>
              <div>
                <h3 className="font-serif text-2xl text-petrol mb-2">{s.title}</h3>
                <p className="text-sm text-anthrazit/75 leading-relaxed font-light">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kostenübernahme */}
      <section className="bg-beige-light">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 py-16 md:py-24">
          <SectionTitle eyebrow="Kostenübernahme" title="Was zahlt die Krankenkasse?" />
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <div className="card">
              <p className="eyebrow mb-2">§ 24h SGB V</p>
              <h3 className="font-serif text-2xl text-petrol mb-3">Haushaltshilfe bei Schwangerschaft &amp; Geburt</h3>
              <p className="text-sm text-anthrazit/75 leading-relaxed font-light">
                Wenn dir die Weiterführung des Haushalts wegen Schwangerschaft oder Entbindung
                nicht möglich ist, übernimmt deine gesetzliche Krankenkasse die Kosten für eine
                Haushaltshilfe – zuzahlungsfrei. Über diesen Weg kann auch eine Mütterpflegerin
                eingesetzt werden.
              </p>
            </div>
            <div className="card">
              <p className="eyebrow mb-2">§ 38 SGB V</p>
              <h3 className="font-serif text-2xl text-petrol mb-3">Haushaltshilfe bei Erkrankung</h3>
              <p className="text-sm text-anthrazit/75 leading-relaxed font-light">
                Bei einer schweren Erkrankung oder nach einem Krankenhausaufenthalt kann die Kasse
                eine Haushaltshilfe bewilligen, wenn ein Kind unter 12 Jahren im Haushalt lebt. Hier
                fällt eine gesetzliche Zuzahlung von ca. 5–10&nbsp;€ pro Einsatztag an.
              </p>
            </div>
          </div>

          <div className="card !bg-white/80">
            <h3 className="font-serif text-2xl text-petrol mb-4">Typische Voraussetzungen im Überblick</h3>
            <ul className="space-y-3">
              {voraussetzungen.map((v) => (
                <li key={v} className="flex items-start gap-3 text-sm text-anthrazit/80 font-light leading-relaxed">
                  <svg className="mt-0.5 shrink-0 text-gold" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {v}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-anthrazit/60 font-light leading-relaxed">
              Hinweis: Jede Krankenkasse entscheidet im Einzelfall. Auch eine private
              Beauftragung ohne Krankenkasse ist jederzeit möglich. Diese Informationen ersetzen
              keine verbindliche Auskunft deiner Krankenkasse – ob die Voraussetzungen bei dir
              gegeben sind, schauen wir gemeinsam in einem unverbindlichen Erstgespräch.
            </p>
          </div>
        </div>
      </section>

      {/* Tipp */}
      <section className="max-w-4xl mx-auto px-5 lg:px-8 py-16 md:py-20 text-center">
        <p className="eyebrow mb-4">Mein Tipp</p>
        <p className="font-serif text-2xl md:text-4xl text-petrol leading-snug">
          Kümmere dich am besten schon in der Schwangerschaft um deine Unterstützung fürs
          Wochenbett.
        </p>
        <p className="mt-5 text-anthrazit/75 font-light leading-relaxed max-w-2xl mx-auto">
          So ist dein Dorf schon da, bevor du es brauchst – und du kannst die erste Zeit mit deinem
          Baby in Ruhe genießen. Melde dich gerne frühzeitig, dann klären wir alles Weitere
          gemeinsam.
        </p>
        <Link to="/kontakt" className="btn-primary mt-8">Jetzt Erstgespräch anfragen</Link>
      </section>
    </>
  )
}
