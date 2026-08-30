import { Link } from 'react-router-dom'
import getragen from '../assets/getragen.jpg'
import massage from '../assets/massage.jpg'
import { PageHero, QuoteBlock, SectionTitle, CTA, ImageBand } from '../components/Shared.jsx'

const leistungen = [
  'Unterstützung bei der Versorgung deines Babys',
  'Zubereitung stärkender Mahlzeiten',
  'Betreuung von Geschwisterkindern',
  'Wohltuende Massagen',
  'Begleitung zu Terminen & Erledigungen im Alltag',
  'Leichte Haushaltstätigkeiten',
]

const raumFuer = [
  { title: 'Erholung & Regeneration', text: 'Dein Körper hat Großes geleistet. Das Wochenbett ist zum Heilen und Kräftesammeln da – nicht zum Funktionieren.' },
  { title: 'Dein Baby', text: 'Ungestörte Zeit zum Kennenlernen, Kuscheln und Bonden – ohne dass der Alltag drängt.' },
  { title: 'Geschwisterkinder', text: 'Auch die Großen brauchen jetzt Zuwendung. Mütterpflege schafft Raum für alle.' },
  { title: 'Gespräche & Gefühle', text: 'Alles darf da sein: Glück, Erschöpfung, Zweifel, Freude. Und manchmal einfach ein Moment nur für dich.' },
]

const wissenswertes = [
  {
    title: 'Wusstest du? Das Wochenbett dauert etwa 6–8 Wochen.',
    text: 'In dieser Zeit heilt der Körper, die Hormone ordnen sich neu und die Bindung zum Baby wächst. Ruhe und Entlastung sind dabei keine Verwöhnung, sondern eine wichtige Grundlage für einen guten Start – körperlich wie seelisch.',
  },
  {
    title: 'In vielen Kulturen ist Mütterpflege selbstverständlich.',
    text: 'Ob „die ersten 40 Tage“ oder das Sprichwort „Es braucht ein ganzes Dorf, um ein Kind großzuziehen“: Rund um die Welt werden Mütter nach der Geburt umsorgt, bekocht und getragen. Genau daran knüpft Mütterpflege an.',
  },
  {
    title: 'Entlastung wirkt vorbeugend.',
    text: 'Frühe Unterstützung im Wochenbett kann helfen, Erschöpfung vorzubeugen und das seelische Wohlbefinden zu stärken. Hilfe anzunehmen ist kein Zeichen von Schwäche – sondern ein guter Umgang mit einer besonderen Lebensphase.',
  },
]

export default function Muetterpflege() {
  return (
    <>
      <PageHero eyebrow="Mütterpflege" title="Was ist eigentlich Mütterpflege?">
        <p>
          Mütterpflege bedeutet vor allem eines: <span className="font-serif italic text-petrol text-xl">Du musst in dieser besonderen Zeit nicht alles alleine tragen.</span>
        </p>
      </PageHero>

      {/* Definition */}
      <section className="max-w-4xl mx-auto px-5 lg:px-8 py-16 md:py-20 text-center">
        <p className="font-serif text-2xl md:text-4xl text-petrol leading-snug">
          Mütterpflege begleitet dich rund um Schwangerschaft, Wochenbett und die erste Zeit mit
          deinem Baby.
        </p>
        <p className="mt-6 text-anthrazit/80 font-light leading-relaxed text-lg">
          Sie begleitet dich bei dir zu Hause. Und genau dort, wo du gerade Unterstützung brauchst.
          Sie entlastet dich im Alltag, damit für dich wieder mehr Raum entsteht.
        </p>
      </section>

      <ImageBand
        src={getragen}
        alt="Ein Baby wird von mehreren Händen gehalten und gestützt"
        caption="Damit du dich ganz auf dich und dein Baby einlassen kannst."
      />

      {/* Raum für ... */}
      <section className="bg-beige-light">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-24">
          <SectionTitle eyebrow="Mehr Raum" title="Damit für dich wieder mehr Raum entsteht." />
          <div className="grid sm:grid-cols-2 gap-5">
            {raumFuer.map((r) => (
              <div key={r.title} className="card">
                <h3 className="font-serif text-2xl text-petrol mb-2">Für {r.title}.</h3>
                <p className="text-sm text-anthrazit/75 leading-relaxed font-light">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Konkrete Leistungen */}
      <section className="max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-24">
        <SectionTitle eyebrow="Ganz konkret" title="Wie kann diese Entlastung aussehen?" />
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <ul className="space-y-4">
            {leistungen.map((l) => (
              <li key={l} className="flex items-start gap-4 bg-white/70 rounded-2xl px-6 py-4 shadow-[0_2px_16px_rgba(44,79,85,0.06)]">
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-gold shrink-0" />
                <span className="text-anthrazit/85 font-light">{l}</span>
              </li>
            ))}
          </ul>
          <img
            src={massage}
            alt="Wohltuende Massage für eine Mutter, die ihr Baby im Arm hält"
            loading="lazy"
            className="w-full aspect-[4/3] object-cover rounded-3xl shadow-[0_10px_40px_rgba(44,79,85,0.18)]"
          />
        </div>
        <p className="text-center mt-10 font-serif text-2xl md:text-3xl text-petrol">
          Dabei gibt es kein festes Programm.
        </p>
        <p className="text-center mt-3 text-anthrazit/75 font-light max-w-xl mx-auto">
          Jede Frau und jede Familie braucht etwas anderes – und genau danach richtet sich
          Mütterpflege. <span className="font-serif italic text-petrol text-lg">Ganz individuell.</span>
        </p>
      </section>

      {/* Abgrenzung Hebamme */}
      <QuoteBlock sub="Sie übernimmt keine medizinische Versorgung. Sie begleitet dich ergänzend im Alltag – mit Zeit, Entlastung und Unterstützung für dich und deine Familie.">
        Mütterpflege ersetzt keine Hebamme.
      </QuoteBlock>

      {/* Wissenswertes */}
      <section className="max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-24">
        <SectionTitle eyebrow="Wissenswertes" title="Gut zu wissen rund ums Wochenbett." />
        <div className="grid md:grid-cols-3 gap-5">
          {wissenswertes.map((w) => (
            <div key={w.title} className="card !bg-beige-light border border-beige">
              <h3 className="font-serif text-xl text-petrol mb-3 leading-snug">{w.title}</h3>
              <p className="text-sm text-anthrazit/75 leading-relaxed font-light">{w.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-anthrazit/75 font-light mb-6">
            Gut zu wissen: Unter bestimmten Voraussetzungen können die Kosten von deiner
            Krankenkasse übernommen werden.
          </p>
          <Link to="/ablauf-kosten" className="btn-secondary">Zu Ablauf &amp; Kostenübernahme</Link>
        </div>
      </section>

      <CTA
        title="Unterstützung darf selbstverständlich sein."
        text="Damit du nicht erst Unterstützung bekommst, wenn nichts mehr geht – sondern dann, wenn du sie brauchst."
      />
    </>
  )
}
