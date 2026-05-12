# CLAUDE.md — Énairgie & Diététique

Ce fichier est lu automatiquement par Claude Code au démarrage de chaque session sur ce projet.
Il me donne le contexte, les conventions et les règles à suivre sans avoir à les redécouvrir.

---

## Contexte du projet

Landing page pour **Laura Litaudon**, diététicienne-énergéticienne basée à Montévrain (77).
Elle propose deux univers complémentaires : la **diététique** et l'**énergétique** (Reiki, soins, guidances, cartomancie).

Le projet est en cours de refonte sur la base d'un mail détaillé de Laura (avril 2026).
Le suivi des modifications est dans **PLAN.md** à la racine.

---

## Stack technique

| Outil | Version |
|-------|---------|
| React | 19 |
| TypeScript | 5.9 |
| Vite | 7 |
| Framer Motion | 12 |
| Zustand | 5 |
| SASS (modules) | 1.97 |
| Lucide React | 0.577 |

Commandes :
```bash
npm run dev      # dev server
npm run build    # build prod (tsc + vite)
npm run lint     # ESLint
```

---

## Architecture du projet

```
src/
  assets/          # Images statiques (banner-bis.jpg, laura-profil.jpg, logo.png)
  components/      # Composants réutilisables (ui/, navigation/, decorative/)
  data/            # Données statiques en .ts (services, tarifs, ateliers, FAQ, mythes)
  hooks/           # Hooks custom (useReducedMotion, useScrollSpy)
  layouts/         # SectionWrapper
  sections/        # Sections de la page (Hero, Storytelling, Prestations, etc.)
  styles/          # Variables SCSS globales, mixins, reset
  types/           # Types TypeScript centralisés
  utils/           # constants.ts, scrollTo, animations
```

**Principe clé** : les données sont séparées du rendu. Les textes, tarifs, ateliers, FAQ
et mythes vivent dans `src/data/` — les composants ne contiennent pas de contenu en dur.

---

## Conventions de code

- **SCSS Modules** : chaque composant a son `.module.scss` local. Les variables globales
  viennent de `src/styles/_variables.scss`.
- **Imports** : alias `@/` = `src/`. Import direct (pas de barrel files) — règle `bundle-barrel-imports`.
- **Animations** : Framer Motion + variants définis dans `src/utils/animations.ts`.
  Toujours respecter `prefers-reduced-motion` via le hook `useReducedMotion`.
- **Icônes** : Lucide React exclusivement. Jamais d'emoji comme icône.
- **Typage** : les types de données sont dans `src/types/index.ts`.

---

## Design System

Généré par le skill `ui-ux-pro-max`. Source de vérité : `design-system/énairgie-et-diététique/MASTER.md`.

**Palette actuelle** (définie dans `_variables.scss`) :
- Diété : vert sauge `#8FAE7E`
- Énergie : rose poudré `#D4A0A7` → **à faire évoluer vers violet `#8B5CF6`** (demande Laura)
- Fond : crème `#FAF8F5`
- Texte : brun chaud `#3A2E2A`

**Typographies** : Playfair Display (titres serif) + Lato (corps) + Caveat (accent/signature)

**Règles UI/UX prioritaires** (skill `ui-ux-pro-max`) :
1. Contraste minimum 4.5:1 (WCAG AA)
2. Touch targets ≥ 44px
3. Animations 150–300ms, `transform`/`opacity` uniquement
4. Mobile-first, breakpoints : 480 / 768 / 1024 / 1440px

---

## Skills installés

| Skill | Utilisation |
|-------|-------------|
| `improve-codebase-architecture` | Refactoring, identification des modules peu profonds |
| `ui-ux-pro-max` | Design system, couleurs, typographie, accessibilité |
| `vercel-react-best-practices` | Perf React : re-renders, bundle, async waterfalls |

---

## Règles de contribution

- **Git** : commits au nom de `kbosc <bosc.kev@gmail.com>`. Ne pas ajouter de co-auteur Claude.
- **Données** : toujours modifier le fichier `.ts` dans `src/data/`, jamais le JSX directement.
- **Images** : déposer dans `src/assets/`. Toujours déclarer `width`/`height` ou `aspect-ratio`
  pour éviter le CLS (Core Web Vitals).
- **Pas de commentaires inutiles** : commenter uniquement les invariants non évidents.
- **PLAN.md** : mettre à jour le statut (⬜ → 🔄 → ✅) à chaque tâche terminée.

---

## Liens utiles

- RDV Diété : https://www.doctolib.fr/dieteticien/montevrain/laura-litaudon
- RDV Énergie : https://www.crenolibre.fr/prendre-rdv/159341_enairgie-et-dietetique
