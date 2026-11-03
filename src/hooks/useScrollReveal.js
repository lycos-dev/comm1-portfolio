import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const root = document.querySelector('.continuous-page');
    if (!root || !('IntersectionObserver' in window)) return;
    const selector = '.page-heading,.hero-copy,.portrait-composition,.home-proof,.project-card,.timeline-card,.capability-card,.education-card,.education-bottom,.contact-details,.contact-form,.market-strip';
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const observed = new WeakSet();
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('scroll-visible'); observer.unobserve(entry.target); }
    }), { threshold: .08, rootMargin: '0px 0px -25px 0px' });
    const scan = () => {
      root.querySelectorAll(selector).forEach(element => {
        if (observed.has(element)) return;
        observed.add(element);
        if (media.matches) return;
        element.classList.add('scroll-animate');
        const group = element.closest('.carousel-track,.timeline');
        if (group) {
          const index = [...group.children].findIndex(child => child === element || child.contains(element));
          element.style.setProperty('--reveal-delay', `${(Math.max(0, index) % 3) * 65}ms`);
        }
        observer.observe(element);
      });
    };
    scan();
    const mutation = new MutationObserver(scan); mutation.observe(root, { childList: true, subtree: true });
    const respectPreference = () => { if (media.matches) { observer.disconnect(); root.querySelectorAll('.scroll-animate').forEach(element => element.classList.add('scroll-visible')); } };
    media.addEventListener('change', respectPreference);
    return () => { observer.disconnect(); mutation.disconnect(); media.removeEventListener('change', respectPreference); root.querySelectorAll('.scroll-animate').forEach(element => element.classList.remove('scroll-animate')); };
  }, []);
}
