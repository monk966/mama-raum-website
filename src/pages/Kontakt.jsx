import nachricht from '../assets/nachricht.jpg'
import { PageHero } from '../components/Shared.jsx'
import { PhoneIcon, MailIcon, InstagramIcon } from '../components/Icons.jsx'
import { kontakt, muetterpflegeAnfrageLink, kursAnfrageLink } from '../data/kontakt.js'

const wege = [
  {
    label: 'Telefon',
    wert: kontakt.telefon,
    href: kontakt.telefonHref,
    Icon: PhoneIcon,
  },
  {
    label: 'E-Mail',
    wert: kontakt.email,
    href: `mailto:${kontakt.email}`,
    Icon: MailIcon,
  },
  {
    label: 'Instagram',
    wert: kontakt.instagram,
    href: kontakt.instagramUrl,
    extern: true,
    Icon: InstagramIcon,
  },
]

export default function Kontakt() {
  return (
    <>
      <PageHero eyebrow="Kontakt" title="Ich freue mich, von dir zu hören.">
        <p>
          Ob Mütterpflege oder Krabbelkurs – melde dich gerne telefonisch, per E-Mail oder über
          Instagram. Ich antworte dir so schnell wie möglich.
        </p>
      </PageHero>

      <section className="max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-24 grid lg:grid-cols-5 gap-12 items-start">
        {/* Kontaktdaten */}
        <div className="lg:col-span-3">
          <div className="card !bg-petrol text-creme">
            <h2 className="font-serif text-3xl mb-1">{kontakt.betrieb}</h2>
            <p className="text-creme/70 font-light">{kontakt.name}</p>

            <ul className="mt-8 space-y-5">
              {wege.map((w) => (
                <li key={w.label}>
                  <a
                    href={w.href}
                    {...(w.extern ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="flex items-center gap-4 group"
                  >
                    <span className="shrink-0 w-11 h-11 rounded-full bg-creme/10 flex items-center justify-center text-gold-soft">
                      <w.Icon className="w-[19px] h-[19px]" />
                    </span>
                    <span>
                      <span className="block text-[11px] uppercase tracking-widest text-creme/50">
                        {w.label}
                      </span>
                      <span className="block text-lg font-light group-hover:text-gold-soft transition-colors">
                        {w.wert}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-8 pt-6 border-t border-creme/15 text-sm text-creme/70 font-light">
              Ich bin überwiegend im {kontakt.region} und Umgebung für dich da – zur Mütterpflege komme ich
              zu dir nach Hause.
            </p>
          </div>

          {/* Vorbereitete Anfragen */}
          <div className="card mt-5">
            <h3 className="font-serif text-2xl text-petrol mb-3">Direkt anfragen</h3>
            <p className="text-sm text-anthrazit/75 font-light leading-relaxed">
              Diese Links öffnen dein E-Mail-Programm mit einer vorbereiteten Nachricht – du musst
              sie nur noch ausfüllen und abschicken.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={muetterpflegeAnfrageLink} className="btn-primary">Anfrage Mütterpflege</a>
              <a href={kursAnfrageLink()} className="btn-secondary">Anfrage Krabbelkurs</a>
            </div>
          </div>
        </div>

        {/* Ablauf & Bild */}
        <div className="lg:col-span-2 space-y-5">
          <div className="card">
            <h3 className="font-serif text-2xl text-petrol mb-3">Wie es nach deiner Anfrage weitergeht</h3>
            <ol className="space-y-3 text-sm text-anthrazit/75 font-light leading-relaxed list-none">
              <li><span className="font-serif text-gold text-lg mr-2">1.</span>Ich melde mich persönlich bei dir zurück.</li>
              <li><span className="font-serif text-gold text-lg mr-2">2.</span>Wir lernen uns in einem unverbindlichen Gespräch kennen.</li>
              <li><span className="font-serif text-gold text-lg mr-2">3.</span>Gemeinsam klären wir alles Weitere – auch die Frage der Finanzierung.</li>
            </ol>
          </div>

          <img
            src={nachricht}
            alt="Julia Firmont schreibt eine Nachricht auf ihrem Smartphone"
            loading="lazy"
            className="w-full aspect-[4/3] object-cover rounded-3xl shadow-[0_10px_40px_rgba(44,79,85,0.15)]"
          />

          <div className="card !bg-beige-light border border-beige">
            <p className="font-serif text-xl text-petrol italic leading-snug">
              „Du musst nicht erst an deine Grenzen kommen, um Unterstützung annehmen zu dürfen.“
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
