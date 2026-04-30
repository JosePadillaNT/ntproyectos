# Guía de diseño para páginas de producto FACTO

Referencia basada en:

- Página México: `sites/next-technologies-mx/index.html`
- Estilos México: `sites/next-technologies-mx/assets/css/main.css`
- Comportamientos México: `sites/next-technologies-mx/assets/js/main.js`
- Página PUI / Facto Identity: `sites/next-technologies-mx/identity-connect/index.html`

## Objetivo

Usar esta guía como base para crear nuevas páginas de producto de Next Technologies / FACTO con consistencia visual, misma identidad corporativa y patrones reutilizables.

Las nuevas páginas deben sentirse:

- Corporativas
- Premium
- Tecnológicas
- Claras
- Con aire visual
- Enfocadas en producto, no en landing genérica

## Identidad Visual Base

### Tipografía

Fuente principal:

```css
font-family: 'Open Sans', Arial, sans-serif;
```

Pesos usados:

- `400`: texto normal
- `500`: navegación secundaria
- `600`: botones, subtítulos, labels destacados
- `700`: títulos de cards, botones fuertes
- `800`: títulos principales, métricas y headlines premium

No usar letter spacing negativo. En los estilos nuevos se debe mantener:

```css
letter-spacing: 0;
```

Excepción: labels pequeños en mayúsculas pueden usar `letter-spacing: .08em` o `.12em`.

### Paleta Corporativa

Variables principales tomadas de México:

```css
:root {
  --bg: #ffffff;
  --bg-2: #f8fafc;
  --bg-3: #f1f5f9;
  --border: #e2e8f0;
  --text: #0f172a;
  --text-2: #475569;
  --text-3: #94a3b8;
  --primary: #437397;
  --primary-dk: #2b5574;
  --primary-deep: #060b35;
  --accent: #0a2777;
  --cyan: #7f9fc0;
  --green: #059669;
}
```

Paleta extendida de PUI:

```js
brand: {
  50:'#eef4fb',
  100:'#d8e4f3',
  200:'#b9cde2',
  300:'#7f9fc0',
  400:'#437397',
  500:'#2b5574',
  600:'#0a2777',
  700:'#060b35',
  800:'#05092b',
  900:'#040720',
  950:'#020410'
}
```

Uso recomendado:

- Fondos oscuros premium: `#060b35`, `#07142b`, `#111827`, `#0a2777`
- Botones primarios: `#437397` o `#2b5574`
- Hover de botones: `#2b5574` o `#376b91`
- Texto principal: `#0f172a`
- Texto secundario: `#475569`
- Texto sobre imagen oscura: `#ffffff` con sombra suave
- Bordes: `#e2e8f0`
- Fondos claros: `#ffffff`, `#f8fafc`, `#f1f5f9`

### Radios, sombras y transiciones

```css
--radius: 12px;
--radius-lg: 20px;
--transition: 200ms cubic-bezier(.4,0,.2,1);
```

Cards:

- Radius recomendado: `12px` a `20px`
- Cards operativas: `12px`
- Cards visuales o premium: `18px` a `20px`

Sombras:

```css
box-shadow: 0 20px 40px rgba(6,11,53,.22);
box-shadow: 0 24px 60px rgba(0,0,0,.28);
```

Transiciones:

- Hover simple: `200ms`
- Carruseles o slides: `.82s cubic-bezier(.22,1,.36,1)`
- Aparición scroll: `.5s` a `.6s ease`
- Hover overlay: `.3s ease`

## Layout General

### Contenedor

Usar el contenedor estándar:

```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 5%;
}
```

En secciones full-bleed, como hero o presencia global:

```css
.container {
  max-width: none;
  width: 100%;
  padding: 0;
}
```

### Padding de secciones

```css
section {
  padding: 96px 0;
}

section.dense {
  padding: 64px 0;
}
```

En PUI con Tailwind:

```html
<section class="py-20">
```

Equivalencia:

- `py-20` = 80px vertical
- México usa 96px para secciones principales
- Para producto nuevo se recomienda `80px` a `96px`

### Responsive

Breakpoints usados:

- `900px`: hero grid cambia a una columna
- `860px`: layouts editoriales cambian a una columna
- `768px`: grids pasan a una columna o 2 columnas en footer
- `640px`: ajustes finos mobile
- `480px`: footer a una columna

Regla general:

- Desktop: 2 o 3 columnas.
- Mobile: una columna.
- Carruseles visuales: permitir scroll/stack o mantener aspect ratio.
- Evitar texto enorme en mobile; usar `clamp`.

## Navbar

### México

Navbar fijo:

- `position: fixed`
- Altura: `68px`
- Fondo: `#060b35`
- Logo blanco en izquierda
- Links en blanco
- CTA a la derecha
- Mobile: menú colapsado

```css
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: #060b35;
  backdrop-filter: blur(12px);
  padding: 0 5%;
}

.nav-inner {
  max-width: 1280px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  height: 56px;
}
```

### PUI

Navbar blanco:

```html
<nav class="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
```

Usar este patrón cuando la página de producto tenga branding propio claro o logo de producto.

### Recomendación para nuevas páginas

Para páginas de producto FACTO:

- Usar nav blanco si la página es específica de producto y el hero ya tiene imagen oscura.
- Usar nav azul si la página debe sentirse más institucional/corporativa.
- Siempre fijo.
- CTA visible arriba a la derecha.

## Hero

### Hero México

El hero principal es carrusel full-bleed con 82vh.

```css
.hero-video,
.hero-carousel,
.hero-carousel-track,
.hero-slide {
  min-height: 82vh;
}
```

Medios:

```css
.hero-video-media,
.hero-slide-media {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

Overlay:

```css
.hero-video::after {
  background: linear-gradient(180deg, rgba(6,11,53,.22), rgba(6,11,53,.08));
}

.hero-slide-product::after {
  background: linear-gradient(90deg, rgba(4,8,36,.78), rgba(4,8,36,.5), rgba(4,8,36,.12));
}
```

Texto principal hero:

```css
.hero-video-content h1 {
  max-width: 740px;
  font-size: clamp(2rem, 4.16vw, 4rem);
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: 0;
  margin: 0 0 4.2rem;
  text-shadow: 0 16px 36px rgba(6,11,53,.46);
}

.hero-video-content p,
.hero-product-content p {
  max-width: 1480px;
  font-size: clamp(2.04rem, 2.9vw, 2.56rem);
  line-height: 1.28;
  color: rgba(255,255,255,.9);
}
```

CTA:

```css
.hero-product-cta {
  margin: 6.3rem 0 0;
  min-width: 180px;
  padding: .92rem 1.65rem;
  border-radius: 999px;
  background: #2b5574;
  color: #fff;
  font-size: 1rem;
  font-weight: 800;
}
```

Carrusel:

- Intervalo: `7000ms`
- Transición: `.82s cubic-bezier(.22,1,.36,1)`
- Flechas laterales sin círculo, solo símbolo
- Dots abajo al centro

```css
.hero-carousel-btn {
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 3.1rem;
  text-shadow: 0 10px 24px rgba(6,11,53,.55);
}

.hero-carousel-dots {
  position: absolute;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
}
```

### Hero PUI

Hero full screen con imagen de fondo y overlay oscuro:

```html
<section class="min-h-screen flex items-center pt-16 bg-center bg-cover bg-no-repeat"
  style="background-image:linear-gradient(rgba(6,11,53,0.86), rgba(10,39,119,0.82)), url('imagenes/facto-identity-pui-hero.jpg');">
```

Layout:

```html
<div class="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-[1.12fr_0.88fr] gap-14 items-center">
```

Título:

```html
<h1 class="text-[2.28rem] md:text-[2.84rem] lg:text-[3.16rem] font-bold text-white leading-[1.01] tracking-[-0.03em] mb-6">
```

Para nuevas páginas, preferir la versión México sin tracking negativo:

```css
font-size: clamp(2.28rem, 4.2vw, 3.16rem);
line-height: 1.01;
letter-spacing: 0;
font-weight: 700 o 800;
```

### Recomendación para nuevas páginas de producto

Hero recomendado:

- Imagen o video full-bleed.
- Overlay azul oscuro.
- Logo del producto visible arriba del texto o integrado en slide.
- H1 con oferta clara.
- Subcopy de máximo 2-3 líneas.
- CTA primario y secundario.
- Si hay demo visual, usar panel derecho con blur y borde blanco translúcido.

## Presencia Global

Sección full-width en dos columnas:

- Izquierda: mapa
- Derecha: fondo visual con métricas

```css
.global-presence {
  background: var(--bg);
  min-height: 82vh;
  padding: 2rem 0 0;
}

.global-presence-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  min-height: 82vh;
}

.global-presence-map img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

Título:

```css
.global-presence-title {
  color: #fff;
  font-size: clamp(1.5rem, 3.12vw, 3rem);
  line-height: 1.02;
  font-weight: 800;
  text-align: center;
  text-shadow: 0 10px 26px rgba(2,6,24,.42);
}
```

Métricas:

```css
.global-presence-metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(3.5rem, 8vw, 7rem) clamp(4rem, 7vw, 7rem);
}

.global-presence-number {
  color: #fff;
  font-size: clamp(2.08rem, 3.52vw, 4rem);
  line-height: .95;
  font-weight: 400;
}
```

Para nuevas páginas, este patrón puede adaptarse a:

- Impacto de producto
- Métricas de operación
- Arquitectura técnica
- Cobertura o casos de uso

## Sección Editorial de Experiencia

Sección oscura, premium, texto + visual:

```css
.experience-editorial {
  background: linear-gradient(135deg, #07142b 0%, #111827 58%, #0b2540 100%);
  color: #fff;
}

.experience-editorial-grid {
  display: grid;
  grid-template-columns: minmax(0, .92fr) minmax(0, 1.08fr);
  gap: clamp(3rem, 7vw, 7rem);
  align-items: center;
  min-height: 560px;
}
```

Título:

```css
.experience-editorial-copy h2 {
  font-size: clamp(1.5rem, 3.12vw, 3rem);
  line-height: 1.02;
  font-weight: 800;
}
```

Subtítulo:

```css
.experience-editorial-copy h3 {
  margin: 1.6rem 0 1rem;
  color: rgba(255,255,255,.84);
  font-size: clamp(1.15rem, 1.8vw, 1.55rem);
  font-weight: 700;
}
```

Descripción:

```css
color: rgba(255,255,255,.68);
font-size: 1rem;
line-height: 1.75;
```

### Carrusel tipo hojas

El carrusel de industrias usa cards apiladas:

```css
.experience-carousel {
  width: min(calc(100% - 5rem), 620px);
  aspect-ratio: 1.24 / 1;
  overflow: visible;
}

.experience-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: translateX(2.2rem) scale(.92);
  transition: opacity .9s ease, transform .9s cubic-bezier(.22,1,.36,1);
}

.experience-slide.is-active {
  z-index: 3;
  opacity: 1;
  transform: translateX(0) scale(1);
}

.experience-slide.is-next {
  z-index: 2;
  opacity: .7;
  transform: translateX(5rem) scale(.94);
}
```

JS:

- Intervalo: `3600ms`
- Marca `is-active` y `is-next`

Usar este patrón para:

- Industrias
- Casos de uso
- Módulos de producto
- Screenshots de plataforma

## Sección "¿Por qué Next Technologies?"

Fondo:

```css
#por-que-next {
  background: url("../../../../imagenes/wallpapernext3.png") center / cover no-repeat;
}
```

Header:

```css
#por-que-next .section-header {
  max-width: 980px;
}

#por-que-next .section-header .label {
  color: #fff;
  font-size: 1.125rem;
}

#por-que-next .section-header .headline {
  color: #fff;
  font-size: clamp(1.5rem, 3.12vw, 3rem);
  line-height: 1.02;
  font-weight: 800;
  text-shadow: 0 10px 26px rgba(2,6,24,.42);
}
```

Cards:

- Grid de 3 columnas.
- Cards blancas.
- Estado inicial: ícono + título.
- Hover: capa azul con descripción.

```css
.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.why-card {
  padding: 2rem;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

#por-que-next .feature-card {
  position: relative;
  min-height: 190px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#por-que-next .feature-card .icon-wrap {
  width: 66px;
  height: 66px;
  margin-left: auto;
  margin-right: auto;
}

#por-que-next .feature-card .icon-wrap svg {
  width: 33px;
  height: 33px;
}

#por-que-next .feature-card .card-detail {
  position: absolute;
  inset: 0;
  padding: 2rem;
  background: rgba(8,22,60,.92);
  color: #fff;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity .3s ease, transform .3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

#por-que-next .feature-card:hover .card-detail {
  opacity: 1;
  transform: translateY(0);
}
```

Para nuevas páginas, usar esta sección como bloque de diferenciadores.

## Productos FACTO / Cards de Producto

Grid:

```css
.why-grid {
  grid-template-columns: repeat(3, 1fr);
}
```

Cards de producto:

- 8 productos.
- Logo arriba.
- Título.
- Descripción.
- Imagen de fondo.
- Overlay blanco.
- Hover con elevación, zoom y glow.

```css
.product-logo-card {
  position: relative;
  isolation: isolate;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 260px;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease, background-size .4s ease;
}

.product-logo-card::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: rgba(255,255,255,.72);
  transition: background .3s ease;
}

.product-logo-card:hover {
  transform: translateY(-6px) scale(1.02);
  border-color: rgba(67,115,151,.55);
  box-shadow: 0 20px 40px rgba(6,11,53,.22);
  background-size: auto 108%;
}

.product-logo-card:hover::before {
  background: rgba(255,255,255,.58);
}
```

Logo:

```css
.product-logo-wrap {
  height: 95px;
  width: 100%;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-logo-wrap img {
  width: auto;
  height: 63px;
  max-width: 330px;
  object-fit: contain;
}
```

Texto:

```css
.product-logo-card h3 {
  margin-top: .25rem;
  font-size: 1.05rem;
  font-weight: 700;
}

.product-logo-card p {
  color: #000;
  font-size: 1.215rem;
  line-height: 1.45;
}
```

Fondos actuales:

```css
#facto-hospitality { background-image: url("../../../../imagenes/hospitalityminiaturainiatura.jpg"); }
#facto-identity { background-image: url("../../../../imagenes/puiminiaturainiatura.png"); }
#facto-data { background-image: url("../../../../imagenes/factodataminiatura.jpg"); }
#facto-valid { background-image: url("../../../../imagenes/factovalidminiatura.png"); }
#facto-nomina { background-image: url("../../../../imagenes/factonominaminiatura.jpg"); }
#facto-orders { background-image: url("../../../../imagenes/factoordersminiatura.jpg"); }
#facto-ia { background-image: url("../../../../imagenes/factoiaminiatura.jpg"); }
#facto-business { background-image: url("../../../../imagenes/factobusinessminiatura.jpg"); }
```

Para nuevas páginas de producto:

- Usar una card por módulo o beneficio.
- Mantener min-height entre `240px` y `280px`.
- Si el texto es largo, bajar el tamaño a `1rem`.
- Si la imagen se ve demasiado fuerte, subir overlay a `.78`.
- Si la imagen se pierde, bajar overlay a `.60`.

## PUI / Facto Identity: patrones específicos

La página PUI usa Tailwind CDN con estilos embebidos. Para nuevas páginas, se puede migrar el patrón al CSS compartido, pero conviene respetar estas proporciones.

### Estructura PUI

Orden de secciones:

1. Nav blanco con logo de producto.
2. Hero full-screen con fondo de producto y panel derecho de flujo.
3. Sección "Qué es" con timeline.
4. Sección "Cómo funciona" con imagen amplia.
5. Fuentes de datos con grid de 5 cards.
6. OCR inteligente: antes/después en 2 columnas.
7. Seguridad: diagrama por capas + lista.
8. Comparativa: tabla.
9. Inhouse vs Facto Identity: 2 columnas.
10. Next Technologies: credenciales y cards.
11. CTA final oscuro.
12. Footer simple.

### Tailwind sizing

Contenedores:

```html
max-w-7xl mx-auto px-6
max-w-5xl mx-auto px-6
max-w-4xl mx-auto px-6
max-w-3xl mx-auto px-6
```

Secciones:

```html
py-20
bg-gray-50
bg-white
```

Cards PUI:

```html
bg-white rounded-xl p-6 border border-gray-100
```

Cards pequeñas:

```html
rounded-lg bg-brand-50 flex items-center justify-center
```

### Animaciones PUI

Reveal al scroll con IntersectionObserver:

```css
.reveal-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal-up.visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-left {
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.reveal-right {
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.reveal-scale {
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
```

JS:

```js
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
```

### PUI components reutilizables

#### Timeline

- Barra de 4px.
- Fill animado de 0 a 100%.
- Dots de 48px.
- Gradiente `#060b35 -> #0a2777 -> #437397`.

#### Source cards

```css
.source-card {
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;
}

.source-card:hover {
  border-color: #437397;
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(67,115,151,0.18);
}
```

#### OCR block

Documento:

```css
.ocr-doc {
  background: #f8f9fa;
  border: 2px dashed #d1d5db;
  border-radius: 12px;
  padding: 24px;
  font-family: monospace;
  font-size: 13px;
  color: #999;
  line-height: 1.8;
}
```

Resultado:

```css
.ocr-result {
  background: #eef4fb;
  border: 2px solid #b9cde2;
  border-radius: 12px;
  padding: 24px;
}
```

#### Comparativa

Tabla horizontal con:

- Header azul profundo.
- Columna destacada del producto en `brand-500`.
- Celdas de producto propio con `bg-brand-50`.
- Check circular `20px`.

## Footer

Footer México:

```css
footer {
  background: var(--primary-deep);
  color: rgba(255,255,255,.9);
  padding: 4rem 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr repeat(4, 1fr);
  gap: 3rem;
}

.footer-logo {
  height: 72px;
}
```

Columnas:

- Logo + descripción.
- Soluciones.
- Empresa.
- Contacto.
- Open Source.

Links:

```css
.footer-col a {
  font-size: .875rem;
  color: rgba(255,255,255,.6);
  transition: color var(--transition);
}

.footer-col a:hover {
  color: rgba(255,255,255,.9);
}
```

PUI usa footer más simple:

```html
<footer class="bg-brand-700 py-6 text-center">
```

Para nuevas páginas de producto, usar footer México si estarán dentro del sitio corporativo; usar footer simple si la página será standalone de producto.

## Botones

Botón primario México:

```css
.btn-primary {
  background: var(--primary);
  color: #fff;
  font-weight: 700;
}

.btn-primary:hover {
  background: var(--primary-dk);
  transform: translateY(-1px);
}
```

Botón hero producto:

```css
border-radius: 999px;
background: #2b5574;
font-weight: 800;
box-shadow: 0 16px 34px rgba(43,85,116,.34);
```

Botón PUI:

```html
bg-brand-500 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-brand-600 transition
```

Recomendación:

- CTA principal: fondo azul, texto blanco.
- CTA secundario en hero oscuro: `bg-brand-700` o borde blanco translúcido.
- Botones en cards: solo cuando haya acción clara.

## Iconografía

México:

- Usa Lucide (`lucide.createIcons()`).
- Tamaños comunes: `14px`, `16px`, `18px`, `22px`, `33px`.
- En cards de "Por qué": contenedor `66px`, icono `33px`.

PUI:

- Usa Material Symbols.
- Tamaños:
  - `.icon-sm`: `20px`
  - `.icon-md`: `24px`
  - `.icon-lg`: `32px`
  - `.icon-xl`: `40px`

Para nuevas páginas:

- No mezclar librerías en la misma página si no es necesario.
- Si se basa en México, usar Lucide.
- Si se basa en PUI/Tailwind, usar Material Symbols.

## Animaciones

### México

AOS:

```js
AOS.init({
  duration: 600,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60
});
```

Hero:

- Slide automático cada `7000ms`.
- Pausa en hover.
- Dots abajo.

Experience carousel:

- Automático cada `3600ms`.
- No tiene botones.
- Efecto hoja con `is-active` e `is-next`.

Counters:

- IntersectionObserver threshold `0.5`.
- 50 pasos.
- Intervalo `30ms`.

Sticky bottom bar:

- Aparece después de `600px` scroll.

### PUI

IntersectionObserver:

- Threshold `0.15`.
- Root margin inferior `-40px`.
- Clases reveal.

## Assets y naming

### México activos actuales

Hero:

- `V_Principal_h264.mp4`
- `V_Principal.mp4`
- `NG_TemplatePortadaPrincipal.jpg`
- `NG_TemplatePresentaciขn_editable-08.jpg`
- `logohospitality.png`
- `Logotipo_identityICON_white.png`

Presencia:

- `mapa.png`
- `+200 mill.png`

Experiencia:

- `industriadelahospitalidad.jpg`
- `industriarestaurante.jpg`
- `industrialogistica.jpg`
- `industrisretail.jpg`
- `industriaeducacion.jpg`

Productos:

- `Logotipo_hospitalitycolor.png`
- `factoIdlogo.png`
- `Logotipo_data.png`
- `Logotipo_valid.png`
- `Logotipo_nomina.png`
- `Logotipo_orders.png`
- `Logotipo_factoia.png`
- `Logotipo_business.png`

Miniaturas productos:

- `hospitalityminiaturainiatura.jpg`
- `puiminiaturainiatura.png`
- `factodataminiatura.jpg`
- `factovalidminiatura.png`
- `factonominaminiatura.jpg`
- `factoordersminiatura.jpg`
- `factoiaminiatura.jpg`
- `factobusinessminiatura.jpg`

### PUI activos

- `identity-connect/imagenes/facto-identity-pui-logo.png`
- `identity-connect/imagenes/facto-identity-pui-hero.jpg`
- `identity-connect/imagenes/facto-identity-pui-day-to-day.png`

### Recomendación naming para nuevos productos

Usar nombres consistentes:

```text
Logotipo_<producto>.png
<producto>miniatura.jpg
<producto>-hero.jpg
<producto>-workflow.png
```

Evitar typos en archivos nuevos. Si ya existen typos publicados, mantenerlos para no romper rutas.

## Plantilla recomendada para nueva página de producto

Orden sugerido:

1. Navbar
2. Hero producto
3. Problema / contexto regulatorio u operativo
4. Qué hace el producto
5. Flujo o cómo funciona
6. Módulos principales
7. Integraciones / fuentes de datos
8. Seguridad / cumplimiento / arquitectura
9. Comparativa o diferenciadores
10. Casos de uso o industrias
11. CTA final
12. Footer

## Checklist de implementación

Antes de publicar una nueva página:

- Confirmar Open Sans cargado.
- Confirmar colores de marca.
- Confirmar hero con imagen real y overlay.
- Confirmar H1 máximo 2-3 líneas.
- Confirmar CTA visible en primer viewport.
- Confirmar cards con radius consistente.
- Confirmar textos no se enciman en mobile.
- Confirmar imágenes con `object-fit: cover` o `contain` según corresponda.
- Confirmar cache-buster en CSS/JS.
- Confirmar assets nuevos agregados a Git.
- Confirmar URL pública con `Ctrl + F5` o query `?v=<commit>`.

## Reglas rápidas de estilo

- Usar `Open Sans` en todo.
- No usar gradientes decorativos sin imagen cuando el bloque requiere impacto visual.
- Priorizar imágenes reales o assets de producto.
- Mantener cards limpias; no saturar texto.
- Usar overlays para legibilidad sobre imagen.
- El layout debe verse premium antes que denso.
- Mobile siempre una columna, salvo grids simples de métricas.
- Las animaciones deben ser suaves y discretas.
- Evitar paletas demasiado monocromáticas; el azul corporativo debe dominar, pero con blancos, grises y acentos.

