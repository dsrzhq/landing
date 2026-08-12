# CLAUDE.md

## Contexto de trabajo

Proyecto: Landing page premium DSRZ HQ en dsrzhq.com.
Stack: HTML5 + CSS3 + JavaScript vanilla (sin framework build process).
Deployment: Vercel (auto-deploy en push a main).
Dominios: Hostinger (nameservers → Vercel DNS).
Source: https://github.com/dsrzhq/landing.git
Live: https://dsrzhq.com

## Arquitectura

### Archivos principales

1. `index.html` — página principal completa
   - 9 secciones fijas: NAV, HERO, SIGNAL, ECOSYSTEM, VECTORS, EVIDENCE, FOUNDER, ACCESS, FOOTER
   - Metadata SEO (og:, twitter:, schema.org JSON-LD)
   - Inline fonts y CSS
   - JS inline: LandingTop, LandingMid, LandingBottom, AccessModal, Primitives

2. Páginas estáticas
   - `gracias.html` — confirmación post-formulario
   - `terms.html` — términos de servicio
   - `privacy.html` — política de privacidad

3. Configuración
   - `vercel.json` — rutas explícitas (/terms → /terms.html, /privacy → /privacy.html, /gracias → /gracias.html)

4. Assets
   - `assets/logos/` — SVGs (DSRZ_lockup_horizontal_inverted, isotype_white, isotype_black, favicon)
   - `fonts/` — self-hosted woff2 (Space Grotesk, Inter, Source Serif 4)

## No-negotiables del diseño (VDS v2.0)

1. **80/20 rule**: Obsidian #111111 + White #FFFFFF (80%) / Momentum Blue #2563EB (20% en acentos: hero eyebrow, CTA primario, estados activos, focus rings)

2. **Sin efectos**: prohibido sombras, gradientes, bisel, glow. Definición via hairlines (1px Slate-300) y layout.

3. **Espaciado**: 
   - Radius máximo 4px (mayoría 0px o 2px)
   - Base module 8px (todo padding, margin, gap)

4. **Tipografía**: solo tres familias
   - Space Grotesk: display, wordmarks, headlines
   - Inter: UI, body
   - Source Serif 4: editorial

5. **Branding DSRZ**: siempre uppercase + tracked. Nunca redibujar isotipo.

6. **Iconografía**: Lucide (stroke, currentColor, sin fill, 20–24px)

7. **Motion**: sin bounce/overshoot. Fades + short translations (120–360ms), cubic-bezier(0.4,0,0.2,1)

8. **Copy**: español latinoamericano neutro, tono premium, declarativo. Triadas + middot (·) como dispositivo de cadencia.

9. **SVG inline**: donde sea posible. Imágenes: WebP, lazy load debajo del fold.

10. **Sin emoji**.

## Comportamiento interactivo (validado)

- NAV: sticky top, z-index 60. Al scroll > 24px: fondo Obsidian + borde-bottom 1px rgba(255,255,255,0.10), transición 200ms
- HERO: eyebrow "ORGANIZED MOMENTUM", h1 con palabra "impacto" en Momentum Blue, 2 CTAs (primary + ghost-dark)
- "Conocer la visión": scroll smooth a #founder
- ACCESS Modal: abre/cierra con Esc y backdrop click. Campos validados, success state sin redirect
- VECTORS: hover → border-color Slate-700 → Momentum Blue, transición 200ms
- FOOTER: hairline top rgba(255,255,255,0.15)

## Workflow de desarrollo

1. Lee este archivo + PROGRESS.md para entender estado actual
2. Haz cambios localmente en `index.html`, archivos estáticos o assets
3. Commit en main con mensaje claro (verbo + descripción)
4. Push a origin/main
5. Vercel deploya automáticamente en 10-30 segundos
6. Verifica en dsrzhq.com (o dominios específicos)

## Regla de clarificación

Si hay ambigüedad, conflicto de spec o información incompleta que afecte alcance, calidad o validación:

1. Detén ejecución
2. Enumera lecturas posibles
3. Recomienda una
4. Pregunta: ¿Confirmas esta lectura? Sí o no

No avances con supuestos no confirmados.

## Regla de calidad

Antes de implementar:
1. Investiga código existente (estructura, patrones, dependencias)
2. Define objetivo, lenguaje, restricciones, criterios de validación

Durante:
1. No implementes sin alta confianza
2. Mantén consistencia con estilo, convenciones, arquitectura
3. Aplica mejoras evidentes sin pedir aprobación (si no cambian objetivo)
4. Si mejora cambia alcance, activa clarificación

Antes de dar por terminado:
1. Verifica todo: compila, sin errores de tipo, tests pasan
2. Revisa que lógica tenga sentido y cumpla objetivo
3. Reporta resultado, riesgos residuales, restricciones

## Puntuación y formato

- Oraciones cortas
- Tono profesional, directo, sobrio
- Solo puntos, comas, dos puntos (sin rayas, punto y coma, asteriscos, paréntesis, negritas, cursivas)
- Listas: párrafos numerados
- Evita muletillas y disclaimers

## Palabras vetadas

No uses: poder, quizás, solo, realmente, literalmente, desafío, sin embargo, además, vital, crucial, innovador, transformar, etc.

Sustituciones: poder→capacidad/efecto, quizás→define condición, desafío→barrera/fricción.

## Deployment pipeline (FIJO)

Flujo de despliegue: GitHub → Vercel (automático).

1. Haz cambios en archivos
2. Commit en main: git commit -m "descripción clara"
3. Push: git push origin main
4. Vercel detecta push automáticamente
5. Auto-deploy en 10-30 segundos a dsrzhq.com

Infraestructura: Vercel solamente. No cambiar a Netlify, GitHub Pages ni otros. Vercel escucha main continuamente y despliega sin intervención manual.

## Cierre operativo

Cada respuesta termina accionable. Si falta info: preguntas cerradas (selección múltiple o sí/no) con recomendación y justificación. Si hay base: confirma criterio y procede.

---

Última actualización: 12 de agosto de 2026
Brand Owner: Diego Leonardo Suárez López
Status: Landing completo, deployado, validado
Next: Aguardar propagación DNS de www.dsrzhq.com.mx
