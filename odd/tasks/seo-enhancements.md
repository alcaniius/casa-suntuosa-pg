# Tasks: Optimización SEO Casa Suntuosa

Feature: `seo-enhancements`
Status: In Progress
Delivery Strategy: `ask-on-risk`
TDD Mode: Off (Configuración SEO, metadatos, robots.txt, sitemap y Schema JSON-LD; verificado vía `astro check` y `astro build`)
Engram Mirror: `odd/seo-enhancements/tasks`

## Checklist

- [x] `task-1`: Configuración de `site: "https://casasuntuosa.shop"` en `astro.config.mjs` e integración de `@astrojs/sitemap`.
- [x] `task-2`: Creación de `public/robots.txt` con directivas de indexación y referencia al sitemap.
- [x] `task-3`: Integración de Open Graph y Twitter Cards completos (`og:image`, `twitter:image`, dimensiones y alt) para visualización en WhatsApp y redes.
- [x] `task-4`: Enriquecimiento del Schema.org JSON-LD en `Layout.astro` con datos de `HairSalon`, catálogo de servicios capilares y dirección exacta en Montería.
- [x] `task-5`: Actualización y consistencia de meta tags (title, description, geo tags) en `Layout.astro` e `index.astro`.
- [x] `task-6`: Verificación final de compilación estática (`pnpm build`) y validación de sitemap/robots generados.

## Verification Evidence
- `pnpm astro check`: 20 files checked, 0 errors, 0 warnings.
- `pnpm astro build`: 1 static page built in 4.09s.
- `@astrojs/sitemap`: Generated `dist/sitemap-index.xml` and `dist/sitemap-0.xml` referencing `https://casasuntuosa.shop/`.
- `public/robots.txt`: Verified copied to `dist/robots.txt` pointing to sitemap index.
- Schema.org: Validated `HairSalon` JSON-LD with geo coordinates, opening hours, accepted currencies, and `OfferCatalog` of signature hair treatments.
- Meta tags & Open Graph: Validated canonical `https://casasuntuosa.shop/`, Open Graph image (1200x630), Twitter large image card, and Montería geo-targeting tags.
