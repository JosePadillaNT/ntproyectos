---
name: site-audit
description: >
  Revisa el estado de un sitio web de Next Technologies.
  Úsame cuando el equipo quiera saber si el sitio está correcto,
  actualizado, con buen SEO, o con la identidad de marca aplicada.
---

# Skill: Auditoría de sitio web

## Qué revisar

### 1. Brand Compliance
- ¿Se usa tipografía Gotham? (verificar con `support/docs/brand-guide.md`)
- ¿Los colores corresponden al manual de identidad?
- ¿Los logos son los oficiales de `support/logotipos/`?
- ¿El tono de texto es profesional y tecnológico (estilo empresa California)?

### 2. Contenido
- ¿Datos de contacto actualizados? (teléfono, email, WhatsApp, dirección)
- ¿Los productos listados corresponden a los de ese país? (ver `support/docs/products-catalog.md`)
- ¿Errores ortográficos o de redacción?
- ¿Copyright con año actualizado?

### 3. SEO básico
- ¿Tiene `<title>` y `<meta description>`?
- ¿Las imágenes tienen atributo `alt`?
- ¿Hay palabras clave relevantes en el contenido?

## Formato del reporte

```
## Auditoría: [Sitio] — [Fecha]

### ✅ Correcto
- ...

### ⚠️ Necesita atención
- ...

### 🔴 Urgente
- ...
```

## Reglas

- NO hacer cambios automáticamente — generar reporte primero.
- Guardar reporte en `support/content/cambios-sitio/auditoria-[país]-[fecha].md`.
- Presentar hallazgos en lenguaje no técnico para el equipo comercial.

## Ejemplos de solicitudes

- "Revisa cómo está el sitio de México"
- "¿Está bien el SEO del sitio de República Dominicana?"
- "Haz una auditoría de todos los sitios"
