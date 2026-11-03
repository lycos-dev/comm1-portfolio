import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, BriefcaseBusiness, House, Mail, Menu, X, Linkedin, ArrowUp, Layers } from 'lucide-react';
import { profile } from '../data/profile.js';
import { sections } from '../data/navigation.js';
import useScrollNavigation from '../hooks/useScrollNavigation.js';

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null); const header = useRef(null);
  const { active, progress } = useScrollNavigation();
  useEffect(() => {
    const handle = event => {
      if (event.type === 'keydown' && event.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus(); }
      if (event.type === 'pointerdown' && !header.current?.contains(event.target)) setOpen(false);
    };
    const media = window.matchMedia('(min-width:901px)');
    const resize = () => { if (media.matches) setOpen(false); };
    media.addEventListener('change', resize);
    document.addEventListener('keydown', handle); document.addEventListener('pointerdown', handle);
    return () => { media.removeEventListener('change', resize); document.removeEventListener('keydown', handle); document.removeEventListener('pointerdown', handle); };
  }, [open]);
  const anchorProps = id => ({ href: `#${id}`, 'aria-current': active === id ? 'location' : undefined, onClick: () => setOpen(false) });
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="reading-progress" aria-hidden="true" style={{ width: `${progress}%` }} />
    <header className="header-shell" ref={header}><div className="site-header">
      <a className="brand" href="#home" aria-label="Myra Bathan home" onClick={() => setOpen(false)}><img className="brand-logo" src="/myra-logo.png" alt="" width="48" height="48" /><span>Myra Bathan<span className="brand-dot">.</span></span></a>
      <nav className={`desktop-nav ${open ? 'is-open' : ''}`} id="main-navigation" aria-label="Main navigation">{sections.map(({ id, label }) => <a key={id} {...anchorProps(id)} className={`${active === id ? 'active' : ''} ${id === 'contact' ? 'nav-contact' : ''}`}>{id === 'contact' ? 'Let’s talk' : label}{id === 'contact' && <ArrowUpRight size={16} />}</a>)}</nav>
      <button className="menu-button" ref={menuButton} aria-controls="main-navigation" aria-expanded={open} onClick={() => setOpen(value => !value)}>{open ? 'Close' : 'Menu'}{open ? <X size={19} /> : <Menu size={19} />}</button>
    </div></header>
    <main id="main" tabIndex={-1} className="page-container continuous-page">{children}</main>
    <footer className="footer-band"><div className="site-footer container"><div className="footer-top"><a className="brand" href="#home"><img className="brand-logo" src="/myra-logo.png" alt="" width="48" height="48" />Myra Bathan.</a><p>Thoughtful outreach.<br />Dependable follow-through.</p><div className="footer-socials"><a className="icon-button" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Myra on LinkedIn"><Linkedin size={18} /></a><a className="icon-button" href={`mailto:${profile.email}`} aria-label="Email Myra"><Mail size={18} /></a><a className="icon-button" href="#home" aria-label="Back to top"><ArrowUp size={18} /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Myra Bathan</span><span>Based in the Philippines. Connecting across borders.</span><a href={profile.resume} download>Download résumé <ArrowUpRight size={12} /></a></div></div></footer>
    <nav className="mobile-dock" aria-label="Quick navigation">{[['home', House, 'Home'], ['work', BriefcaseBusiness, 'Work'], ['skills', Layers, 'Skills'], ['contact', Mail, 'Contact']].map(([id, Icon, label]) => <a key={id} {...anchorProps(id)} className={active === id ? 'active' : ''}><Icon size={18} />{label}</a>)}</nav>
  </>;
}
