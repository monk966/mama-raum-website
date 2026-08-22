/**
 * Verspielte, dezente Hintergrund-Elemente im MamaRaum-Look:
 * Blätterzweige (wie im Logo), Mond & Punkt (Logo-Motiv), Herzen,
 * Babyfüße und weiche organische Formen.
 *
 * Alle Elemente sind rein dekorativ (aria-hidden, pointer-events-none)
 * und werden absolut in Sektionen mit `relative overflow-hidden` platziert.
 */

const base = 'pointer-events-none select-none absolute'

/** Zarter Blätterzweig – angelehnt an den Zweig im Logo */
export function Branch({ className = '', flip = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 160"
      fill="none"
      className={`${base} ${className}`}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path d="M60 155C58 110 55 60 30 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M44 92C28 84 14 84 4 90 12 74 30 70 44 78" fill="currentColor" />
      <path d="M50 64C36 52 22 48 10 52 20 36 40 38 52 50" fill="currentColor" />
      <path d="M40 34C30 22 18 16 6 18 18 4 36 10 44 24" fill="currentColor" />
      <path d="M52 118C64 108 78 106 90 112 80 96 60 96 50 106" fill="currentColor" />
      <path d="M48 88C62 80 76 80 86 86 78 70 58 68 46 78" fill="currentColor" />
      <path d="M42 58C54 48 68 46 80 52 70 36 50 38 38 48" fill="currentColor" />
    </svg>
  )
}

/** Mond mit goldenem Punkt – das Logo-Motiv als Deko */
export function Moon({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 100" fill="none" className={`${base} ${className}`}>
      <path
        d="M62 8C34 12 14 34 14 60c0 18 10 30 24 34C22 84 10 68 10 48 10 24 32 6 62 8z"
        fill="currentColor"
      />
      <circle cx="66" cy="38" r="9" className="text-gold" fill="currentColor" opacity="0.6" />
    </svg>
  )
}

/** Kleines Herz */
export function Heart({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 30" fill="currentColor" className={`${base} ${className}`}>
      <path d="M16 28S2 18.6 2 9.8C2 5 5.8 2 9.6 2 12.4 2 15 3.8 16 6c1-2.2 3.6-4 6.4-4C26.2 2 30 5 30 9.8 30 18.6 16 28 16 28z" />
    </svg>
  )
}

/** Babyfüßchen */
export function Feet({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 80 60" fill="currentColor" className={`${base} ${className}`}>
      {/* linker Fuß */}
      <ellipse cx="22" cy="38" rx="11" ry="15" />
      <circle cx="10.5" cy="22" r="3.4" />
      <circle cx="17.5" cy="18.5" r="3" />
      <circle cx="24.5" cy="17.5" r="2.7" />
      <circle cx="30.5" cy="19.5" r="2.4" />
      {/* rechter Fuß */}
      <ellipse cx="58" cy="36" rx="11" ry="15" transform="rotate(8 58 36)" />
      <circle cx="49" cy="19" r="2.4" />
      <circle cx="55" cy="16.5" r="2.7" />
      <circle cx="62" cy="16" r="3" />
      <circle cx="69" cy="18.5" r="3.4" />
    </svg>
  )
}

/** Weiche organische Fläche (Blob) */
export function Blob({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 200 200" fill="currentColor" className={`${base} ${className}`}>
      <path d="M164 42c22 24 30 62 16 92s-50 52-86 50-70-28-82-62C0 88 14 46 44 24 74 2 142 18 164 42z" />
    </svg>
  )
}

/** Kleine Funkel-/Sternchen */
export function Sparkle({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className}`}>
      <path d="M12 0c1 7 5 11 12 12-7 1-11 5-12 12-1-7-5-11-12-12C7 11 11 7 12 0z" />
    </svg>
  )
}

/** Einzelnes Blatt */
export function Leaf({ className = '', flip = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 80"
      fill="none"
      className={`${base} ${className}`}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path d="M30 76C10 58 6 34 30 4c24 30 20 54 0 72z" fill="currentColor" />
      <path d="M30 10v62M30 30c-6-4-10-9-12-16M30 30c6-4 10-9 12-16M30 48c-7-4-12-10-14-18M30 48c7-4 12-10 14-18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

/** Sanfter Punkte-Bogen (kleine goldene Sterne am Himmel) */
export function Dots({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 160 60" fill="currentColor" className={`${base} ${className}`}>
      <circle cx="10" cy="46" r="4" />
      <circle cx="48" cy="26" r="5" opacity="0.8" />
      <circle cx="88" cy="14" r="4" opacity="0.65" />
      <circle cx="128" cy="10" r="3" opacity="0.5" />
      <circle cx="156" cy="12" r="2.2" opacity="0.4" />
    </svg>
  )
}

/** Weiche aufgehende Sonne */
export function Sun({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 120 70" fill="none" className={`${base} ${className}`}>
      <path d="M20 70a40 40 0 0 1 80 0" fill="currentColor" opacity="0.85" />
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.6">
        <path d="M60 14V2" />
        <path d="M30 24l-8-9" />
        <path d="M90 24l8-9" />
        <path d="M14 46H2" />
        <path d="M118 46h-12" />
      </g>
    </svg>
  )
}
