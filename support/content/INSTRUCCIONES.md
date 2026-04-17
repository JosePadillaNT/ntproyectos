# 📋 Guía para el Equipo Comercial — NT Landing Pages

> **Esta carpeta es tuya.** Aquí depositas lo que necesitas y el agente lo ejecuta.  
> No necesitas saber programación. Solo sigue estas instrucciones.

---

## 🤖 ¿Qué es el agente?

Es **GitHub Copilot**, un asistente de inteligencia artificial que:
- Entiende tus solicitudes en español
- Hace cambios en los sitios web
- Crea presentaciones con la identidad de NT
- Registra nuevos clientes
- Todo sin que toques código

---

## 💻 ¿Cómo usarlo? (paso a paso)

### Paso 1 — Abrir la terminal
En tu Mac: presiona `Cmd + Espacio`, escribe **Terminal** y presiona Enter.

### Paso 2 — Ir a la carpeta del proyecto
Escribe esto y presiona Enter:
```
cd /ruta/del/proyecto/nt-landing-pages
```

### Paso 3 — Abrir el agente
Escribe esto y presiona Enter:
```
copilot
```

### Paso 4 — Pide lo que necesitas en español
Escribe tu solicitud como si le hablaras a una persona. Ejemplos:

```
Cambia el teléfono de contacto del sitio de México a +52 55 9876 5432
```
```
Crea una presentación para el cliente Grupo Hotelero del Caribe en República Dominicana
```
```
Agrega al cliente "Hotel Barceló" de España con sus datos
```

---

## 📁 ¿Qué va en cada carpeta?

### 📂 `cambios-sitio/`
Solicitudes de cambios para los sitios web. Crea un archivo de texto con tu solicitud.

**Ejemplo de archivo:** `cambio-mx-telefono.txt`
```
Sitio: México
Cambio: Actualizar teléfono de +52 55 3192 8571 a +52 55 9999 0000
Sección: Contacto y también el botón de WhatsApp
```

---

### 📂 `nueva-presentacion/`
Solicitudes de presentaciones para clientes. Crea un archivo de texto con los datos.

**Ejemplo de archivo:** `pres-hotel-camino-real.txt`
```
Cliente: Hotel Camino Real
País: República Dominicana
Productos a mostrar: Hospitality, Orders
Idioma: Español
Incluir: Logo del cliente (está en clients/hotel-camino-real/)
Fecha de presentación: 25 de abril 2025
```

---

### 📂 `imagenes/`
Sube aquí imágenes nuevas que quieras usar en los sitios o presentaciones.

**Reglas de nombre de archivo:**
- Sin espacios — usar guiones: `foto-oficina-mexico.jpg` ✅ `foto oficina mexico.jpg` ❌
- Tamaño recomendado: máximo 2MB por imagen
- Formatos: `.jpg`, `.png`, `.svg`, `.webp`

---

## 👥 ¿Cómo agregar un cliente?

1. Ve a la carpeta `clients/`
2. Crea una carpeta con el nombre del cliente: `grupo-bafar/`
3. Dentro de esa carpeta pon:
   - `logo.png` — logo del cliente
   - `info.txt` — datos del cliente (nombre, país, industria, productos contratados)
4. Dile al agente: *"Registra al cliente Grupo Bafar que está en clients/grupo-bafar/"*

---

## ❓ Preguntas frecuentes

**¿Puedo escribirle al agente en español?**  
Sí, siempre. No necesitas inglés ni comandos especiales.

**¿Qué pasa si me equivoco?**  
El agente siempre confirma antes de hacer cambios. Puedes decir "no, cancela" en cualquier momento.

**¿El agente puede romper el sitio?**  
No. Todos los cambios se guardan en GitHub y se pueden revertir. El CIO supervisa los cambios importantes.

**¿Cuánto tiempo tarda en hacer un cambio?**  
Cambios simples (texto, teléfono, email): 1-2 minutos.  
Cambios visuales o nuevas secciones: 5-15 minutos.  
Nueva presentación: 5-10 minutos.

---

## 📞 ¿Necesitas ayuda?

Escríbele directamente al agente:
```
Necesito ayuda, no sé cómo pedir lo que necesito
```
O contacta al CIO directamente.
