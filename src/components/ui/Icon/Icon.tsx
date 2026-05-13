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
  Activity,
  Wand2,
  School,
  GraduationCap,
  ShieldCheck,
  ClipboardCheck,
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
  Activity,
  Wand2,
  School,
  GraduationCap,
  ShieldCheck,
  ClipboardCheck,
};

export function getIcon(name: string, size = 24) {
  const Icon = iconMap[name];
  return Icon ? <Icon size={size} /> : null;
}

