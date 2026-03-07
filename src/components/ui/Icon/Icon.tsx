import type { LucideIcon } from 'lucide-react';
import {
  Apple,
  Baby,
  Heart,
  Milk,
  Users,
  Dumbbell,
  HandHeart,
  Hand,
  Moon,
  Sparkles,
  Flame,
  ChefHat,
  Search,
  Flower2,
  Leaf,
  UsersRound,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Apple,
  Baby,
  Heart,
  Milk,
  Users,
  Dumbbell,
  HandHeart,
  Hand,
  Moon,
  Sparkles,
  Flame,
  ChefHat,
  Search,
  Lotus: Flower2,
  Leaf,
  UsersRound,
};

export function getIcon(name: string, size = 24) {
  const Icon = iconMap[name];
  return Icon ? <Icon size={size} /> : null;
}

