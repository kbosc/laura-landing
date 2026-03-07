import { useEffect, useState } from 'react';

const colorStops = [
  { pos: 0,    color: [250, 248, 245] },  // #FAF8F5 blanc cassé
  { pos: 0.15, color: [245, 230, 163] },  // #F5E6A3 jaune citron
  { pos: 0.3,  color: [232, 240, 226] },  // #E8F0E2 vert clair
  { pos: 0.5,  color: [242, 228, 232] },  // #F2E4E8 rose clair
  { pos: 0.7,  color: [232, 220, 240] },  // #E8DCF0 lavande
  { pos: 0.85, color: [243, 237, 228] },  // #F3EDE4 crème
  { pos: 1,    color: [250, 248, 245] },  // #FAF8F5 blanc cassé
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function getColorAtProgress(progress: number): string {
  let i = 0;
  while (i < colorStops.length - 1 && colorStops[i + 1].pos < progress) i++;
  if (i >= colorStops.length - 1) return `rgb(${colorStops[colorStops.length - 1].color.join(',')})`;

  const from = colorStops[i];
  const to = colorStops[i + 1];
  const t = (progress - from.pos) / (to.pos - from.pos);

  const r = Math.round(lerp(from.color[0], to.color[0], t));
  const g = Math.round(lerp(from.color[1], to.color[1], t));
  const b = Math.round(lerp(from.color[2], to.color[2], t));

  return `rgb(${r},${g},${b})`;
}

export default function GradientOverlay() {
  const [color, setColor] = useState('rgb(250,248,245)');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setColor(getColorAtProgress(progress));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        backgroundColor: color,
        transition: 'background-color 0.3s ease',
        pointerEvents: 'none',
      }}
    />
  );
}

