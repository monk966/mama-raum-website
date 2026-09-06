/**
 * Funktionale Icons für Telefon, E-Mail und Instagram – im gleichen feinen
 * Strichduktus wie die übrigen Linien der Seite.
 *
 * Neben jedem Icon steht immer die Angabe selbst (Nummer, Adresse, Profil),
 * deshalb sind die Icons aria-hidden und werden nicht mit vorgelesen.
 */

function Icon({ className = 'w-[18px] h-[18px]', children }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      {children}
    </svg>
  )
}

export function PhoneIcon(props) {
  return (
    <Icon {...props}>
      <path
        d="M5 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L15 13l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 3 5.2 2 2 0 0 1 5 3z"
        strokeLinejoin="round"
      />
    </Icon>
  )
}

export function MailIcon(props) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </Icon>
  )
}

export function InstagramIcon(props) {
  return (
    <Icon {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </Icon>
  )
}
