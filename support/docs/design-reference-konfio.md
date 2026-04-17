# Referencia de Diseño — Konfio.mx

> Analizado para tomar patrones de interacción y construcción.
> No copiar contenido, solo la estructura y las interacciones.

---

## Stack técnico que usa Konfio
- **Next.js** (React SSR) — nosotros usamos VanillaJS, pero las técnicas son replicables
- **Tailwind CSS** — mismo que usamos nosotros
- Animaciones: CSS puro con `transition-all`, sin librerías externas
- No usa AOS ni GSAP — todo es CSS + IntersectionObserver

---

## Paleta de colores (referencia, NO copiar — es de Konfio)
| Rol | Hex |
|---|---|
| Primario | `#732ed5` (violeta) |
| Gradiente hero | `#742ed1` → `#6f37d4` → `#4d7ceb` |
| Fondo claro | `#f5f5f5` / `#fafafa` |
| Texto | `#212121` |

**Para NT aplicar:** El mismo esquema de gradiente pero con los colores NT (`#4f46e5` → `#7c3aed` → `#06b6d4`).

---

## Patrones de interacción a replicar en NT

### 1. Navbar con backdrop blur
```css
/* Ya implementado — confirmar que está así */
backdrop-filter: blur(12px);
background: rgba(255, 255, 255, 0.8);
transition: all 0.3s;
```

### 2. Floating CTA tab lateral (izquierda, rotado)
Konfio tiene un botón flotante en el lado izquierdo, rotado 90 grados, sticky.
```css
.floating-cta {
  position: fixed;
  left: -3rem;
  top: 50%;
  transform: rotate(-90deg);
  z-index: 30;
  background: var(--primary);
  color: white;
  border-radius: 0 0 8px 8px;
  padding: 0.75rem 1.5rem;
}
```
**Para NT:** "Solicitar demo" o "WhatsApp ventas" como tab lateral.

### 3. Sticky bottom CTA bar (aparece al hacer scroll)
Barra fija en la parte inferior que aparece con opacidad 0 y se hace visible al scrollear más allá del hero.
```css
.bottom-cta {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(8px);
  border-top: 1px solid #e2e8f0;
  padding: 1rem 5%;
  transform: translateY(100%);
  transition: transform 0.3s;
  z-index: 50;
}
.bottom-cta.visible { transform: translateY(0); }
```
```js
// Activar después de 600px de scroll
window.addEventListener('scroll', () => {
  document.querySelector('.bottom-cta').classList
    .toggle('visible', window.scrollY > 600);
});
```

### 4. Animated arrow en botones CTA
Los botones principales tienen una flecha que se mueve al hover.
```css
.btn-primary .arrow { transition: transform 0.2s; }
.btn-primary:hover .arrow { transform: translateX(4px); }
```

### 5. Hero con gradiente de fondo (no imagen)
En lugar de imagen de fondo, usan un gradiente suave que da profundidad sin peso de carga.
```css
.hero {
  background: linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #f5f3ff 100%);
}
```
**Para NT:** Gradiente muy sutil entre blanco y el azul/violeta NT al 5% de opacidad.

### 6. Trust badges inline con el formulario
Debajo del botón principal del formulario, íconos pequeños + texto de confianza:
- "Proceso 100% en línea"
- "Datos seguros — SSL"
- "Respuesta en 24 hrs"

### 7. Proceso en 3 pasos — números grandes
```
  01        02        03
Solicita  Validamos  Recibes
  en línea  tu info    respuesta
```
Números en tipografía grande (3-4rem), bold, color primario. Línea conectora entre pasos.

### 8. Sección de stats con números grandes y contador animado
Konfio usa: "48 horas", "5 millones", "100% en línea" — números que van al grano.
**Para NT ya tenemos esto:** data-count con JS. Mantenerlo.

---

## Estructura de página que usa Konfio (en orden)
1. Navbar (blur, sticky)
2. Hero — headline + subheadline + CTA + trust badges
3. Beneficios — 3 tarjetas horizontales con ícono + título + descripción
4. Proceso — 3 pasos numerados
5. CTA central — fondo de color, headline + botón
6. Footer simple
7. Floating CTA lateral (siempre visible)
8. Sticky bottom bar (aparece después de scroll)

---

## Lo que NO hace Konfio (y nosotros tampoco debemos hacer)
- No usa carruseles ni sliders
- No usa emojis
- No usa imágenes de stock genéricas
- No tiene sección de blog en el landing
- No recarga de tipografías pesadas
- No tiene animaciones lentas o distractoras

---

## Resumen de mejoras a aplicar en sitios NT
| Patrón | Prioridad | Estado |
|---|---|---|
| Backdrop blur navbar | Alta | Hecho |
| Floating CTA lateral | Alta | Pendiente |
| Sticky bottom CTA bar | Alta | Pendiente |
| Animated arrow en botones | Media | Pendiente |
| Hero con gradiente sutil | Alta | Pendiente |
| Trust badges bajo formulario | Alta | Pendiente |
| Proceso 3 pasos numerados | Alta | Pendiente |
| Contador animado en stats | Alta | Hecho |

