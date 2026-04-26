// src/components/helpers.jsx
// Small shared layout primitives used across pages.
import { GOLD } from '../tokens.js'

export function SectionLabel({ children, gold = GOLD }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
      <span style={{ width: 24, height: 2, background: gold, display: 'block' }} />
      <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: 2.5, color: gold, textTransform: 'uppercase' }}>
        {children}
      </span>
    </div>
  )
}

export function PageWrapper({ children }) {
  return <div style={{ paddingTop: 68 }}>{children}</div>
}

export function PageHeader({ title, subtitle, gold = GOLD }) {
  return (
    <div style={{ padding: '60px 24px 40px', background: '#10121a', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ width: 36, height: 3, background: gold, marginBottom: 16, borderRadius: 2 }} />
        <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(40px,5vw,68px)', color: '#f0ede8', letterSpacing: 3, marginBottom: 12 }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ color: '#7a7a84', fontSize: 17, maxWidth: 600, lineHeight: 1.7 }}>{subtitle}</p>
        )}
      </div>
    </div>
  )
}

export function FormField({ label, value, onChange, type = 'text', required = false, gold = GOLD }) {
  return (
    <div>
      <label style={{ fontSize: 13, color: '#7a7a84', fontWeight: 500, letterSpacing: 0.5, textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>
        {label}{required && <span style={{ color: gold }}> *</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        style={{ width: '100%', background: '#141820', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: '12px 14px', color: '#f0ede8', fontFamily: 'Barlow, sans-serif', fontSize: 15, outline: 'none', transition: 'border-color 0.2s' }}
        onFocus={e => (e.target.style.borderColor = gold)}
        onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
      />
    </div>
  )
}
