# Assets — Next Technologies México

Convención para producción:

- `videos/`: videos usados por la landing. Mantener solo versiones optimizadas y en H.264 cuando sean `mp4`.
- `images/hero/`: imágenes principales de hero y slides.
- `images/backgrounds/`: fondos de secciones o imágenes de soporte visual a pantalla amplia.
- `images/industries/`: imágenes del carrusel de industrias.
- `images/partners/`: logos de integraciones y partners.
- `images/products/cards/`: fondos de tarjetas de productos.
- `images/logos/`: logotipos de marca y productos.

La landing de México debe referenciar assets locales dentro de `sites/next-technologies-mx/assets/`.
Evitar nuevas referencias a la carpeta global `../../imagenes/`, nombres con espacios, caracteres especiales o acentos en archivos de producción.

Formato recomendado:

- Usar nombres en minúsculas y kebab-case: `facto-valid.jpg`.
- Usar JPG optimizado para fondos/fotos.
- Usar PNG solo cuando se necesite transparencia, como logotipos.
- No incluir archivos alternativos grandes si no se referencian desde HTML/CSS.
