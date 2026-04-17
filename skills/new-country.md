# Skill: new-country — Crear sitio para nuevo país

## ¿Cuándo se activa?
Cuando se necesita crear la versión del sitio web para un nuevo país.

**Ejemplos de solicitudes:**
- "Crea el sitio de Colombia"
- "Necesitamos el sitio para España"
- "Quiero lanzar en Perú"

## Lo que hace el agente

1. **Solicita** (si no están):
   - País y código de dominio
   - Productos a mostrar en ese país
   - Datos de contacto locales (teléfono, dirección, correo)
   - Idioma (español por defecto, adaptaciones regionales)
2. **Crea** `sites/next-technologies-[país]/` basado en la plantilla México
3. **Configura** los datos específicos del país
4. **Adapta** textos con terminología local (e.g. "factura" vs "factura electrónica" varía por país)

## Config que se crea por país
```
sites/next-technologies-co/
├── index.html
├── config.js       ← datos del país (contacto, moneda, legal)
├── assets/
└── README.md       ← instrucciones de deploy
```

## Países y dominios objetivo
| País | Dominio | Estado |
|---|---|---|
| 🇩🇴 República Dominicana | next-technologies.com.do | ✅ Activo |
| 🇲🇽 México | next-technologies.com.mx | ✅ Activo |
| 🇨🇴 Colombia | next-technologies.com.co | 🔧 Pendiente |
| 🇪🇸 España | next-technologies.es | 🔧 Pendiente |
| 🇵🇪 Perú | next-technologies.com.pe | 🔧 Futuro |
| 🇨🇷 Costa Rica | next-technologies.co.cr | 🔧 Futuro |

## Reglas
- Usar México como plantilla base
- Verificar terminología fiscal local (ej: CFDI en MX, NCF en DO, FE en CO)
- El CIO debe aprobar antes del deploy a producción
