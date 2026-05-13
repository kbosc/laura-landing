import type { NavItem } from '@/types';

export const navigationItems: NavItem[] = [
  { label: 'Accueil', href: '#hero' },
  {
    label: 'Prestations',
    href: '#prestations',
    children: [
      { label: 'Diététique', href: '#prestations' },
      { label: 'Énergétique', href: '#prestations' },
    ],
  },
  { label: 'En détail', href: '#details' },
  { label: 'Ateliers', href: '#ateliers' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

