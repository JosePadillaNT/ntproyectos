---
name: new-country
description: >
  Crea la versión del sitio web de Next Technologies para un nuevo país.
  Úsame cuando se necesite lanzar el sitio en Colombia, España, Perú,
  Costa Rica u otro país nuevo.
---

# Skill: Crear sitio para nuevo país

## Cómo actuar

1. **Solicita** los datos del país (si no están):
   - Código del país y dominio objetivo
   - Productos disponibles en ese país (consultar `support/docs/products-catalog.md`)
   - Datos de contacto locales: teléfono, email, dirección, WhatsApp
   - Nombre legal de la empresa en ese país
2. **Crea** `sites/next-technologies-[código]/` basado en la plantilla de México.
3. **Configura** el `config.js` con datos específicos del país.
4. **Adapta** terminología fiscal local (ver tabla abajo).
5. **Genera** README con instrucciones de deploy.

## Config por país (config.js)

```javascript
export const country = {
  code: 'co',
  name: 'Colombia',
  flag: '🇨🇴',
  phone: '+57 ...',
  whatsapp: '57...',
  email: 'ventas@next-technologies.com.co',
  fiscal: 'Factura Electrónica / DIAN',
  legal: 'NT Group Colombia S.A.S.'
}
```

## Terminología fiscal por país

| País | Documento | Autoridad |
|---|---|---|
| 🇲🇽 México | CFDI | SAT |
| 🇩🇴 Rep. Dominicana | NCF / e-CF | DGII |
| 🇨🇴 Colombia | Factura Electrónica | DIAN |
| 🇪🇸 España | FacturaE | AEAT |

## Reglas

- Usar México como plantilla base.
- El CIO debe aprobar antes del deploy a producción.
- Verificar terminología fiscal local antes de publicar.

## Ejemplos de solicitudes

- "Crea el sitio de Colombia"
- "Necesitamos el sitio para España"
- "Quiero lanzar en Perú"
