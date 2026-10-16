import { Link, NavLink } from 'react-router-dom'
import { kontakt } from '../data/kontakt.js'
import { hauptmenue, rechtliches } from '../data/navigation.js'
import { MailIcon, InstagramIcon } from './Icons.jsx'
import MdevSiegel from './MdevSiegel.jsx'
import logo from '../assets/logo.png'

/* Logo und Siegel sind dunkel gezeichnet und würden auf dem petrolfarbenen
   Untergrund untergehen. Beide bestehen aus einer einzigen Farbfläche,
   deshalb lassen sie sich per Filter sauber auf Creme umstellen. */
const hellStellen = 'brightness-0 invert'

/* "Startseite" bleibt im Footer weg – dafür ist das Logo da. */
const footerMenue = hauptmenue.filter((l) => l.to !== '/')

const kontaktwege = [
  { href: `mailto:${kontakt.email}`, wert: kontakt.email, Icon: MailIcon },
  { href: kontakt.instagramUrl, wert: kontakt.instagram, Icon: InstagramIcon, extern: true },
]

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
      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-11">
        <div className="grid gap-9 text-center lg:grid-cols-[1fr_auto_1fr] lg:gap-10 lg:text-left lg:items-start">
          {/* Links: Marke */}
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="" className={`h-11 w-11 object-contain ${hellStellen}`} />
              <span className="leading-tight">
                <span className="block font-serif text-xl">
                  Mama<span className="italic">Raum</span>
                </span>
                <span className="block font-sans text-[10px] tracking-[0.3em] uppercase text-creme/60 whitespace-nowrap">
                  Mütterpflege Saar
                </span>
              </span>
            </Link>
            <p className="max-w-[16rem] text-sm font-light leading-relaxed text-creme/60">
              Mütterpflege und Krabbelkurse im Saarpfalz-Kreis.
            </p>
          </div>

          {/* Mitte: Menü untereinander, darunter kleiner die Pflichtangaben */}
          <nav className="flex flex-col items-center gap-4 lg:items-start">
            <Spaltentitel>Seiten</Spaltentitel>
            <ul className="flex flex-col gap-2">
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
            <ul className="flex flex-col gap-1 text-xs text-creme/55">
              {rechtliches.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-gold-soft transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Rechts: Kontaktwege, darunter die Mitgliedschaft */}
          <div className="flex flex-col items-center gap-4 lg:items-end">
            <Spaltentitel>Kontakt</Spaltentitel>
            <ul className="flex flex-col gap-2.5">
              {kontaktwege.map((w) => (
                <li key={w.wert}>
                  <a
                    href={w.href}
                    {...(w.extern ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="flex items-center gap-2.5 text-sm font-light text-creme/80 hover:text-gold-soft transition-colors"
                  >
                    <w.Icon className="w-[17px] h-[17px] shrink-0 text-creme/50" />
                    {w.wert}
                  </a>
                </li>
              ))}
            </ul>
            <MdevSiegel className="w-[60px]" hell />
          </div>
        </div>

        <div className="mt-9 pt-5 border-t border-creme/15 text-center text-xs text-creme/50">
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
