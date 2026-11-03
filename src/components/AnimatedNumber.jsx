import { useEffect, useRef, useState } from 'react';
export default function AnimatedNumber({ value, prefix = '', suffix = '' }) {
  const ref = useRef(null); const [current, setCurrent] = useState(value);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect(); const start = performance.now();
      const update = now => { const time = Math.min(1, (now - start) / 1200); setCurrent(Math.round(value * (1 - (1 - time) ** 3))); if (time < 1) frame = requestAnimationFrame(update); };
      frame = requestAnimationFrame(update);
    }, { threshold: .4 });
    observer.observe(ref.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value]);
  return <span ref={ref} aria-label={`${prefix}${value}${suffix}`}><span aria-hidden="true">{prefix}{current}{suffix}</span></span>;
}
