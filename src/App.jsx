import Layout from './components/Layout.jsx';
import Home from './sections/Home.jsx';
import About from './sections/About.jsx';
import Work from './sections/Work.jsx';
import Experience from './sections/Experience.jsx';
import Skills from './sections/Skills.jsx';
import Education from './sections/Education.jsx';
import Contact from './sections/Contact.jsx';
import { sections } from './data/navigation.js';
import usePageMeta from './hooks/usePageMeta.js';
import useScrollReveal from './hooks/useScrollReveal.js';

const content = { home: Home, about: About, work: Work, experience: Experience, skills: Skills, education: Education, contact: Contact };

export default function App() {
  usePageMeta('Creator Partnerships & Influencer Outreach', 'Meet Myra Bathan. Explore her experience, creator partnerships, skills, education, and contact details in one continuous portfolio.');
  useScrollReveal();
  return <Layout>{sections.map(({ id, tone }) => {
    const Content = content[id];
    return <section id={id} className={`scroll-section section-${id} tone-${tone}`} aria-labelledby={`${id}-title`} key={id}><Content /></section>;
  })}</Layout>;
}
