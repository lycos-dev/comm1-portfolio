import { GraduationCap, ArrowUpRight, BookOpen } from 'lucide-react';
import PageHeading from '../components/PageHeading.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Education() {
  return <div className="container section-content"><PageHeading id="education-title" label="Education" title={<>An academic foundation.<br />A practical mindset.</>} description="My formal education, alongside hands-on experience in creator partnerships and campaign coordination." /><Reveal className="education-card"><div className="education-visual"><GraduationCap size={84} strokeWidth={1} /><span className="eyebrow">1996 — 2000</span></div><div className="education-content"><span className="pill">Bachelor’s degree</span><h2>BS Medical Technology</h2><p>Lyceum of the Philippines University</p><div className="education-divider" /><p className="muted">An academic chapter before my freelance work in influencer outreach, affiliate marketing, and creator partnerships.</p></div></Reveal><div className="education-bottom"><BookOpen size={24} /><div><h3>Explore the professional chapter.</h3><p>See the brands, roles, and responsibilities that have shaped my experience since 2023.</p></div><a className="button button-outline" href="#experience">My experience <ArrowUpRight size={17} /></a></div></div>;
}
