# Skill: new-presentation — Crear presentación HTML para cliente

## ¿Cuándo se activa?
Cuando el equipo comercial necesita una presentación para un cliente o prospect.

**Ejemplos de solicitudes:**
- "Crea una presentación para el cliente Hotel Camino Real"
- "Necesito una presentación de FactoSuite para un prospecto en España"
- "Haz la presentación de NT Soluciones para Grupo Bafar"

## Lo que hace el agente

1. **Pregunta** (si no están en la solicitud):
   - ¿Cliente o prospecto?
   - ¿Qué productos mostrar?
   - ¿País/idioma?
   - ¿Tiene logo en `clients/`?
2. **Crea** la presentación en `presentations/[cliente-fecha]/index.html`
3. **Usa** la plantilla base de `presentations/_template/`
4. **Aplica** identidad de marca NT (Gotham, colores del manual)
5. **Incluye** logo del cliente si está en `clients/[nombre]/logo.png`

## Estructura de una presentación generada
```
presentations/
└── hotel-camino-real-2025-04/
    ├── index.html      ← presentación principal
    ├── assets/         ← imágenes y recursos
    └── README.md       ← cómo abrir y compartir
```

## Cómo compartirla
- Abrir `index.html` en el navegador
- Para enviar al cliente: comprimir la carpeta como .zip
- Para presentar en vivo: abrir en Chrome/Safari a pantalla completa

## Reglas
- SIEMPRE usar tipografía Gotham y colores NT
- NUNCA usar logos de clientes sin verificar en `clients/`
- Si el cliente no está en `clients/`, preguntar si se debe registrar primero
