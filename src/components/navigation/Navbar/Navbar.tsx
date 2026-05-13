import { AnimatePresence, motion } from 'framer-motion';
import { useAppStore } from '@/store/useAppStore';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { scrollTo } from '@/utils/scrollTo';
import { DOCTOLIB_URL, CRENOLIBRE_URL } from '@/utils/constants';
import { navigationItems } from '@/data/navigation';
import Button from '@/components/ui/Button/Button';
import styles from './Navbar.module.scss';

export default function Navbar() {
  useScrollSpy();

  const activeSection = useAppStore((s) => s.activeSection);
  const isNavScrolled = useAppStore((s) => s.isNavScrolled);
  const isMobileMenuOpen = useAppStore((s) => s.isMobileMenuOpen);
  const toggleMobileMenu = useAppStore((s) => s.toggleMobileMenu);
  const closeMobileMenu = useAppStore((s) => s.closeMobileMenu);

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    scrollTo(id);
    closeMobileMenu();
  };

  return (
    <>
      <nav className={`${styles.navbar} ${isNavScrolled ? styles.scrolled : styles.transparent}`}>
        <div className={styles.inner}>
          <div className={styles.logo} onClick={() => handleNavClick('#hero')}>
            <span className={styles.logoText}>Énairgie & Diététique</span>
          </div>

          <div className={styles.navLinks}>
            {navigationItems.map((item) =>
              item.children ? (
                <div key={item.label} className={styles.dropdown}>
                  <button
                    className={`${styles.navItem} ${activeSection === 'prestations' ? styles.active : ''}`}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.label}
                  </button>
                  <div className={styles.dropdownMenu}>
                    {item.children.map((child) => (
                      <a key={child.label} href={child.href} onClick={(e) => { e.preventDefault(); handleNavClick(child.href); }}>
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  key={item.label}
                  className={`${styles.navItem} ${activeSection === item.href.replace('#', '') ? styles.active : ''}`}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </button>
              )
            )}
          </div>

          <div className={styles.ctaBtn}>
            <Button variant="gold" size="sm" href={DOCTOLIB_URL}>
              Prendre RDV
            </Button>
          </div>

          <button
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {navigationItems.map((item) => (
              <button key={item.label} onClick={() => handleNavClick(item.href)}>
                {item.label}
              </button>
            ))}
            <div className={styles.mobileCta}>
              <Button variant="diet" href={DOCTOLIB_URL} size="lg">
                RDV Diététique
              </Button>
              <Button variant="energy" href={CRENOLIBRE_URL} size="lg">
                RDV Énergétique
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

