// src/components/WhatsAppFAB.jsx
import Icon from './Icon.jsx'
import { WA_URL } from '../tokens.js'

export default function WhatsAppFAB() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed', bottom: 28, right: 28, zIndex: 200,
        width: 56, height: 56, borderRadius: '50%',
        background: '#25d366',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
        textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.1)'
        e.currentTarget.style.boxShadow = '0 6px 28px rgba(37,211,102,0.55)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.4)'
      }}
    >
      <Icon name="whatsapp" size={28} color="#fff" />
    </a>
  )
}
