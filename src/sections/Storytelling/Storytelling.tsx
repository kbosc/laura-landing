import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight } from '@/utils/animations';
import { scrollTo } from '@/utils/scrollTo';
import SectionWrapper from '@/layouts/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import Button from '@/components/ui/Button/Button';
import lauraProfil from '@/assets/laura-profil.jpg';
import styles from './Storytelling.module.scss';

export default function Storytelling() {
  return (
    <SectionWrapper id="storytelling">
      <SectionTitle
        title="Votre Diététicienne-Énergéticienne"
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
          <img
            src={lauraProfil}
            alt="Laura Litaudon, diététicienne-énergéticienne"
            className={styles.portrait}
            width={340}
            height={340}
          />
        </motion.div>

        <motion.div
          className={styles.textCol}
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p>
            Diététicienne depuis bientôt 10 ans, c'est forte de mon expérience
            que je mets aujourd'hui mes compétences à votre service.
          </p>
          <p>
            La pluralité et la diversité de mes expériences me permettent
            aujourd'hui de prendre en charge les patients allant du bébé à la
            personne âgée.
          </p>
          <p>
            Énergéticienne depuis avril 2025, je fais le choix de proposer des
            soins énergétiques et des guidances afin de vous aider à retrouver
            un équilibre intérieur et de l'apaisement.
          </p>
          <p>
            L'énergétique me permet aujourd'hui d'approfondir la cause de certains
            symptômes que vous m'indiquerez en consultations diététiques. La
            partie énergétique permet de mettre en lumière des éléments que nous
            ne voyons parfois pas au premier abord.
          </p>
          <p>
            Il est demandé ici de revenir à soi et laisser place à davantage de
            silence pour entendre les messages que notre corps cherche à nous
            faire passer de diverses manières.
          </p>
          <p>
            L'idée est également de pouvoir déconstruire les croyances limitantes
            qui peuvent nous impacter et nous freiner. En diététique et en
            énergétique, nous pourrons travailler conjointement pour démêler le
            vrai du faux et vous permettre de retrouver assurance et autonomie.
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

