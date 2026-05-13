import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionWrapper from '@/layouts/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { detailGroups } from '@/data/details';
import styles from './Details.module.scss';

type Tab = 'diet' | 'energy';

const tabColors: Record<Tab, string> = {
  diet: '#6EA86A',
  energy: '#9B7EC8',
};

function AccordionItem({
  title,
  content,
  universe,
}: {
  title: string;
  content: string;
  universe: Tab;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.item} ${universe === 'diet' ? styles.itemDiet : styles.itemEnergy}`}>
      <button className={styles.trigger} onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className={styles.triggerTitle}>{title}</span>
        <ChevronDown
          size={20}
          className={`${styles.triggerIcon} ${open ? styles.triggerIconOpen : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className={styles.body}
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className={styles.bodyInner}>{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Details() {
  const [activeTab, setActiveTab] = useState<Tab>('diet');
  const group = detailGroups.find((g) => g.universe === activeTab)!;

  return (
    <SectionWrapper id="details" altBg>
      <SectionTitle
        title="Comment ça se passe ?"
        subtitle="Tout ce que vous souhaitez savoir avant votre rendez-vous"
      />

      <div className={styles.tabs}>
        <motion.div
          className={styles.tabIndicator}
          animate={{ x: activeTab === 'diet' ? 0 : '100%', width: '50%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ backgroundColor: tabColors[activeTab] }}
        />
        {(['diet', 'energy'] as Tab[]).map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {detailGroups.find((g) => g.universe === tab)!.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className={styles.accordion}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3 }}
        >
          {group.items.map((item) => (
            <AccordionItem
              key={item.title}
              title={item.title}
              content={item.content}
              universe={activeTab}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
