import { create } from 'zustand';
import type { Universe } from '@/types';

interface AppState {
  // Navigation
  activeSection: string;
  isMobileMenuOpen: boolean;
  isNavScrolled: boolean;
  setActiveSection: (id: string) => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  setNavScrolled: (val: boolean) => void;

  // Theme
  activeUniverse: Universe;
  setActiveUniverse: (u: Universe) => void;

  // UI
  expandedFaqIndex: number | null;
  setExpandedFaq: (i: number | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Navigation
  activeSection: 'hero',
  isMobileMenuOpen: false,
  isNavScrolled: false,
  setActiveSection: (id) => set({ activeSection: id }),
  toggleMobileMenu: () => set((s) => ({ isMobileMenuOpen: !s.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  setNavScrolled: (val) => set({ isNavScrolled: val }),

  // Theme
  activeUniverse: 'neutral',
  setActiveUniverse: (u) => set({ activeUniverse: u }),

  // UI
  expandedFaqIndex: null,
  setExpandedFaq: (i) => set({ expandedFaqIndex: i }),
}));

