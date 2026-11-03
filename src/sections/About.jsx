import { ArrowUpRight, HeartHandshake, ListChecks, MessagesSquare } from 'lucide-react';
import PageHeading from '../components/PageHeading.jsx';
import Portrait from '../components/Portrait.jsx';
import Reveal from '../components/Reveal.jsx';

export default function About() {
  return <div className="container section-content"><PageHeading id="about-title" label="The person behind the partnerships" title={<>Good work starts<br />with understanding people.</>} description="A little about me, how I work, and what I bring to a team." />
    <section className="about-layout"><Portrait compact /><Reveal className="about-story"><p className="eyebrow">Hello again. I’m Myra.</p><h2>I make collaboration feel human.</h2><p className="lead">I help brands find creators who fit their audience, their values, and their goals.</p><p>My experience spans beauty, fitness, skincare, health and wellness, and tech. From thoughtful research and a personalized first message to onboarding, content tracking, and reporting, I keep every partnership moving with care.</p><p>I work independently, communicate clearly, and stay on top of the details. Whether it’s a first introduction or a campaign already in motion, I want both the brand and the creator to know where things stand.</p><a className="text-link" href="#experience">Explore my experience <ArrowUpRight size={18} /></a></Reveal></section>
    <section className="values-section"><div className="section-intro"><p className="eyebrow">My working style</p><h2>Considerate. Organized. Reliable.</h2></div><div className="values-grid">{[[HeartHandshake, 'People before templates', 'I research the creator, understand their audience, and write outreach that gives them a reason to care.'], [ListChecks, 'Clarity at every step', 'Clean tracking, clear next steps, and consistent follow-ups keep campaigns moving.'], [MessagesSquare, 'Ownership from start to finish', 'I take responsibility for the conversation, the coordination, and the details in between.']].map(([Icon, title, text]) => <Reveal key={title} className="value-card"><span className="icon-tile"><Icon size={22} /></span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></section>
    <div className="market-strip"><p className="eyebrow">Cross-border collaboration</p><div><span>United States</span><span>United Kingdom</span><span>Australia</span><span>Asia</span></div></div>
  </div>;
}
