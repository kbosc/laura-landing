import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import styles from './SectionTitle.module.scss';

interface Props {
  title: string;
  subtitle?: string;
  showDivider?: boolean;
}

export default function SectionTitle({ title, subtitle, showDivider = true }: Props) {
  return (
    <motion.div className={styles.wrapper} variants={fadeInUp}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {showDivider && <div className={styles.divider} />}
    </motion.div>
  );
}

