import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { hauptmenue as links } from '../data/navigation.js'

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
            <div className="leading-tight">
              <span className="block font-serif text-2xl text-petrol">
                Mama<span className="italic">Raum</span>
              </span>
              <span className="block font-sans text-[10px] tracking-[0.3em] uppercase text-anthrazit/60 whitespace-nowrap">
                Mütterpflege Saar
              </span>
            </div>
          </Link>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'}>
                {l.label}
              </NavLink>
            ))}
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
          </nav>
        )}
      </div>
    </header>
  )
}
