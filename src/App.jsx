// src/App.jsx
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFAB from './components/WhatsAppFAB.jsx'
import HomePage from './pages/HomePage.jsx'
import ServiciosPage from './pages/ServiciosPage.jsx'
import RecambiosPage from './pages/RecambiosPage.jsx'
import EmpresaPage from './pages/EmpresaPage.jsx'
import PresupuestoPage from './pages/PresupuestoPage.jsx'
import ContactoPage from './pages/ContactoPage.jsx'

export default function App() {
  const [page, setPage] = useState('Inicio')

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  const navigate = (p) => setPage(p)

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar page={page} setPage={navigate} />

      {page === 'Inicio'      && <HomePage      setPage={navigate} />}
      {page === 'Servicios'   && <ServiciosPage setPage={navigate} />}
      {page === 'Recambios'   && <RecambiosPage />}
      {page === 'La Empresa'  && <EmpresaPage />}
      {page === 'Presupuesto' && <PresupuestoPage />}
      {page === 'Contacto'    && <ContactoPage />}

      <Footer setPage={navigate} />
      <WhatsAppFAB />
    </div>
  )
}
