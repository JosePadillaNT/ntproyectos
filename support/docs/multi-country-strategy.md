# Estrategia Multi-País — Sin dominio .com

## El desafío
Next Technologies no tiene el dominio `.com`. La estrategia se basa en **dominios por país**, lo cual es una práctica común y tiene ventajas reales.

---

## Ventajas del dominio por país (ccTLD)

| Ventaja | Detalle |
|---|---|
| **SEO local** | Google prioriza `.com.mx` en búsquedas desde México |
| **Confianza local** | Los usuarios confían más en dominios de su país |
| **Independencia** | Cada país puede tener contenido, precios y productos distintos |
| **Legal** | Facilita cumplimiento fiscal y legal por país |

---

## Arquitectura: Mono-repo + Config por país

**Un solo repositorio en GitHub. Un deploy independiente por dominio.**

```
nt-landing-pages/
└── sites/
    ├── next-technologies-do/   → deploy → next-technologies.com.do
    ├── next-technologies-mx/   → deploy → next-technologies.com.mx
    ├── next-technologies-co/   → deploy → next-technologies.com.co
    └── next-technologies-es/   → deploy → next-technologies.es
```

### ¿Por qué mono-repo?
- Un solo lugar para actualizar diseño global
- Un cambio de logo se aplica a todos los países a la vez
- El agente trabaja sobre un solo repositorio
- Control de versiones unificado

---

## Configuración por país

Cada sitio tiene su `config.js` con datos locales:

```javascript
// sites/next-technologies-mx/config.js
export const country = {
  code: 'mx',
  name: 'México',
  flag: 'MX',
  phone: '+52 55 3192 8571',
  whatsapp: '525531928571',
  email: 'ventas@next-technologies.com.mx',
  address: 'Ciudad de México, México',
  currency: 'MXN',
  language: 'es-MX',
  fiscal: 'CFDI / SAT',
  products: ['business', 'factoia', 'hospitality', 'isquare', 'nomina', 'orders', 'valid', 'factosuite'],
  legal: 'NT Group S.A. de C.V.'
}
```

---

## Dominios y hosting

| País | Dominio | Hosting recomendado |
|---|---|---|
| DO Rep. Dominicana | next-technologies.com.do | Netlify / Cloudflare Pages |
| MX México | next-technologies.com.mx | Netlify / Cloudflare Pages |
| CO Colombia | next-technologies.com.co | Netlify / Cloudflare Pages |
| ES España | next-technologies.es | Netlify / Cloudflare Pages |

**Recomendación:** Cloudflare Pages — deploy directo desde GitHub, CDN global, SSL automático, gratis.

---

## Flujo de deploy

```
Cambio en GitHub → CI/CD detecta país afectado → Build → Deploy automático al dominio
```

1. El agente hace el cambio en `sites/next-technologies-mx/`
2. Se hace commit y push a GitHub
3. Cloudflare Pages detecta el cambio en esa carpeta
4. Solo el sitio de México se redeploya (los otros no se tocan)
5. En ~30 segundos el cambio está en producción

---

## Terminología fiscal por país

| País | Nombre del documento | Autoridad fiscal |
|---|---|---|
| MX México | CFDI | SAT |
| DO Rep. Dominicana | NCF / e-CF | DGII |
| CO Colombia | Factura Electrónica | DIAN |
| ES España | FacturaE | AEAT |
| CR Costa Rica | Factura Electrónica | Hacienda |
