# ⚙️ Stack Técnico — NT Landing Pages

## Decisiones técnicas

### Frontend
| Tecnología | Versión | Motivo |
|---|---|---|
| **HTML5** | Estándar | Base semántica, SEO nativo |
| **VanillaJS** | ES2022+ | Sin dependencias, máximo rendimiento |
| **Tailwind CSS** | v4 | Utilidades CSS, consistencia de diseño, fácil de mantener |

**Sin frameworks pesados** (no React, no Vue, no Angular).  
Motivo: Los sitios son principalmente informativos. La velocidad de carga y el SEO son prioritarios. El equipo comercial no necesita un SPA.

---

### Estructura de cada sitio

```
sites/next-technologies-mx/
├── index.html          ← página principal
├── config.js           ← datos del país (teléfono, email, productos, legal)
├── assets/
│   ├── css/
│   │   └── main.css    ← estilos generados por Tailwind
│   ├── js/
│   │   └── main.js     ← interacciones (menu mobile, formularios, animaciones)
│   └── images/         ← imágenes del sitio
└── README.md           ← instrucciones de deploy para este país
```

---

### Design System (tokens Tailwind)

Basado en la identidad de marca NT. Definidos en `tailwind.config.js` compartido:

```javascript
// Colores (basados en manual de identidad)
colors: {
  'nt-primary':   '#[definir del manual]',
  'nt-secondary': '#[definir del manual]',
  'nt-dark':      '#2a2b2f',    // color dark del sitio MX actual
  'nt-light':     '#ffffff',
  'nt-accent':    '#[definir del manual]',
}

// Tipografía
fontFamily: {
  'gotham': ['Gotham', 'sans-serif'],
}
```

> ⚠️ Los valores de color exactos se deben extraer del Manual de Identidad V2 (PDF).
> Actualizar este archivo cuando el CIO los confirme.

---

### Backend (opcional, futuro)

Solo si se necesita funcionalidad dinámica:

| Necesidad | Solución |
|---|---|
| Formulario de contacto | Formspree / EmailJS (sin backend) |
| CRM / leads | HubSpot embed o microservicio GCP |
| Autenticación | Auth0 (si se necesita área de clientes) |
| API datos | Microservicio Cloud Run (GCP) |

**Regla:** No agregar backend hasta que sea estrictamente necesario.

---

### Control de versiones y deploy

```
GitHub (repositorio central)
    ↓
GitHub Actions (CI/CD)
    ↓
Cloudflare Pages (hosting)
    ↓
Dominio por país
```

**Ramas:**
| Rama | Uso |
|---|---|
| `main` | Producción — auto-deploy a todos los dominios |
| `dev` | Desarrollo — preview URL |
| `feature/[nombre]` | Cambios específicos — el agente crea estas ramas |

**Regla:** El agente nunca hace push directo a `main`. Siempre crea una rama y el CIO aprueba el merge.

---

### Presentaciones HTML

Las presentaciones usan la misma base tecnológica:
- HTML5 + CSS con identidad NT
- [Reveal.js](https://revealjs.com/) para navegación de slides
- Sin dependencias externas (todo embebido para compartir como .zip)

---

### Performance objetivo

| Métrica | Objetivo |
|---|---|
| Lighthouse Score | > 90 |
| First Contentful Paint | < 1.5s |
| LCP | < 2.5s |
| CLS | < 0.1 |
| Mobile friendly | ✅ Siempre |
