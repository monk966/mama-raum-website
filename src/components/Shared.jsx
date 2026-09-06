import { Link } from 'react-router-dom'
import { Branch, Moon, Blob, Sparkle, Dots, Sun } from './Decor.jsx'

/** Seitenkopf im Stil der Instagram-Posts: Eyebrow + große Serifen-Headline */
export function PageHero({ eyebrow, title, children, dark = false }) {
  return (
    <section className={`${dark ? 'bg-petrol' : 'bg-beige-light'} relative overflow-hidden`}>
      {/* Deko */}
      <Blob className={`w-105 -top-40 -left-40 ${dark ? 'text-creme/5' : 'text-beige/40'}`} />
      <Branch className={`w-24 md:w-32 -left-4 bottom-4 float-slower ${dark ? 'text-creme/15' : 'text-petrol/15'}`} />
      <Sparkle className={`w-4 left-[15%] top-10 ${dark ? 'text-gold-soft/40' : 'text-gold/35'}`} />

      <div className="relative max-w-4xl mx-auto px-5 lg:px-8 py-16 md:py-24 text-center">
        {eyebrow && <p className={`eyebrow mb-4 ${dark ? '!text-gold-soft' : ''}`}>{eyebrow}</p>}
        <h1 className={`font-serif text-4xl md:text-6xl leading-tight ${dark ? 'text-creme' : 'text-petrol'}`}>
          {title}
        </h1>
        {children && (
          <div className={`mt-6 text-base md:text-lg leading-relaxed font-light ${dark ? 'text-creme/85' : 'text-anthrazit/80'}`}>
            {children}
          </div>
        )}
      </div>
    </section>
  )
}

/** Zentrierter Zwischentitel */
export function SectionTitle({ eyebrow, title, dark = false }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
      {eyebrow && <p className={`eyebrow mb-3 ${dark ? '!text-gold-soft' : ''}`}>{eyebrow}</p>}
      <h2 className={`font-serif text-3xl md:text-5xl leading-tight ${dark ? 'text-creme' : 'text-petrol'}`}>
        {title}
      </h2>
    </div>
  )
}

/**
 * Dunkler Zitat-Block wie die petrolfarbenen Slides.
 * decor: 'moon' (Mond, Standard) | 'dots' (Punkte-Bogen) | 'none'
 */
export function QuoteBlock({ children, sub, decor = 'moon' }) {
  return (
    <section className="bg-petrol relative overflow-hidden">
      {decor === 'moon' && (
        <Moon className="w-24 md:w-32 left-4 bottom-2 text-creme/20 float-slower" />
      )}
      {decor === 'dots' && (
        <Dots className="w-32 md:w-40 right-6 top-8 text-gold-soft/45 float-slower" />
      )}

      <div className="relative max-w-3xl mx-auto px-5 lg:px-8 py-16 md:py-20 text-center">
        <p className="font-serif text-3xl md:text-5xl text-creme leading-snug">{children}</p>
        {sub && <p className="mt-6 text-creme/80 font-light leading-relaxed">{sub}</p>}
      </div>
    </section>
  )
}

/** Ruhiges Bildband als Übergang zwischen zwei Textabschnitten */
export function ImageBand({ src, alt, caption }) {
  return (
    <section className="max-w-6xl mx-auto px-5 lg:px-8 py-10 md:py-14">
      <figure>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full aspect-[16/10] md:aspect-[21/9] object-cover rounded-3xl shadow-[0_10px_40px_rgba(44,79,85,0.18)]"
        />
        {caption && (
          <figcaption className="mt-5 text-center font-serif text-xl md:text-2xl text-petrol italic leading-snug">
            {caption}
          </figcaption>
        )}
      </figure>
    </section>
  )
}

/** Reihe aus zwei oder drei Bildern – einheitliches Hochformat, damit die Reihe ruhig wirkt */
export function ImageStrip({ images }) {
  return (
    <div className={`grid gap-5 ${images.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
      {images.map((img) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          loading="lazy"
          className="w-full aspect-[4/5] object-cover rounded-3xl shadow-[0_10px_40px_rgba(44,79,85,0.15)]"
        />
      ))}
    </div>
  )
}

/** Aufklappbarer Bereich – nutzt <details>, funktioniert damit auch ohne JavaScript */
export function Aufklappbar({ title, children }) {
  return (
    <details className="group card !bg-white/80">
      <summary className="flex items-center justify-between gap-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <span className="font-serif text-2xl text-petrol">{title}</span>
        <span
          aria-hidden="true"
          className="shrink-0 w-9 h-9 rounded-full bg-gold/15 text-gold flex items-center justify-center transition-transform duration-300 group-open:rotate-45"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </summary>
      <div className="mt-6 space-y-4 text-sm text-anthrazit/80 font-light leading-relaxed">{children}</div>
    </details>
  )
}

/** Call-to-Action Abschnitt */
export function CTA({ title = 'Lass uns kennenlernen.', text, buttonLabel = 'Unverbindlich anfragen', to = '/kontakt' }) {
  return (
    <section className="relative overflow-hidden">
      <Sun className="w-24 md:w-32 -right-4 bottom-0 text-gold/25 float-slower" />
      <div className="relative max-w-4xl mx-auto px-5 lg:px-8 py-16 md:py-20 text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-petrol leading-tight mb-5">{title}</h2>
        {text && <p className="text-anthrazit/80 font-light leading-relaxed max-w-2xl mx-auto mb-8">{text}</p>}
        <Link to={to} className="btn-primary">{buttonLabel}</Link>
      </div>
    </section>
  )
}
