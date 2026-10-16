import { Link, NavLink } from 'react-router-dom'
import { kontakt } from '../data/kontakt.js'
import { hauptmenue, rechtliches } from '../data/navigation.js'
import { InstagramIcon } from './Icons.jsx'
import MdevSiegel from './MdevSiegel.jsx'
import logo from '../assets/logo.png'

/* Logo und Siegel sind dunkel gezeichnet und würden auf dem petrolfarbenen
   Untergrund untergehen. Beide bestehen aus einer einzigen Farbfläche,
   deshalb lassen sie sich per Filter sauber auf Creme umstellen. */
const hellStellen = 'brightness-0 invert'

/* "Startseite" bleibt im Footer weg – dafür ist das Logo da. Ohne diesen
   Punkt passt das Menü genau mittig zwischen Logo und Instagram. */
const footerMenue = hauptmenue.filter((l) => l.to !== '/')

export default function Footer() {
  return (
    <footer className="bg-petrol text-creme">
      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-12 md:py-14">
        {/* Gleich breite Außenspalten, damit das Menü wirklich in der Mitte der
            Seite steht und nicht nur zwischen Logo und Instagram. */}
        <div className="grid gap-10 text-center lg:grid-cols-[1fr_auto_1fr] lg:gap-12 lg:text-left">
          {/* Links: Marke und Mitgliedschaft */}
          <div className="flex flex-col items-center gap-7 lg:items-start">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="" className={`h-12 w-12 object-contain ${hellStellen}`} />
              <span className="leading-tight">
                <span className="block font-serif text-xl">
                  Mama<span className="italic">Raum</span>
                </span>
                <span className="block font-sans text-[10px] tracking-[0.3em] uppercase text-creme/60 whitespace-nowrap">
                  Mütterpflege Saar
                </span>
              </span>
            </Link>
            <MdevSiegel className="w-16" hell />
          </div>

          {/* Mitte: Menü, darunter kleiner die Pflichtangaben */}
          <nav className="flex flex-col items-center gap-5 lg:pt-1">
            <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2">
              {footerMenue.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      `font-sans text-[12.5px] tracking-[0.1em] uppercase transition-colors ${
                        isActive ? 'text-gold-soft' : 'hover:text-gold-soft'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-creme/55">
              {rechtliches.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-gold-soft transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Rechts: Instagram */}
          <div className="flex justify-center lg:justify-end lg:pt-1">
            <a
              href={kontakt.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Instagram: ${kontakt.instagram}`}
              className="w-11 h-11 rounded-full border border-creme/25 flex items-center justify-center hover:border-gold-soft hover:text-gold-soft transition-colors"
            >
              <InstagramIcon className="w-[19px] h-[19px]" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-creme/15 text-center text-xs text-creme/50">
          © MamaRaum {new Date().getFullYear()} by{' '}
          <a
            href={kontakt.umsetzungUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold-soft transition-colors"
          >
            {kontakt.umsetzung}
          </a>{' '}
          · Fotos: {kontakt.fotoCredit}
        </div>
      </div>
    </footer>
  )
}
