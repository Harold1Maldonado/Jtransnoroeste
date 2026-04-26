// src/pages/ContactoPage.jsx
import Icon from '../components/Icon.jsx'
import { PageWrapper, PageHeader } from '../components/helpers.jsx'
import { GOLD, PHONE, PHONE_RAW, EMAIL, WA_URL } from '../tokens.js'

const CONTACT_ITEMS = [
  { icon: 'phone',    title: 'Teléfono / WhatsApp',  value: PHONE,                    href: `tel:${PHONE_RAW}` },
  { icon: 'mail',     title: 'Correo electrónico',   value: EMAIL,                    href: `mailto:${EMAIL}` },
  { icon: 'clock',    title: 'Horario de atención',  value: 'Lun–Dom · 9:00–21:00',  href: null },
  { icon: 'location', title: 'Zona de operación',    value: 'España peninsular · Puerta a puerta', href: null },
]

export default function ContactoPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="Contacto"
        subtitle="Cuéntanos qué servicio necesitas y te responderemos con un presupuesto ajustado y sin compromiso."
      />
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 40 }}>
          {CONTACT_ITEMS.map((c, i) => (
            <div key={i} style={{ background: '#141820', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: 24, display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: 8, background: `${GOLD}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name={c.icon} size={22} color={GOLD} />
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#5a5a64', letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600, marginBottom: 4 }}>{c.title}</p>
                {c.href ? (
                  <a href={c.href} style={{ fontSize: 16, fontWeight: 600, color: '#f0ede8', textDecoration: 'none' }}>{c.value}</a>
                ) : (
                  <p style={{ fontSize: 15, color: '#c0bdb8' }}>{c.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', padding: 40, background: 'linear-gradient(135deg,rgba(37,211,102,0.08),rgba(37,211,102,0.04))', border: '1px solid rgba(37,211,102,0.2)', borderRadius: 12 }}>
          <p style={{ color: '#7a7a84', marginBottom: 16, fontSize: 16 }}>La forma más rápida de contactarnos</p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 36px', background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: 8, fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: 18, color: '#25d366', textDecoration: 'none' }}>
            <Icon name="whatsapp" size={24} color="#25d366" /> Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </PageWrapper>
  )
}
