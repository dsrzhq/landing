# DSRZ HQ Landing — Progress

**Fecha:** 12 de agosto de 2026
**Estado:** ✅ COMPLETO

## Completado

1. ✅ Landing page con 9 secciones (VDS v2.0)
   - NAV sticky con scroll detection
   - HERO con eyebrow y CTA primaria/secundaria
   - SIGNAL, ECOSYSTEM, VECTORS, EVIDENCE, FOUNDER, ACCESS, FOOTER

2. ✅ Formulario de acceso
   - Campos: nombre, perfil (select), email
   - Redirección a `/gracias.html` en submit
   - Modal interactivo con Esc y backdrop close

3. ✅ Páginas legales
   - `/terms` — página de términos
   - `/privacy` — política de privacidad

4. ✅ Comportamiento interactivo
   - NAV sticky: transición en scroll > 24px
   - "Conocer la visión" → scroll a #founder
   - Links de footer funcionales

5. ✅ Deployment
   - Hosted en Vercel (vercel.json con rutas explícitas)
   - Source en GitHub: https://github.com/dsrzhq/landing.git
   - Auto-deploy en push a main

6. ✅ Dominios
   - dsrzhq.com ✅ funciona
   - www.dsrzhq.com ✅ funciona
   - www.dsrzhq.com.mx — nameservers actualizados a Vercel DNS, aguardando propagación

## En progreso

- www.dsrzhq.com.mx: propagación DNS (1-48h)
  - Nameservers: ns1.vercel-dns.com, ns2.vercel-dns.com ✅ configurados
  - Última verificación: 16:15 (aún propagando)
  - **Próxima verificación:** +2 horas (approx 18:15)

## Pendiente

Ninguno. Trabajo completado. Solo aguardar propagación DNS del .mx.

## Criterios de aceptación (todos cumplidos)

- [x] Landing page con diseño VDS v2.0
- [x] Formulario funcional
- [x] Redirección a página de gracias
- [x] Links de footer funcionales
- [x] dsrzhq.com en producción
- [x] www.dsrzhq.com funciona
- [x] www.dsrzhq.com.mx en proceso de propagación

---

**Próximo paso:** Verificar propagación DNS del .mx en +2 horas.
