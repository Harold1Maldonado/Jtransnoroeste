// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import Icon from './Icon.jsx'
import { GOLD } from '../tokens.js'
import BrandMark from './BrandMark.jsx'

const NAV_LINKS = ['Inicio', 'Servicios', 'Recambios', 'La Empresa', 'Presupuesto', 'Contacto']

export default function Navbar({ page, setPage }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const go = (p) => { setPage(p); setOpen(false) }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(10,12,18,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(200,168,75,0.12)' : '1px solid transparent',
      transition: 'all 0.35s ease',
      padding: '0 24px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', height: 68, gap: 24 }}>
        {/* Logo */}
        <button onClick={() => go('Inicio')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12, padding: 0 }}>
          <BrandMark size={44} />
        </button>

        {/* Desktop links */}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 4, alignItems: 'center' }}
          className="desktop-nav">
          {NAV_LINKS.filter(l => l !== 'Presupuesto').map(l => (
            <button key={l} onClick={() => go(l)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '8px 14px', borderRadius: 6,
              fontFamily: 'Barlow, sans-serif', fontWeight: 500, fontSize: 14, letterSpacing: 0.5,
              color: page === l ? GOLD : '#c0bdb8',
              borderBottom: page === l ? `2px solid ${GOLD}` : '2px solid transparent',
              transition: 'all 0.2s',
            }}>{l}</button>
          ))}
          <button onClick={() => go('Presupuesto')} style={{
            marginLeft: 8, padding: '9px 20px', borderRadius: 6,
            background: GOLD, border: 'none', cursor: 'pointer',
            fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: 14,
            color: '#0d0f14', letterSpacing: 0.5, transition: 'all 0.2s',
          }}>Presupuesto</button>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} style={{
          marginLeft: 'auto', background: 'none', border: 'none',
          cursor: 'pointer', color: '#f0ede8', display: 'none',
        }} className="mobile-burger">
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'rgba(10,12,18,0.98)', borderTop: '1px solid rgba(200,168,75,0.15)', padding: '12px 24px 24px' }}>
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => go(l)} style={{
              display: 'block', width: '100%', textAlign: 'left',
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
              fontFamily: 'Barlow, sans-serif', fontWeight: 500, fontSize: 16,
              color: page === l ? GOLD : '#c0bdb8',
            }}>{l}</button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
