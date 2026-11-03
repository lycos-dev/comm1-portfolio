import { Children, useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Carousel({ children, label, id, className = '' }) {
  const ref = useRef(null);
  const targets = useRef([0]);
  const [position, setPosition] = useState(0);
  const [total, setTotal] = useState(1);
  const items = Children.toArray(children);
  const sync = useCallback(() => {
    const rail = ref.current;
    if (!rail) return;
    const max = Math.max(0, rail.scrollWidth - rail.clientWidth);
    const first = rail.firstElementChild?.offsetLeft || 0;
    targets.current = [...new Set([...rail.children].map(child => Math.round(Math.min(max, child.offsetLeft - first))))];
    const best = targets.current.reduce((nearest, point, i, points) => Math.abs(point - rail.scrollLeft) < Math.abs(points[nearest] - rail.scrollLeft) ? i : nearest, 0);
    setPosition(best); setTotal(targets.current.length);
  }, []);
  useEffect(() => {
    sync(); const rail = ref.current;
    rail.addEventListener('scroll', sync, { passive: true });
    const observer = new ResizeObserver(sync); observer.observe(rail);
    return () => { observer.disconnect(); rail.removeEventListener('scroll', sync); };
  }, [sync, items.length]);
  const go = index => ref.current.scrollTo({ left: targets.current[Math.max(0, Math.min(total - 1, index))], behavior: window.matchMedia('(prefers-reduced-motion:reduce)').matches ? 'instant' : 'smooth' });
  return <div className={`carousel ${className}`}><div ref={ref} id={id} className="carousel-track" role="region" aria-roledescription="carousel" aria-label={label} tabIndex={0} onKeyDown={event => {
    if (event.target !== event.currentTarget) return;
    const index = event.key === 'ArrowRight' ? position + 1 : event.key === 'ArrowLeft' ? position - 1 : event.key === 'Home' ? 0 : event.key === 'End' ? total - 1 : null;
    if (index !== null) { event.preventDefault(); go(index); }
  }}>{items}</div><div className="carousel-bottom"><span className="muted small">Swipe to explore <span aria-hidden="true">↔</span></span><div className="carousel-dots" role="group" aria-label={`${label} positions`}>{Array.from({ length: total }, (_, index) => <button key={index} aria-label={`Show ${label} position ${index + 1}`} aria-current={position === index ? 'true' : undefined} className={position === index ? 'selected' : ''} onClick={() => go(index)}><span /></button>)}</div><div className="carousel-arrows"><button className="icon-button" disabled={position === 0} aria-label={`Previous ${label}`} aria-controls={id} onClick={() => go(position - 1)}><ArrowLeft size={18} /></button><button className="icon-button" disabled={position === total - 1} aria-label={`Next ${label}`} aria-controls={id} onClick={() => go(position + 1)}><ArrowRight size={18} /></button></div></div></div>;
}
