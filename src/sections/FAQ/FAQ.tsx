import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionWrapper from '@/layouts/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { faqData } from '@/data/faq';
import { useAppStore } from '@/store/useAppStore';
import { staggerContainer, fadeInUp } from '@/utils/animations';
import styles from './FAQ.module.scss';

export default function FAQ() {
  const expandedIndex = useAppStore((s) => s.expandedFaqIndex);
  const setExpanded = useAppStore((s) => s.setExpandedFaq);

  const toggle = (i: number) => {
    setExpanded(expandedIndex === i ? null : i);
  };

  return (
    <SectionWrapper id="faq" altBg>
      <SectionTitle
        title="Questions fréquentes"
        subtitle="Tout ce que vous voulez savoir avant de prendre rendez-vous"
      />

      <motion.div
        className={styles.list}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {faqData.map((item, i) => (
          <motion.div
            key={item.question}
            className={`${styles.item} ${expandedIndex === i ? styles.open : ''}`}
            variants={fadeInUp}
          >
            <button
              className={styles.question}
              onClick={() => toggle(i)}
              aria-expanded={expandedIndex === i}
              aria-controls={`faq-answer-${i}`}
            >
              <span>{item.question}</span>
              <ChevronDown aria-hidden="true" />
            </button>
            <AnimatePresence>
              {expandedIndex === i && (
                <motion.div
                  id={`faq-answer-${i}`}
                  className={styles.answer}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  role="region"
                  aria-label={item.question}
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

