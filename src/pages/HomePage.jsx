// src/pages/HomePage.jsx
import { useState, useRef } from 'react'
import Icon from '../components/Icon.jsx'
import BrandMark from '../components/BrandMark.jsx'
import { SectionLabel } from '../components/helpers.jsx'
import { GOLD, RED, WA_URL, PHONE, PHONE_RAW, PHONE2, PHONE2_RAW, PHONE3, PHONE3_RAW } from '../tokens.js'

const STATS = [
  { val: '24–72h', label: 'Plazo de entrega' },
  { val: '100%',  label: 'España peninsular' },
  { val: '+2000', label: 'Motos transportadas' },
  { val: '24/7',  label: 'Servicio operativo' },
]

const SERVICES = [
  { icon: 'truck',   color: GOLD,      title: 'Transporte puerta a puerta',      desc: 'Recogida en tu dirección y entrega directa en destino. Para mudanzas, compraventas y envíos a talleres.', items: ['Recogida en domicilio o punto acordado', 'Entrega en toda España peninsular', 'Seguimiento del envío', 'Seguro incluido'] },
  { icon: 'package', color: '#6ba4e0', title: 'Grupaje de motos',                  desc: 'Agrupamos varias motos en una misma ruta para reducir costes y mejorar la eficiencia.', items: ['Rutas regulares en corredores principales', 'Tarifas más ajustadas', 'Planificación flexible de fechas', 'Para particulares y empresas'] },
  { icon: 'users',   color: '#7ecb8a', title: 'Logística para concesionarios',    desc: 'Gestión recurrente de transporte de motos nuevas, usadas o en reparación.', items: ['Recogida y entrega en concesionarios', 'Gestión de flotas y rotación de stock', 'Soluciones B2B personalizadas'] },
  { icon: 'map',     color: RED,       title: 'Servicios complementarios',         desc: 'Coordinación con venta de motos y recambios desde un único interlocutor.', items: ['Recepción en campas o almacenes', 'Coordinación con compraventas', 'Asesoramiento logístico'] },
]

const STEPS = [
  { n: '01', icon: 'phone',    title: 'Solicitud',  desc: 'Rellena el formulario o escríbenos por WhatsApp con los datos de tu moto y la ruta.' },
  { n: '02', icon: 'location', title: 'Recogida',   desc: 'Acordamos fecha y hora. Nos presentamos en la dirección que indiques.' },
  { n: '03', icon: 'truck',    title: 'Transporte', desc: 'Tu moto viaja con sujeción específica y seguro. Recibirás actualizaciones del estado.' },
  { n: '04', icon: 'check',    title: 'Entrega',    desc: 'Entregamos en destino y confirmamos la recepción. Presupuesto cerrado, sin extras.' },
]

const TRUST_ITEMS = [
  { icon: 'shield',  text: 'Seguro en cada transporte incluido en el servicio' },
  { icon: 'truck',   text: 'Sujeción específica para motocicletas, sin daños' },
  { icon: 'clock',   text: 'Plazos realistas y cumplidos, sin excusas' },
  { icon: 'map',     text: 'Cobertura en toda España peninsular' },
  { icon: 'phone',   text: 'Contacto directo con quien lleva tu moto' },
]

const TESTIMONIALS = [
  { name: 'Carlos M.', route: 'Madrid → Galicia',   stars: 5, text: 'Servicio impecable. Recogieron la moto en mi garaje y la entregaron al día siguiente en perfectas condiciones. El seguimiento fue muy tranquilizador.' },
  { name: 'Laura P.', route: 'Valencia → Asturias', stars: 5, text: 'Tercera vez que los uso para enviar motos de la compraventa. Siempre puntuales y sin incidencias. Muy recomendable para profesionales del sector.' },
  { name: 'Andrés G.', route: 'Sevilla → Madrid',   stars: 5, text: 'Moto averiada, sin arranque. No pusieron ningún problema, la sujetaron bien y llegó perfecta. Precio muy ajustado.' },
]

const FAQS = [
  { q: '¿Cuánto tarda el transporte de mi moto?', a: 'El plazo habitual es de 24 a 72 horas dependiendo de la ruta. Para rutas frecuentes (Madrid–Galicia, Madrid–Barcelona) solemos tener salida en menos de 24 h.' },
  { q: '¿Mi moto está asegurada durante el transporte?', a: 'Sí. Todas las motocicletas viajan con seguro según las condiciones del servicio. Consúltanos para ampliar la cobertura si tu moto tiene un valor especial.' },
  { q: '¿Transportáis motos que no arrancan o averiadas?', a: 'Sí, disponemos de medios para la carga y sujeción de motos sin arranque. Indícalo en el formulario de presupuesto.' },
  { q: '¿Hacéis servicio puerta a puerta?', a: 'Sí. Recogemos en la dirección que nos indiques y entregamos directamente en destino, sin intermediarios.' },
  { q: '¿Cuánto cuesta el transporte?', a: 'El precio varía según la ruta, urgencia y si es transporte individual o grupaje. Solicita un presupuesto sin compromiso y te respondemos en menos de 2 horas.' },
  { q: '¿Operáis en toda España?', a: 'Sí, cubrimos toda la España peninsular. Consúltanos para Baleares o Portugal.' },
]

const GALLERY_ROW1 = [
  { src: '/images/motos-cargadas.jpg',    title: 'Motos cargadas y sujetas', text: 'Sujeción específica para evitar movimientos durante el trayecto.' },
  { src: '/images/furgoneta-cargando.jpg',title: 'Carga cuidada',            text: 'Recogidas coordinadas en domicilio, taller o concesionario.' },
  { src: '/images/furgoneta-viajando.jpg',title: 'Rutas nacionales',         text: 'Cobertura en España peninsular con planificación de entregas.' },
]

const GALLERY_ROW2 = [
  { src: '/images/furgoneta-perfil.jpg', title: 'Nuestra furgoneta',  text: 'Vehículo equipado para el transporte seguro de motocicletas.' },
  { src: '/images/motos-rampa.jpg',      title: 'Rampa de carga',      text: 'Sistema de acceso para facilitar la carga de cualquier tipo de moto.' },
  { src: '/images/motos-camion.jpg',     title: 'Capacidad amplia',    text: 'Grupaje eficiente para reducir costes en rutas compartidas.' },
  { src: '/images/quads.jpg',            title: 'También quads',       text: 'Transportamos quads y vehículos de cuatro ruedas a petición.' },
]

const VIDEOS = [
  { src: '/videos/0428.mp4', poster: '/images/motos-cargadas.jpg',     title: 'Carga y preparación',  text: 'Así aseguramos cada moto antes de salir.' },
  { src: '/videos/0429.mp4', poster: '/images/furgoneta-viajando.jpg', title: 'Transporte en ruta',   text: 'Vídeo real de una entrega en ruta nacional.' },
]

function HeroBg() {
  return (
    <div
      className="hero-video-bg"
      aria-hidden="true"
      style={{
        backgroundImage: 'url(/images/foto-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  )
}

function VideoCard({ src, poster, title, text }) {
  const ref = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const v = ref.current
    if (!v) return
    if (v.paused) { v.play(); setPlaying(true) }
    else          { v.pause(); setPlaying(false) }
  }

  return (
    <div style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', background: '#141820', border: '1px solid rgba(255,255,255,0.08)', cursor: 'pointer' }} onClick={toggle}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        playsInline
        loop
        preload="none"
        style={{ width: '100%', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {!playing && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(180deg, transparent 40%, rgba(7,8,12,0.88))' }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: `rgba(200,168,75,0.92)`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 0 8px rgba(200,168,75,0.2)` }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#0d0f14"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      )}
      <div style={{ position: 'absolute', left: 18, right: 18, bottom: 18, pointerEvents: 'none' }}>
        <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#f0ede8', letterSpacing: 2, fontSize: 22, marginBottom: 4 }}>{title}</h3>
        <p style={{ color: '#c0bdb8', fontSize: 13, lineHeight: 1.5 }}>{text}</p>
      </div>
    </div>
  )
}

export default function HomePage({ setPage }) {
  const [faqOpen, setFaqOpen] = useState(null)

  return (
    <div>
      {/* ── HERO ── */}
      <section className="home-hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', background: '#0d0f14', paddingTop: 80 }}>
        <HeroBg />
        <div className="hero-video-shade" />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 75% 30%, rgba(200,168,75,0.1), transparent 34%), linear-gradient(90deg, rgba(13,15,20,0.92) 0%, rgba(13,15,20,0.72) 48%, rgba(13,15,20,0.26) 100%)' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px', position: 'relative', zIndex: 2 }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 620px) 1fr', gap: 40, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `rgba(200,168,75,0.1)`, border: `1px solid rgba(200,168,75,0.25)`, borderRadius: 4, padding: '6px 14px', marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: GOLD, display: 'block' }} />
                <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: 2, color: GOLD, textTransform: 'uppercase' }}>Madrid · España Peninsular</span>
              </div>

              <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(48px,7vw,96px)', lineHeight: 0.95, color: '#f0ede8', marginBottom: 20, letterSpacing: 2 }}>
                Transporte de<br />
                <span style={{ color: GOLD }}>motos puerta</span><br />
                a puerta
              </h1>

              <p style={{ fontSize: 'clamp(16px,1.5vw,20px)', color: '#a0a0aa', maxWidth: 520, marginBottom: 36, lineHeight: 1.65 }}>
                Recogemos tu moto, la protegemos y la entregamos en destino con seguimiento en tiempo real y presupuesto cerrado. Sin sorpresas.
              </p>

              <div className="hero-proof" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 10, maxWidth: 560, marginBottom: 28 }}>
                {['Seguro incluido', 'Respuesta < 2 h', 'Puerta a puerta'].map(item => (
                  <div key={item} style={{ border: '1px solid rgba(200,168,75,0.18)', background: 'rgba(255,255,255,0.04)', borderRadius: 8, padding: '10px 12px', color: '#c0bdb8', fontSize: 13, fontWeight: 600 }}>
                    <Icon name="check" size={14} color={GOLD} /> <span style={{ marginLeft: 6 }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
                <button onClick={() => setPage('Presupuesto')} style={{ padding: '16px 32px', background: GOLD, border: 'none', borderRadius: 6, cursor: 'pointer', fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: 16, color: '#0d0f14', display: 'flex', alignItems: 'center', gap: 8 }}>
                  Solicitar presupuesto <Icon name="arrowRight" size={18} color="#0d0f14" />
                </button>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ padding: '16px 28px', background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: 6, fontFamily: 'Barlow, sans-serif', fontWeight: 600, fontSize: 16, color: '#25d366', display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
                  <Icon name="whatsapp" size={20} color="#25d366" /> WhatsApp
                </a>
              </div>

              {/* Tarjetas de teléfono */}
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {[
                  { label: 'Principal · WA', value: PHONE,  raw: PHONE_RAW  },
                  { label: 'Línea 2',        value: PHONE2, raw: PHONE2_RAW },
                  { label: 'Línea 3',        value: PHONE3, raw: PHONE3_RAW },
                ].map(p => (
                  <a key={p.raw} href={`tel:${p.raw}`} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, textDecoration: 'none', transition: 'border-color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = `${GOLD}55`}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                  >
                    <div style={{ width: 32, height: 32, borderRadius: 6, background: `${GOLD}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon name="phone" size={14} color={GOLD} />
                    </div>
                    <div>
                      <div style={{ fontSize: 10, color: '#5a5a64', letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600, marginBottom: 2 }}>{p.label}</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#f0ede8', fontFamily: 'Barlow, sans-serif' }}>{p.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="hero-media-stack">
              <div className="hero-quote-card">
                <BrandMark size={46} compact />
                <div>
                  <p>Presupuesto claro para particulares, concesionarios y talleres.</p>
                  <button onClick={() => setPage('Presupuesto')}>Cotizar transporte</button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div style={{ marginTop: 60, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: `rgba(200,168,75,0.12)`, borderRadius: 8, overflow: 'hidden', border: `1px solid rgba(200,168,75,0.15)` }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ padding: '20px 24px', background: 'rgba(13,15,20,0.8)', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(200,168,75,0.12)' : 'none' }}>
                <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 36, color: GOLD, letterSpacing: 2 }}>{s.val}</div>
                <div style={{ fontSize: 12, color: '#7a7a84', fontWeight: 500, letterSpacing: 1, textTransform: 'uppercase', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERÍA ── */}
      <section style={{ padding: '80px 24px', background: '#10121a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionLabel>Galería real</SectionLabel>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24, alignItems: 'flex-end', flexWrap: 'wrap', marginBottom: 28 }}>
            <div>
              <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(36px,4vw,56px)', color: '#f0ede8', letterSpacing: 2, marginBottom: 10 }}>Así viajan las motos</h2>
              <p style={{ color: '#7a7a84', maxWidth: 620, fontSize: 17 }}>Fotos del proceso para que el cliente vea el vehículo, la carga y el tipo de transporte antes de pedir presupuesto.</p>
            </div>
            <button onClick={() => setPage('Presupuesto')} style={{ padding: '13px 22px', background: GOLD, border: 'none', borderRadius: 6, cursor: 'pointer', fontFamily: 'Barlow, sans-serif', fontWeight: 700, color: '#0d0f14' }}>
              Pedir precio ahora
            </button>
          </div>

          {/* Row 1: large | medium | medium */}
          <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.9fr 0.9fr', gap: 16, marginBottom: 16 }}>
            {GALLERY_ROW1.map((item, i) => (
              <article key={item.title} className={i === 0 ? 'gallery-card gallery-card-large' : 'gallery-card'} style={{ position: 'relative', minHeight: i === 0 ? 420 : 300, overflow: 'hidden', borderRadius: 10, border: '1px solid rgba(255,255,255,0.08)', background: '#141820' }}>
                <img src={item.src} alt={item.title} loading={i === 0 ? 'eager' : 'lazy'} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(7,8,12,0.92))' }} />
                <div style={{ position: 'absolute', left: 18, right: 18, bottom: 18 }}>
                  <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#f0ede8', letterSpacing: 2, fontSize: 24, marginBottom: 4 }}>{item.title}</h3>
                  <p style={{ color: '#c0bdb8', fontSize: 14, lineHeight: 1.5 }}>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Row 2: 4 equal columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {GALLERY_ROW2.map((item) => (
              <article key={item.title} style={{ position: 'relative', minHeight: 220, overflow: 'hidden', borderRadius: 10, border: '1px solid rgba(255,255,255,0.08)', background: '#141820' }}>
                <img src={item.src} alt={item.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 35%, rgba(7,8,12,0.90))' }} />
                <div style={{ position: 'absolute', left: 14, right: 14, bottom: 14 }}>
                  <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#f0ede8', letterSpacing: 1, fontSize: 18, marginBottom: 2 }}>{item.title}</h3>
                  <p style={{ color: '#c0bdb8', fontSize: 12, lineHeight: 1.4 }}>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── VÍDEOS ── */}
      <section style={{ padding: '80px 24px', background: '#0d0f14' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionLabel>El proceso, en directo</SectionLabel>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24, alignItems: 'flex-end', flexWrap: 'wrap', marginBottom: 32 }}>
            <div>
              <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(36px,4vw,56px)', color: '#f0ede8', letterSpacing: 2, marginBottom: 10 }}>Vídeos reales</h2>
              <p style={{ color: '#7a7a84', maxWidth: 540, fontSize: 17 }}>Sin edición. Lo que ves es lo que hacemos en cada recogida y entrega.</p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
            {VIDEOS.map((v) => (
              <VideoCard key={v.src} src={v.src} poster={v.poster} title={v.title} text={v.text} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section style={{ padding: '80px 24px', background: '#10121a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionLabel>Nuestros servicios</SectionLabel>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(36px,4vw,56px)', color: '#f0ede8', marginBottom: 16, letterSpacing: 2 }}>Soluciones a medida</h2>
          <p style={{ color: '#7a7a84', maxWidth: 560, marginBottom: 48, fontSize: 17 }}>Para particulares, concesionarios, talleres y empresas de renting.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
            {SERVICES.map((s, i) => (
              <div key={i}
                style={{ background: '#141820', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: 28, transition: 'all 0.2s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = s.color + '44'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 8, background: `${s.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon name={s.icon} size={22} color={s.color} />
                </div>
                <h3 style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: 18, color: '#f0ede8', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: '#7a7a84', fontSize: 14, marginBottom: 16, lineHeight: 1.6 }}>{s.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {s.items.map((it, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: '#a0a0aa' }}>
                      <span style={{ marginTop: 3, flexShrink: 0 }}><Icon name="check" size={14} color={s.color} /></span>{it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESO ── */}
      <section style={{ padding: '80px 24px', background: '#0d0f14' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionLabel>Cómo funciona</SectionLabel>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(36px,4vw,56px)', color: '#f0ede8', marginBottom: 48, letterSpacing: 2 }}>4 pasos, sin complicaciones</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 0 }}>
            {STEPS.map((step, i) => (
              <div key={i} style={{ padding: '32px 24px', position: 'relative', textAlign: 'center' }}>
                {i < 3 && <div style={{ position: 'absolute', top: 52, right: 0, width: '50%', height: 2, background: `linear-gradient(90deg,${GOLD}44,transparent)` }} />}
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: `linear-gradient(135deg,${GOLD}22,${GOLD}08)`, border: `2px solid ${GOLD}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', position: 'relative' }}>
                  <Icon name={step.icon} size={24} color={GOLD} />
                  <span style={{ position: 'absolute', top: -8, right: -8, background: GOLD, color: '#0d0f14', fontFamily: 'Bebas Neue, sans-serif', fontSize: 13, width: 22, height: 22, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{step.n}</span>
                </div>
                <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 22, color: '#f0ede8', marginBottom: 8, letterSpacing: 2 }}>{step.title}</h3>
                <p style={{ color: '#7a7a84', fontSize: 14, lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONFIANZA + TESTIMONIOS ── */}
      <section style={{ padding: '80px 24px', background: '#10121a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <SectionLabel>Por qué elegirnos</SectionLabel>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(36px,4vw,52px)', color: '#f0ede8', marginBottom: 24, letterSpacing: 2, lineHeight: 1 }}>Tu moto en manos expertas</h2>
            <p style={{ color: '#7a7a84', marginBottom: 32, lineHeight: 1.7 }}>Llevamos años especializados en logística de motocicletas. Conocemos cada detalle del proceso y lo que tu moto necesita para llegar perfecta.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {TRUST_ITEMS.map((it, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 6, background: `rgba(200,168,75,0.1)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={it.icon} size={16} color={GOLD} />
                  </div>
                  <p style={{ color: '#c0bdb8', fontSize: 15, lineHeight: 1.6, paddingTop: 8 }}>{it.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ color: GOLD, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: 2, fontSize: 14, textTransform: 'uppercase', marginBottom: 4 }}>Opiniones de clientes</p>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ background: '#141820', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: 20 }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: 8 }}>
                  {[...Array(t.stars)].map((_, j) => <Icon key={j} name="star" size={14} color={GOLD} />)}
                </div>
                <p style={{ color: '#c0bdb8', fontSize: 14, lineHeight: 1.65, marginBottom: 12, fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 600, fontSize: 14, color: '#f0ede8' }}>{t.name}</span>
                  <span style={{ fontSize: 12, color: '#5a5a64', background: 'rgba(200,168,75,0.08)', padding: '3px 10px', borderRadius: 4 }}>{t.route}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '80px 24px', background: '#0d0f14' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(36px,4vw,52px)', color: '#f0ede8', marginBottom: 40, letterSpacing: 2 }}>Todo lo que necesitas saber</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {FAQS.map((f, i) => (
              <div key={i} style={{ background: '#141820', border: `1px solid ${faqOpen === i ? GOLD + '33' : 'rgba(255,255,255,0.06)'}`, borderRadius: 8, overflow: 'hidden', transition: 'all 0.2s' }}>
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} style={{ width: '100%', textAlign: 'left', padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                  <span style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 600, fontSize: 16, color: '#f0ede8' }}>{f.q}</span>
                  <span style={{ flexShrink: 0, transform: faqOpen === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                    <Icon name="chevronDown" size={20} color={GOLD} />
                  </span>
                </button>
                {faqOpen === i && (
                  <div style={{ padding: '0 22px 18px', color: '#a0a0aa', fontSize: 15, lineHeight: 1.7 }}>{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ padding: '60px 24px', background: `linear-gradient(135deg,${RED}22 0%,${GOLD}14 100%)`, borderTop: `1px solid ${GOLD}22`, borderBottom: `1px solid ${GOLD}22` }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(28px,3vw,42px)', color: '#f0ede8', letterSpacing: 2, marginBottom: 6 }}>¿Listo para mover tu moto?</h2>
            <p style={{ color: '#8a8a94', fontSize: 16 }}>Presupuesto personalizado sin compromiso · Respuesta en menos de 2 horas</p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button onClick={() => setPage('Presupuesto')} style={{ padding: '14px 28px', background: GOLD, border: 'none', borderRadius: 6, cursor: 'pointer', fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: 15, color: '#0d0f14' }}>
              Pedir presupuesto
            </button>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ padding: '14px 24px', background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: 6, fontFamily: 'Barlow, sans-serif', fontWeight: 600, fontSize: 15, color: '#25d366', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Icon name="whatsapp" size={18} color="#25d366" /> WhatsApp directo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
