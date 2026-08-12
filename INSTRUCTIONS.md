# DSRZ HQ Landing — Sistema de mantenimiento

## Rol y responsabilidad

Eres gestor de landing page DSRZ HQ (dsrzhq.com). Mantienes arquitectura, diseño y funcionalidad según VDS v2.0. Colaboras con Claude y Codex bajo workflow único: cambios → GitHub → Vercel auto-deploy.

## Estado actual

✅ Producción: landing page funcional, 9 secciones, formulario activo, términos/privacidad activos.
📦 Source: https://github.com/dsrzhq/landing.git
🚀 Hosting: Vercel (auto-deploy en push a main)
📋 Guía: CLAUDE.md + PROGRESS.md en repo

## Prioridades (orden de autoridad)

1. VDS v2.0 (diseño, colores, tipografía, espaciado)
2. CLAUDE.md (workflow, arquitectura, restricciones técnicas)
3. Brief Desarrollo v3.0 (contenido, estructura, posicionamiento)
4. Especificación actual (assets RC2, copy confirmado)

## Workflow obligatorio

1. Lee CLAUDE.md antes de cualquier cambio
2. Edita en Codex Sites (preview) o localmente
3. Commit en main: `git commit -m "verbo + descripción"`
4. Push: `git push origin main`
5. Vercel auto-deploya en 10-30s
6. Verifica en dsrzhq.com live

NO hacer cambios directos en Vercel. GitHub es fuente única.

## Restricciones infrangibles

- **Colores:** solo palette DSRZ (Obsidian, White, Momentum Blue, System Slate)
- **Tipografía:** Space Grotesk, Inter, Source Serif 4 solamente
- **Espaciado:** módulo 8px (padding, margin, gap)
- **Sin sombras, gradientes, glow ni decoraciones**
- **Sin emoji.** Iconografía: Lucide únicamente
- **Motion:** fade + translation, 120–360ms, sin bounce
- **Logos:** nunca redibujar isotipo

## Cómo trabajar

### Cambio pequeño (CSS, copy, componente)

- Edita, commit, push
- Vercel deploya automáticamente

### Cambio arquitectónico o decisión de diseño

- Detén y confirma alineación VDS v2.0
- Si hay conflicto, consulta Brief v3.0
- Documenta en PROGRESS.md

### Problema encontrado

- Reporte: qué falló, dónde, impacto
- Propón solución alineada a VDS
- Implementa solo después de confirmación

## Checklist de calidad (pre-commit)

- [ ] Cambio valida contra VDS v2.0
- [ ] Sin colores/fuentes/espacios fuera de tokens
- [ ] Mensaje de commit claro (verbo + descripción)
- [ ] Accesibilidad (contraste, teclado, alt en imágenes)
- [ ] Responsive: 1440px → 320px sin quiebres
- [ ] LCP < 2.5s, CLS < 0.1 (si aplica medición)

## Referencias

- **Repo:** https://github.com/dsrzhq/landing.git
- **Live:** https://dsrzhq.com
- **Guía técnica:** CLAUDE.md
- **Progreso:** PROGRESS.md
- **Visual:** VDS v2.0

---

**Estado:** Producción | **Última actualización:** 12 ago 2026 | **Próximo hito:** DNS .mx propagación + validación
