import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import styles from './SectionWrapper.module.scss';

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
  altBg?: boolean;
}

export default function SectionWrapper({ id, children, className = '', altBg = false }: Props) {
  return (
    <motion.section
      id={id}
      className={`${styles.section} ${altBg ? styles.altBg : ''} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
    >
      <div className={styles.container}>
        {children}
      </div>
    </motion.section>
  );
}

