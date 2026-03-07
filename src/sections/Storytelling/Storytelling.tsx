import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight } from '@/utils/animations';
import { scrollTo } from '@/utils/scrollTo';
import SectionWrapper from '@/layouts/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import Button from '@/components/ui/Button/Button';
import styles from './Storytelling.module.scss';

export default function Storytelling() {
  return (
    <SectionWrapper id="storytelling">
      <SectionTitle
        title="Votre diététicienne, votre énergéticienne"
        subtitle="10 ans à prendre soin de vous"
      />

      <div className={styles.grid}>
        <motion.div
          className={styles.imageCol}
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className={styles.portraitPlaceholder}>LL</div>
        </motion.div>

        <motion.div
          className={styles.textCol}
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p>
            Pendant dix ans, j'ai exercé comme diététicienne salariée dans des
            structures de santé. J'y ai appris la rigueur du soin, l'écoute du
            patient, et surtout que chaque personne est unique dans son rapport
            à l'alimentation.
          </p>
          <p>
            Mais quelque chose manquait. J'ai découvert les soins énergétiques —
            Reiki, Lahochi, soins Isis — et j'ai compris que le bien-être ne se
            résume pas à ce que l'on met dans son assiette. C'est aussi ce que
            l'on porte en soi : nos émotions, nos blocages, notre énergie vitale.
          </p>
          <p>
            En 2024, j'ai fait le choix de l'indépendance pour créer un espace
            où ces deux mondes se rencontrent. EnAIRgie & Diététique est né de
            cette conviction : prendre soin de soi, c'est nourrir son corps ET
            libérer son énergie.
          </p>
          <p className={styles.signature}>
            Ici, pas de régime punitif ni de dogme. Juste une approche humaine,
            bienveillante et personnalisée.
          </p>

          <motion.div className={styles.cta} variants={fadeInUp}>
            <Button variant="outline" onClick={() => scrollTo('prestations')}>
              Découvrir mes prestations
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

