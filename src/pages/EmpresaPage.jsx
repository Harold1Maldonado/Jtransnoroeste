// src/pages/EmpresaPage.jsx
import Icon from '../components/Icon.jsx'
import BrandMark from '../components/BrandMark.jsx'
import { PageWrapper, PageHeader } from '../components/helpers.jsx'
import { GOLD } from '../tokens.js'

const VALUES = [
  { icon: 'shield', title: 'Seguridad',       text: 'Cuidado total de la moto en cada fase del transporte.' },
  { icon: 'check',  title: 'Transparencia',   text: 'Información clara sobre precios, plazos y condiciones.' },
  { icon: 'clock',  title: 'Compromiso',      text: 'Cumplimiento de rutas y entregas acordadas.' },
  { icon: 'users',  title: 'Profesionalidad', text: 'Equipo con experiencia en logística y mundo de la moto.' },
]

export default function EmpresaPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="La empresa"
        subtitle="J Trans Noroeste nace con la misión de ofrecer un servicio de transporte de motocicletas profesional, transparente y cercano."
      />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginBottom: 64 }}>
          <div>
            <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 30, color: GOLD, letterSpacing: 2, marginBottom: 12 }}>Nuestra misión</h3>
            <p style={{ color: '#a0a0aa', lineHeight: 1.8, fontSize: 16 }}>
              Garantizar que cada moto llegue a su destino en perfectas condiciones, ofreciendo información clara, plazos realistas y un trato responsable tanto con el vehículo como con el cliente.
            </p>
          </div>
          <div>
            <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 30, color: GOLD, letterSpacing: 2, marginBottom: 12 }}>Visión</h3>
            <p style={{ color: '#a0a0aa', lineHeight: 1.8, fontSize: 16 }}>
              Ser el referente en transporte de motos en España, combinando eficiencia logística, seguridad y una atención personalizada que marque la diferencia.
            </p>
          </div>
        </div>

        <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 30, color: '#f0ede8', letterSpacing: 2, marginBottom: 24 }}>Valores</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16, marginBottom: 56 }}>
          {VALUES.map((v, i) => (
            <div key={i} style={{ background: '#141820', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: 24, textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(200,168,75,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                <Icon name={v.icon} size={22} color={GOLD} />
              </div>
              <h4 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 20, color: GOLD, letterSpacing: 2, marginBottom: 6 }}>{v.title}</h4>
              <p style={{ color: '#7a7a84', fontSize: 14, lineHeight: 1.6 }}>{v.text}</p>
            </div>
          ))}
        </div>

        <div style={{ background: 'linear-gradient(135deg,rgba(200,34,26,0.08),rgba(200,168,75,0.06))', border: '1px solid rgba(200,168,75,0.15)', borderRadius: 12, padding: '40px', display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
          <BrandMark size={120} compact />
          <div>
            <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 26, color: GOLD, letterSpacing: 2, marginBottom: 6 }}>J Transnoroeste</p>
            <p style={{ color: '#a0a0aa', lineHeight: 1.7 }}>Especialistas en transporte de motocicletas · Madrid, España</p>
            <p style={{ color: '#7a7a84', fontSize: 14, marginTop: 4 }}>Servicio nacional puerta a puerta · Operativo todos los días</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
