import { Link } from 'react-router-dom'
import { kontakt } from '../data/kontakt.js'

export default function Footer() {
  return (
    <footer className="bg-petrol text-creme">
      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-10 flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-serif text-xl">
            {kontakt.betrieb} · {kontakt.name}
          </p>
          <p className="mt-1 text-xs text-creme/60">
            © {new Date().getFullYear()} MamaRaum · Fotos: {kontakt.fotoCredit}
          </p>
        </div>

        <nav className="flex items-center gap-5 text-sm text-creme/80">
          <Link to="/impressum" className="hover:text-gold-soft transition-colors">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-gold-soft transition-colors">Datenschutz</Link>
          <a
            href={kontakt.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold-soft transition-colors"
          >
            Instagram
          </a>
        </nav>
      </div>
    </footer>
  )
}
