import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

/* Auf dem Server bekommt jede Unterseite eine echte Adresse (/muetterpflege).
   Nur so kann Google sie als eigene Seite in die Suche aufnehmen. Dafür muss
   der Server unbekannte Adressen an die index.html weiterreichen – das
   erledigt public/.htaccess.

   Die per SINGLEFILE erzeugte Einzeldatei läuft ohne Server und muss weiter
   Adressen mit Raute verwenden. */
const Router = import.meta.env.EINZELDATEI ? HashRouter : BrowserRouter

/* Links, die früher mit Raute geteilt wurden, auf die neue Adresse umbiegen. */
if (!import.meta.env.EINZELDATEI && window.location.hash.startsWith('#/')) {
  window.history.replaceState(null, '', window.location.hash.slice(1))
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
