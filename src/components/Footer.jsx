// src/components/Footer.jsx
import { GOLD } from '../tokens.js'
import BrandMark from './BrandMark.jsx'

export default function Footer({ setPage }) {
  return (
    <footer style={{ background: '#0a0b10', borderTop: '1px solid rgba(200,168,75,0.1)', padding: '48px 24px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <BrandMark size={36} />
            </div>
            <p style={{ color: '#5a5a64', fontSize: 13, lineHeight: 1.7, maxWidth: 220 }}>
              Transporte profesional de motocicletas y logística en todo el territorio español.
            </p>
          </div>

          <div>
            <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 14, color: '#f0ede8', letterSpacing: 2, marginBottom: 12 }}>Servicios</p>
            {['Puerta a puerta', 'Grupaje', 'Concesionarios', 'Recambios'].map(l => (
              <p key={l} style={{ fontSize: 13, color: '#5a5a64', marginBottom: 6 }}>{l}</p>
            ))}
          </div>

          <div>
            <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 14, color: '#f0ede8', letterSpacing: 2, marginBottom: 12 }}>Empresa</p>
            {['La Empresa', 'Presupuesto', 'Contacto'].map(l => (
              <p key={l} style={{ fontSize: 13, color: '#5a5a64', marginBottom: 6, cursor: 'pointer' }} onClick={() => setPage(l)}>{l}</p>
            ))}
          </div>

          <div>
            <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 14, color: '#f0ede8', letterSpacing: 2, marginBottom: 12 }}>Contacto</p>
            <p style={{ fontSize: 13, color: '#5a5a64', marginBottom: 6 }}>+34 614 32 16 94</p>
            <p style={{ fontSize: 13, color: '#5a5a64', marginBottom: 6 }}>info@jtransnoroeste.com</p>
            <p style={{ fontSize: 13, color: '#5a5a64', marginBottom: 6 }}>Madrid · España</p>
            <p style={{ fontSize: 13, color: '#5a5a64' }}>Lun–Dom · 9:00–21:00</p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: '#3a3a44' }}>© 2026 J Trans Noroeste · Todos los derechos reservados</p>
          <div style={{ display: 'flex', gap: 16 }}>
            {['Aviso legal', 'Política de privacidad', 'Cookies'].map(l => (
              <span key={l} style={{ fontSize: 12, color: '#3a3a44', cursor: 'pointer' }}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
