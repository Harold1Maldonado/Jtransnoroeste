import { GOLD } from '../tokens.js'
import logo from '../../logo-oficial.jpeg'

export default function BrandMark({ size = 44, compact = false }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: compact ? 0 : 10 }}>
      <img
        src={logo}
        alt={compact ? 'J Trans Noroeste' : ''}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          objectFit: 'cover',
          border: `2px solid ${GOLD}55`,
          boxShadow: `0 0 28px ${GOLD}22`,
          flexShrink: 0,
        }}
      />
      {!compact && (
        <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 20, color: '#f0ede8', letterSpacing: 2, lineHeight: 1 }}>
          J TRANS NOROESTE
        </span>
      )}
    </div>
  )
}
