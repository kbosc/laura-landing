import { motion } from 'framer-motion';
import SectionWrapper from '@/layouts/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import Button from '@/components/ui/Button/Button';
import { getIcon } from '@/components/ui/Icon/Icon';
import { workshops } from '@/data/workshops';
import { staggerContainer, fadeInUp } from '@/utils/animations';
import { scrollTo } from '@/utils/scrollTo';
import styles from './Workshops.module.scss';

export default function Workshops() {
  return (
    <SectionWrapper id="ateliers">
      <SectionTitle
        title="Les ateliers"
        subtitle="Apprenez, partagez, grandissez ensemble"
      />

      <p className={styles.intro}>
        Tous les lundis à Montévrain, je propose des ateliers en petit groupe
        pour explorer ensemble des thématiques autour de l'alimentation, du bien-être
        et de l'énergétique. Un moment convivial d'apprentissage et de partage
        dans un cadre bienveillant.
      </p>

      <motion.div
        className={styles.grid}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {workshops.map((ws) => (
          <motion.div key={ws.title} className={styles.card} variants={fadeInUp}
            whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(58,46,42,0.14)' }}
          >
            <div className={styles.icon}>{getIcon(ws.icon, 28)}</div>
            <h3 className={styles.cardTitle}>{ws.title}</h3>
            <p className={styles.cardDesc}>{ws.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className={styles.ctaWrapper}>
        <Button variant="outline" onClick={() => scrollTo('contact')}>
          Me contacter pour les prochains ateliers
        </Button>
      </div>
    </SectionWrapper>
  );
}



