import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import SectionWrapper from '@/layouts/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { testimonials } from '@/data/testimonials';
import { staggerContainer, fadeInUp } from '@/utils/animations';
import styles from './Testimonials.module.scss';

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <SectionTitle
        title="Ils m'ont fait confiance"
        subtitle="Leurs mots, ma plus belle récompense"
      />

      <motion.div
        className={styles.carousel}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {testimonials.slice(0, 3).map((t) => (
          <motion.div key={t.name} className={styles.card} variants={fadeInUp}
            whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(58,46,42,0.14)' }}
          >
            <span className={styles.quote}>"</span>
            <div className={styles.stars}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            <p className={styles.text}>{t.text}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>
                {t.name.charAt(0)}
              </div>
              <div>
                <div className={styles.authorName}>{t.name}</div>
                {t.age ? <div className={styles.authorAge}>{t.age} ans</div> : null}
                {t.source ? <div className={styles.authorAge}>via {t.source}</div> : null}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className={styles.googleCta}>
        <a
          href="https://www.google.com/search?q=avis+laura+litaudon+mont%C3%A9vrain&tbm=lcl#lkt=LocalPoiReviews"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.googleLink}
        >
          <ExternalLink size={16} />
          Voir tous les avis sur Google
        </a>
      </div>
    </SectionWrapper>
  );
}

