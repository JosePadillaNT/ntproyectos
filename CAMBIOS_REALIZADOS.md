# Contraste en `index 1.html`

Fecha: 2026-04-23

## 1. Identidad visual y branding

Se actualizó el producto y la marca mostrada en la página:

- Título del documento:
  - Antes: `NT Identity Connect — Cumplimiento PUI para Hoteles`
  - Ahora: `Facto Identity — Cumplimiento PUI para Hoteles`
- El logo textual del `nav` fue sustituido por la imagen:
  - `imagenes/FactoIdlogo.png`
- En distintos textos de la página se reemplazó `NT Identity Connect` por `Facto Identity`
- La sección corporativa pasó de comunicar `NT Group / Next Technologies` como respaldo de NT Identity Connect a presentar `Next Technologies` como la empresa detrás de `Facto Identity`

## 2. Tipografía, paleta y estilo global

Se redefinió el look & feel general del sitio:

- Se agregó la fuente `Open Sans` desde Google Fonts
- El `body` ahora usa:
  - `font-family: 'Open Sans', sans-serif`
  - `font-weight: 400`
- La paleta `brand` cambió de una línea turquesa/teal a una línea azul marino/azul institucional
- Se actualizaron varios estilos derivados para reflejar la nueva paleta:
  - `stepper-bar-fill`
  - `chat-right`
  - `chat-center`
  - `source-card:hover`
  - `source-line`
  - `ocr-result`
  - `ocr-highlight`
- El color base del `body` cambió:
  - Antes: `text-gray-800`
  - Ahora: `text-brand-700`

## 3. Navegación superior

La barra superior fue actualizada tanto en contenido como en layout:

- El contenedor cambió de `max-w-6xl` a `max-w-7xl`
- Este ajuste alinea mejor el logo con el contenido principal del hero
- Se eliminó el bloque textual con insignia `NT` e `Identity Connect`
- Se incorporó el logo como imagen
- El menú fue simplificado:
  - Se eliminó el enlace a `#planes`
- Se ajustó el botón de CTA del nav:
  - Antes: `bg-brand-400`, `px-5 py-2`, `font-medium`
  - Ahora: `bg-brand-500`, `px-3.5 py-1.5`, `font-bold`
- Se corrigieron acentos en labels:
  - `Qué es PUI`
  - `Cómo funciona`

## 4. Hero principal

El hero fue rediseñado de forma importante:

- Fondo:
  - Antes: gradiente oscuro plano
  - Ahora: gradiente azul superpuesto a `imagenes/NG_TemplatePortadaPrincipal.jpg`
- Layout:
  - Antes: `max-w-6xl` con `md:grid-cols-2`
  - Ahora: `max-w-7xl` con `md:grid-cols-[1.12fr_0.88fr]`
- El bloque de texto ahora usa `max-w-2xl`
- Se actualizó el copy principal:
  - Antes: `Tu hotel tiene una obligación legal con el gobierno`
  - Ahora: `Asegura la integración de tu hotel con la PUI de manera eficiente y sin contratiempos`
- Se reescribió el subtítulo para enfocarlo en integración, CURP, huéspedes y SEGOB
- El texto de multa pasó a un estilo más integrado con la nueva identidad visual
- Los botones del hero cambiaron de estilo:
  - El secundario dejó de ser outline y ahora usa fondo sólido `bg-brand-700`

## 5. Tarjeta "Flujo Sistema PUI" del hero

El bloque derecho del hero cambió tanto en contenido como en estética:

- Antes era un flujo simplificado con estética más técnica
- Ahora es una tarjeta más amplia y visual con título centrado:
  - `Flujo Sistema PUI`
- El contenedor pasó a `max-w-[110%]`, `p-8`
- Se actualizaron los textos descriptivos y la identidad del sistema
- Se mejoró el color del texto secundario a `text-brand-100/80`

### Ajustes específicos hechos en esta sesión dentro de este bloque

- Los dos iconos `send` fueron homologados al estilo del icono `account_balance`
- Antes usaban:
  - `bg-brand-400/20`
  - `text-brand-400`
- Ahora usan:
  - `bg-brand-600/20`
  - `text-brand-100`
- También se cambió el paso intermedio:
  - Antes: `search` y referencia a `NT Identity Connect`
  - Ahora: `send` y referencia a `Facto Identity`
- El último paso se actualizó para mencionar:
  - `Facto Identity envía notificación de coincidencia cifrada`

## 6. Sección "¿Qué es PUI y por qué te afecta?"

Se actualizó el enfoque visual y editorial de esta sección:

- Título:
  - Antes: `Que es PUI y por que te afecta`
  - Ahora: `¿Qué es PUI y por qué te afecta?`
- Subtítulo:
  - Antes: `La Plataforma Unica de Identidad en 3 puntos`
  - Ahora: `Timeline de implementación`
- Se recoloreó la línea de tiempo con la nueva paleta `brand`
- Se actualizaron colores de:
  - `stepper-dot`
  - textos auxiliares del timeline
- En la tarjeta de sanciones:
  - Se cambió el rango estimado de costo
  - Ahora se muestra: `Costo Estimado: $1.17M a $2.34M MXN`
- Se corrigieron textos con acentos y redacción

## 7. Sección "¿Cómo funciona día a día?"

Aquí ocurrió uno de los cambios más visibles entre la propuesta actual y el bloque anterior de conversación:

- Se mantuvo el título:
  - `¿Cómo funciona día a día?`
- El subtítulo actual es:
  - `El proceso es automático.`

### Cambio estructural

- El bloque de cuadros de diálogo tipo chat fue reemplazado por una imagen única
- Imagen usada:
  - `imagenes/diaadia.png`

### Ajuste adicional hecho en esta sesión

- La imagen fue aumentada aproximadamente un 25% en pantallas medianas y grandes
- Implementación actual:
  - contenedor centrado con `flex justify-center`
  - imagen con `w-full md:w-[125%] md:max-w-none`

## 8. Sección "5 formas de alimentar tus datos"

La sección conserva la misma intención, pero fue refinada visualmente y en su narrativa:

- Se ajustaron colores de iconos y fondos para alinearse con la nueva identidad
- Se mejoró la jerarquía visual de tarjetas y conectores
- Se fortaleció el énfasis en compatibilidad con múltiples fuentes:
  - formulario
  - CSV
  - escaneo de identificación
  - API REST
  - PMS del hotel
- Se afinó el copy de apoyo:
  - `Facto Identity se adapta.`

## 9. Sección de OCR / escaneo de identificación

Esta sección cambió de tratamiento visual y de posicionamiento del mensaje:

- Se recoloreó el componente con la nueva paleta azul
- El OCR ya no se presenta con acentos verdes/amarillos
- Se reforzó el mensaje técnico/comercial:
  - `Google Cloud Vision lee el documento`
  - `Gemini Vision complementa la identificación de los datos`
- También se actualizó el botón visual de confirmación al nuevo color de marca

## 10. Sección de seguridad

Se rediseñó visualmente el diagrama y sus capas:

- Antes predominaban fondos verdes/teal
- Ahora se usa una arquitectura visual monocromática azul institucional
- Se reformularon capas y rotulación:
  - Perímetro
  - Transporte
  - Autenticación
  - Cifrado
  - Validación
  - Auditoría
- Se mantiene el enfoque de cumplimiento técnico con mejores contrastes visuales

## 11. Tabla comparativa de alternativas

La comparación de mercado fue actualizada en fondo y contenido:

- Se mantiene la lógica comparativa, pero con una tabla visualmente más consistente con la nueva marca
- El encabezado favorece ahora a `NT Identity` en la última columna
- Se muestran criterios como:
  - Integración PMS
  - OCR inteligente
  - Cifrado por hotel
  - Multi razón social
  - Suite CFDI + analítica
  - Experiencia hotelera
  - Reportes SAST/DAST

## 12. Sección "Hacerlo inhouse vs Facto Identity"

Esta sección fue ajustada en copy, colores y propuesta de valor:

- Antes comparaba desarrollo interno contra `NT Identity Connect`
- Ahora compara desarrollo interno contra `Facto Identity`
- Cambios destacados:
  - El costo estimado de desarrollo interno pasó de `+$3M MXN y 6+ meses` a `+$1M MXN y 6+ meses`
  - Se agregó el punto:
    - `Arquitectura tecnológica de vanguardia`
  - Se actualizó:
    - `Operación y monitoreo` por `Soporte y monitoreo`
- Toda la sección se recoloreó a la nueva paleta azul

## 13. Sección corporativa

La sección institucional también cambió:

- Antes:
  - `NT Group — Next Technologies`
  - `La empresa detrás de NT Identity Connect`
  - `+100 hoteles operando con nuestra suite`
- Ahora:
  - `Next Technologies`
  - `La empresa detrás de Facto Identity`
  - `+500 hoteles operando con nuestra Facto Suite`
- También se mejoraron textos descriptivos y acentos

## 14. Sección de planes

Esta es una diferencia estructural importante:

- La sección `#planes` existente en `index 1_OLD.html` ya no está en `index 1.html`
- Se eliminó la oferta modular:
  - Básico
  - Profesional
  - Enterprise
- Ya no existe el enlace del menú que llevaba a esa sección

## 15. CTA final

El cierre comercial fue reescrito y actualizado:

- Fondo:
  - Antes: gradiente oscuro original
  - Ahora: gradiente azul institucional
- Encabezado:
  - Antes: `El producto ya está listo. Tu hotel puede cumplir hoy.`
  - Ahora: `Cumplir con la normativa nunca fue tan fácil. ¡Comienza hoy!`
- Contacto:
  - Antes: `contacto@next-technologies.com.mx`
  - Ahora: `comercial@next-technologies.com.mx`
- Subjects de mail:
  - Antes referían a `NT Identity Connect`
  - Ahora refieren a `Facto Identity`
- El texto de apoyo fue reescrito con tono más comercial y más claro

## 16. Footer

Se actualizó el pie del sitio:

- Fondo:
  - Antes: `bg-gray-900`
  - Ahora: `bg-brand-700`
- Texto legal:
  - Antes: `NT Identity Connect. Todos los derechos reservados 2026.`
  - Ahora: `Facto Identity. Todos los derechos reservados 2026.`

## 17. Cambios puntuales realizados en esta sesión

Además del contraste general entre ambas versiones, en esta sesión se realizaron estos ajustes directos sobre `index 1.html`:

1. Se reemplazó el bloque visual de "¿Cómo funciona día a día?" por `imagenes/diaadia.png`
2. Esa imagen se amplió 25% en `md` y superiores
3. Se alineó el contenedor del logo superior con el `h1` principal usando `max-w-7xl`
4. Se homologó el estilo de los dos iconos `send` para que coincidieran con el estilo del primer icono del flujo

## Nota

El contraste también dejó ver que algunos archivos muestran diferencias de codificación al inspeccionarse desde consola, pero el contenido del HTML actual ya incorpora textos con acentos y redacción corregida en comparación con la versión anterior.
