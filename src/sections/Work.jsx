import { useRef, useState } from 'react';
import ProjectDialog from '../components/ProjectDialog.jsx';
import PageHeading from '../components/PageHeading.jsx';
import Carousel from '../components/Carousel.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/portfolio.js';
import { filterProjects } from '../data/helpers.js';

export default function Work() {
  const [selected, setSelected] = useState(null);
  const trigger = useRef(null);
  const [category, setCategory] = useState('All work');
  const filtered = filterProjects(projects, category);
  return <div className="container section-content"><PageHeading id="work-title" label="Selected work" title={<>Thoughtful outreach.<br />Meaningful outcomes.</>} description="A closer look at the people, process, and results behind the partnerships." />
    <div className="work-filter-row"><div className="filter-pills" role="group" aria-label="Filter campaigns by industry">{['All work', 'Beauty & care', 'Tech', 'Fitness'].map(value => <button key={value} aria-pressed={category === value} onClick={() => setCategory(value)}>{value}</button>)}</div><span className="small muted" role="status">{filtered.length} {filtered.length === 1 ? 'campaign' : 'campaigns'}</span></div>
    <Carousel key={category} id="work-carousel" label="campaigns" className="work-carousel">{filtered.map(project => <ProjectCard key={project.id} project={project} index={projects.indexOf(project)} onSelect={(id, element) => { trigger.current = element; setSelected(id); }} />)}</Carousel>
    <div className="work-note"><p className="eyebrow">Behind the numbers</p><p>Each campaign has its own context. Open a project to see my responsibilities, the reported results, and how the work came together.</p></div>
    <ProjectDialog selected={selected} trigger={trigger} onClose={() => setSelected(null)} />
  </div>;
}
