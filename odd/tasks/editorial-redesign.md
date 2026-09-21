# Feature: Editorial Redesign (De-AI Badges and Asymmetric Degraded Backgrounds)

## Objective
Elevate the brand experience of Casa Suntuosa from generic AI-template aesthetics (SaaS pill badges with radar dots, circular blurry drifting orbs, spinning wireframe rings) to haute coiffure luxury editorial design.

## Problem & Why
The site previously used visual tropes typical of AI generation tools:
- Pill-shaped badges with pulsating radar dots (`SectionLabel` with `rounded-full border` + `animate-pulse-ring`).
- Circular drifting blurred orbs (`rounded-full blur-2xl radial-gradient`) and spinning circular rings.
- Benefits section with redundant messaging ("No transformamos tu cabello por un día...").
- Vertical colored strip indicators inside service cards.

## Scope
- Refactor `SectionLabel` in `src/components/Brand.tsx` into an editorial kicker.
- Replace circular orbs in `Hero.astro` with an asymmetric background gradient that smoothly degrades to the right.
- Align all other sections (`Benefits.astro`, `Services.tsx`, `Products.tsx`, `Pricing.tsx`, `Testimonials.astro`, `FinalCta.tsx`) to remove circular blobs and adopt directional horizontal ambient washes.
- Remove Benefits section and dead nav anchors.
- Clean service cards to retain only the gold stroke border without internal vertical indicator lines.

## Tasks
- [x] **TASK-01**: Transform `SectionLabel` in `src/components/Brand.tsx` into an editorial luxury kicker (clean uppercase, wide tracking `tracking-[0.26em]`, hairline accent `h-px w-5`, no pill container or pulsing dot).
- [x] **TASK-02**: Redesign `Hero.astro` background: removed circular drifting orbs and spinning wireframe ring; implemented horizontal degradation fading to the right (`bg-gradient-to-r`).
- [x] **TASK-03**: Updated secondary sections (`Benefits.astro`, `Services.tsx`, `Products.tsx`, `Pricing.tsx`, `Testimonials.astro`, `FinalCta.tsx`) to replace circular gradient blobs with horizontal directional washes.
- [x] **TASK-04**: Built and verified site styling, diagnostics, and HTTP 200 response (`pnpm astro check` 0 errors, 0 warnings).
- [x] **TASK-05**: Removed Benefits section ("No transformamos tu cabello por un día...") from `src/pages/index.astro`, and cleaned up `#experiencia` references in `Navbar.tsx` and `Footer.astro`.
- [x] **TASK-06**: In `src/components/Services.tsx`, removed internal vertical stripes from cards and unified with subtle gold border stroke (`border-gold-300/30` inactive, `border-gold-400` active).

## Verification Evidence
- `pnpm astro check`: Result (20 files): 0 errors, 0 warnings.
- HTML verification: `Contains Benefits: false` at `http://localhost:4321`.
- Clean card markup: verified gold stroke borders (`border-gold-400` / `border-gold-300/30`) with no indicator bar line.
