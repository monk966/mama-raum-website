import { SectionTitle } from './Shared.jsx'
import { googleProfil, zeigtStimmen } from '../data/stimmen.js'

/* Seit 2022 muss bei Werbung mit Bewertungen dabeistehen, wie sichergestellt
   wird, dass sie von echten Kundinnen stammen (§ 5b Abs. 3 UWG). */
const echtheitsHinweis =
  'Alle Rückmeldungen auf dieser Seite stammen von Familien, die ich tatsächlich begleitet habe. Persönliche Rückmeldungen veröffentliche ich nur mit ausdrücklichem Einverständnis und auf Wunsch anonym.'

const quellenLabel = {
  google: 'Google-Bewertung',
  persoenlich: 'Persönliche Rückmeldung',
}

function Sterne({ anzahl }) {
  return (
    <p className="flex gap-0.5 text-gold" aria-label={`${anzahl} von 5 Sternen`}>
      {Array.from({ length: anzahl }, (_, i) => (
        <svg key={i} aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5l2.9 5.9 6.6.9-4.8 4.6 1.2 6.5-5.9-3.1-5.9 3.1 1.2-6.5L2.5 9.3l6.6-.9z" />
        </svg>
      ))}
    </p>
  )
}

function spaltenKlassen(anzahl) {
  if (anzahl === 1) return 'max-w-xl mx-auto'
  if (anzahl === 2) return 'sm:grid-cols-2 max-w-4xl mx-auto'
  return 'sm:grid-cols-2 lg:grid-cols-3'
}

function Stimme({ text, autor, zusatz, sterne, quelle }) {
  return (
    <figure className="card flex flex-col">
      {sterne && <Sterne anzahl={sterne} />}
      <span aria-hidden="true" className="font-serif text-5xl leading-none text-gold/40">
        „
      </span>
      <blockquote className="-mt-2 flex-1 text-sm text-anthrazit/80 font-light leading-relaxed">
        {text}
      </blockquote>
      <figcaption className="mt-6 pt-5 border-t border-beige">
        <p className="font-serif text-xl text-petrol leading-tight">{autor}</p>
        {zusatz && <p className="mt-1 text-xs text-anthrazit/60 font-light">{zusatz}</p>}
        <p className="mt-2.5 font-sans text-[10.5px] tracking-[0.15em] uppercase text-anthrazit/45">
          {quellenLabel[quelle]}
        </p>
      </figcaption>
    </figure>
  )
}

/**
 * Bewertungsbereich – wird auf der Krabbelkurs- und der Mütterpflegeseite
 * mit jeweils eigenen Texten und einer eigenen Liste verwendet.
 *
 * Die Stimmen stehen in src/data/stimmen.js. Solange dort noch nichts
 * eingetragen ist, bleibt der Bereich sinnvoll: Er lädt dann dazu ein,
 * die erste Bewertung abzugeben.
 */
export default function Stimmen({ id, eyebrow = 'Bewertungen', title, intro, stimmen = [] }) {
  const hatStimmen = stimmen.length > 0

  if (!zeigtStimmen(stimmen)) return null

  return (
    <section id={id} className="scroll-mt-24 bg-beige-light">
      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-24">
        <SectionTitle eyebrow={eyebrow} title={title} />
        <p className="text-center max-w-2xl mx-auto -mt-4 text-anthrazit/75 font-light leading-relaxed">
          {intro}
        </p>

        {hatStimmen && (
          /* Bei ein oder zwei Stimmen schmaler und mittig, damit keine
             leere Spalte danebensteht. */
          <div className={`mt-12 grid gap-5 ${spaltenKlassen(stimmen.length)}`}>
            {stimmen.map((s) => (
              <Stimme key={s.text} {...s} />
            ))}
          </div>
        )}

        {(googleProfil.bewertenUrl || googleProfil.profilUrl) && (
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {googleProfil.bewertenUrl && (
              <a href={googleProfil.bewertenUrl} target="_blank" rel="noreferrer" className="btn-primary">
                Bei Google bewerten
              </a>
            )}
            {googleProfil.profilUrl && (
              <a href={googleProfil.profilUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                Alle Bewertungen ansehen
              </a>
            )}
          </div>
        )}

        {hatStimmen && (
          <p className="mt-10 max-w-2xl mx-auto text-center text-xs text-anthrazit/55 font-light leading-relaxed">
            {echtheitsHinweis}
          </p>
        )}
      </div>
    </section>
  )
}
