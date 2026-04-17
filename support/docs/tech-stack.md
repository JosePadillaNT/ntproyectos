# Stack Técnico — NT Landing Pages

## Decisiones de diseño

### Tema
- **Light theme** — fondo blanco / gris muy claro (#f8fafc)
- Sin dark mode en sitios de marketing
- Colores de acento para resaltar lo importante, fondo neutro para legibilidad

### Paleta de colores
| Rol | Color | Hex |
|---|---|---|
| Fondo principal | Blanco roto | #f8fafc |
| Fondo secundario | Gris muy claro | #f1f5f9 |
| Texto principal | Casi negro | #0f172a |
| Texto secundario | Gris | #64748b |
| Acento primario | Índigo NT | #4f46e5 |
| Acento secundario | Violeta | #7c3aed |
| Highlight | Cyan | #06b6d4 |
| Bordes | Gris claro | #e2e8f0 |

### Tipografía
- **Fuente**: Inter (Google Fonts) — equivalente web de Gotham
- Títulos: 700–900 weight
- Cuerpo: 400–500 weight

---

## Librerías (CDN, sin npm)

| Necesidad | Librería | Por qué |
|---|---|---|
| Iconos | **Lucide Icons** v0.263 | SVG limpio, 1,000+ íconos, MIT, usado por Linear/Vercel |
| Animaciones scroll | **AOS** (Animate On Scroll) v2.3 | Simple, declarativo, MIT, 6KB |
| Parallax | **Rellax.js** v1.12 | 2KB, sin dependencias, suave |
| CSS framework | **Tailwind CSS** v3 CDN | Ya en uso, flexible |
| Sin jQuery | — | Vanilla JS únicamente |

### CDN URLs
```html
<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>

<!-- AOS -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<!-- Rellax -->
<script src="https://cdn.jsdelivr.net/gh/dixonandmoe/rellax@1.12.1/rellax.min.js"></script>
```

### Uso de Lucide en HTML
```html
<i data-lucide="check-circle" class="w-5 h-5 text-indigo-600"></i>
<!-- Activar con: lucide.createIcons() al final del body -->
```

---

## Estructura de archivos por sitio

```
sites/next-technologies-[pais]/
  index.html          → página principal
  config.js           → datos del país (tel, email, productos activos)
  assets/
    css/main.css      → design tokens + componentes custom
    js/main.js        → VanillaJS (navbar, AOS init, Rellax init, forms)
    images/
      logos/          → logos NT (copiados de support/logotipos/)
      products/       → capturas de productos (copiados de support/sites-scraped/)
      clients/        → logos de clientes
```

---

## Reglas de diseño (obligatorias)

- NUNCA emojis en el HTML de los sitios
- SIEMPRE alt text en imágenes
- SIEMPRE mobile-first (Tailwind breakpoints)
- Los iconos van con Lucide, no con Font Awesome ni emojis
- Animaciones: data-aos="fade-up" en secciones, NO en elementos inline
- Parallax: solo en imágenes de hero, clase "rellax" con data-rellax-speed="-2"
- Imágenes reales del sitio se toman de support/sites-scraped/
- Logos siempre de support/logotipos/

---

## Contenido real (de los sitios actuales)

### México (next-technologies.com.mx)
- Tel: +52 55 1205 8000
- Email: ventas@next-technologies.com.mx
- Clientes: 50+ satisfechos, presencia internacional
- Segmentos: Negocio, Emprendedor, PYMES, Corporativos
- Testimonial: "Verónica Burgoa, TI Director — Next-Technologies tiene muy clara la visión del compromiso con sus clientes"
- Partners tecnológicos: AWS, Azure, GCP

### Rep. Dominicana (next-technologies.com.do)
- 15 años de experiencia en LATAM
- Especializados en hospitalidad y retail
- Integración con Oracle PMS
- Regulación: NCF / DGII
