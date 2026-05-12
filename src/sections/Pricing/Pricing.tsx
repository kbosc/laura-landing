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

            {cat.sections.map((section, si) => (
              <div key={si} className={styles.section}>
                {section.subtitle && (
                  <h4 className={styles.sectionTitle}>{section.subtitle}</h4>
                )}
                <div className={styles.items}>
                  {section.items.map((item) => (
                    <div key={item.title} className={`${styles.item} ${item.highlight ? styles.itemHighlight : ''}`}>
                      <div className={styles.itemInfo}>
                        <span>{item.title}</span>
                        {item.duration && <small>{item.duration}</small>}
                      </div>
                      <div className={styles.itemPrice}>{item.price}</div>
                    </div>
                  ))}
                </div>
                {section.note && (
                  <p className={styles.sectionNote}>{section.note}</p>
                )}
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      <div className={styles.note}>
        <p>
          <strong>Bon à savoir :</strong> Certaines mutuelles remboursent jusqu'à 3 consultations
          diététiques par an. Une facture vous est remise sans souci pour votre demande de remboursement.
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
