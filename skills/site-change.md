# Skill: site-change — Cambios en sitios web

## ¿Cuándo se activa?
Cuando el equipo comercial pide cambios en cualquier sitio web de Next Technologies.

**Ejemplos de solicitudes que activan esta skill:**
- "Cambia el teléfono del sitio de México"
- "Actualiza la dirección en el sitio de República Dominicana"
- "Agrega un nuevo producto en el sitio de Colombia"
- "Cambia el correo de ventas en todos los sitios"

## Lo que hace el agente

1. **Identifica** el país y sitio afectado
2. **Localiza** el archivo correcto en `sites/[país]/`
3. **Confirma** el cambio con el usuario antes de ejecutar
4. **Aplica** el cambio respetando la identidad de marca NT
5. **Informa** qué cambió y dónde

## Reglas
- SIEMPRE confirmar antes de ejecutar
- Si el cambio afecta múltiples países, preguntar si se aplica a todos
- Usar datos de `support/docs/` como referencia de contenido oficial
- Respetar la tipografía Gotham y colores del manual de identidad

## Países disponibles
- 🇩🇴 do → `sites/next-technologies-do/`
- 🇲🇽 mx → `sites/next-technologies-mx/`
- 🇨🇴 co → `sites/next-technologies-co/`
- 🇪🇸 es → `sites/next-technologies-es/`
