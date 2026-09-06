import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import zweisamkeit from '../assets/zweisamkeit.jpg'
import massage from '../assets/massage.jpg'
import erstgespraech from '../assets/erstgespraech.jpg'
import { Branch, Blob, Sparkle } from '../components/Decor.jsx'
import { kontakt } from '../data/kontakt.js'

const bereiche = [
  {
    bild: zweisamkeit,
    alt: 'Zwei Frauen stehen beieinander, eine hält ihr Baby im Arm',
    // Hochformat im breiten Bild: Ausschnitt nach oben, damit beide Gesichter zu sehen sind
    bildPos: 'object-[center_38%]',
    titel: 'Mütterpflege',
    text: 'Unterstützung und Entlastung für dich und deine Familie rund um Schwangerschaft, Wochenbett und die erste Zeit mit Baby.',
    to: '/muetterpflege',
    button: 'Mehr über Mütterpflege',
  },
  {
    bild: massage,
    alt: 'Wohltuende Massage für eine Mutter, die ihr Baby im Arm hält',
    titel: 'Krabbelkurse',
    text: 'Gemeinsam wachsen: Zeit für dein Kind, Austausch mit anderen Eltern und Raum für all die Themen des ersten Lebensjahres.',
    to: '/krabbelkurse',
    button: 'Zu den Krabbelkursen',
  },
]

export default function Home() {
  return (
    <>
      {/* Einstieg */}
      <section className="bg-beige-light relative overflow-hidden">
        <Blob className="w-130 -top-50 -right-40 text-creme/70" />
        <Branch className="w-24 md:w-36 -left-5 -bottom-4 text-petrol/15 float-slower" />
        <div className="relative max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <p className="eyebrow mb-4">Mütterpflege &amp; Krabbelkurse</p>
            <h1 className="font-serif text-4xl md:text-6xl text-petrol leading-tight">
              Raum zum Ankommen, Wachsen und Sein.
            </h1>
            <div className="mt-6 space-y-4 text-anthrazit/80 font-light leading-relaxed text-base md:text-lg">
              <p>
                Schwangerschaft, Wochenbett und die erste Zeit mit Baby bringen viele Veränderungen
                mit sich. MamaRaum möchte Familien in dieser besonderen Zeit begleiten – mit
                Unterstützung, Entlastung, Begegnung und Raum für das, was gerade gebraucht wird.
              </p>
              <p>
                Hier findest du meine Angebote rund um Mütterpflege und Krabbelkurse im Saarland.
              </p>
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

      {/* Die zwei Bereiche */}
      <section className="relative overflow-hidden">
        <Sparkle className="w-5 right-[7%] top-12 text-gold/35 float-slow" />
        <div className="relative max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-24">
          <p className="text-center max-w-2xl mx-auto text-anthrazit/80 font-light leading-relaxed">
            Jede Familie ist anders. Deshalb darf auch Begleitung individuell sein und genau dort
            ansetzen, wo sie gerade gebraucht wird.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-6 md:gap-8">
            {bereiche.map((b) => (
              <article
                key={b.titel}
                className="bg-white/70 rounded-3xl overflow-hidden shadow-[0_2px_20px_rgba(44,79,85,0.07)] flex flex-col"
              >
                <img
                  src={b.bild}
                  alt={b.alt}
                  loading="lazy"
                  className={`w-full aspect-[16/10] object-cover ${b.bildPos ?? ''}`}
                />
                <div className="p-7 md:p-9 flex flex-col flex-1 text-center">
                  <h2 className="font-serif text-3xl md:text-4xl text-petrol">{b.titel}</h2>
                  <p className="mt-4 text-anthrazit/75 font-light leading-relaxed flex-1">{b.text}</p>
                  <div className="mt-7">
                    <Link to={b.to} className="btn-primary">{b.button}</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Großzügiges Foto als ruhiger Abschluss */}
      <section className="bg-beige-light">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-20">
          <img
                src={erstgespraech}
                alt="Julia Firmont im Gespräch mit einer Mutter, die ihr Baby im Arm hält"
            loading="lazy"
            className="w-full aspect-[16/10] md:aspect-[21/9] object-cover rounded-3xl shadow-[0_10px_40px_rgba(44,79,85,0.18)]"
          />
        </div>
      </section>

      {/* Kurzer Kontaktbereich */}
      <section className="max-w-4xl mx-auto px-5 lg:px-8 py-16 md:py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-petrol leading-tight">
          Du hast eine Frage oder möchtest mich kennenlernen?
        </h2>
        <p className="mt-4 text-anthrazit/75 font-light leading-relaxed">
          Melde dich gerne – telefonisch, per E-Mail oder über Instagram.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-x-8 gap-y-3 font-light text-anthrazit/85">
          <a href={kontakt.telefonHref} className="hover:text-gold transition-colors">
            {kontakt.telefon}
          </a>
          <a href={`mailto:${kontakt.email}`} className="hover:text-gold transition-colors">
            {kontakt.email}
          </a>
        </div>
        <div className="mt-8">
          <Link to="/kontakt" className="btn-secondary">Zum Kontakt</Link>
        </div>
      </section>
    </>
  )
}
