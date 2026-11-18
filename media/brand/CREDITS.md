# Recursos de marca de la portada

- `vetic-logo.jpg`: foto de perfil oficial de [Vetic, @_vetic](https://www.instagram.com/_vetic/), facilitada por el titular del proyecto para su integración. Descargada el 15 de noviembre de 2026. Se conserva el diseño original, sin redibujarlo ni presentar el archivo pequeño como un logotipo vectorial.
- `equine-cover.webp`: versión optimizada del recurso existente `media/equine/horse-reference.png` del proyecto. Representación visual ilustrativa; no se presenta como atlas anatómico ni imagen clínica validada.
- El dibujo de odontología y los iconos de dispositivos son SVG originales en el HTML, con función decorativa.
- `campus-preview.webp` y `campus-preview-mobile.webp`: captura real del lobby público de Vetic obtenida el 17 de noviembre de 2026, recortada mediante la API de capturas del navegador y optimizada para la web. No contiene clases, datos de alumnos ni imágenes clínicas. El registro de visita usado para la captura es sintético (`Vista Campus`).

Los vídeos de clases y sus fotogramas no se usan como imágenes públicas de la portada.

## Manual corporativo, 17 de noviembre de 2026

- `vetic-positive.svg` y `vetic-negative.svg`: trazados vectoriales originales de las versiones positiva y negativa del manual de identidad proporcionado por el titular (páginas 5 y 6 del PDF). Se conserva geometría, lettering y colores originales, con margen de protección. Fondo transparente; sin filtros, recorte circular, inclinación ni redibujo con IA. Se usan sólo en la portada, sin sustituir recursos del campus. El PDF completo no se publica.
- Paleta digital indicada por el manual: `#008296`, `#159CAF`, `#00B4C6`; versión negativa `#00FFFF`. Se complementa con blanco, fondos suaves y azul oscuro para legibilidad. Los verdes de la portada anterior se sustituyen en `src/landing-brand.css`.
- El logo ya incluye Aeland modificada y Futura Std Medium en contornos. El PDF no suministra una licencia ni archivo de Futura para incrustación web. La página prioriza Futura cuando está instalada; en el resto de equipos usa Jost como alternativa geométrica gratuita, no como una copia exacta. Archivo web autoalojado de 26.576 bytes, sin conexión del visitante a Google Fonts.
- Fuente Jost: [repositorio oficial de Google Fonts](https://github.com/google/fonts/tree/main/ofl/jost), [licencia SIL OFL 1.1](https://github.com/google/fonts/blob/main/ofl/jost/OFL.txt), conservada en `fonts/Jost-OFL.txt`. Archivo Latin variable obtenido de `https://fonts.gstatic.com/s/jost/v20/92zatBhPNqw73oTd4g.woff2` mediante la hoja de estilos oficial. Admite caracteres españoles y pesos 400–700.
