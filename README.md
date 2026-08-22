# MamaRaum – Mütterpflege Saar · Website

Website für **MamaRaum – Mütterpflege Saar (Julia Firmont)**, gebaut mit **React + Vite + Tailwind CSS v4**.

## Seiten

| Route | Seite |
|---|---|
| `/#/` | Startseite |
| `/#/ueber-mich` | Über mich |
| `/#/muetterpflege` | Mütterpflege |
| `/#/ablauf-kosten` | Ablauf & Kostenübernahme |
| `/#/kurse` | Eltern-Kind-Kurse (Krabbelgruppe) |
| `/#/kontakt` | Kontakt & Terminanfrage |

Routing über `HashRouter`, damit die Seite auf jedem statischen Hosting (auch ohne Server-Rewrites) funktioniert. Bei Hosting mit Rewrite-Regeln kann in `src/main.jsx` einfach auf `BrowserRouter` umgestellt werden.

## Entwicklung

```bash
npm install
npm run dev      # Dev-Server
npm run build    # Produktions-Build nach dist/
SINGLEFILE=1 npm run build   # Eine einzelne HTML-Datei (Vorschau/Weitergabe)
```

## Design

Farben und Typografie folgen dem Branding aus Logo & Instagram-Auftritt (definiert in `src/index.css`):

- Petrol `#2C4F55` (Hauptfarbe), Beige `#DCD5C8`, Gold `#CD9437` (Akzent), Creme `#F8F1E9` (Hintergrund), Anthrazit `#3A3A3A`
- Serif: Cormorant Garamond (Headlines, Zitate) · Sans: Montserrat (Fließtext) via Google Fonts

## Offene Punkte für den Livegang (TODO Agentur)

1. **Kontakt-E-Mail:** In `src/pages/Kontakt.jsx` die Konstante `KONTAKT_EMAIL` auf die echte Adresse der Kundin setzen. Aktuell öffnet das Formular das E-Mail-Programm der Besucherin (`mailto:`). Für serverloses Absenden ohne Mailprogramm z. B. [Formspree](https://formspree.io) oder FormSubmit anbinden (nur `submit`-Handler austauschen).
2. **Impressum & Datenschutzerklärung** ergänzen (rechtlich erforderlich).
3. Texte zur Krabbelgruppe (Ort, Termine, Preise) mit der Kundin finalisieren.
4. Die Angaben zur Kostenübernahme (§ 24h / § 38 SGB V) sind allgemeine Informationen und sollten vor Livegang von der Kundin geprüft werden.
