/* Kontaktdaten zentral gepflegt – werden auf der Kontaktseite, im Footer
   und in allen "Anfragen"-Buttons verwendet. */

export const kontakt = {
  betrieb: 'MamaRaum – Mütterpflege Saar',
  name: 'Julia Firmont',
  telefon: '0151 28709926',
  telefonHref: 'tel:+4915128709926',
  email: 'kontakt@muetterpflege-saar.de',
  instagram: '@mamaraum_muetterpflegesaar',
  instagramUrl: 'https://www.instagram.com/mamaraum_muetterpflegesaar',
  // Anschrift für Impressum und Datenschutzerklärung
  strasse: 'Verdistraße 15',
  ort: '66450 Bexbach',
  region: 'Saarpfalz-Kreis',
  fotoCredit: 'Lisa Klein Fotografie',
  umsetzung: 'Unlock Labs',
}

/** mailto-Link mit vorbereitetem Betreff und Text */
export function mailtoLink(betreff, text) {
  const params = new URLSearchParams({ subject: betreff, body: text })
  return `mailto:${kontakt.email}?${params.toString().replace(/\+/g, '%20')}`
}

/** Vorbereitete Anfrage für einen Kursplatz – enthält die Angaben, die Julia braucht */
export function kursAnfrageLink(gruppe) {
  return mailtoLink(
    `Kursanfrage Krabbelkurs${gruppe ? ` (${gruppe})` : ''}`,
    [
      'Hallo Julia,',
      '',
      'ich möchte gerne einen Kursplatz anfragen.',
      '',
      'Mein Name:',
      'Name meines Kindes:',
      'Geburtsdatum meines Kindes:',
      `Gewünschte Kursgruppe: ${gruppe || ''}`,
      '',
      'Liebe Grüße',
    ].join('\n'),
  )
}

/** Vorbereitete, unverbindliche Anfrage zur Mütterpflege */
export const muetterpflegeAnfrageLink = mailtoLink(
  'Unverbindliche Anfrage Mütterpflege',
  [
    'Hallo Julia,',
    '',
    'ich interessiere mich für deine Begleitung durch die Mütterpflege.',
    '',
    'Kurz zu meiner Situation:',
    '',
    'Errechneter Geburtstermin bzw. Alter meines Babys:',
    '',
    'Liebe Grüße',
  ].join('\n'),
)
