import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { seoSeiten, seoFallback, siteUrl } from '../data/seo.js'
import { kontakt } from '../data/kontakt.js'

/**
 * Setzt Titel und Beschreibung passend zur aufgerufenen Seite.
 *
 * Ohne das würde in Google für jede Unterseite derselbe Titel stehen, weil
 * eine React-Seite nur eine einzige index.html besitzt. Die Texte selbst
 * stehen in src/data/seo.js.
 */

function setMetaTag(attr, name, content) {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/* Angaben über den Betrieb für Google – daraus entstehen die Einträge in der
   lokalen Suche und in Google Maps. Quelle ist immer src/data/kontakt.js. */
function betriebsdaten() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: kontakt.betrieb,
    description: seoSeiten['/'].description,
    url: siteUrl,
    telephone: kontakt.telefonHref.replace('tel:', ''),
    email: kontakt.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: kontakt.strasse,
      postalCode: kontakt.ort.split(' ')[0],
      addressLocality: kontakt.ort.split(' ').slice(1).join(' '),
      addressRegion: 'Saarland',
      addressCountry: 'DE',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: kontakt.region },
      { '@type': 'AdministrativeArea', name: 'Saarland' },
    ],
    founder: { '@type': 'Person', name: kontakt.name },
    sameAs: [kontakt.instagramUrl],
    knowsAbout: ['Mütterpflege', 'Wochenbettbetreuung', 'Krabbelkurse', 'Haushaltshilfe'],
  }
}

export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const seite = seoSeiten[pathname] ?? seoFallback

    document.title = seite.title
    setMetaTag('name', 'description', seite.description)

    // Vorschau, wenn jemand den Link per WhatsApp oder Instagram teilt
    setMetaTag('property', 'og:title', seite.title)
    setMetaTag('property', 'og:description', seite.description)
    setMetaTag('property', 'og:url', window.location.href)
  }, [pathname])

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(betriebsdaten())
    document.head.appendChild(script)
    return () => script.remove()
  }, [])

  return null
}
