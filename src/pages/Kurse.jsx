import { Link } from 'react-router-dom'
import baby from '../assets/baby.jpg'
import krabbelgruppe from '../assets/krabbelgruppe.jpg'
import babyArm from '../assets/baby-arm.jpg'
import { PageHero, QuoteBlock, SectionTitle, ImageStrip } from '../components/Shared.jsx'

const inhalte = [
  {
    title: 'Spiel- & Bewegungsimpulse',
    text: 'Kleine Impulse, Sinneserfahrungen und viel Zeit zum freien Entdecken – abgestimmt auf das, was eure Babys gerade bewegt.',
  },
  {
    title: 'Raum für eure Themen',
    text: 'Bindung, Schlaf, Entwicklung, Beikost oder euer Familienalltag: Hier ist Raum für eure Fragen, Gedanken und alles, was euch gerade beschäftigt.',
  },
  {
    title: 'Austausch & Gemeinschaft',
    text: 'Andere Eltern kennenlernen, Erfahrungen teilen, sich getragen fühlen – ein kleines Dorf auf Zeit.',
  },
  {
    title: 'Jedes Kind in seinem Tempo',
    text: 'Kein Vergleichen. Kein Programm, das abgearbeitet werden muss. Sondern Zeit, eure Kinder zu beobachten und sie in ihrer Entwicklung zu begleiten.',
  },
]

export default function Kurse() {
  return (
    <>
      <PageHero eyebrow="Eltern-Kind-Kurse" title="MamaRaum Krabbelgruppe – Gemeinsam wachsen.">
        <p>Für Babys. Für Eltern. Für das, was zwischen euch entsteht.</p>
      </PageHero>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={baby}
            alt="Eltern halten liebevoll ein Baby"
            className="rounded-3xl shadow-[0_10px_40px_rgba(44,79,85,0.18)] w-full"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="font-serif text-3xl md:text-5xl text-petrol leading-tight">
            Ein Raum für euch beide.
          </h2>
          <p className="mt-6 text-anthrazit/80 font-light leading-relaxed">
            Nicht einfach nur ein Ort zum Spielen und Krabbeln – sondern ein Raum zum Ankommen,
            Austauschen und gemeinsam Wachsen.
          </p>
          <p className="mt-4 text-anthrazit/80 font-light leading-relaxed">
            Mir ist wichtig, dass hier nicht nur die Babys im Mittelpunkt stehen – sondern auch ihr
            als Eltern. Mit euren Fragen, euren Gedanken und allem, was euch im Alltag gerade
            beschäftigt.
          </p>
        </div>
      </section>

      {/* Inhalte */}
      <section className="bg-beige-light">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-24">
          <SectionTitle eyebrow="Was euch erwartet" title="Wir entdecken gemeinsam, was eure Babys gerade bewegt." />
          <div className="grid sm:grid-cols-2 gap-5">
            {inhalte.map((i) => (
              <div key={i.title} className="card">
                <h3 className="font-serif text-2xl text-petrol mb-2">{i.title}</h3>
                <p className="text-sm text-anthrazit/75 leading-relaxed font-light">{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteBlock sub="Sondern Zeit, eure Kinder zu beobachten, sie in ihrer Entwicklung zu begleiten – und auch der eigenen Intuition wieder ein bisschen mehr zu vertrauen.">
        Kein Vergleichen. Kein Programm, das abgearbeitet werden muss.
      </QuoteBlock>

      {/* Impressionen */}
      <section className="max-w-4xl mx-auto px-5 lg:px-8 pt-16 md:pt-20">
        <ImageStrip
          images={[
            { src: krabbelgruppe, alt: 'Eltern halten gemeinsam ein Baby im Arm' },
            { src: babyArm, alt: 'Ein Baby liegt entspannt im Arm eines Elternteils' },
          ]}
        />
      </section>

      {/* Organisatorisches */}
      <section className="max-w-4xl mx-auto px-5 lg:px-8 py-16 md:py-24">
        <SectionTitle eyebrow="Gut zu wissen" title="Organisatorisches zur Krabbelgruppe." />
        <div className="grid sm:grid-cols-3 gap-5 text-center">
          <div className="card">
            <p className="eyebrow mb-2">Für wen</p>
            <p className="font-serif text-xl text-petrol">Babys im ersten Lebensjahr – gemeinsam mit Mama oder Papa</p>
          </div>
          <div className="card">
            <p className="eyebrow mb-2">Wo</p>
            <p className="font-serif text-xl text-petrol">Im Saarland – den genauen Ort erfährst du bei der Anmeldung</p>
          </div>
          <div className="card">
            <p className="eyebrow mb-2">Anmeldung</p>
            <p className="font-serif text-xl text-petrol">Über das Kontaktformular oder per Instagram</p>
          </div>
        </div>
        <p className="text-center mt-8 text-sm text-anthrazit/70 font-light">
          Die Plätze sind bewusst begrenzt, damit Raum für jede Familie bleibt. Aktuelle Termine
          und alle Infos zur Anmeldung findest du auch auf Instagram im Highlight „Krabbelgruppe“.
        </p>
        <div className="text-center mt-8">
          <Link to="/kontakt" className="btn-primary">Platz in der Krabbelgruppe anfragen</Link>
        </div>
      </section>
    </>
  )
}
