import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@/layouts/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import Button from '@/components/ui/Button/Button';
import { getIcon } from '@/components/ui/Icon/Icon';
import { dietServices, energyServices } from '@/data/services';
import { DOCTOLIB_URL, CRENOLIBRE_URL } from '@/utils/constants';
import { staggerContainer, fadeInUp } from '@/utils/animations';
import type { Service } from '@/types';
import styles from './Prestations.module.scss';

type Tab = 'diet' | 'energy';

const tabConfig = {
  diet: {
    label: 'Diététique',
    color: '#6EA86A',
    intro: 'Mon objectif est que vous ressortiez de nos consultations avec une relation saine avec votre alimentation afin que vous puissiez faire des choix conscients et autonomes sur ce que vous allez manger au quotidien. L\'alimentation doit rester une source d\'apports énergétiques et de plaisir. L\'idée c\'est de prendre soin de sa santé tout en restant dans une alimentation adaptée à votre rythme de vie et à vos particularités qui vous sont propres.',
    subtitle: 'Une alimentation complète et flexible',
    services: dietServices,
    ctaLabel: 'Réserver une consultation Diététique',
    ctaUrl: DOCTOLIB_URL,
  },
  energy: {
    label: 'Énergétique',
    color: '#9B7EC8',
    intro: 'L\'énergétique, que ça soit à l\'aide de soins énergétiques, de guidances ou la cartomancie, vous permettra d\'aller plus en profondeur pour mieux vous comprendre et comprendre votre fonctionnement. Cela vous apportera également de la douceur, de la relaxation et du bien-être.',
    subtitle: 'Reconnectez-vous à votre harmonie intérieure',
    services: energyServices,
    ctaLabel: 'Réserver un soin Énergétique',
    ctaUrl: CRENOLIBRE_URL,
  },
};

function ServiceCard({ service, universe }: { service: Service; universe: Tab }) {
  return (
    <motion.div
      className={`${styles.card} ${universe === 'diet' ? styles.cardDiet : styles.cardEnergy}`}
      variants={fadeInUp}
      whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(58,46,42,0.14)' }}
    >
      <div className={styles.cardIcon}>
        {getIcon(service.icon)}
      </div>
      <h3 className={styles.cardTitle}>{service.title}</h3>
      <p className={styles.cardDescription}>{service.description}</p>
    </motion.div>
  );
}

export default function Prestations() {
  const [activeTab, setActiveTab] = useState<Tab>('diet');
  const config = tabConfig[activeTab];

  return (
    <SectionWrapper id="prestations" altBg>
      <SectionTitle
        title={activeTab === 'diet' ? 'Diététique' : 'Énergétique'}
        subtitle={config.subtitle}
      />

      <div className={styles.tabs} style={{ position: 'relative' }}>
        <motion.div
          className={styles.tabIndicator}
          animate={{
            x: activeTab === 'diet' ? 0 : '100%',
            width: '50%',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ backgroundColor: config.color }}
        />
        {(['diet', 'energy'] as Tab[]).map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tabConfig[tab].label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <p className={styles.intro}>{config.intro}</p>

          <motion.div
            className={styles.grid}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {config.services.map((service) => (
              <ServiceCard key={service.title} service={service} universe={activeTab} />
            ))}
          </motion.div>

          <div className={styles.ctaWrapper}>
            <Button variant={activeTab === 'diet' ? 'diet' : 'energy'} size="lg" href={config.ctaUrl}>
              {config.ctaLabel}
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}


