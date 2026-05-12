export type Universe = 'diet' | 'energy' | 'neutral';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface PricingItem {
  title: string;
  duration?: string;
  price: string;
  highlight?: boolean;
}

export interface PricingSection {
  subtitle?: string;
  note?: string;
  items: PricingItem[];
}

export interface PricingCategory {
  universe: Universe;
  title: string;
  sections: PricingSection[];
}

export interface Testimonial {
  name: string;
  age?: number;
  text: string;
  rating: number;
  source?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Myth {
  myth: string;
  reality: string;
}

export interface Workshop {
  icon: string;
  title: string;
  description: string;
}

