import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Seo from './components/Seo.jsx'
import Home from './pages/Home.jsx'
import Muetterpflege from './pages/Muetterpflege.jsx'
import Krabbelkurse from './pages/Krabbelkurse.jsx'
import UeberMich from './pages/UeberMich.jsx'
import Kontakt from './pages/Kontakt.jsx'
import Impressum from './pages/Impressum.jsx'
import Datenschutz from './pages/Datenschutz.jsx'

/* Bei jedem Seitenwechsel oben anfangen. Zeigt die Adresse auf einen Abschnitt
   (z. B. /muetterpflege#kosten), stattdessen dorthin springen. */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const ziel = hash && document.querySelector(hash)
    if (ziel) {
      ziel.scrollIntoView({ behavior: 'instant' })
      return
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/muetterpflege" element={<Muetterpflege />} />
          <Route path="/krabbelkurse" element={<Krabbelkurse />} />
          <Route path="/ueber-mich" element={<UeberMich />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />

          {/* Frühere Adressen weiterleiten, damit geteilte Links nicht ins Leere laufen */}
          <Route path="/kurse" element={<Navigate to="/krabbelkurse" replace />} />
          <Route path="/ablauf-kosten" element={<Navigate to="/muetterpflege" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
