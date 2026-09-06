import babyArm from '../assets/baby-arm.jpg'
import getragen from '../assets/getragen.jpg'
import juliaBogen from '../assets/julia-bogen.jpg'
import { PageHero, QuoteBlock, SectionTitle, CTA, ImageBand, Aufklappbar } from '../components/Shared.jsx'

const unterstuetzung = [
  {
    title: 'Entlastung & Erholung',
    text: 'Ich entlaste dich im Alltag und übernehme Aufgaben, wenn du körperlich eingeschränkt bist, Kraft sammeln oder dir bewusst Zeit für Erholung nehmen möchtest.',
  },
  {
    title: 'Unterstützung rund ums Baby',
    text: 'Ich begleite dich im Alltag mit deinem Baby und unterstütze dort, wo gerade Entlastung gebraucht wird – zum Beispiel beim Tragen, Beruhigen oder Versorgen, damit du dich erholen oder anderen Dingen widmen kannst.',
  },
  {
    title: 'Geschwister & Familienalltag',
    text: 'Ich unterstütze bei der Betreuung und Beschäftigung von Geschwisterkindern und helfe dabei, den Familienalltag in dieser besonderen Zeit aufzufangen.',
  },
  {
    title: 'Haushalt & Ernährung',
    text: 'Ich übernehme anfallende Aufgaben im Haushalt, kümmere mich beispielsweise um Wäsche und Ordnung oder bereite euch eine ausgewogene, stärkende Mahlzeit zu.',
  },
  {
    title: 'Organisation & Alltag',
    text: 'Wenn gerade vieles gleichzeitig zusammenkommt, unterstütze ich dich dabei, den Alltag zu strukturieren, Dinge zu organisieren oder begleite dich bei Bedarf auch zu Terminen.',
  },
  {
    title: 'Zeit & Fürsorge für dich',
    text: 'Auch deine Bedürfnisse dürfen Raum haben. Dazu können Zeit für Gespräche, ein offenes Ohr oder wohltuende Massagen gehören.',
  },
]

const ablauf = [
  {
    nr: '01',
    title: 'Du meldest dich bei mir',
    text: 'Schreib mir eine Nachricht oder eine E-Mail und erzähl mir kurz, wobei du dir Unterstützung wünschst.',
  },
  {
    nr: '02',
    title: 'Wir lernen uns kennen',
    text: 'In einem ersten Gespräch besprechen wir deine aktuelle Situation, deinen Unterstützungsbedarf und schauen, ob eine Begleitung für uns beide passt.',
  },
  {
    nr: '03',
    title: 'Wir klären die Finanzierung',
    text: 'Kommt eine Kostenübernahme durch deine Krankenkasse infrage, unterstütze ich dich beim Antrag und wir schauen gemeinsam, welche Unterlagen und ärztlichen Bescheinigungen benötigt werden. Natürlich kannst du meine Unterstützung auch als Selbstzahlerin in Anspruch nehmen.',
  },
  {
    nr: '04',
    title: 'Wir planen deine Unterstützung',
    text: 'Sobald alles geklärt ist, besprechen wir gemeinsam, wann und in welchem Umfang ich dich begleite und welche Unterstützung du im Alltag gerade brauchst.',
  },
  {
    nr: '05',
    title: 'Die Begleitung beginnt',
    text: 'Wie die gemeinsame Zeit konkret aussieht, richtet sich nach dir und deiner Familie. Es gibt kein festes Programm – wir schauen immer wieder gemeinsam, was euch gerade am meisten entlastet.',
  },
]

export default function Muetterpflege() {
  return (
    <>
      <PageHero eyebrow="Mütterpflege im Saarland" title="Unterstützung, die sich an eurem Familienalltag orientiert.">
        <p>
          Schwangerschaft, Geburt und Wochenbett sind Zeiten voller Veränderung. Der eigene Körper
          braucht Erholung, ein Baby möchte versorgt werden und gleichzeitig läuft der
          Familienalltag weiter.
        </p>
      </PageHero>

      {/* Was ist Mütterpflege? */}
      <section className="max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-4">Was ist Mütterpflege?</p>
            <h2 className="font-serif text-3xl md:text-4xl text-petrol leading-tight">
              Genau hier setzt Mütterpflege an.
            </h2>
            <div className="mt-6 space-y-4 text-anthrazit/80 font-light leading-relaxed">
              <p>
                Sie schafft Entlastung, gibt Raum für Erholung und unterstützt dich dort, wo du im
                Alltag gerade Hilfe brauchst.
              </p>
              <p>
                Mütterpflege ist eine individuelle Unterstützung für Frauen und Familien während
                der Schwangerschaft, im Wochenbett und in der ersten Zeit mit Baby. Dabei steht
                nicht ein bestimmter Ablauf im Vordergrund, sondern das, was euch als Familie
                gerade wirklich entlastet.
              </p>
              <p>
                Das kann bedeuten, dass ich Aufgaben im Haushalt übernehme, Mahlzeiten zubereite,
                dich bei der Versorgung deines Babys oder der Geschwisterkinder unterstütze oder
                dir ganz bewusst Zeit für Ruhe und Erholung ermögliche.
              </p>
              <p>
                Es gibt kein festes Programm. Jede Familie ist individuell – und genauso
                individuell darf auch die Begleitung sein. Gemeinsam schauen wir, was ihr gerade
                braucht und wie ich euch am besten unterstützen kann.
              </p>
            </div>
          </div>
          <img
            src={babyArm}
            alt="Ein Baby liegt entspannt im Arm eines Elternteils"
            loading="lazy"
            className="w-full max-w-sm mx-auto lg:max-w-none aspect-[4/5] object-cover rounded-3xl shadow-[0_10px_40px_rgba(44,79,85,0.18)]"
          />
        </div>

        {/* Abgrenzung zur Hebamme – bewusst als kleiner Hinweis */}
        <div className="card !bg-beige-light border border-beige mt-12 max-w-3xl">
          <h3 className="font-serif text-xl text-petrol mb-3">Gut zu wissen: Mütterpflege ersetzt keine Hebamme.</h3>
          <p className="text-sm text-anthrazit/75 font-light leading-relaxed">
            Mütterpflege und Hebammenbetreuung sind zwei unterschiedliche Bereiche. Als
            Mütterpflegerin übernehme ich keine medizinischen, therapeutischen oder ärztlichen
            Aufgaben. Mein Schwerpunkt liegt auf der individuellen Unterstützung und Entlastung im
            Familienalltag – während der Schwangerschaft, im Wochenbett und in der ersten Zeit mit
            Baby.
          </p>
        </div>
      </section>

      {/* Wann kann Mütterpflege unterstützen? */}
      <section className="bg-beige-light">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 py-16 md:py-24">
          <SectionTitle eyebrow="Für wen" title="Wann kann Mütterpflege unterstützen?" />
          <div className="space-y-4 text-anthrazit/80 font-light leading-relaxed">
            <p>
              Manchmal braucht es im Familienalltag einfach ein bisschen mehr Unterstützung – ganz
              unabhängig davon, wie Schwangerschaft, Geburt oder Wochenbett verlaufen.
            </p>
            <p>
              Mütterpflege kann für euch eine Unterstützung sein, wenn du dir während der
              Schwangerschaft oder nach der Geburt mehr Entlastung und Zeit für Erholung wünschst,
              wenn der Alltag mit Baby und Geschwisterkindern viel Kraft fordert oder wenn
              Unterstützung durch Partner, Familie oder Freunde nur eingeschränkt möglich ist.
            </p>
            <p>
              Auch wenn du dir ganz bewusst Begleitung für diese besondere Zeit wünschst, kann
              Mütterpflege eine Möglichkeit sein.
            </p>
          </div>
        </div>
      </section>

      <QuoteBlock>Du musst nicht erst an deine Grenzen kommen, um Unterstützung annehmen zu dürfen.</QuoteBlock>

      {/* So kann ich dich unterstützen */}
      <section className="max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-24">
        <SectionTitle eyebrow="So kann ich dich unterstützen" title="Gemeinsam schauen wir, was dich gerade entlastet." />
        <p className="text-center max-w-2xl mx-auto -mt-4 mb-12 text-anthrazit/75 font-light leading-relaxed">
          Was gebraucht wird, ist von Familie zu Familie unterschiedlich. Gemeinsam schauen wir,
          welche Aufgaben ich dir abnehmen kann und wo meine Unterstützung für dich und deine
          Familie gerade am wertvollsten ist.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {unterstuetzung.map((u) => (
            <div key={u.title} className="card">
              <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-gold block" />
              </div>
              <h3 className="font-serif text-2xl text-petrol mb-2">{u.title}</h3>
              <p className="text-sm text-anthrazit/75 leading-relaxed font-light">{u.text}</p>
            </div>
          ))}
        </div>
      </section>

      <ImageBand
        src={getragen}
        alt="Ein Baby wird von mehreren Händen gehalten und gestützt"
        caption="Damit du dich ganz auf dich und dein Baby einlassen kannst."
      />

      {/* So läuft eine Anfrage ab */}
      <section className="bg-beige-light">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-16 md:py-24">
          <SectionTitle eyebrow="Ablauf" title="So läuft eine Anfrage ab." />
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
            <img
              src={juliaBogen}
              alt="Julia Firmont mit dem Wunschbogen für die Begleitung"
              loading="lazy"
              className="w-full max-w-xs mx-auto lg:max-w-none lg:sticky lg:top-28 aspect-[3/4] object-cover rounded-3xl shadow-[0_10px_40px_rgba(44,79,85,0.18)]"
            />
            <ol className="space-y-4">
              {ablauf.map((s) => (
                <li key={s.nr} className="card flex gap-5">
                  <span className="font-serif text-3xl text-gold leading-none shrink-0">{s.nr}</span>
                  <div>
                    <h3 className="font-serif text-2xl text-petrol mb-2">{s.title}</h3>
                    <p className="text-sm text-anthrazit/75 leading-relaxed font-light">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Kosten & Finanzierung */}
      <section className="max-w-5xl mx-auto px-5 lg:px-8 py-16 md:py-24">
        <SectionTitle eyebrow="Kosten & Finanzierung" title="Zwei Wege zur Unterstützung." />

        <div className="card">
          <h3 className="font-serif text-2xl md:text-3xl text-petrol mb-4">
            Kostenübernahme durch die Krankenkasse
          </h3>
          <div className="space-y-4 text-sm text-anthrazit/80 font-light leading-relaxed">
            <p>
              Unter bestimmten Voraussetzungen kann die Unterstützung durch eine Mütterpflegerin
              über die gesetzliche Krankenkasse als Haushaltshilfe finanziert werden. Eine
              Kostenübernahme kann insbesondere im Zusammenhang mit Schwangerschaft und Entbindung
              (§ 24h SGB V) oder aufgrund einer Erkrankung (§ 38 SGB V) infrage kommen.
            </p>
            <p>
              Ob und auf welcher Grundlage eine Kostenübernahme möglich ist und in welchem Umfang
              die Unterstützung bewilligt wird, hängt von deiner individuellen Situation und den
              Voraussetzungen deiner Krankenkasse ab.
            </p>
            <p>
              Du musst dich damit nicht alleine auseinandersetzen. Wenn eine Kostenübernahme für
              dich infrage kommt, unterstütze ich dich beim Antrag und wir schauen gemeinsam,
              welche Unterlagen und Bescheinigungen deine Krankenkasse benötigt.
            </p>
          </div>
        </div>

        <div className="mt-5">
          <Aufklappbar title="Mehr zur Kostenübernahme">
            <div>
              <h4 className="font-serif text-xl text-petrol mb-2">
                § 24h SGB V – Schwangerschaft &amp; Entbindung
              </h4>
              <p>
                Wenn du aufgrund deiner Schwangerschaft oder Entbindung deinen Haushalt
                vorübergehend nicht selbst weiterführen kannst, kann ein Anspruch auf Haushaltshilfe
                bestehen. Voraussetzung ist unter anderem, dass keine andere im Haushalt lebende
                Person den Haushalt in dem erforderlichen Umfang weiterführen kann.
              </p>
              <p className="mt-3">
                Der notwendige Unterstützungsbedarf muss entsprechend bescheinigt werden. Welche
                Unterlagen deine Krankenkasse dafür benötigt, klären wir gemeinsam.
              </p>
            </div>

            <div className="pt-2">
              <h4 className="font-serif text-xl text-petrol mb-2">
                § 38 SGB V – Haushaltshilfe aufgrund von Erkrankung
              </h4>
              <p>
                Auch aufgrund einer Erkrankung kann ein Anspruch auf Haushaltshilfe bestehen. Hier
                gelten andere Voraussetzungen als bei einer Unterstützung aufgrund von
                Schwangerschaft oder Entbindung. Unter anderem können die konkrete gesundheitliche
                Situation, die Versorgung eines im Haushalt lebenden Kindes sowie die
                Satzungsleistungen der jeweiligen Krankenkasse eine Rolle spielen.
              </p>
              <p className="mt-3">
                Welche Regelung in deiner Situation infrage kommt, wird individuell geprüft.
              </p>
            </div>

            <div className="rounded-2xl bg-beige-light border border-beige px-5 py-4">
              <p className="font-serif text-lg text-petrol mb-1">Gut zu wissen</p>
              <p>
                Du musst vor deiner Anfrage bei mir nicht wissen, welcher Paragraph auf dich
                zutrifft. Melde dich gerne bei mir – wir schauen gemeinsam, welcher Weg für deine
                Situation infrage kommen könnte und welche Unterlagen für den Antrag benötigt
                werden.
              </p>
            </div>
          </Aufklappbar>
        </div>

        <div className="card !bg-beige-light border border-beige mt-5">
          <h3 className="font-serif text-2xl md:text-3xl text-petrol mb-4">Selbstzahlerinnen</h3>
          <div className="space-y-4 text-sm text-anthrazit/80 font-light leading-relaxed">
            <p>Unterstützung braucht nicht immer einen medizinischen Grund.</p>
            <p>
              Vielleicht wünschst du dir bereits in der Schwangerschaft, im Wochenbett oder in der
              ersten Zeit mit Baby mehr Ruhe und Entlastung, Unterstützung im Familienalltag oder
              einfach jemanden, der dir in dieser besonderen Zeit ein Stück den Rücken freihält.
            </p>
            <p>
              Auch ohne medizinische Voraussetzung kannst du meine Begleitung als Selbstzahlerin in
              Anspruch nehmen. Gemeinsam schauen wir, was du und deine Familie gerade braucht und
              welcher Umfang für euch passend ist.
            </p>
            <p className="font-serif text-lg text-petrol italic">
              Informationen zu meinen aktuellen Konditionen erhältst du auf Anfrage.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Lass uns gemeinsam schauen, was du gerade brauchst."
        text="Erzähl mir kurz, wobei du dir Unterstützung wünschst – der erste Schritt ist völlig unverbindlich."
        buttonLabel="Unverbindlich anfragen"
      />
    </>
  )
}
