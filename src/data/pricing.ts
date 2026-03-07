import type { PricingCategory } from '@/types';

export const pricingData: PricingCategory[] = [
  {
    universe: 'diet',
    title: 'Diététique',
    items: [
      { title: 'Bilan diététique initial', duration: '1h', price: '60 €' },
      { title: 'Consultation de suivi', duration: '30 min', price: '40 €' },
      { title: 'Pack 5 consultations de suivi', duration: '—', price: '180 €', highlight: true },
      { title: 'Consultation enfant / ado', duration: '45 min', price: '50 €' },
    ],
  },
  {
    universe: 'energy',
    title: 'Énergétique',
    items: [
      { title: 'Soin Reiki', duration: '1h', price: '60 €' },
      { title: 'Soin Lahochi', duration: '1h', price: '60 €' },
      { title: 'Soin Isis', duration: '1h15', price: '70 €' },
      { title: 'Guidance numérologie & chakras', duration: '45 min', price: '55 €' },
      { title: 'Cartomancie (3 questions)', duration: '30 min', price: '35 €' },
    ],
  },
];

