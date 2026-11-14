/* =====================================================================
   BEWERTUNGEN & RÜCKMELDUNGEN – diese Datei darfst du selbst bearbeiten.

   Es gibt zwei getrennte Listen: eine für die Krabbelkurse und eine für
   die Mütterpflege. Jeder Eintrag sieht so aus:

     {
       text: 'Der Text der Rückmeldung.',
       autor: 'Lisa',
       zusatz: 'Krabbelkurs Frühjahr 2027',
       sterne: 5,
       quelle: 'google',
     },

   Bei "quelle" sind genau diese zwei Werte möglich:
     'google'      ->  stammt aus deinem Google-Unternehmensprofil
     'persoenlich' ->  persönliche Rückmeldung, die du mit Einverständnis
                       veröffentlichst (gerne auch anonym)

   "zusatz" und "sterne" kannst du weglassen. Für eine anonyme Stimme
   schreibst du bei "autor" zum Beispiel 'Mama aus Bexbach'.

   Bitte veröffentliche eine Rückmeldung nur, wenn du dafür das
   Einverständnis der Person hast – auch dann, wenn sie anonym bleibt.
   Das gilt auch für Bewertungen, die schon öffentlich bei Google stehen:
   der Text gehört der Person, die ihn geschrieben hat. Eine kurze Nachricht
   mit der Frage, ob du die Bewertung auf deiner Website zeigen darfst,
   reicht völlig.

   Wähle außerdem nicht nur die besten Stimmen aus und lass kritische
   bewusst weg – das wäre irreführende Werbung. Ein ehrlicher Querschnitt
   ist auch glaubwürdiger.
   ===================================================================== */

export const googleProfil = {
  /* Link auf dein Google-Unternehmensprofil (dort stehen alle Bewertungen).
     Solange hier nichts steht, wird der Link einfach nicht angezeigt. */
  profilUrl: '',
  /* Direkter Link zum Bewertungsformular bei Google. Den findest du im
     Unternehmensprofil unter "Rezensionen" -> "Mehr Rezensionen erhalten". */
  bewertenUrl: '',
}

export const stimmenKrabbelkurse = []

export const stimmenMuetterpflege = []

/* Ab hier bitte nichts mehr ändern.

   Ohne Stimmen und ohne Link zum Unternehmensprofil bliebe auf der Seite nur
   eine Überschrift ohne Inhalt stehen – dann wird der ganze Bereich (und auf
   der Mütterpflegeseite auch der Sprunglink dorthin) ausgeblendet. */
export function zeigtStimmen(stimmen = []) {
  return stimmen.length > 0 || Boolean(googleProfil.bewertenUrl || googleProfil.profilUrl)
}
