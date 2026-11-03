import { useEffect, useRef } from 'react';

export default function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    element.classList.add('reveal-ready');
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { element.classList.add('revealed'); observer.disconnect(); }
    }, { threshold: .12 });
    observer.observe(element);
    return () => { observer.disconnect(); element.classList.remove('reveal-ready'); };
  }, []);
  return ref;
}
