import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const links = [
  { to: '/', label: 'Startseite' },
  { to: '/ueber-mich', label: 'Über mich' },
  { to: '/muetterpflege', label: 'Mütterpflege' },
  { to: '/ablauf-kosten', label: 'Ablauf & Kostenübernahme' },
  { to: '/kurse', label: 'Eltern-Kind-Kurse' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `block py-2 lg:py-1 font-sans text-[12.5px] tracking-[0.1em] uppercase whitespace-nowrap transition-colors ${
      isActive ? 'text-gold' : 'text-petrol hover:text-gold'
    }`

  return (
    <header className="sticky top-0 z-50 bg-creme/95 backdrop-blur border-b border-beige">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3 shrink-0 mr-8" onClick={() => setOpen(false)}>
            <img src={logo} alt="MamaRaum – Mütterpflege Saar" className="h-14 w-14 object-contain" />
            <div className="leading-tight lg:hidden 2xl:block">
              <span className="block font-serif text-2xl text-petrol">
                Mama<span className="italic">Raum</span>
              </span>
              <span className="block font-sans text-[10px] tracking-[0.3em] uppercase text-anthrazit/60 whitespace-nowrap">
                Mütterpflege Saar
              </span>
            </div>
          </Link>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/kontakt" className="btn-primary !px-5 !py-2.5 text-[12px]">
              Termin anfragen
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-petrol"
            onClick={() => setOpen(!open)}
            aria-label="Menü öffnen"
            aria-expanded={open}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="lg:hidden pb-5 border-t border-beige pt-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={linkClass}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 !px-5 !py-2.5 text-[12px]"
            >
              Termin anfragen
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
