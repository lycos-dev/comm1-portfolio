import { useState } from 'react';
import { Radar, Handshake, ListChecks, ChartNoAxesCombined, ArrowUpRight } from 'lucide-react';
import PageHeading from '../components/PageHeading.jsx';
import Carousel from '../components/Carousel.jsx';
import Reveal from '../components/Reveal.jsx';
import { skills } from '../data/portfolio.js';
import { skillTools } from '../data/profile.js';

const icons = [Radar, Handshake, ListChecks, ChartNoAxesCombined];
export default function Skills() {
  const [tab, setTab] = useState(0);
  return <div className="container section-content"><PageHeading id="skills-title" label="Skills & strengths" title={<>People skills.<br />Practical systems.</>} description="The right balance of research, communication, and organization throughout the partnership lifecycle." />
    <Carousel id="skills-carousel" label="skills" className="skills-carousel">{skills.map((skill, index) => { const Icon = icons[index]; return <article className="capability-card" key={skill.title}><div className="capability-top"><span className="icon-tile"><Icon size={25} /></span><span className="eyebrow muted">0{index + 1}</span></div><h3>{skill.title}</h3><p>{skill.description}</p><div className="capability-line" aria-hidden="true" /><div className="tags">{skill.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>; })}</Carousel>
    <Reveal className="tool-section"><div className="section-intro"><p className="eyebrow">A practical toolkit</p><h2>Tools that keep the work moving.</h2></div><div className="tool-tabs" role="tablist" aria-label="Tool categories">{skillTools.map(([name], index) => <button key={name} id={`tool-tab-${index}`} role="tab" aria-selected={tab === index} aria-controls={`tool-panel-${index}`} tabIndex={tab === index ? 0 : -1} onClick={() => setTab(index)} onKeyDown={event => { const next = event.key === 'ArrowRight' ? (index + 1) % skillTools.length : event.key === 'ArrowLeft' ? (index + skillTools.length - 1) % skillTools.length : event.key === 'Home' ? 0 : event.key === 'End' ? skillTools.length - 1 : null; if (next !== null) { event.preventDefault(); setTab(next); document.getElementById(`tool-tab-${next}`)?.focus(); } }}>{name}</button>)}</div><div className="tool-panel" role="tabpanel" id={`tool-panel-${tab}`} aria-labelledby={`tool-tab-${tab}`} tabIndex={0} key={tab}>{skillTools[tab][1].map(tool => <span className="tool-chip" key={tool}>{tool}</span>)}</div></Reveal><a className="inline-next" href="#work"><span>See these skills in action.</span><span className="circle-arrow"><ArrowUpRight size={22} /></span></a>
  </div>;
}
