# J Trans Noroeste — Sitio web

Proyecto React + Vite listo para desarrollar.

## Instalación

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Estructura

```
src/
├── assets/
│   └── logo-oficial.jpeg      # Logo de la empresa
├── components/
│   ├── Icon.jsx               # Librería de iconos SVG inline
│   ├── Navbar.jsx             # Barra de navegación sticky
│   ├── Footer.jsx             # Pie de página
│   ├── WhatsAppFAB.jsx        # Botón flotante de WhatsApp
│   └── helpers.jsx            # SectionLabel, PageHeader, FormField, etc.
├── pages/
│   ├── HomePage.jsx           # Inicio (hero, servicios, proceso, FAQ, testimonios)
│   ├── ServiciosPage.jsx      # Detalle de servicios
│   ├── RecambiosPage.jsx      # Venta de motos y recambios
│   ├── EmpresaPage.jsx        # La empresa, misión y valores
│   ├── PresupuestoPage.jsx    # Formulario de solicitud de presupuesto
│   └── ContactoPage.jsx       # Contacto directo
├── styles/
│   └── global.css             # Reset y estilos base
├── tokens.js                  # Colores, teléfono, email, URLs (editar aquí)
├── App.jsx                    # Router SPA + layout
└── main.jsx                   # Entry point
```

## Personalización rápida

Todos los datos de contacto, colores y textos centrales están en **`src/tokens.js`**:

```js
export const GOLD      = '#c8a84b'   // Color dorado principal
export const RED       = '#c8221a'   // Color rojo acento
export const PHONE     = '+34 614 32 16 94'
export const EMAIL     = 'info@jtransnoroeste.com'
export const WA_URL    = 'https://wa.me/34614321694'
```

## Build para producción

```bash
npm run build
```

Los archivos listos para subir al servidor quedan en la carpeta `dist/`.

## Próximos pasos sugeridos

- [ ] Conectar el formulario de presupuesto a un backend / email (EmailJS, Formspree, etc.)
- [ ] Añadir React Router si se necesitan URLs reales por página (SEO)
- [ ] Sustituir testimonios placeholder por reseñas reales
- [ ] Añadir fotos reales de motos en las secciones de servicios
- [ ] Crear páginas SEO específicas por ruta (Madrid–Galicia, etc.)
- [ ] Añadir metadatos y Open Graph en el `<head>`
- [ ] Configurar Google Analytics / Search Console
