# Skill: new-client — Registrar un nuevo cliente

## ¿Cuándo se activa?
Cuando se necesita registrar un cliente o prospecto en el sistema.

**Ejemplos de solicitudes:**
- "Agrega al cliente Hotel Barceló de España"
- "Registra a Grupo Bafar, su logo está en las descargas"
- "Quiero agregar un nuevo cliente"

## Lo que hace el agente

1. **Solicita** los datos necesarios:
   - Nombre oficial del cliente
   - País
   - Industria (hotelería, restaurantes, retail, manufactura...)
   - Productos NT contratados o de interés
   - Logo (pregunta si está disponible)
2. **Crea** la carpeta `clients/[nombre-normalizado]/`
3. **Genera** el archivo `info.md` con todos los datos
4. **Indica** dónde colocar el logo si no se proporcionó

## Estructura que crea
```
clients/
└── hotel-barcelo/
    ├── logo.png        ← logo del cliente
    └── info.md         ← datos del cliente
```

## Formato de info.md generado
```markdown
# Hotel Barceló
- **País:** España 🇪🇸
- **Industria:** Hotelería
- **Productos NT:** Hospitality, Orders
- **Estatus:** Cliente activo
- **Fecha de registro:** 2025-04-17
- **Contacto:** [nombre] — [email]
```

## Reglas
- El nombre de la carpeta siempre en minúsculas y con guiones
- NUNCA guardar contraseñas o datos sensibles en esta carpeta
- Si el cliente ya existe, actualizar en lugar de duplicar
