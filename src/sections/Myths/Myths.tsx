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
      className={`${styles.card} ${flipped ? styles.flipped : ''}`}
      variants={fadeInUp}
      onClick={() => setFlipped(!flipped)}
    >
      <div className={styles.cardInner}>
        <div className={`${styles.cardFace} ${styles.front}`}>
          <span className={styles.badge}>❌ Idée reçue</span>
          <p>« {myth} »</p>
          <span className={styles.hint}>Cliquez pour découvrir la réalité</span>
        </div>
        <div className={`${styles.cardFace} ${styles.back}`}>
          <span className={styles.badge}>✅ Réalité</span>
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
        title="Démêlons le vrai du faux"
        subtitle="Ces croyances qui sabotent votre alimentation"
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

