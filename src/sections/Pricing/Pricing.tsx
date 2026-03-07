import { motion } from 'framer-motion';
import { Salad, Sparkles } from 'lucide-react';
import SectionWrapper from '@/layouts/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import Button from '@/components/ui/Button/Button';
import { pricingData } from '@/data/pricing';
import { DOCTOLIB_URL, CRENOLIBRE_URL } from '@/utils/constants';
import { slideInLeft, slideInRight } from '@/utils/animations';
import styles from './Pricing.module.scss';

export default function Pricing() {
  return (
    <SectionWrapper id="tarifs">
      <SectionTitle title="Tarifs transparents" subtitle="Investissez dans votre bien-être" />

      <div className={styles.grid}>
        {pricingData.map((cat, ci) => (
          <motion.div
            key={cat.title}
            className={styles.column}
            variants={ci === 0 ? slideInLeft : slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={`${styles.columnHeader} ${cat.universe === 'diet' ? styles.headerDiet : styles.headerEnergy}`}>
              <h3>{cat.title}</h3>
            </div>
            <div className={styles.items}>
              {cat.items.map((item) => (
                <div key={item.title} className={`${styles.item} ${item.highlight ? styles.itemHighlight : ''}`}>
                  <div className={styles.itemInfo}>
                    <h4>{item.title}</h4>
                    <span>{item.duration}</span>
                  </div>
                  <div className={styles.itemPrice}>{item.price}</div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className={styles.note}>
        <p>
          <strong>💡 Bon à savoir :</strong> Certaines mutuelles remboursent les consultations
          diététiques. Renseignez-vous auprès de la vôtre ! Possibilité de combiner une
          consultation diététique et un soin énergétique pour une approche complète.
        </p>
      </div>

      <div className={styles.ctaWrapper}>
        <Button variant="diet" size="lg" href={DOCTOLIB_URL}>
          <Salad size={20} />
          Réserver Diététique
        </Button>
        <Button variant="energy" size="lg" href={CRENOLIBRE_URL}>
          <Sparkles size={20} />
          Réserver Énergétique
        </Button>
      </div>
    </SectionWrapper>
  );
}

