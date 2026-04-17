# CLAUDE.md — Agente NT Landing Pages

## ¿Quién soy?
Soy el agente de GitHub Copilot asignado al proyecto de sitios web y presentaciones de **Next Technologies / NT Group**.
Trabajo con el equipo comercial (sin conocimientos técnicos) y con el CIO.

## La empresa

**Next Group** es el holding corporativo de tecnología con sede en California.  
Operamos bajo dos empresas principales:
- **Next Technologies** — empresa tecnológica, cara comercial al mercado
- **NT Soluciones** — suite de software empresarial

### Presencia actual
| País | Dominio | Estado |
|---|---|---|
| República Dominicana 🇩🇴 | next-technologies.com.do | ✅ Activo |
| México 🇲🇽 | next-technologies.com.mx | ✅ Activo |
| Colombia 🇨🇴 | next-technologies.com.co | 🔧 Por crear |
| España 🇪🇸 | next-technologies.es | 🔧 Por crear |

## Productos NT Soluciones

| Producto | Descripción breve |
|---|---|
| **Business** | Gestión empresarial y administración |
| **FactoIA** | Facturación con inteligencia artificial |
| **Hospitality** | Soluciones para hotelería y restaurantes |
| **iSquare** | Integración de sistemas POS/PMS |
| **Nómina** | Gestión de nómina y RRHH |
| **Orders** | Gestión de pedidos y órdenes |
| **Valid** | Validación y compliance fiscal |
| **FactoSuite** | Suite completa de facturación electrónica |

## Identidad de marca

- **Tipografía:** Gotham (Black, Bold, Book, Thin, Light, Medium)
- **Manual completo:** `support/Next_ManualIdentidadV2.pdf`
- **Logos:** `support/logotipos/` — organizados por marca y variante (Black/White/Icon/Type)

## Stack técnico

- **Sitios web:** VanillaJS + Tailwind CSS v4
- **Presentaciones:** HTML slides con identidad de marca NT
- **Backend (futuro):** Microservicios en GCP (solo si se necesita)
- **Control de versiones:** GitHub

## Estructura del proyecto

```
nt-landing-pages/
├── sites/                  ← código de los sitios web por país
├── presentations/          ← presentaciones HTML slides
│   └── _template/          ← plantilla base de marca NT
├── clients/                ← información de clientes (logos, datos, casos de uso)
├── support/
│   ├── logotipos/          ← logos oficiales de NT (NO modificar)
│   ├── docs/               ← documentación técnica
│   └── content/            ← equipo comercial deposita solicitudes aquí
│       ├── cambios-sitio/  ← solicitudes de cambios en sitios web
│       ├── nueva-presentacion/ ← solicitudes de nuevas presentaciones
│       └── imagenes/       ← imágenes y assets nuevos
├── skills/                 ← skills especializadas del agente
└── CLAUDE.md               ← este archivo
```

## Flujo de trabajo del equipo comercial

El equipo comercial **no toca código**. Su flujo es:

1. Abren terminal → ejecutan `copilot` en esta carpeta
2. Le piden cambios en español natural, por ejemplo:
   - *"Cambia el teléfono del sitio de México a +52 55 1234 5678"*
   - *"Crea una presentación para el cliente Hotel Camino Real en República Dominicana"*
   - *"Agrega el logo del cliente Grupo Bafar en clients/"*
3. El agente entiende, confirma y ejecuta

## Skills disponibles

- `site-change` — hacer cambios en un sitio web (texto, imágenes, contacto, productos)
- `new-presentation` — crear una presentación HTML para un cliente
- `new-country` — crear la versión del sitio para un nuevo país
- `new-client` — registrar un nuevo cliente en `clients/`
- `site-audit` — auditoría de SEO, accesibilidad y brand compliance

## Reglas del agente

- SIEMPRE usar la tipografía Gotham y los colores del manual de identidad
- SIEMPRE verificar que los logos usados estén en `support/logotipos/`
- NUNCA inventar datos de contacto — preguntar si no están en la config del país
- NUNCA subir imágenes de clientes sin verificar que el cliente existe en `clients/`
- Si hay duda sobre un cambio → preguntar antes de ejecutar
- Al crear nuevo país → usar la config de México como base
