import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/layouts/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import Button from '@/components/ui/Button/Button';
import { myths } from '@/data/myths';
import { staggerContainer, fadeInUp } from '@/utils/animations';
import { scrollTo } from '@/utils/scrollTo';
import styles from './Myths.module.scss';

function MythCard({ myth, reality }: { myth: string; reality: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={flipped ? `Réalité : ${reality}` : `Idée reçue : ${myth}. Appuyez pour révéler la réalité.`}
      className={`${styles.card} ${flipped ? styles.flipped : ''}`}
      variants={fadeInUp}
      onClick={() => setFlipped(!flipped)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFlipped(!flipped); } }}
    >
      <div className={styles.cardInner} aria-hidden="true">
        <div className={`${styles.cardFace} ${styles.front}`}>
          <span className={styles.badge}><span aria-hidden="true">❌ </span>Idée reçue</span>
          <p>« {myth} »</p>
          <span className={styles.hint}>Cliquez pour découvrir la réalité</span>
        </div>
        <div className={`${styles.cardFace} ${styles.back}`}>
          <span className={styles.badge}><span aria-hidden="true">✅ </span>Réalité</span>
          <p>{reality}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Myths() {
  return (
    <SectionWrapper id="myths" altBg>
      <SectionTitle
        title="Vrai/faux sur vos croyances"
        subtitle="Ces idées reçues qui nous freinent"
      />

      <motion.div
        className={styles.grid}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {myths.map((m) => (
          <MythCard key={m.myth} myth={m.myth} reality={m.reality} />
        ))}
      </motion.div>

      <div className={styles.ctaWrapper}>
        <Button variant="outline" onClick={() => scrollTo('tarifs')}>
          Envie d'en apprendre plus ? Réservez votre bilan
        </Button>
      </div>
    </SectionWrapper>
  );
}

