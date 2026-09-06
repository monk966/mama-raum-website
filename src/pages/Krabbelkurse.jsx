import massage from '../assets/massage.jpg'
import haendeBaby from '../assets/haende-baby.jpg'
import { PageHero, QuoteBlock, SectionTitle, ImageBand } from '../components/Shared.jsx'
import { aktuelleRunde, kursgruppen, verfuegbarkeitLabels } from '../data/kurse.js'
import { kursAnfrageLink } from '../data/kontakt.js'

/* Reihenfolge immer chronologisch nach Alter: erst 3–6 Monate, dann 7–12 Monate. */
const gruppen = [
  {
    alter: 'ca. 3–6 Monate',
    titel: 'Gemeinsam ankommen',
    text: [
      'Die ersten Monate mit Baby sind eine ganz besondere Zeit – wunderschön, intensiv und manchmal auch voller Fragen.',
      'In dieser Gruppe ist Raum dafür, euch in eurem neuen Alltag als Familie zu finden, Erfahrungen mit anderen Eltern zu teilen und wieder mehr auf das eigene Gefühl zu vertrauen.',
    ],
    themenTitel: 'Gemeinsam beschäftigen wir uns unter anderem mit:',
    themen: [
      'Bindung, Nähe & Tragen',
      'Schlaf & erste Rhythmen',
      'Signale des Babys verstehen & Kommunikation',
      'Sinneserfahrungen, Spiel & Bewegung',
      'Beikost & der Übergang in eine neue Phase',
      'eurem neuen Familienalltag & euren eigenen Bedürfnissen',
    ],
    schluss: 'Dabei bleibt immer Zeit für das, was euch gerade ganz persönlich beschäftigt.',
  },
  {
    alter: 'ca. 7–12 Monate',
    titel: 'Gemeinsam in die nächste Phase',
    text: [
      'Im Laufe des ersten Lebensjahres verändert sich noch einmal vieles – bei eurem Kind, aber auch bei euch als Familie.',
      'Vielleicht rückt die Eingewöhnung näher, die Elternzeit verändert sich oder der Wiedereinstieg in den Beruf steht bevor. Gleichzeitig entstehen neue Fragen rund um Nähe und Loslassen, den Familienalltag und vielleicht auch der Wunsch, wieder etwas mehr Raum für sich selbst oder als Paar zu finden.',
    ],
    themenTitel: 'In dieser Gruppe können unter anderem folgende Themen Raum bekommen:',
    themen: [
      'Bindung, Fremdeln & erste Trennungen',
      'Schlaf & Veränderungen im Tagesrhythmus',
      'Beikost, selbstständiges Essen & Familienkost',
      'Krippe, Eingewöhnung & Loslassen',
      'Elternzeit, Wiedereinstieg & neuer Familienalltag',
      'Eigene Bedürfnisse, Partnerschaft & Zweisamkeit',
    ],
    schluss:
      'Die Themen sind kein festes Programm. Eure Fragen, Gedanken und Erfahrungen bestimmen mit, was in der Gruppe gerade Raum bekommt.',
  },
]

export default function Krabbelkurse() {
  return (
    <>
      <PageHero eyebrow="Krabbelkurse im Saarland" title="Gemeinsam wachsen">
        <p>
          Ein Raum für euch beide. Zum Ankommen, Austauschen und für all das, was euch im ersten
          Jahr mit Baby gerade beschäftigt.
        </p>
      </PageHero>

      {/* Zeit für dein Baby. Raum für dich. */}
      <section className="max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={massage}
          alt="Wohltuende Massage für eine Mutter, die ihr Baby im Arm hält"
          loading="lazy"
          className="w-full aspect-[4/3] object-cover rounded-3xl shadow-[0_10px_40px_rgba(44,79,85,0.18)]"
        />
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-petrol leading-tight">
            Zeit für dein Baby. Raum für dich.
          </h2>
          <div className="mt-6 space-y-4 text-anthrazit/80 font-light leading-relaxed">
            <p>
              In meinen Krabbelkursen stehen nicht nur die Babys im Mittelpunkt, sondern auch ihr
              als Eltern – mit euren Fragen, Gedanken und Erfahrungen. Wir nehmen uns Zeit für
              Austausch, für gemeinsame Momente mit euren Kindern und dafür, der eigenen Intuition
              wieder ein bisschen mehr zu vertrauen.
            </p>
            <p>
              Während eure Babys in einer ruhigen und vorbereiteten Umgebung frei entdecken können,
              bleibt gleichzeitig Zeit für euch als Eltern. Jede Stunde bietet Raum für Austausch
              über die Themen, die euch im Alltag gerade beschäftigen. Dazu kommen kleine Spiel-
              und Bewegungsimpulse, Sinneserfahrungen und Anregungen, die ihr ganz ohne Druck
              gemeinsam entdecken könnt.
            </p>
            <p>
              Themen wie Bindung, Schlaf, Beikost, Kommunikation, Entwicklung oder Familienalltag
              greifen wir gemeinsam auf – nicht als festes Programm, das abgearbeitet werden muss,
              sondern passend zu euch und zu dem, was die Gruppe gerade mitbringt.
            </p>
          </div>
        </div>
      </section>

      <QuoteBlock decor="dots">Für Babys. Für Eltern. Für das, was zwischen euch entsteht.</QuoteBlock>

      {/* Die beiden Gruppen */}
      <section className="bg-beige-light">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-24">
          <SectionTitle eyebrow="Die beiden Gruppen" title="Passend zu dem, wo ihr gerade steht." />
          <div className="grid lg:grid-cols-2 gap-6">
            {gruppen.map((g) => (
              <article key={g.alter} className="card flex flex-col">
                <p className="eyebrow mb-2">{g.alter}</p>
                <h3 className="font-serif text-2xl md:text-3xl text-petrol mb-4">{g.titel}</h3>
                <div className="space-y-3 text-sm text-anthrazit/80 font-light leading-relaxed">
                  {g.text.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                </div>
                <p className="mt-6 mb-3 text-sm text-anthrazit/70 font-light">{g.themenTitel}</p>
                <ul className="space-y-2.5 flex-1">
                  {g.themen.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm text-anthrazit/85 font-light">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-gold shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-anthrazit/75 font-light leading-relaxed italic">
                  {g.schluss}
                </p>
              </article>
            ))}
          </div>

          {/* Für beide Gruppen */}
          <div className="card !bg-white/80 mt-6 max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-2xl text-petrol mb-3">Für beide Gruppen</h3>
            <p className="text-sm text-anthrazit/80 font-light leading-relaxed">
              Neben unserem Austausch haben eure Babys Zeit zum freien Entdecken. Kleine Spiel- und
              Bewegungsimpulse sowie Sinneserfahrungen begleiten die Stunden – ohne dass etwas
              erreicht oder erlernt werden muss.
            </p>
            <p className="mt-4 font-serif text-xl text-petrol italic">
              Im Mittelpunkt steht die gemeinsame Zeit.
            </p>
          </div>
        </div>
      </section>

      {/* Aktuelle Kurse */}
      <section className="max-w-5xl mx-auto px-5 lg:px-8 py-16 md:py-24">
        <SectionTitle eyebrow="Aktuelle Kurse" title="Die nächste Kursrunde." />

        <div className="card">
          <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
            <div>
              <dt className="text-xs uppercase tracking-widest text-anthrazit/55 mb-1">Kursstart</dt>
              <dd className="font-serif text-xl text-petrol">{aktuelleRunde.kursstart}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-anthrazit/55 mb-1">Umfang</dt>
              <dd className="font-serif text-xl text-petrol">{aktuelleRunde.umfang}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-anthrazit/55 mb-1">Ort</dt>
              <dd className="font-serif text-xl text-petrol">{aktuelleRunde.ort}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-anthrazit/55 mb-1">Kursgebühr</dt>
              <dd className="font-serif text-xl text-petrol">{aktuelleRunde.gebuehr}</dd>
            </div>
          </dl>

          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            {kursgruppen.map((g) => {
              const status = verfuegbarkeitLabels[g.verfuegbarkeit]
              const ausgebucht = g.verfuegbarkeit === 'ausgebucht'
              return (
                <div key={g.id} className="rounded-2xl bg-beige-light border border-beige p-6 flex flex-col">
                  <p className="font-serif text-2xl text-petrol">{g.alter}</p>
                  <p className="mt-2 text-sm text-anthrazit/80 font-light">{g.zeit}</p>
                  <span
                    className={`mt-4 self-start rounded-full px-3 py-1 text-xs font-medium tracking-wide ${status.className}`}
                  >
                    {status.text}
                  </span>
                  <div className="mt-6">
                    <a
                      href={kursAnfrageLink(g.alter)}
                      className={ausgebucht ? 'btn-secondary' : 'btn-primary'}
                    >
                      {ausgebucht ? 'Auf die Warteliste' : 'Kursplatz anfragen'}
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

        <ImageBand
          src={haendeBaby}
          alt="Mehrere Hände stützen gemeinsam ein schlafendes Baby"
        />

      {/* Anmeldung */}
      <section className="max-w-3xl mx-auto px-5 lg:px-8 py-16 md:py-24">
        <SectionTitle eyebrow="Anmeldung" title="So meldest du dich an." />
        <div className="card">
          <p className="text-anthrazit/80 font-light leading-relaxed">
            Die Anmeldung bzw. Kursanfrage erfolgt per E-Mail. Dafür brauche ich:
          </p>
          <ul className="mt-5 space-y-3">
            {[
              'deinen Namen',
              'den Namen deines Kindes',
              'das Geburtsdatum deines Kindes',
              'die gewünschte Kursgruppe',
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 text-anthrazit/85 font-light">
                <svg className="mt-1 shrink-0 text-gold" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-anthrazit/75 font-light leading-relaxed">
            Nach meiner Rückmeldung erhältst du alle weiteren Informationen zum Kurs und zur
            verbindlichen Anmeldung.
          </p>
          <div className="mt-8">
            <a href={kursAnfrageLink()} className="btn-primary">Kursplatz anfragen</a>
          </div>
        </div>
      </section>
    </>
  )
}
