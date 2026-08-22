import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import UeberMich from './pages/UeberMich.jsx'
import Muetterpflege from './pages/Muetterpflege.jsx'
import AblaufKosten from './pages/AblaufKosten.jsx'
import Kurse from './pages/Kurse.jsx'
import Kontakt from './pages/Kontakt.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ueber-mich" element={<UeberMich />} />
          <Route path="/muetterpflege" element={<Muetterpflege />} />
          <Route path="/ablauf-kosten" element={<AblaufKosten />} />
          <Route path="/kurse" element={<Kurse />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
