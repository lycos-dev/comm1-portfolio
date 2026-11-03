import { useEffect, useState } from 'react';
import { sections } from '../data/navigation.js';

export default function useScrollNavigation() {
  const [active, setActive] = useState('home');
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let frame = null;
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      setProgress(max > 0 ? Math.min(100, Math.max(0, scrollY / max * 100)) : 0);
      const threshold = (document.querySelector('.header-shell')?.getBoundingClientRect().bottom || 84) + 32;
      let current = 'home';
      sections.forEach(({ id }) => { if (document.getElementById(id)?.getBoundingClientRect().top <= threshold) current = id; });
      if (scrollY + innerHeight >= document.documentElement.scrollHeight - 4) current = 'contact';
      setActive(current); frame = null;
    };
    const schedule = () => { if (frame === null) frame = requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule); observer.observe(document.body);
    addEventListener('scroll', schedule, { passive: true }); addEventListener('resize', schedule); schedule();
    const hash = window.location.hash.slice(1);
    if (sections.some(section => section.id === hash)) requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'instant' }));
    return () => { observer.disconnect(); removeEventListener('scroll', schedule); removeEventListener('resize', schedule); cancelAnimationFrame(frame); };
  }, []);
  return { active, progress };
}
