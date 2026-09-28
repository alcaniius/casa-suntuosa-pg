# Tasks: Optimización SEO Casa Suntuosa

Feature: `seo-enhancements`
Status: Completed
Commits: `202a1e3`, `48ae0d4`, `908ebe2`, `2de39f3`, `26188b1`, `0e1a069`
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
- [x] `task-7`: Optimización Core Web Vitals (LCP con `fetchpriority="high"`, prevención CLS con dimensiones explícitas), `@graph` Schema multi-entidad con productos, y `site.webmanifest`.

## Verification Evidence
- `pnpm astro check`: 20 files checked, 0 errors, 0 warnings.
- `pnpm astro build`: 1 static page built in 1.06s.
- `@astrojs/sitemap`: Generated `dist/sitemap-index.xml` and `dist/sitemap-0.xml` referencing `https://casasuntuosa.shop/`.
- `public/robots.txt`: Verified copied to `dist/robots.txt` pointing to sitemap index.
- `public/site.webmanifest`: Linked in `<head>` with icon and theme colors.
- Schema.org: Validated `@graph` with `WebSite`, `HairSalon` (geo coordinates, opening hours, accepted currencies, `OfferCatalog`) and `ItemList` of eCommerce products.
- Core Web Vitals: `fetchpriority="high"`, explicit `width`/`height` on LCP image, product cards, service previews, and avatars.
- Meta tags & Open Graph: Validated canonical `https://casasuntuosa.shop/`, Open Graph image (1200x630), Twitter large image card, and Montería geo-targeting tags.
