# Plan — Énairgie & Diététique

Suivi des tâches de développement du site de Laura Litaudon.
Statuts : ⬜ à faire · 🔄 en cours · ✅ terminé

---

## SEO & Référencement naturel

Objectif : remplacer la description anglaise (héritage Wix) par un référencement français complet, et positionner Laura sur les recherches locales (Montévrain, 77, Seine-et-Marne).

### Correctifs urgents
| # | Tâche | Statut |
|---|-------|--------|
| 1 | Balises `<title>` et `<meta description>` en français avec mots-clés locaux | ✅ |
| 2 | Balises Open Graph (`og:locale=fr_FR`, `og:title`, `og:description`, `og:url`) | ✅ |
| 3 | Données structurées JSON-LD (LocalBusiness + Person) | ✅ |
| 4 | `robots.txt` avec pointeur vers sitemap | ✅ |
| 5 | `sitemap.xml` | ✅ |
| 6 | Balise `<link rel="canonical">` | ✅ |
| 7 | Méta géolocalisation (`geo.region`, `geo.placename`) | ✅ |

### Actions manuelles requises (hors code)
| # | Tâche | Statut |
|---|-------|--------|
| 8 | Créer un compte Google Search Console sur laura-equilibre.fr | ⬜ |
| 9 | Vérifier la propriété du site dans Search Console | ⬜ |
| 10 | Demander une réindexation manuelle depuis Search Console | ⬜ |
| 11 | Créer une image OG (`public/og-image.jpg`, 1200×630px) — photo de Laura ou logo | ⬜ |
| 12 | Inscrire le cabinet sur Google Business Profile (fiche Google Maps) | ⬜ |

### Améliorations futures
| # | Tâche | Statut |
|---|-------|--------|
| 13 | Score Lighthouse SEO ≥ 95 (audit complet) | ⬜ |
| 14 | Score Lighthouse Accessibilité ≥ 90 | ⬜ |
| 15 | Score Lighthouse Performance ≥ 85 (lazy loading images, preload fonts) | ⬜ |
| 16 | Balises `hreflang` (si version multi-langue envisagée — facultatif) | ⬜ |

---

## Accessibilité & UX

| # | Tâche | Statut |
|---|-------|--------|
| 17 | Audit contraste couleurs (WCAG AA, ratio ≥ 4.5:1) | ⬜ |
| 18 | Skip-link "Aller au contenu principal" | ⬜ |
| 19 | Focus visible sur tous les éléments interactifs | ⬜ |
| 20 | `aria-live` sur la FAQ accordion | ⬜ |

---

## Évolution design (demande Laura, avril 2026)

| # | Tâche | Statut |
|---|-------|--------|
| 21 | Couleur énergétique : passer de rose poudré `#D4A0A7` → violet `#8B5CF6` | ⬜ |

---

## Notes techniques

- **Domaine déployé** : `https://laura-equilibre.fr/`
- **Hébergement** : Vercel
- **Google recrawl** : après déploiement, utiliser Search Console → "Demander l'indexation" sur l'URL racine
- La description anglaise ("Create the life you want to live...") vient de l'ancien site Wix — elle disparaîtra dans les 1 à 4 semaines après réindexation
