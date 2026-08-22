import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { Leaf } from './Decor.jsx'

export default function Footer() {
  return (
    <footer className="bg-petrol text-creme relative overflow-hidden">
      <Leaf flip className="w-14 -right-2 top-6 rotate-12 text-creme/10 float-slower" />
      <div className="relative max-w-6xl mx-auto px-5 lg:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-creme rounded-full p-1.5">
              <img src={logo} alt="MamaRaum Logo" className="h-12 w-12 object-contain" />
            </div>
            <div className="leading-tight">
              <span className="block font-serif text-2xl">
                Mama<span className="italic">Raum</span>
              </span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-creme/70">
                Mütterpflege Saar
              </span>
            </div>
          </div>
          <p className="text-sm text-creme/80 leading-relaxed max-w-xs">
            Ein Raum zum Ankommen, Wachsen und zum Sein – Mütterpflege für Familien im Saarland.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-xl mb-4">Seiten</h3>
          <ul className="space-y-2 text-sm text-creme/80">
            <li><Link to="/ueber-mich" className="hover:text-gold-soft transition-colors">Über mich</Link></li>
            <li><Link to="/muetterpflege" className="hover:text-gold-soft transition-colors">Mütterpflege</Link></li>
            <li><Link to="/ablauf-kosten" className="hover:text-gold-soft transition-colors">Ablauf &amp; Kostenübernahme</Link></li>
            <li><Link to="/kurse" className="hover:text-gold-soft transition-colors">Eltern-Kind-Kurse</Link></li>
            <li><Link to="/kontakt" className="hover:text-gold-soft transition-colors">Kontakt &amp; Terminanfrage</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-xl mb-4">Kontakt</h3>
          <ul className="space-y-2 text-sm text-creme/80">
            <li>Julia Firmont</li>
            <li>MamaRaum – Mütterpflege Saar</li>
            <li>Saarland</li>
            <li>
              <a
                href="https://www.instagram.com/mamaraum_muetterpflegesaar"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-gold-soft transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
                </svg>
                @mamaraum_muetterpflegesaar
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-creme/15">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-creme/60">
          <span>© {new Date().getFullYear()} MamaRaum – Mütterpflege Saar · Julia Firmont</span>
          <span className="italic font-serif text-sm">Du musst nicht alles alleine tragen.</span>
        </div>
      </div>
    </footer>
  )
}
