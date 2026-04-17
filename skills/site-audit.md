# Skill: site-audit — Auditoría de sitios web

## ¿Cuándo se activa?
Cuando se necesita revisar el estado de un sitio web.

**Ejemplos de solicitudes:**
- "Revisa cómo está el sitio de México"
- "Haz una auditoría del sitio de República Dominicana"
- "¿Está bien el SEO de nuestros sitios?"

## Lo que revisa el agente

### 1. Brand Compliance
- ¿Se usa la tipografía Gotham?
- ¿Los colores corresponden al manual de identidad?
- ¿Los logos usados son los oficiales de `support/logotipos/`?
- ¿Los textos reflejan el tono de startup tecnológica?

### 2. Contenido
- ¿Los datos de contacto están actualizados?
- ¿Los productos listados corresponden a los disponibles en ese país?
- ¿Hay errores ortográficos o de redacción?

### 3. SEO básico
- ¿Tiene título y descripción meta?
- ¿Las imágenes tienen texto alternativo?
- ¿La URL es correcta?

## Reporte generado
El agente genera un resumen con:
- ✅ Lo que está bien
- ⚠️ Lo que necesita atención
- 🔴 Lo que debe corregirse urgente

## Reglas
- No hacer cambios sin aprobación del CIO o del equipo comercial
- Generar reporte en `support/content/cambios-sitio/auditoria-[país]-[fecha].md`
