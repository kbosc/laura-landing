import type { PricingCategory } from '@/types';

export const pricingData: PricingCategory[] = [
  {
    universe: 'diet',
    title: 'Diététique',
    sections: [
      {
        subtitle: 'Tarifs individuels',
        note: '* Enfants de 0 à 18 ans · Seniors à partir de 65 ans\nDéplacements à domicile pour les seniors : 5 € (0–5 km) · 10 € (5–10 km) · 15 € (10–20 km) · puis 6 € / 10 km',
        items: [
          { title: '1ère consultation adultes', price: '65 €' },
          { title: 'Consultation de suivi adultes', price: '50 €' },
          { title: '1ère consultation enfants *', price: '60 €' },
          { title: 'Consultation de suivi enfants *', price: '40 €' },
          { title: '1ère consultation seniors *', price: '50 €' },
          { title: 'Consultation de suivi seniors *', price: '40 €' },
        ],
      },
      {
        subtitle: 'Tarifs promotionnels',
        items: [
          { title: '1ère consultation duo parents / enfants', price: '95 €', highlight: true },
          { title: 'Suivi duo parents / enfants', price: '70 €', highlight: true },
          { title: '1ère consultation + 2 suivis adultes', price: '135 €', highlight: true },
          { title: '3 consultations de suivi adultes', price: '120 €', highlight: true },
          { title: '1ère consultation + 2 suivis enfants', price: '110 €', highlight: true },
          { title: '3 suivis enfants', price: '100 €', highlight: true },
          { title: '1ère consultation + 2 suivis seniors', price: '110 €', highlight: true },
          { title: '3 suivis seniors', price: '100 €', highlight: true },
        ],
      },
    ],
  },
  {
    universe: 'energy',
    title: 'Énergétique',
    sections: [
      {
        subtitle: 'Soins & guidances',
        items: [
          { title: 'Reiki (présentiel uniquement)', price: '65 €' },
          { title: 'Soins énergétiques (Métatron, Ganesh, Scarabée d\'Or, Triangle d\'Or d\'Isis, Lahochi)', price: '75 €' },
          { title: 'Première guidance', price: '95 €' },
          { title: 'Guidances suivantes', price: '85 €' },
        ],
      },
      {
        subtitle: 'Cartomancie',
        items: [
          { title: '1 question', price: '8 €' },
          { title: '2 questions', price: '16 €' },
          { title: '3 questions', price: '21 €' },
          { title: 'Tirage Professionnel', price: '30 €', highlight: true },
          { title: 'Tirage Sentimental', price: '40 €', highlight: true },
          { title: 'Tirage Personnel', price: '50 €', highlight: true },
        ],
      },
    ],
  },
];
