---
name: new-presentation
description: >
  Crea presentaciones HTML con la identidad de marca de Next Technologies.
  Úsame cuando el equipo pida una presentación para un cliente o prospecto,
  o cuando necesiten slides para una reunión comercial.
---

# Skill: Nueva presentación para cliente

## Cómo actuar

1. **Recopila** la información necesaria (si no está en la solicitud):
   - ¿Cliente o prospecto? ¿Nombre?
   - ¿Qué productos mostrar? (consultar `support/docs/products-catalog.md`)
   - ¿País e idioma?
   - ¿Tiene logo registrado en `clients/`?
2. **Verifica** si el cliente existe en `clients/[nombre]/`. Si no, ofrece registrarlo.
3. **Crea** la carpeta `presentations/[cliente]-[año]-[mes]/`.
4. **Genera** `index.html` usando la plantilla de `presentations/_template/`.
5. **Aplica** identidad NT: tipografía Gotham, colores del manual de identidad.
6. **Incluye** logo del cliente desde `clients/[nombre]/logo.png` si existe.

## Estructura que crea

```
presentations/[cliente]-[año]-[mes]/
├── index.html      ← abrir en navegador
├── assets/
└── README.md       ← instrucciones para el equipo
```

## Reglas

- SIEMPRE usar tipografía Gotham y colores NT.
- NUNCA usar logos de clientes sin verificar que existen en `clients/`.
- Usar Reveal.js embebido para que funcione sin internet.
- El README debe explicar cómo abrir y cómo enviar al cliente.

## Ejemplos de solicitudes

- "Crea una presentación para Hotel Camino Real"
- "Necesito slides de FactoSuite para un prospecto en España"
- "Haz la presentación de NT Soluciones para Grupo Bafar"
