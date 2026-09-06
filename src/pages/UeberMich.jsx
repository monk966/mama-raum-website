import juliaStehend from '../assets/julia-stehend.jpg'
import miteinander from '../assets/miteinander.jpg'
import gemeinschaft from '../assets/gemeinschaft.jpg'
import { PageHero, QuoteBlock, SectionTitle, CTA } from '../components/Shared.jsx'

const qualifikationen = ['Mütterpflegerin', 'Zertifizierte Krabbelgruppenleiterin']

export default function UeberMich() {
  return (
    <>
      <PageHero eyebrow="Über mich" title="Hallo, ich bin Julia.">
        <p>Schön, dass du hier bist.</p>
      </PageHero>

      {/* Wer ich bin */}
      <section className="max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-24 grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-2">
          <img
            src={juliaStehend}
            alt="Julia Firmont – Mütterpflegerin und Krabbelgruppenleiterin im Saarland"
            className="w-full max-w-sm mx-auto md:max-w-none aspect-[3/4] object-cover rounded-3xl shadow-[0_10px_40px_rgba(44,79,85,0.18)] md:sticky md:top-28"
          />
        </div>
        <div className="md:col-span-3 space-y-6 text-anthrazit/85 font-light leading-relaxed">
          <p>
            Ich lebe mit meinem Mann und unseren zwei Jungs im Saarland und arbeite als
            Mütterpflegerin und Krabbelgruppenleiterin.
          </p>
          <p>
            Am liebsten bin ich irgendwo draußen – am Meer, unterwegs mit unserem Camper oder
            einfach in der Hängematte in unserem Garten. Sonne, Bewegung, gute Gespräche und ein
            leckerer Kaffee in der Hand dürfen dabei nicht fehlen.
          </p>
          <p>
            Ich mag Menschen. Ihre Geschichten, ihre Gedanken und das, was hinter dem ersten
            „Wie geht’s?“ steckt. Für Smalltalk bin ich nicht gemacht – echte Gespräche sind mir
            sehr viel lieber.
          </p>
          <p>
            Ich mag es gerne ordentlich, geplant und am liebsten ziemlich perfekt. Mit zwei Jungs
            und einem abenteuerliebenden Mann an meiner Seite lerne ich allerdings jeden Tag ein
            bisschen mehr, dass nicht alles nach Plan laufen muss, um genau richtig zu sein.
          </p>

          {/* Qualifikationen */}
          <div className="card !bg-beige-light border border-beige !p-6">
            <p className="eyebrow mb-3">Qualifikationen</p>
            <ul className="space-y-2">
              {qualifikationen.map((q) => (
                <li key={q} className="flex items-center gap-3 font-serif text-xl text-petrol">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Was meine Arbeit ausmacht */}
      <section className="bg-beige-light">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="eyebrow mb-4">Was meine Arbeit ausmacht</p>
            <h2 className="font-serif text-3xl md:text-4xl text-petrol leading-tight">
              Ich möchte Familien nicht erzählen, wie es „richtig“ geht.
            </h2>
            <div className="mt-6 space-y-4 text-anthrazit/80 font-light leading-relaxed">
              <p>
                Mir ist wichtig zuzuhören, hinzuschauen und gemeinsam herauszufinden, was für euch
                passt. Denn jede Familie bringt ihre eigene Geschichte, ihre eigenen Bedürfnisse
                und ihren ganz eigenen Alltag mit.
              </p>
              <p>
                Ich wünsche mir, dass Frauen und Familien sich bei mir nicht bewertet oder belehrt
                fühlen, sondern gesehen, ernst genommen und unterstützt.
              </p>
              <p>
                Meine eigenen Erfahrungen als Mama haben meinen Blick auf Schwangerschaft,
                Wochenbett und Familienalltag geprägt und letztlich auch den Wunsch entstehen
                lassen, Frauen und Familien in dieser besonderen Zeit zu begleiten.
              </p>
            </div>
          </div>
          <img
            src={miteinander}
            alt="Julia Firmont im Gespräch mit einer Mutter, die ihr Baby im Arm hält"
            loading="lazy"
            className="order-1 md:order-2 w-full max-w-sm mx-auto md:max-w-none aspect-[4/5] object-cover rounded-3xl shadow-[0_10px_40px_rgba(44,79,85,0.18)]"
          />
        </div>
      </section>

      {/* Warum MamaRaum */}
      <section className="max-w-3xl mx-auto px-5 lg:px-8 py-16 md:py-24">
        <SectionTitle eyebrow="Warum MamaRaum?" title="Mama zu werden hat mich verändert." />
        <div className="space-y-5 text-anthrazit/85 font-light leading-relaxed">
          <p>Viel tiefer, als ich es vorher hätte erahnen können.</p>
          <p>
            Denn mit der Geburt eines Kindes wird nicht nur ein Baby geboren. Auch eine Frau findet
            sich neu – als Mama, mit einem veränderten Körper, neuen Gefühlen, einer neuen
            Verantwortung und manchmal auch mit der Frage, wer sie selbst in all dem eigentlich
            gerade ist.
          </p>
          <p>Und trotzdem scheint unsere Gesellschaft immer mehr von Mamas zu erwarten.</p>
          <p>
            Wir sollen uns erholen und gleichzeitig funktionieren. Uns in einer völlig neuen Rolle
            zurechtfinden und dabei möglichst schnell wieder die „Alte“ sein. Die Bedürfnisse
            unseres Babys intuitiv verstehen, den Alltag tragen, Beziehungen pflegen – und all das
            möglichst selbstständig und selbstverständlich.
          </p>
          <p className="font-serif text-2xl text-petrol italic leading-snug">
            Aber vielleicht liegt genau darin etwas, das wir wieder verändern dürfen.
          </p>
          <p>
            Denn eine Frau sollte nach der Geburt nicht möglichst schnell wieder funktionieren
            müssen. Sie darf Zeit bekommen. Zeit, um zu heilen. Zeit, um ihr Baby kennenzulernen.
            Zeit, um in ihr neues Leben und ihre neue Rolle hineinzuwachsen.
          </p>
          <p>Und sie sollte all das nicht alleine tragen müssen.</p>
          <p>
            Wenn wir ein Stück zurückblicken, war Familie nie dafür gedacht, von einer einzelnen
            Person getragen zu werden. Es gab Menschen, die mitgetragen, versorgt und aufgefangen
            haben.
          </p>
        </div>
      </section>

      <QuoteBlock
        decor="dots"
        sub="Und ich glaube, es braucht dieses Dorf genauso sehr für die Mama."
      >
        Es braucht ein Dorf, um ein Kind großzuziehen.
      </QuoteBlock>

      <section className="max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={gemeinschaft}
          alt="Zwei Frauen halten sich im Arm, während eine von ihnen ein Baby trägt"
          loading="lazy"
          className="w-full max-w-sm mx-auto md:max-w-none aspect-[4/5] object-cover rounded-3xl shadow-[0_10px_40px_rgba(44,79,85,0.18)]"
        />
        <div className="space-y-5 text-anthrazit/85 font-light leading-relaxed">
          <p>Genau aus diesem Gedanken ist MamaRaum entstanden.</p>
          <p>
            Ein Raum, in dem Mamas Unterstützung annehmen dürfen. In dem sie nicht lernen müssen,
            wie Mamasein „richtig“ geht, sondern wieder mehr darauf vertrauen dürfen, dass ganz
            viel bereits in ihnen steckt.
          </p>
          <p>Ein Raum für Verbindung, Entlastung und echtes Miteinander.</p>
          <p className="font-serif text-2xl md:text-3xl text-petrol leading-snug">
            Ein Raum zum Ankommen, Wachsen und zum Sein. 🤍
          </p>
        </div>
      </section>

      <CTA
        title="Lass uns kennenlernen."
        text="Du möchtest wissen, ob meine Begleitung zu dir passt? Melde dich gerne – wir finden es gemeinsam heraus."
        buttonLabel="Unverbindlich anfragen"
      />
    </>
  )
}
