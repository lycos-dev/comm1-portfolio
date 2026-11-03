import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Linkedin, ArrowUpRight, Copy, Check, MessageCircle, MapPin } from 'lucide-react';
import PageHeading from '../components/PageHeading.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { profile } from '../data/profile.js';

export default function Contact() {
  const [copied, setCopied] = useState(false); const [copyStatus, setCopyStatus] = useState(''); const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setCopyStatus('Email address copied.'); clearTimeout(timer.current); timer.current = setTimeout(() => setCopied(false), 3000); }
    catch { setCopyStatus(`Email Myra at ${profile.email}.`); }
  }
  return <div className="container section-content"><PageHeading id="contact-title" label="Let’s connect" title={<>A good partnership<br />starts with hello.</>} description="Have a role, a brand, or an opportunity in mind? I’d love to hear about it." /><div className="contact-layout"><div className="contact-details"><p className="availability"><span />Open to new opportunities</p><h2>Let’s find out<br />what we can build together.</h2><p>I bring a thoughtful approach to outreach and dependable follow-through to the work. Tell me a little about what your team needs.</p><div className="contact-methods"><div className="contact-method"><span className="icon-tile"><Mail size={20} /></span><a href={`mailto:${profile.email}`}><small>Email me</small><strong>{profile.email}</strong></a><button className="icon-button" onClick={copyEmail} aria-label="Copy email address">{copied ? <Check size={17} /> : <Copy size={17} />}</button></div>{[[Phone, 'Call', profile.phone, `tel:${profile.telephone}`], [MessageCircle, 'WhatsApp', 'Start a conversation', profile.whatsapp], [Linkedin, 'LinkedIn', 'myra-bathan-va', profile.linkedin]].map(([Icon, label, text, href]) => <a className="contact-method" href={href} key={label} {...(href.startsWith('https') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}><span className="icon-tile"><Icon size={20} /></span><span><small>{label}</small><strong>{text}</strong></span><ArrowUpRight size={18} /></a>)}</div><p className="copy-status" role="status">{copyStatus}</p><div className="location-note"><MapPin size={17} /><span>Based in the Philippines.<br /><strong>Experience across the US, UK, Australia &amp; Asia.</strong></span></div></div><ContactForm /></div></div>;
}
