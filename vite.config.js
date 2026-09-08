import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// SINGLEFILE=1 npm run build  ->  erzeugt eine einzelne HTML-Datei (Vorschau/Weitergabe)
// npm run build               ->  normaler Produktions-Build (dist/)
const einzeldatei = Boolean(process.env.SINGLEFILE)

export default defineConfig({
  // Die Einzeldatei wird oft direkt vom Schreibtisch geöffnet und braucht deshalb
  // relative Pfade. Der Server-Build braucht absolute, sonst finden Unterseiten
  // wie /muetterpflege ihre Bilder und Schriften nicht.
  base: einzeldatei ? './' : '/',
  plugins: [
    react(),
    tailwindcss(),
    ...(einzeldatei ? [viteSingleFile()] : []),
  ],
  build: {
    assetsInlineLimit: einzeldatei ? 100000000 : 4096,
  },
  // Die Einzeldatei kann keine echten Adressen verwenden, weil sie ohne Server
  // läuft. Sie nutzt daher weiter Adressen mit Raute, siehe src/main.jsx.
  define: {
    'import.meta.env.EINZELDATEI': JSON.stringify(einzeldatei),
  },
  // Der Projektordner liegt unter ~/Documents und wird synchronisiert. Dort meldet
  // macOS Dateiänderungen nicht zuverlässig, wodurch der Dev-Server alte Versionen
  // ausliefert. Polling fragt die Dateien aktiv ab und behebt das.
  server: {
    watch: { usePolling: true, interval: 300 },
  },
})
