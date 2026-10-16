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

/* "Startseite" bleibt im Footer weg – dafür ist das Logo da. */
const footerMenue = hauptmenue.filter((l) => l.to !== '/')

/* Kleine Überschrift über den Spalten, damit die drei Blöcke oben auf einer
   Linie beginnen und der Footer eine klare Struktur bekommt. */
function Spaltentitel({ children }) {
  return (
    <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-creme/45">{children}</p>
  )
}

export default function Footer() {
  return (
    <footer className="bg-petrol text-creme">
      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-14">
        <div className="grid gap-12 text-center lg:grid-cols-[1fr_auto_1fr] lg:gap-10 lg:text-left lg:items-start">
          {/* Links: Marke und Mitgliedschaft */}
          <div className="flex flex-col items-center gap-6 lg:items-start">
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
            <p className="max-w-[17rem] text-sm font-light leading-relaxed text-creme/65">
              Mütterpflege und Krabbelkurse im Saarpfalz-Kreis – für dich und deine Familie rund um
              Schwangerschaft, Wochenbett und die erste Zeit mit Baby.
            </p>
            <MdevSiegel className="w-[72px]" hell />
          </div>

          {/* Mitte: Menü untereinander, darunter kleiner die Pflichtangaben */}
          <nav className="flex flex-col items-center gap-5 lg:items-start">
            <Spaltentitel>Seiten</Spaltentitel>
            <ul className="flex flex-col gap-2.5">
              {footerMenue.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
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
            <ul className="flex flex-col gap-1.5 text-xs text-creme/55">
              {rechtliches.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-gold-soft transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Rechts: Kontaktweg über Instagram */}
          <div className="flex flex-col items-center gap-5 lg:items-end">
            <Spaltentitel>Folge mir</Spaltentitel>
            <a
              href={kontakt.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm font-light text-creme/80 hover:text-gold-soft transition-colors"
            >
              <span className="w-10 h-10 shrink-0 rounded-full border border-creme/25 flex items-center justify-center">
                <InstagramIcon className="w-[18px] h-[18px]" />
              </span>
              {kontakt.instagram}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-creme/15 text-center text-xs text-creme/50">
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
