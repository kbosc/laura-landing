import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import styles from './Button.module.scss';

type Variant = 'diet' | 'energy' | 'gold' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type BaseProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type AsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type AsLink = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = AsButton | AsLink;

export default function Button({ variant = 'gold', size = 'md', children, className = '', ...rest }: Props) {
  const classes = `${styles.button} ${styles[variant]} ${size !== 'md' ? styles[size] : ''} ${className}`.trim();

  if ('href' in rest && rest.href) {
    const { href, ...anchorProps } = rest as AsLink;
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer" {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as AsButton)}>
      {children}
    </button>
  );
}

