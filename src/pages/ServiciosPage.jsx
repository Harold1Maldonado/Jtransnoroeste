// src/pages/ServiciosPage.jsx
import Icon from '../components/Icon.jsx'
import { PageWrapper, PageHeader } from '../components/helpers.jsx'
import { GOLD, RED } from '../tokens.js'

const SERVICES = [
  {
    title: 'Transporte individual puerta a puerta', icon: 'truck', color: GOLD,
    desc: 'Recogemos tu moto en la dirección que nos indiques y la entregamos directamente en su destino. Ideal para mudanzas, compras entre particulares o envíos a talleres.',
    items: ['Recogida en domicilio o punto acordado', 'Entrega en toda España peninsular', 'Seguimiento del envío', 'Seguro según condiciones del servicio', 'Plazo habitual 24–48 horas'],
  },
  {
    title: 'Grupaje de motos', icon: 'package', color: '#6ba4e0',
    desc: 'Optimizamos las rutas agrupando varias motocicletas en un mismo trayecto, reduciendo costes y mejorando la eficiencia.',
    items: ['Rutas regulares en principales corredores', 'Tarifas más ajustadas', 'Planificación flexible de fechas', 'Servicio para particulares y empresas'],
  },
  {
    title: 'Logística para concesionarios y talleres', icon: 'users', color: '#7ecb8a',
    desc: 'Gestión recurrente de transporte de motos nuevas, usadas o en reparación, adaptándonos al volumen y frecuencia de tu negocio.',
    items: ['Recogida y entrega en concesionarios', 'Gestión de flotas y rotación de stock', 'Soluciones B2B personalizadas', 'Facturación mensual disponible'],
  },
  {
    title: 'Servicios complementarios', icon: 'map', color: RED,
    desc: 'Coordinación con servicios de venta de motos y recambios, para que todo el proceso logístico se gestione desde un único interlocutor.',
    items: ['Recepción y entrega en campas o almacenes', 'Coordinación de plazos con compraventas', 'Asesoramiento logístico'],
  },
]

export default function ServiciosPage({ setPage }) {
  return (
    <PageWrapper>
      <PageHeader
        title="Servicios"
        subtitle="Soluciones integrales para el transporte y logística de motocicletas en España, adaptadas a particulares, concesionarios, talleres y empresas de renting."
      />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px' }}>
        {SERVICES.map((s, i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: i % 2 === 0 ? '2fr 1fr' : '1fr 2fr',
            gap: 40,
            marginBottom: 24,
            background: '#141820',
            borderRadius: 12,
            padding: 36,
            border: '1px solid rgba(255,255,255,0.06)',
            alignItems: 'center',
          }}>
            <div style={{ order: i % 2 === 1 ? 2 : 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 8, background: `${s.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={s.icon} size={22} color={s.color} />
                </div>
                <h2 style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: 22, color: '#f0ede8' }}>{s.title}</h2>
              </div>
              <p style={{ color: '#7a7a84', lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {s.items.map((it, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#a0a0aa' }}>
                    <span style={{ marginTop: 2, flexShrink: 0 }}><Icon name="check" size={14} color={s.color} /></span>{it}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ order: i % 2 === 1 ? 1 : 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '100%', aspectRatio: '4/3', background: `linear-gradient(135deg,${s.color}10,${s.color}04)`, borderRadius: 8, border: `1px dashed ${s.color}30`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                <Icon name={s.icon} size={48} color={s.color + '55'} />
                <span style={{ fontFamily: 'monospace', fontSize: 11, color: s.color + '55', textAlign: 'center', padding: '0 16px' }}>imagen del servicio</span>
              </div>
            </div>
          </div>
        ))}

        <div style={{ marginTop: 20, textAlign: 'center' }}>
          <button onClick={() => setPage('Presupuesto')} style={{ padding: '16px 36px', background: GOLD, border: 'none', borderRadius: 6, cursor: 'pointer', fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: 16, color: '#0d0f14' }}>
            Solicitar presupuesto
          </button>
        </div>
      </div>
    </PageWrapper>
  )
}
