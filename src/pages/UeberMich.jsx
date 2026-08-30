import { Link } from 'react-router-dom'
import julia from '../assets/julia.jpg'
import miteinander from '../assets/miteinander.jpg'
import { PageHero, QuoteBlock, CTA } from '../components/Shared.jsx'

export default function UeberMich() {
  return (
    <>
      <PageHero eyebrow="Über mich" title="Hallo, ich bin Julia – die Person hinter MamaRaum.">
        <p>Schön, dass du hier bist.</p>
      </PageHero>

      <section className="max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-24 grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-2">
          <img
            src={julia}
            alt="Julia Firmont – Gründerin von MamaRaum, Mütterpflege Saar"
            className="rounded-3xl shadow-[0_10px_40px_rgba(44,79,85,0.18)] w-full sticky top-28"
          />
        </div>
        <div className="md:col-span-3 space-y-6 text-anthrazit/85 font-light leading-relaxed">
          <p>
            Zuhause bin ich im Saarland – gemeinsam mit meinem Mann und unseren zwei Jungs. Am
            liebsten bin ich irgendwo draußen: am Meer, unterwegs mit unserem Camper oder einfach
            in der Hängematte in unserem Garten. Sonne, Bewegung, gute Gespräche und ein leckerer
            Kaffee in der Hand dürfen dabei nicht fehlen.
          </p>
          <p>
            Ich mag Menschen. Ihre Geschichten, ihre Gedanken und das, was hinter dem ersten
            „Wie geht’s?“ steckt. Für Smalltalk bin ich nicht gemacht – echte Gespräche sind mir
            sehr viel lieber.
          </p>
          <p>
            Ich mag es gerne ordentlich, geplant und am liebsten ziemlich perfekt. Mit zwei Jungs
            und einem abenteuerliebenden Mann an meiner Seite lerne ich jeden Tag ein bisschen
            mehr, dass nicht alles nach Plan laufen muss, um genau richtig zu sein.
          </p>
          <h2 className="h-serif text-3xl md:text-4xl pt-4">Warum MamaRaum?</h2>
          <p>
            Mama zu werden hat mich verändert. Mehr, als ich es je erwartet hätte. Denn mit der
            Geburt eines Kindes wird nicht nur ein Baby geboren – auch eine Frau findet sich neu.
            Mit einem veränderten Körper, neuen Gefühlen, neuer Verantwortung und manchmal der
            Frage, wer sie selbst in all dem eigentlich gerade ist.
          </p>
          <p>
            Während diese Veränderung eigentlich Zeit, Ruhe und ein tragendes Umfeld braucht,
            erwartet unsere Gesellschaft oft das Gegenteil: Funktionieren. Den Alltag schaffen.
            Für alle da sein. Und gleichzeitig in diese völlig neue Rolle hineinfinden. Dabei
            waren wir nie dafür gemacht, all das alleine zu tragen.
          </p>
          <p>
            Vielleicht dürfen wir uns wieder ein Stück zurückbesinnen: auf mehr Gemeinschaft und
            ein Miteinander, in dem Menschen mittragen, versorgen und auffangen. Auf ein Dorf, das
            nicht erst dann da ist, wenn eine Mama nicht mehr kann.
          </p>
          <p>
            Genau dieses Gefühl möchte ich mit MamaRaum ein Stück zurückholen: einen Raum zum
            Ankommen, Wachsen und zum Sein. Meine eigene Geschichte als Mama hat mich geprägt und
            letztlich dazu bewegt, MamaRaum entstehen zu lassen.
          </p>
        </div>
      </section>

      <QuoteBlock sub="Für ein Stück mehr Gemeinschaft und echtes Miteinander.">
        Weil ich glaube, dass wir wieder mehr füreinander da sein dürfen.
      </QuoteBlock>

      {/* Ausbildung / Praxiseinsatz */}
      <section className="max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={miteinander}
          alt="Julia Firmont im Gespräch mit einer Mutter, die ihr Baby im Arm hält"
          loading="lazy"
          className="w-full max-w-sm mx-auto md:max-w-none aspect-[4/5] object-cover rounded-3xl shadow-[0_10px_40px_rgba(44,79,85,0.18)]"
        />
        <div className="card !bg-beige-light border border-beige text-center md:text-left">
          <p className="eyebrow mb-3">Aktuell</p>
          <h2 className="font-serif text-3xl md:text-4xl text-petrol leading-tight mb-4">
            Praxiseinsatz im Rahmen meiner Ausbildung zur Mütterpflegerin
          </h2>
          <p className="text-anthrazit/80 font-light leading-relaxed">
            Ich suche derzeit eine Mama bzw. Familie für meinen 30-Stunden-Praxiseinsatz im Rahmen
            meiner Ausbildung zur Mütterpflegerin – im September, ohne Eigenanteil für dich. Ob die
            Voraussetzungen für eine Kostenübernahme durch die Krankenkasse bei dir gegeben sind,
            schauen wir gemeinsam in einem unverbindlichen Erstgespräch.
          </p>
          <Link to="/kontakt" className="btn-primary mt-7">Ich freue mich, von dir zu hören</Link>
        </div>
      </section>

      <CTA
        title="Lass uns kennenlernen."
        text="Du möchtest wissen, ob Mütterpflege das Richtige für dich ist? Schreib mir – wir finden es gemeinsam heraus."
      />
    </>
  )
}
