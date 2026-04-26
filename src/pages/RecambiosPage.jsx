// src/pages/RecambiosPage.jsx
import Icon from '../components/Icon.jsx'
import { PageWrapper, PageHeader } from '../components/helpers.jsx'
import { GOLD, WA_URL } from '../tokens.js'

export default function RecambiosPage() {
  const sections = [
    {
      title: 'Motos seleccionadas', icon: 'truck', color: GOLD,
      desc: 'Disponemos de un catálogo dinámico de motocicletas de ocasión, revisadas y listas para circular. Pregunta por el stock actualizado.',
      items: ['Motos revisadas y certificadas', 'Asesoramiento en la compra', 'Transporte incluido opcionalmente'],
    },
    {
      title: 'Recambios y accesorios', icon: 'package', color: '#6ba4e0',
      desc: 'Gestionamos la búsqueda y suministro de recambios y accesorios de las principales marcas, con envío a tu domicilio o taller.',
      items: ['Recambios originales y equivalentes', 'Accesorios y equipamiento', 'Envíos coordinados con el transporte de tu moto'],
    },
  ]

  return (
    <PageWrapper>
      <PageHeader
        title="Venta de motos y recambios"
        subtitle="Apoyamos el transporte con un servicio complementario de venta de motocicletas seleccionadas y recambios bajo pedido."
      />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 40 }}>
          {sections.map((s, i) => (
            <div key={i} style={{ background: '#141820', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: 28 }}>
              <div style={{ width: 44, height: 44, borderRadius: 8, background: `${s.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon name={s.icon} size={22} color={s.color} />
              </div>
              <h3 style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: 20, color: '#f0ede8', marginBottom: 10 }}>{s.title}</h3>
              <p style={{ color: '#7a7a84', lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {s.items.map((it, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#a0a0aa' }}>
                    <Icon name="check" size={14} color={s.color} />{it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ background: `linear-gradient(135deg,${GOLD}12,${GOLD}04)`, border: `1px solid ${GOLD}30`, borderRadius: 10, padding: '32px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 28, color: '#f0ede8', letterSpacing: 2, marginBottom: 6 }}>¿Buscas una moto o un recambio concreto?</h3>
            <p style={{ color: '#7a7a84', fontSize: 15 }}>Indícanos modelo, año y referencia y te ayudamos a localizarlo y a coordinar el envío.</p>
          </div>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ padding: '14px 28px', background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: 6, fontFamily: 'Barlow, sans-serif', fontWeight: 600, fontSize: 15, color: '#25d366', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
            <Icon name="whatsapp" size={18} color="#25d366" /> Escribir por WhatsApp
          </a>
        </div>
      </div>
    </PageWrapper>
  )
}
