// src/pages/PresupuestoPage.jsx
import { useState } from 'react'
import Icon from '../components/Icon.jsx'
import { PageWrapper, PageHeader, FormField } from '../components/helpers.jsx'
import { GOLD, PHONE, PHONE_RAW, PHONE2, PHONE2_RAW, PHONE3, PHONE3_RAW, EMAIL, WA_URL } from '../tokens.js'

const INITIAL = {
  nombre: '', telefono: '', origen: '', destino: '',
  marca: '', modelo: '', fecha: '', arranca: 'si',
  comentarios: '', privacidad: false,
}

export default function PresupuestoPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState(INITIAL)
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg =
`🏍️ *SOLICITUD DE PRESUPUESTO – Jtransnoroeste*

👤 Nombre: ${form.nombre}
📞 Teléfono: ${form.telefono}
📍 Origen: ${form.origen}
🏁 Destino: ${form.destino}
🏷️ Moto: ${form.marca || '—'} ${form.modelo || ''}
📅 Fecha recogida: ${form.fecha || 'Sin especificar'}
🔑 Arranca: ${form.arranca === 'si' ? 'Sí arranca' : 'No arranca / Averiada'}
💬 Comentarios: ${form.comentarios || 'Ninguno'}`

    window.open(`https://wa.me/${PHONE_RAW.replace('+', '')}?text=${encodeURIComponent(msg)}`, '_blank')
    setSent(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <PageWrapper>
      <PageHeader
        title="Solicitud de presupuesto"
        subtitle="Rellena el formulario y te enviaremos un presupuesto personalizado en menos de 2 horas."
      />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px' }}>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '60px 24px', background: '#141820', borderRadius: 12, border: `1px solid ${GOLD}44` }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: `${GOLD}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
              <Icon name="check" size={28} color={GOLD} />
            </div>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 36, color: '#f0ede8', letterSpacing: 2, marginBottom: 12 }}>¡Solicitud enviada!</h2>
            <p style={{ color: '#a0a0aa', fontSize: 16, maxWidth: 440, margin: '0 auto 24px', lineHeight: 1.7 }}>
              Tu solicitud ha sido enviada por WhatsApp. Te responderemos con presupuesto lo antes posible.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: 6, fontFamily: 'Barlow, sans-serif', fontWeight: 600, fontSize: 15, color: '#25d366', textDecoration: 'none' }}>
                <Icon name="whatsapp" size={18} color="#25d366" /> Seguir por WhatsApp
              </a>
              <button onClick={() => { setSent(false); setForm(INITIAL) }} style={{ padding: '14px 28px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, cursor: 'pointer', fontFamily: 'Barlow, sans-serif', fontWeight: 500, fontSize: 15, color: '#c0bdb8' }}>
                Nueva solicitud
              </button>
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 32 }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <FormField label="Nombre completo" value={form.nombre} onChange={v => set('nombre', v)} required />
              <FormField label="Teléfono / WhatsApp" type="tel" value={form.telefono} onChange={v => set('telefono', v)} required />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <FormField label="Ciudad de origen" value={form.origen} onChange={v => set('origen', v)} required />
                <FormField label="Ciudad de destino" value={form.destino} onChange={v => set('destino', v)} required />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <FormField label="Marca de la moto" value={form.marca} onChange={v => set('marca', v)} />
                <FormField label="Modelo" value={form.modelo} onChange={v => set('modelo', v)} />
              </div>

              <FormField label="Fecha aproximada de recogida" type="date" value={form.fecha} onChange={v => set('fecha', v)} />

              <div>
                <label style={{ fontSize: 13, color: '#7a7a84', fontWeight: 500, letterSpacing: 0.5, textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>
                  ¿La moto arranca?
                </label>
                <div style={{ display: 'flex', gap: 8 }}>
                  {[{ val: 'si', label: 'Sí arranca' }, { val: 'no', label: 'No arranca / averiada' }].map(opt => (
                    <button key={opt.val} type="button" onClick={() => set('arranca', opt.val)} style={{ padding: '9px 24px', borderRadius: 6, border: `1px solid ${form.arranca === opt.val ? GOLD : 'rgba(255,255,255,0.1)'}`, background: form.arranca === opt.val ? `${GOLD}18` : 'transparent', cursor: 'pointer', fontFamily: 'Barlow, sans-serif', fontWeight: 500, fontSize: 14, color: form.arranca === opt.val ? GOLD : '#7a7a84', transition: 'all 0.15s' }}>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ fontSize: 13, color: '#7a7a84', fontWeight: 500, letterSpacing: 0.5, textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>
                  Comentarios adicionales
                </label>
                <textarea
                  value={form.comentarios}
                  onChange={e => set('comentarios', e.target.value)}
                  rows={4}
                  placeholder="Acceso, accesorios que viajan con la moto, urgencia..."
                  style={{ width: '100%', background: '#141820', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: '12px 14px', color: '#f0ede8', fontFamily: 'Barlow, sans-serif', fontSize: 15, outline: 'none', resize: 'vertical' }}
                />
              </div>

              <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer' }}>
                <input type="checkbox" checked={form.privacidad} onChange={e => set('privacidad', e.target.checked)} required style={{ marginTop: 3, accentColor: GOLD }} />
                <span style={{ fontSize: 13, color: '#7a7a84', lineHeight: 1.5 }}>
                  He leído y acepto la <span style={{ color: GOLD, cursor: 'pointer' }}>política de privacidad</span>
                </span>
              </label>

              <button type="submit" style={{ padding: 16, background: GOLD, border: 'none', borderRadius: 6, cursor: 'pointer', fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: 16, color: '#0d0f14', marginTop: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                <Icon name="whatsapp" size={18} color="#0d0f14" /> Enviar por WhatsApp
              </button>
            </form>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

              {/* Teléfono principal */}
              <div style={{ background: '#141820', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: 24 }}>
                <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 20, color: GOLD, letterSpacing: 2, marginBottom: 16 }}>Contacto directo</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <a href={`tel:${PHONE_RAW}`} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#c0bdb8', textDecoration: 'none', fontSize: 15 }}>
                    <Icon name="phone" size={16} color={GOLD} /> {PHONE}
                  </a>
                  <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#25d366', textDecoration: 'none', fontSize: 15 }}>
                    <Icon name="whatsapp" size={16} color="#25d366" /> WhatsApp directo
                  </a>
                  <a href={`mailto:${EMAIL}`} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#c0bdb8', textDecoration: 'none', fontSize: 15 }}>
                    <Icon name="mail" size={16} color={GOLD} /> {EMAIL}
                  </a>
                </div>
              </div>

              {/* Líneas adicionales */}
              <div style={{ background: '#141820', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: 24 }}>
                <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 20, color: GOLD, letterSpacing: 2, marginBottom: 16 }}>Más teléfonos</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div>
                    <p style={{ fontSize: 11, color: '#5a5a64', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600, marginBottom: 4 }}>Línea 2</p>
                    <a href={`tel:${PHONE2_RAW}`} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#c0bdb8', textDecoration: 'none', fontSize: 15 }}>
                      <Icon name="phone" size={16} color={GOLD} /> {PHONE2}
                    </a>
                  </div>
                  <div>
                    <p style={{ fontSize: 11, color: '#5a5a64', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600, marginBottom: 4 }}>Línea 3</p>
                    <a href={`tel:${PHONE3_RAW}`} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#c0bdb8', textDecoration: 'none', fontSize: 15 }}>
                      <Icon name="phone" size={16} color={GOLD} /> {PHONE3}
                    </a>
                  </div>
                </div>
              </div>

              {/* Horario */}
              <div style={{ background: '#141820', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: 24 }}>
                <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 20, color: '#f0ede8', letterSpacing: 2, marginBottom: 12 }}>Horario de atención</h3>
                <p style={{ color: '#7a7a84', fontSize: 14, lineHeight: 1.7 }}>
                  <span style={{ color: '#c0bdb8' }}>Lunes a Domingo</span><br />
                  <span style={{ color: GOLD, fontSize: 18, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: 1 }}>24 h</span>
                </p>
                <p style={{ color: '#7a7a84', fontSize: 13, marginTop: 8 }}>Estamos disponibles en todo momento.</p>
              </div>

              <div style={{ background: `rgba(200,168,75,0.06)`, border: `1px solid ${GOLD}22`, borderRadius: 10, padding: 20 }}>
                <p style={{ color: '#a0a0aa', fontSize: 13, lineHeight: 1.6 }}>
                  Cuantos más datos nos facilites, más preciso será el presupuesto. Te responderemos en menos de 2 horas.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  )
}
