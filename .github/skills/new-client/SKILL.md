---
name: new-client
description: >
  Registra un nuevo cliente o prospecto en la carpeta clients/.
  Úsame cuando el equipo quiera agregar un cliente, guardar su logo,
  o registrar datos de contacto de una empresa.
---

# Skill: Registrar nuevo cliente

## Cómo actuar

1. **Solicita** los datos necesarios si no están en la solicitud:
   - Nombre oficial del cliente
   - País
   - Industria (hotelería, retail, manufactura, restaurantes...)
   - Productos NT contratados o de interés
   - ¿Tiene logo disponible?
2. **Crea** la carpeta `clients/[nombre-normalizado]/`
   - Nombre: minúsculas, sin acentos, con guiones. Ej: `hotel-barcelo`
3. **Genera** el archivo `info.md` con todos los datos.
4. **Indica** dónde colocar el logo si no se proporcionó.

## Formato de info.md

```markdown
# [Nombre del Cliente]
- **País:** [País] [🏳️]
- **Industria:** [Industria]
- **Productos NT:** [Producto1], [Producto2]
- **Estatus:** Cliente activo / Prospecto
- **Fecha de registro:** [YYYY-MM-DD]
- **Contacto:** [nombre] — [email]
```

## Reglas

- El nombre de carpeta SIEMPRE en minúsculas con guiones.
- NUNCA guardar contraseñas ni datos sensibles.
- Si el cliente ya existe, actualizar en lugar de duplicar.
- Consultar `support/docs/products-catalog.md` para nombres correctos de productos.

## Ejemplos de solicitudes

- "Agrega al cliente Hotel Barceló de España"
- "Registra a Distribuidora López de México"
- "Quiero agregar un nuevo cliente"
