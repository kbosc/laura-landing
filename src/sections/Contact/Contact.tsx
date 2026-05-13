import { motion } from 'framer-motion';
import { MapPin, Mail, Clock, Phone, Instagram, Facebook } from 'lucide-react';
import SectionWrapper from '@/layouts/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { EMAIL, PHONE, ADDRESS, INSTAGRAM_URL, FACEBOOK_URL } from '@/utils/constants';
import { fadeInUp, slideInLeft, slideInRight } from '@/utils/animations';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <>
      <SectionWrapper id="contact">
        <SectionTitle
          title="Rencontrons-nous"
          subtitle="Au cabinet ou en visio, je suis là pour vous"
        />

        <div className={styles.grid}>
          <motion.div
            className={styles.info}
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={styles.infoItem}>
              <div className={styles.iconCircle}><MapPin /></div>
              <div className={styles.infoText}>
                <h4>Adresse</h4>
                <p>{ADDRESS}</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconCircle}><Mail /></div>
              <div className={styles.infoText}>
                <h4>Email</h4>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconCircle}><Phone /></div>
              <div className={styles.infoText}>
                <h4>Téléphone</h4>
                <a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconCircle}><Clock /></div>
              <div className={styles.infoText}>
                <h4>Horaires</h4>
                <p>Du lundi au vendredi, 9h – 19h<br />Samedi sur rendez-vous</p>
              </div>
            </div>

            <div className={styles.socials}>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Instagram">
                <Instagram />
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Facebook">
                <Facebook />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={styles.mapWrapper}>
              <iframe
                title="Localisation Énairgie & Diététique — Montévrain"
                className={styles.map}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?cid=2673637707251477877&output=embed&hl=fr&z=16"
              />
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className={styles.footer}>
        <motion.div
          className={styles.footerInner}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className={styles.footerBrand}>
            <h4>Énairgie & Diététique</h4>
            <p>Respirer, se nourrir, rayonner.</p>
          </div>

          <div className={styles.footerLinks}>
            <a href="#mentions-legales">Mentions légales</a>
            <a href="#confidentialite">Confidentialité</a>
          </div>

          <div className={styles.footerCopy}>
            <p>© 2026 Énairgie & Diététique — Laura Litaudon</p>
            <p>Tous droits réservés</p>
            <div className={styles.badges}>
              <span>N° ADELI</span>
              <span>Certifiée Reiki Usui</span>
            </div>
          </div>
        </motion.div>
      </footer>
    </>
  );
}

