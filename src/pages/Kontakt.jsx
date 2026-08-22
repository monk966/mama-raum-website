import { useState } from 'react'
import { PageHero } from '../components/Shared.jsx'

// TODO (Agentur): E-Mail-Adresse der Kundin eintragen bzw. Formular an
// einen Dienst wie Formspree/FormSubmit oder ein eigenes Backend anbinden.
const KONTAKT_EMAIL = 'hallo@mamaraum-saar.de'

const themen = [
  'Unverbindliches Erstgespräch',
  'Mütterpflege / Wochenbettbegleitung',
  'Krabbelgruppe „Gemeinsam wachsen“',
  '30-Stunden-Praxiseinsatz (kein Eigenanteil)',
  'Sonstiges',
]

export default function Kontakt() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    telefon: '',
    thema: themen[0],
    wunschtermin: '',
    nachricht: '',
  })
  const [sent, setSent] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Terminanfrage: ${form.thema} – ${form.name}`)
    const body = encodeURIComponent(
      `Hallo Julia,\n\n` +
        `ich möchte gerne einen Termin anfragen.\n\n` +
        `Name: ${form.name}\n` +
        `E-Mail: ${form.email}\n` +
        `Telefon: ${form.telefon || '–'}\n` +
        `Thema: ${form.thema}\n` +
        `Wunschtermin: ${form.wunschtermin || 'nach Absprache'}\n\n` +
        `Nachricht:\n${form.nachricht}\n\n` +
        `Liebe Grüße\n${form.name}`,
    )
    window.location.href = `mailto:${KONTAKT_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <PageHero eyebrow="Kontakt" title="Ich freue mich, von dir zu hören.">
        <p>
          Ob Erstgespräch, Wochenbettbegleitung oder Krabbelgruppe – schreib mir einfach über das
          Formular. Ich melde mich so schnell wie möglich bei dir.
        </p>
      </PageHero>

      <section className="max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-24 grid lg:grid-cols-5 gap-12">
        {/* Formular */}
        <div className="lg:col-span-3">
          <div className="card">
            <h2 className="font-serif text-3xl text-petrol mb-6">Termin anfragen</h2>
            <form onSubmit={submit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-anthrazit/60 mb-1.5">Name *</label>
                  <input id="name" name="name" required value={form.name} onChange={update} className="input-field" placeholder="Dein Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-anthrazit/60 mb-1.5">E-Mail *</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={update} className="input-field" placeholder="deine@email.de" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="telefon" className="block text-xs uppercase tracking-widest text-anthrazit/60 mb-1.5">Telefon</label>
                  <input id="telefon" name="telefon" type="tel" value={form.telefon} onChange={update} className="input-field" placeholder="Für einen Rückruf (optional)" />
                </div>
                <div>
                  <label htmlFor="wunschtermin" className="block text-xs uppercase tracking-widest text-anthrazit/60 mb-1.5">Wunschtermin</label>
                  <input id="wunschtermin" name="wunschtermin" type="date" value={form.wunschtermin} onChange={update} className="input-field" />
                </div>
              </div>
              <div>
                <label htmlFor="thema" className="block text-xs uppercase tracking-widest text-anthrazit/60 mb-1.5">Worum geht es? *</label>
                <select id="thema" name="thema" value={form.thema} onChange={update} className="input-field">
                  {themen.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="nachricht" className="block text-xs uppercase tracking-widest text-anthrazit/60 mb-1.5">Deine Nachricht *</label>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  required
                  rows="5"
                  value={form.nachricht}
                  onChange={update}
                  className="input-field resize-y"
                  placeholder="Erzähl mir kurz, wo du gerade stehst – z. B. errechneter Geburtstermin oder Alter deines Babys und was du dir wünschst."
                />
              </div>
              <p className="text-xs text-anthrazit/55 font-light leading-relaxed">
                Mit dem Absenden öffnet sich dein E-Mail-Programm mit deiner Anfrage. Deine Daten
                werden ausschließlich zur Bearbeitung deiner Anfrage verwendet.
              </p>
              <button type="submit" className="btn-primary w-full sm:w-auto">Anfrage senden</button>
              {sent && (
                <p className="text-sm text-petrol bg-beige-light border border-beige rounded-xl px-4 py-3">
                  Danke für deine Anfrage! Falls sich dein E-Mail-Programm nicht geöffnet hat,
                  schreib mir gerne direkt an{' '}
                  <a href={`mailto:${KONTAKT_EMAIL}`} className="underline">{KONTAKT_EMAIL}</a>.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Kontakt-Infos */}
        <div className="lg:col-span-2 space-y-5">
          <div className="card !bg-petrol text-creme">
            <h3 className="font-serif text-2xl mb-4">MamaRaum – Mütterpflege Saar</h3>
            <ul className="space-y-3 text-sm text-creme/85 font-light">
              <li className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
                Saarland &amp; Umgebung – ich komme zu dir nach Hause
              </li>
              <li className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                <a href={`mailto:${KONTAKT_EMAIL}`} className="hover:text-gold-soft transition-colors">{KONTAKT_EMAIL}</a>
              </li>
              <li className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none"/></svg>
                <a href="https://www.instagram.com/mamaraum_muetterpflegesaar" target="_blank" rel="noreferrer" className="hover:text-gold-soft transition-colors">
                  @mamaraum_muetterpflegesaar
                </a>
              </li>
            </ul>
          </div>

          <div className="card">
            <h3 className="font-serif text-2xl text-petrol mb-3">Wie geht es nach deiner Anfrage weiter?</h3>
            <ol className="space-y-3 text-sm text-anthrazit/75 font-light leading-relaxed list-none">
              <li><span className="font-serif text-gold text-lg mr-2">1.</span>Ich melde mich persönlich bei dir zurück.</li>
              <li><span className="font-serif text-gold text-lg mr-2">2.</span>Wir vereinbaren ein unverbindliches, kostenloses Erstgespräch.</li>
              <li><span className="font-serif text-gold text-lg mr-2">3.</span>Gemeinsam klären wir alles Weitere – auch die Frage der Kostenübernahme.</li>
            </ol>
          </div>

          <div className="card !bg-beige-light border border-beige">
            <p className="font-serif text-xl text-petrol italic leading-snug">
              „Damit du nicht erst Unterstützung bekommst, wenn nichts mehr geht. Sondern dann,
              wenn du sie brauchst.“
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
