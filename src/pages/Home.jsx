import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import julia from '../assets/julia.jpg'
import baby from '../assets/baby.jpg'
import { QuoteBlock, SectionTitle } from '../components/Shared.jsx'
import { Branch, Heart, Feet, Blob, Sparkle, Sun } from '../components/Decor.jsx'

const leistungen = [
  {
    title: 'Versorgung deines Babys',
    text: 'Unterstützung bei allem, was dein Baby gerade braucht – damit du auch mal durchatmen kannst.',
  },
  {
    title: 'Stärkende Mahlzeiten',
    text: 'Zubereitung nährender Mahlzeiten, die dir im Wochenbett Kraft und Energie schenken.',
  },
  {
    title: 'Betreuung von Geschwisterkindern',
    text: 'Zeit und Zuwendung für die großen Geschwister, während du dich um dich und dein Baby kümmerst.',
  },
  {
    title: 'Wohltuende Massagen',
    text: 'Kleine Auszeiten für deinen Körper – zum Ankommen, Loslassen und Regenerieren.',
  },
  {
    title: 'Begleitung zu Terminen',
    text: 'Begleitung zu Terminen und Erledigungen im Alltag, damit du nichts alleine stemmen musst.',
  },
  {
    title: 'Leichte Haushaltstätigkeiten',
    text: 'Entlastung im Haushalt, damit mehr Raum für Erholung und dein Baby entsteht.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-beige-light relative overflow-hidden">
        <Blob className="w-130 -top-50 -right-40 text-creme/70" />
        <Branch className="w-24 md:w-36 -left-5 -bottom-4 text-petrol/15 float-slower" />
        <div className="relative max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <p className="eyebrow mb-4">Mütterpflege im Saarland</p>
            <h1 className="font-serif text-4xl md:text-6xl text-petrol leading-tight">
              Ein Raum zum Ankommen, Wachsen und zum Sein.
            </h1>
            <p className="mt-6 text-anthrazit/80 font-light leading-relaxed text-base md:text-lg">
              Mit der Geburt eines Kindes wird nicht nur ein Baby geboren – auch eine Frau findet
              sich neu. MamaRaum begleitet dich rund um Schwangerschaft, Wochenbett und die erste
              Zeit mit deinem Baby. Bei dir zu Hause. Und genau dort, wo du gerade Unterstützung
              brauchst.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <Link to="/kontakt" className="btn-primary">Termin anfragen</Link>
              <Link to="/muetterpflege" className="btn-secondary">Was ist Mütterpflege?</Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={logo}
              alt="MamaRaum – Mütterpflege Saar, Julia Firmont"
              className="w-64 md:w-96 drop-shadow-[0_10px_30px_rgba(44,79,85,0.15)]"
            />
          </div>
        </div>
      </section>

      {/* Leitgedanke */}
      <QuoteBlock sub="Als Mama. Mit einem veränderten Körper, neuen Gefühlen, neuer Verantwortung – und manchmal der Frage, wer sie selbst in all dem eigentlich gerade ist.">
        Mit der Geburt eines Kindes wird nicht nur ein Baby geboren. Auch eine Frau findet sich neu.
      </QuoteBlock>

      {/* Was ist Mütterpflege – Kurzintro */}
      <section className="relative overflow-hidden">
        <Heart className="w-8 md:w-10 -rotate-12 right-[5%] top-14 text-gold/25 float-slower" />
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-24 relative">
        <SectionTitle eyebrow="Wobei ich dich unterstütze" title="Entlastung, die sich nach dir richtet." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {leistungen.map((l) => (
            <div key={l.title} className="card">
              <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-gold block" />
              </div>
              <h3 className="font-serif text-2xl text-petrol mb-2">{l.title}</h3>
              <p className="text-sm text-anthrazit/75 leading-relaxed font-light">{l.text}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 font-serif text-2xl text-petrol italic">
          Dabei gibt es kein festes Programm – jede Frau und jede Familie braucht etwas anderes.
        </p>
        <div className="text-center mt-6">
          <Link to="/muetterpflege" className="btn-secondary">Mehr über Mütterpflege</Link>
        </div>
        </div>
      </section>

      {/* Über mich Teaser */}
      <section className="bg-beige-light relative overflow-hidden">
        <Sparkle className="w-5 right-[7%] top-12 text-gold/40 float-slow" />
        <Sparkle className="w-3 right-[11%] top-24 text-gold/25" />
        <div className="relative max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src={julia}
              alt="Julia Firmont – Mütterpflegerin im Saarland"
              className="rounded-3xl shadow-[0_10px_40px_rgba(44,79,85,0.18)] w-full max-w-md mx-auto"
            />
          </div>
          <div className="order-1 md:order-2 text-center md:text-left">
            <p className="eyebrow mb-4">Die Person hinter MamaRaum</p>
            <h2 className="font-serif text-3xl md:text-5xl text-petrol leading-tight">
              Hallo, ich bin Julia.
            </h2>
            <p className="mt-6 text-anthrazit/80 font-light leading-relaxed">
              Zuhause bin ich im Saarland – gemeinsam mit meinem Mann und unseren zwei Jungs. Mama
              zu werden hat mich verändert. Mehr, als ich es je erwartet hätte. Meine eigene
              Geschichte als Mama hat mich geprägt und letztlich dazu bewegt, MamaRaum entstehen zu
              lassen.
            </p>
            <p className="mt-4 text-anthrazit/80 font-light leading-relaxed">
              Weil ich glaube, dass wir wieder mehr füreinander da sein dürfen – für ein Stück mehr
              Gemeinschaft und echtes Miteinander.
            </p>
            <div className="mt-8">
              <Link to="/ueber-mich" className="btn-primary">Mehr über mich</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dorf-Gedanke */}
      <QuoteBlock decor="dots" sub="Auf mehr Gemeinschaft und ein Miteinander, in dem Menschen mittragen, versorgen und auffangen.">
        Auf ein Dorf, das nicht erst dann da ist, wenn eine Mama nicht mehr kann.
      </QuoteBlock>

      {/* Krabbelgruppe Teaser */}
      <section className="relative overflow-hidden">
        <Feet className="w-16 left-[4%] bottom-8 text-petrol/12 float-slower" />
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center relative">
        <div className="text-center md:text-left">
          <p className="eyebrow mb-4">Eltern-Kind-Kurse</p>
          <h2 className="font-serif text-3xl md:text-5xl text-petrol leading-tight">
            MamaRaum Krabbelgruppe – <span className="italic">Gemeinsam wachsen.</span>
          </h2>
          <p className="mt-6 text-anthrazit/80 font-light leading-relaxed">
            Nicht einfach nur ein Ort zum Spielen und Krabbeln – sondern ein Raum zum Ankommen,
            Austauschen und gemeinsam Wachsen. Für Babys. Für Eltern. Für das, was zwischen euch
            entsteht.
          </p>
          <div className="mt-8">
            <Link to="/kurse" className="btn-secondary">Zur Krabbelgruppe</Link>
          </div>
        </div>
        <div>
          <img
            src={baby}
            alt="Eltern halten ein Baby – MamaRaum Krabbelgruppe"
            className="rounded-3xl shadow-[0_10px_40px_rgba(44,79,85,0.18)] w-full"
          />
        </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-petrol relative overflow-hidden">
        <Sun className="w-28 md:w-32 -left-3 bottom-0 text-gold-soft/30 float-slower" />
        <div className="relative max-w-4xl mx-auto px-5 lg:px-8 py-16 md:py-20 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-creme leading-tight">
            Damit du nicht erst Unterstützung bekommst, wenn nichts mehr geht.
          </h2>
          <p className="mt-4 font-serif text-2xl md:text-3xl text-gold-soft italic">
            Sondern dann, wenn du sie brauchst.
          </p>
          <Link to="/kontakt" className="btn-primary mt-8 !bg-creme !text-petrol hover:!bg-beige">
            Unverbindliches Erstgespräch anfragen
          </Link>
        </div>
      </section>
    </>
  )
}
