import { motion } from 'framer-motion';
import { ChevronDown, Salad, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button/Button';
import { DOCTOLIB_URL, CRENOLIBRE_URL } from '@/utils/constants';
import { scrollTo } from '@/utils/scrollTo';
import logoImg from '@/assets/logo.png';
import bannerBg from '@/assets/banner-bis.jpg';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bgImage}>
        <img src={bannerBg} alt="" aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <motion.img
          src={logoImg}
          alt="Logo EnAIRgie & Diététique"
          className={styles.logo}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Énairgie & Diététique
        </motion.h1>

        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          La santé de la matière première à l'invisible.
        </motion.p>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Respirer, se nourrir, rayonner.
        </motion.p>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Tous les lundis à Montévrain, je vous propose de retrouver un équilibre,
          qu'il soit alimentaire, émotionnel, ou encore énergétique.
          Venez pour un moment de partage, où l'on apprend, on se détend
          et on ressort avec plus de clarté, de sérénité et de conscience.
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Button variant="diet" size="lg" href={DOCTOLIB_URL}>
            <Salad size={20} />
            Prendre RDV Diététique
          </Button>
          <Button variant="energy" size="lg" href={CRENOLIBRE_URL}>
            <Sparkles size={20} />
            Prendre RDV Énergétique
          </Button>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={() => scrollTo('storytelling')}
      >
        <span>Découvrir</span>
        <ChevronDown className={styles.chevron} />
      </motion.div>
    </section>
  );
}

