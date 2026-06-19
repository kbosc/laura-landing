# Plan — Énairgie & Diététique

Suivi des tâches de développement du site de Laura Litaudon.
Statuts : ⬜ à faire · 🔄 en cours · ✅ terminé

---

## SEO & Référencement naturel ✅

| # | Tâche | Statut |
|---|-------|--------|
| 1 | Balises `<title>` et `<meta description>` en français avec mots-clés locaux | ✅ |
| 2 | Balises Open Graph (`og:locale=fr_FR`, `og:title`, `og:description`, `og:url`) | ✅ |
| 3 | Données structurées JSON-LD (LocalBusiness + Person) | ✅ |
| 4 | `robots.txt` avec pointeur vers sitemap | ✅ |
| 5 | `sitemap.xml` | ✅ |
| 6 | Balise `<link rel="canonical">` | ✅ |
| 7 | Méta géolocalisation (`geo.region`, `geo.placename`) | ✅ |
| 8 | `fetchpriority="high"` sur le hero, `loading="lazy"` sur les images below-fold | ✅ |
| 9 | Redirects 301 vieilles URLs WordPress (`/feed`, `/category/`, `/wp-admin/`, etc.) | ✅ |
| 10 | Redirect 308 `www.laura-equilibre.fr` → `laura-equilibre.fr` (Vercel Domains) | ✅ |

### Actions manuelles
| # | Tâche | Statut |
|---|-------|--------|
| M1 | Créer `public/og-image.jpg` (1200×630px) — photo de Laura ou visuel de marque | ⬜ |
| M2 | Inscrire le cabinet sur Google Business Profile (fiche Google Maps) | ⬜ |
| M3 | Demander revalidation Search Console "Page en double" | ⬜ |

---

## Accessibilité ✅ / 🔄

| # | Tâche | Statut |
|---|-------|--------|
| A1 | Skip-link "Aller au contenu principal" | ✅ |
| A2 | Focus visible `:focus-visible` sur tous les éléments interactifs | ✅ |
| A3 | `aria-live` sur la FAQ accordion | ✅ |
| A4 | `role="tablist/tab/tabpanel"` + `aria-expanded` sur FAQ et Prestations | ✅ |
| A5 | **`<MotionConfig reducedMotion="user" />`** — activer le respect de `prefers-reduced-motion` pour toutes les animations Framer Motion | ✅ |
| A6 | Animation CSS `bounce` Hero sans `@media (prefers-reduced-motion)` | ✅ |
| A7 | `aria-hidden="true"` sur les icônes décoratives Lucide dans Prestations | ✅ |
| A8 | Dropdown Navbar inaccessible au clavier (hover only → gérer focus/clic) | ⬜ |

---

## Performance & Bundle

| # | Tâche | Statut |
|---|-------|--------|
| P1 | `vite-plugin-image-optimizer` en place | ✅ |
| P2 | Double import Google Fonts (SCSS + HTML) — consolidation dans `index.html`, suppression `@import` SCSS | ✅ |
| P3 | Supprimer `banner-bg.jpg` (jamais importé) | ✅ |
| P4 | Redimensionner `laura-profil.jpg` (1908×3392 → 680×680px WebP) | ⬜ |
| P5 | Redimensionner `logo.png` (1536×1024, 2.8MB → SVG ou WebP 200px) | ⬜ |
| P6 | Lazy loading des sections below-the-fold (`React.lazy()`) | ⬜ |
| P7 | Headers de cache explicites dans `vercel.json` pour assets hachés | ✅ |

---

## Qualité du code

| # | Tâche | Statut |
|---|-------|--------|
| Q1 | `npm audit fix` — 8 vulnérabilités (3 HIGH : Vite path traversal, PostCSS XSS) | ✅ |
| Q2 | Supprimer dead code `ScrollToTop` commenté dans `App.tsx:41-43` | ✅ |
| Q3 | Supprimer variables SCSS en double (`$color-lavender` = `$color-energy`) | ✅ |

---

## Notes techniques

- **Domaine** : `https://laura-equilibre.fr/` — Vercel
- **og-image** : créer un visuel 1200×630px et le déposer dans `public/og-image.jpg`
- **Dropdown clavier (A8)** : ajouter un state `isOpen` dans la Navbar et gérer `onClick` + `onKeyDown Enter/Space`
- **Images (P4/P5)** : utiliser Squoosh ou `sharp` CLI pour convertir en WebP avant dépôt dans `src/assets/`
