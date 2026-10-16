import siegel from '../assets/mdev-siegel.svg'

/* Gütesiegel sollten immer auf eine Seite verlinken, die erklärt, wofür sie
   stehen und wer sie vergeben hat – deshalb führt das Siegel zum Verband. */
const verbandUrl = 'https://muetterpflege-deutschland.de/'

/**
 * Siegel „Geprüftes Mitglied“ des Berufsverbands MDEV.
 *
 * Mit "hell" wird es für dunkle Hintergründe auf Creme umgestellt. Das Siegel
 * besteht nur aus einer einzigen Farbfläche, deshalb genügt dafür ein Filter.
 */
export default function MdevSiegel({ className = 'w-20', hell = false }) {
  return (
    <a
      href={verbandUrl}
      target="_blank"
      rel="noreferrer"
      className="inline-block shrink-0 transition-opacity hover:opacity-75"
      title="Geprüftes Mitglied im Berufsverband MDEV Mütterpflege Deutschland e. V."
    >
      <img
        src={siegel}
        alt="Geprüftes Mitglied im Berufsverband MDEV Mütterpflege Deutschland e. V."
        loading="lazy"
        className={`${className} ${hell ? 'brightness-0 invert opacity-75' : ''}`}
      />
    </a>
  )
}
