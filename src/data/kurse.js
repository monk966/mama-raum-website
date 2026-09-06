/* =====================================================================
   AKTUELLE KRABBELKURSE – diese Datei darfst du selbst bearbeiten.

   Ändere einfach den Text zwischen den Anführungszeichen '...' und
   speichere die Datei. Alles andere (Kommas, Klammern) bitte so lassen.

   Bei "verfuegbarkeit" sind genau diese drei Werte möglich:
     'frei'       ->  Plätze frei
     'wenige'     ->  Nur noch wenige Plätze
     'ausgebucht' ->  Ausgebucht

   Die Reihenfolge der Gruppen bleibt immer chronologisch nach Alter:
   erst ca. 3–6 Monate, danach ca. 7–12 Monate.
   ===================================================================== */

export const aktuelleRunde = {
  kursstart: '14.09.2026',
  umfang: '8 Termine à 75 Minuten',
  ort: 'Hebammen- & Geburtshaus Mamilu, Bexbach',
  gebuehr: '110 €',
}

export const kursgruppen = [
  {
    id: '3-6',
    alter: 'ca. 3–6 Monate',
    zeit: 'montags, 10:30–11:45 Uhr',
    verfuegbarkeit: 'frei',
  },
  {
    id: '7-12',
    alter: 'ca. 7–12 Monate',
    zeit: 'montags, 09:00–10:15 Uhr',
    verfuegbarkeit: 'frei',
  },
]

/* Ab hier bitte nichts mehr ändern – das sind nur die Beschriftungen
   und Farben für die drei Verfügbarkeits-Zustände. */
export const verfuegbarkeitLabels = {
  frei: { text: 'Plätze frei', className: 'bg-petrol/10 text-petrol' },
  wenige: { text: 'Nur noch wenige Plätze', className: 'bg-gold/20 text-[#8a5f14]' },
  ausgebucht: { text: 'Ausgebucht', className: 'bg-anthrazit/10 text-anthrazit/70' },
}
