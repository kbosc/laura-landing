import { useEffect } from 'react';
import { useAppStore } from '@/store/useAppStore';
import { SECTION_IDS } from '@/utils/constants';

export function useScrollSpy() {
  const setActiveSection = useAppStore((s) => s.setActiveSection);
  const setNavScrolled = useAppStore((s) => s.setNavScrolled);

  useEffect(() => {
    const ids = Object.values(SECTION_IDS);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      setNavScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setActiveSection, setNavScrolled]);
}

