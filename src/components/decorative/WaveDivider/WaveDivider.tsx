import styles from './WaveDivider.module.scss';

interface Props {
  colorAbove?: string;
  colorBelow?: string;
  flip?: boolean;
}

export default function WaveDivider({
  colorAbove = '#FAF8F5',
  colorBelow = '#F3EDE4',
  flip = false,
}: Props) {
  const wrapperBg = flip ? colorBelow : colorAbove;

  return (
    <div className={styles.wrapper} style={{ backgroundColor: wrapperBg }}>
      <svg
        className={`${styles.wave} ${flip ? styles.flip : ''}`}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={colorBelow}
        />
      </svg>
    </div>
  );
}
