/* =====================================================================
   SUCHMASCHINEN-ANGABEN – Titel und Beschreibung pro Seite.

   Das ist der Text, den Google in den Suchergebnissen anzeigt:
   der Titel als blaue Überschrift, die Beschreibung als grauer Text
   darunter. Beides darfst du gerne anpassen.

   Faustregeln, damit Google nichts abschneidet:
     Titel        -> höchstens ca. 60 Zeichen
     Beschreibung -> höchstens ca. 155 Zeichen

   Wichtig für das Gefundenwerden: Der Ort sollte vorkommen, weil
   Menschen meist nach "Mütterpflege Saarland" oder "Krabbelkurs
   Bexbach" suchen – also nach Leistung plus Ort.
   ===================================================================== */

/* Die Adresse, unter der die Seite später erreichbar ist – ohne Schrägstrich
   am Ende. Muss angepasst werden, falls die Domain anders lautet. */
export const siteUrl = 'https://www.muetterpflege-saar.de'

export const seoSeiten = {
  '/': {
    title: 'Mütterpflege & Krabbelkurse im Saarland | MamaRaum',
    description:
      'Mütterpflege und Krabbelkurse im Saarpfalz-Kreis. Julia Firmont begleitet Familien in Schwangerschaft, Wochenbett und der ersten Zeit mit Baby.',
  },
  '/muetterpflege': {
    title: 'Mütterpflege im Saarland – Hilfe im Wochenbett | MamaRaum',
    description:
      'Mütterpflege im Saarpfalz-Kreis: Entlastung im Haushalt und Zeit zur Erholung im Wochenbett. Eine Kostenübernahme durch die Krankenkasse ist möglich.',
  },
  '/krabbelkurse': {
    title: 'Krabbelkurse in Bexbach, Saarpfalz-Kreis | MamaRaum',
    description:
      'Krabbelkurse in Bexbach für Babys von Geburt bis 12 Monate: Austausch für Eltern, Zeit zum Entdecken für dein Baby. Aktuelle Kurstermine ansehen.',
  },
  '/ueber-mich': {
    title: 'Über mich – Julia Firmont, Mütterpflegerin | MamaRaum',
    description:
      'Julia Firmont, Mütterpflegerin und zertifizierte Krabbelgruppenleiterin im Saarpfalz-Kreis. Wie MamaRaum entstanden ist und was meine Arbeit ausmacht.',
  },
  '/kontakt': {
    title: 'Kontakt – Mütterpflege & Krabbelkurse | MamaRaum',
    description:
      'Melde dich telefonisch, per E-Mail oder über Instagram. Mütterpflege und Krabbelkurse im Saarpfalz-Kreis und Umgebung – unverbindlich anfragen.',
  },
  '/impressum': {
    title: 'Impressum | MamaRaum – Mütterpflege Saar',
    description: 'Impressum und Anbieterkennzeichnung von MamaRaum – Mütterpflege Saar.',
  },
  '/datenschutz': {
    title: 'Datenschutz | MamaRaum – Mütterpflege Saar',
    description: 'Informationen zum Umgang mit personenbezogenen Daten auf dieser Website.',
  },
}

/* Wird verwendet, falls eine Adresse aufgerufen wird, die hier nicht steht. */
export const seoFallback = seoSeiten['/']
