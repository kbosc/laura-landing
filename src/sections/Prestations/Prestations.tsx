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
    color: '#8FAE7E',
    intro: 'Oubliez les régimes restrictifs et les interdits. Mon approche de la diététique est flexible, bienveillante et adaptée à votre réalité : votre rythme de vie, vos goûts, votre budget, votre culture. J\'accompagne tous les publics, du nourrisson au senior, dans une démarche de plaisir retrouvé autour de l\'alimentation.',
    services: dietServices,
    ctaLabel: 'Réserver une consultation Diététique',
    ctaUrl: DOCTOLIB_URL,
  },
  energy: {
    label: 'Énergétique',
    color: '#D4A0A7',
    intro: 'Les soins énergétiques agissent sur vos corps subtils pour libérer les blocages émotionnels, soulager le stress et restaurer la circulation de votre énergie vitale. Chaque soin est un moment de profonde détente et de reconnexion à soi.',
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
        title={activeTab === 'diet' ? 'Diététique' : 'Soins Énergétiques'}
        subtitle={activeTab === 'diet' ? 'Une alimentation qui vous ressemble' : 'Reconnectez-vous à votre harmonie intérieure'}
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


