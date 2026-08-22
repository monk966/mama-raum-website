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

/** Call-to-Action Abschnitt */
export function CTA({ title = 'Lass uns kennenlernen.', text, buttonLabel = 'Unverbindliches Erstgespräch anfragen' }) {
  return (
    <section className="relative overflow-hidden">
      <Sun className="w-24 md:w-32 -right-4 bottom-0 text-gold/25 float-slower" />
      <div className="relative max-w-4xl mx-auto px-5 lg:px-8 py-16 md:py-20 text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-petrol leading-tight mb-5">{title}</h2>
        {text && <p className="text-anthrazit/80 font-light leading-relaxed max-w-2xl mx-auto mb-8">{text}</p>}
        <Link to="/kontakt" className="btn-primary">{buttonLabel}</Link>
      </div>
    </section>
  )
}
