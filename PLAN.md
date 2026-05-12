# Plan de modifications — Énairgie & Diététique

Basé sur le mail de Laura du 13 avril 2026.

Légende : ⬜ À faire · 🔄 En cours · ✅ Fait

---

## 1. Assets & images

| # | Tâche | Fichier(s) | Statut |
|---|-------|------------|--------|
| 1.1 | Remplacer le fond Hero par `banner-bis.jpg` | `Hero.tsx` + `Hero.module.scss` | ⬜ |
| 1.2 | Intégrer la photo profil `laura-profil.jpg` dans la section Storytelling (remplacer le placeholder "LL") | `Storytelling.tsx` + `.scss` | ⬜ |

---

## 2. Constantes & URLs

| # | Tâche | Fichier(s) | Statut |
|---|-------|------------|--------|
| 2.1 | Mettre à jour `DOCTOLIB_URL` → `https://www.doctolib.fr/dieteticien/montevrain/laura-litaudon` | `constants.ts` | ⬜ |
| 2.2 | Mettre à jour `CRENOLIBRE_URL` → `https://www.crenolibre.fr/prendre-rdv/159341_enairgie-et-dietetique` | `constants.ts` | ⬜ |

---

## 3. Section Hero

| # | Tâche | Détail | Statut |
|---|-------|--------|--------|
| 3.1 | Remplacer les taglines | "La santé de la matière première à l'invisible." + "Respirer, se nourrir, rayonner." | ⬜ |
| 3.2 | Remplacer le texte de description | "Tous les lundis à Montévrain, je vous propose…" (version courte si trop long) | ⬜ |

---

## 4. Section Storytelling (À propos)

| # | Tâche | Détail | Statut |
|---|-------|--------|--------|
| 4.1 | Titre : "Votre diététicienne, votre énergéticienne" → "Votre Diététicienne-Énergéticienne" | `Storytelling.tsx` | ⬜ |
| 4.2 | Remplacer le texte bio complet | Texte fourni par Laura (diété depuis 10 ans, énergéticienne depuis avril 2025, approche combinée…) | ⬜ |
| 4.3 | Rendre le jaune de fond plus vif + accentuer les couleurs en descendant | `Storytelling.module.scss` + `_variables.scss` | ⬜ |

---

## 5. Section Prestations — Diététique

| # | Tâche | Détail | Statut |
|---|-------|--------|--------|
| 5.1 | Couleur de fond : passer à un vert pastel éclatant en fin de défilé (ou orange si vert ne convient pas) | `.scss` | ⬜ |
| 5.2 | Ajouter sous-titre "Une alimentation complète et flexible" sous le mot "Diététique" | `Prestations.tsx` | ⬜ |
| 5.3 | Remplacer le texte d'intro "oubliez les régimes…" | Nouveau texte : "Mon objectif est que vous ressortiez de nos consultations avec une relation saine avec votre alimentation…" | ⬜ |
| 5.4 | Carte 1 : "Rééquilibrage alimentaire & perte de poids durable" → "Rééquilibrage alimentaire / Perte de poids" + nouveau texte | `services.ts` | ⬜ |
| 5.5 | Carte 2 : "Alimentation grossesse et allaitement" → "Femmes enceintes et femmes allaitantes" + nouveau texte | `services.ts` | ⬜ |
| 5.6 | Carte 3 : "Troubles du comportement alimentaire" — titre OK, nouveau texte | `services.ts` | ⬜ |
| 5.7 | Carte 4 : "Diversification alimentaire du nourrisson" → "Alimentation de l'enfant de 0 à 18 ans" + nouveau texte | `services.ts` | ⬜ |
| 5.8 | Carte 5 : "Nutrition des seniors et dénutrition" → "L'alimentation des seniors" + nouveau texte | `services.ts` | ⬜ |
| 5.9 | Carte 6 : "Alimentation du sportif" → "Alimentation avec une maladie métabolique" + nouveau texte | `services.ts` | ⬜ |

---

## 6. Section Prestations — Énergétique

| # | Tâche | Détail | Statut |
|---|-------|--------|--------|
| 6.1 | Couleur de fond : passer au violet clair | `.scss` | ⬜ |
| 6.2 | Titre de section : "Soin énergétiques" → "Énergétique" | `Prestations.tsx` | ⬜ |
| 6.3 | Ajouter texte de présentation de l'énergétique | "L'énergétique, que ça soit à l'aide de soins énergétiques, de guidances ou la cartomancie…" | ⬜ |
| 6.4 | Carte 1 : "Soin Reiki" → "Le Reiki" + nouveau texte + mention "Uniquement en présentiel" | `services.ts` | ⬜ |
| 6.5 | Carte 2 : remplacer "Soin Lahochi" → "Guidance spirituelle" + nouveau texte | `services.ts` | ⬜ |
| 6.6 | Carte 3 : remplacer "Soin Isis" → "Les soins énergétiques" + liste (Métatron, Ganesh, Scarabée d'Or, Triangle d'Or d'Isis, Lahochi) | `services.ts` | ⬜ |
| 6.7 | Carte 4 : remplacer "Guidance numérologie & chakras" → "La Cartomancie" + nouveau texte | `services.ts` | ⬜ |
| 6.8 | Supprimer la carte "Cartomancie (3 questions)" actuelle (devient redondante) | `services.ts` | ⬜ |

---

## 7. Section Ateliers

| # | Tâche | Détail | Statut |
|---|-------|--------|--------|
| 7.1 | Titre : "Ateliers collectifs" → "Les ateliers" | `Workshops.tsx` | ⬜ |
| 7.2 | Remplacer les 5 ateliers actuels par les 8 nouveaux | `workshops.ts` | ⬜ |

Nouveaux ateliers :
1. Concevoir ses menus
2. Manifestation — Le pouvoir de créer votre vie de rêve
3. Méditation et mini guidances
4. Cuisine en famille
5. Cercles de femmes
6. Diabète, cholestérol, triglycérides — les vraies recommandations
7. Diversification alimentaire de vos bébés
8. L'alimentation des jeunes enfants

---

## 8. Section Vrai/Faux (Mythes)

| # | Tâche | Détail | Statut |
|---|-------|--------|--------|
| 8.1 | Titre : "Démêlons le vrai du faux" → "Vrai/faux sur vos croyances" | `Myths.tsx` | ⬜ |
| 8.2 | Mythe 1 : "Le pain fait grossir" — nouveau texte de réponse | `myths.ts` | ⬜ |
| 8.3 | Mythe 2 : "Il faut supprimer le gras pour maigrir" — nouveau texte | `myths.ts` | ⬜ |
| 8.4 | Mythe 3 (nouveau) : "Un soin énergétique ne peut pas se faire à distance" — FAUX | `myths.ts` | ⬜ |
| 8.5 | Mythe 4 : "Les produits allégés sont meilleurs pour la santé" — nouveau texte | `myths.ts` | ⬜ |
| 8.6 | Mythe 5 (nouveau) : "Je suis diabétique, je dois arrêter le sucre" — FAUX | `myths.ts` | ⬜ |
| 8.7 | Supprimer les mythes "Manger après 18h" et "régime restrictif" (remplacés) | `myths.ts` | ⬜ |

---

## 9. Section Tarifs (refonte complète)

| # | Tâche | Détail | Statut |
|---|-------|--------|--------|
| 9.1 | Diététique — tarifs individuels adultes/enfants/seniors | 65€ / 50€ / 60€ / 40€ / 50€ / 40€ | ⬜ |
| 9.2 | Diététique — frais de déplacement seniors | Grille kilométrique fournie | ⬜ |
| 9.3 | Diététique — packs promotionnels | 7 packs listés par Laura | ⬜ |
| 9.4 | Énergétique — tarifs soins | Reiki 65€, Soins 75€, Guidance 95€/85€ | ⬜ |
| 9.5 | Énergétique — Cartomancie | 1 question 10€, 3 questions 30€, packs 45€ | ⬜ |

---

## 10. Section FAQ (refonte complète)

| # | Tâche | Détail | Statut |
|---|-------|--------|--------|
| 10.1 | Remplacer les 6 questions actuelles par les 12 questions de Laura | `faq.ts` | ⬜ |

Questions : remboursement, déplacement domicile, venir avec bébé, croyance soins énergétiques, différence de prix Reiki/soins, moyens de paiement, garantie perte de poids, soins mieux que d'autres, tarifs enfants/seniors, première consultation diét., soins à distance, Métatron femme enceinte | | |

---

## 11. Avis / Témoignages

| # | Tâche | Détail | Statut |
|---|-------|--------|--------|
| 11.1 | Récupérer les avis Google de Laura et les intégrer | À faire manuellement — copier-coller depuis Google Maps | ⬜ |

---

## 12. Pages de détail (nouvelle section ou accordéons)

Contenu riche fourni par Laura sur :

| # | Tâche | Statut |
|---|-------|--------|
| 12.1 | Consultation Diététique — déroulé détaillé | ⬜ |
| 12.2 | Soins énergétiques — déroulé + chaque soin (Reiki, Lahochi, Métatron, Ganesh, Scarabée d'Or, Triangle d'Or d'Isis) | ⬜ |
| 12.3 | Guidances — première guidance vs suivantes, formats (présentiel / visio / vocal) | ⬜ |
| 12.4 | Cartomancie — formats, contraintes (pas grossesse/santé/mort) | ⬜ |

---

## Ordre d'exécution recommandé

1. **2** — URLs (rapide, zéro risque)
2. **1** — Images (assets déjà présents)
3. **3 + 4** — Hero + Storytelling (visible, impact immédiat)
4. **5 + 6** — Prestations (gros morceau)
5. **9 + 10** — Tarifs + FAQ (données pures)
6. **7 + 8** — Ateliers + Mythes
7. **11** — Avis (manuel, dépend de Laura)
8. **12** — Pages de détail (scope à décider : accordéon ou pages dédiées ?)
