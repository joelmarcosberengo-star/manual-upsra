# Contexto del proyecto — Manual de Identidad Visual UPSRA

Documento oficial de la Secretaría de Prensa y Relaciones Públicas de UPSRA. Lo usan los equipos de prensa de las delegaciones, el equipo de diseño y los proveedores externos para encontrar reglas (colores, fuentes, composición, cierre) y bajar recursos (logo, cierre).

- **Sensibilidad:** baja. Es contenido institucional público, sin datos personales.
- **Stack:** sitio estático en Vercel, sin backend, sin base de datos y sin build.
- **Fuentes de diseño:** la skill `upsra-visual-language` y el mockup aprobado `docs/mockups/mockup-manual.html` (ver `docs/mockups/LEEME.md`).
- **Auditorías del 27/10/2026:** en la carpeta del proyecto `auditoria/` (repo, skill visual, arquitectura y UX).

## Decisiones

### D-01: Manda la skill upsra-visual-language en colores y fuentes — 27/10/2026 — Estado: Decisión de Joel
Contexto: el manual de agosto (azul #003A78, dorado #D4A857, Open Sans y Exo 2) chocaba con la skill (azul #0D2B5E, dorado #C9A227, Public Sans y Archivo).
Elegida: la skill. La paleta conserva los nombres del manual (Azul UPSRA, Azul acero, Celeste, Dorado, Blanco, Gris neutro) y suma los azules medidos en las placas reales (Azul placa #0E4990, Azul profundo #04357E, Azul medio #3B65B7).
Consecuencias: el logo queda como está, aunque su azul (#13478F) no coincide con ninguno.

### D-02: Sitio estático sin framework, en Vercel — 27/10/2026 — Estado: Aceptada
Contexto: no tiene datos ni login.
Consecuencias: (+) cero mantenimiento de servidor; (−) las descargas pesadas (como el mp4) viven en el repo.

### D-03: Unir a main equivale a publicar — 27/10/2026 — Estado: Aceptada
Contexto: Vercel despliega en cada push a `main`.
Regla: solo PR, y se une con el ok de Joel después de ver la vista previa.

### D-04: Navegación igual a la skill — 27/10/2026 — Estado: Decisión de Joel
- Escritorio: barra lateral de 92 px con íconos y topbar de 62 px. Joel rechazó un índice de 240 px.
- Tablet y celular: header con drawer. Sin menú inferior.
- En pantallas de menos de 560 px de alto, la barra muestra solo íconos para no tener scroll.

### D-05: Imagen del pie anterior como banner — 27/10/2026 — Estado: Decisión de Joel
La imagen de conducción se conserva como banner antes del pie. El pie es el institucional de la skill.

### D-06: Recursos sueltos más el zip completo — 27/10/2026 — Estado: Decisión de Joel
Cada recurso se puede bajar suelto. El zip se rearmó con rutas `/`, porque el original tenía barras invertidas y en Mac se descomprimía desordenado.
