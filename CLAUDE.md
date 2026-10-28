# CLAUDE.md — Manual de Identidad Visual UPSRA

Leer antes de hacer cualquier cosa: este archivo, `docs/CONTEXTO_PROYECTO.md` y `docs/ESTADO_AHORA_MISMO.md`.

## Qué es
Sitio estático (HTML, CSS y JS sin framework ni build) publicado en Vercel: https://manual-upsra.vercel.app/

## Reglas
- Idioma: español rioplatense. Respuestas directas.
- El diseño lo manda la skill `upsra-visual-language`. El mockup aprobado está en `docs/mockups/mockup-manual.html`, y el sitio tiene que verse igual que el mockup.
- **Unir a `main` es publicar:** Vercel despliega solo en cada push a `main`. Code trabaja siempre en una rama y abre un PR. Se une a `main` solo con el ok escrito de Joel, después de revisar la vista previa de Vercel.
- Flujo de Joel: auditar (95 % o más de confianza), plan, esperar el "ok" y recién ahí cambiar.
- Colores solo como variables de `:root` en `css/manual.css`. Nada de `#hex` sueltos ni estilos en línea.
- Texto de 13 px como mínimo. La única excepción son los nombres de la barra lateral, de 12 px.
- Cuando cambien `css/manual.css` o `js/manual.js`, subir la versión `?v=AAAAMMDD` en `index.html`.
- Capturas a 1440, 820 y 390 px antes de pedir aprobación. A 390 px no puede haber scroll horizontal.
- Al cerrar cada sesión, actualizar `docs/ESTADO_AHORA_MISMO.md`.

## Estructura
- `index.html`: la página.
- `css/manual.css`: estilos y tokens.
- `js/manual.js`: menú, sección activa y botones de copiar color.
- `img/`: imágenes del sitio.
- `recursos/`: descargas sueltas.
- `logos-upsra.zip`: paquete completo, con las rutas de carpeta escritas con `/`.
- `docs/`: Trinity, mockups y revisiones.
