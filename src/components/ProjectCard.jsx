import { ArrowUpRight } from 'lucide-react';
import { categories } from '../data/profile.js';

export default function ProjectCard({ project, index = 0, onSelect }) {
  return <article className={`project-card project-${project.id}`}>
    <div className="project-link">
      <div className="project-art"><div className="project-art-top"><span className="pill">{categories[project.id]}</span><span className="project-index">0{index + 1}</span></div><span className="project-brand">{project.name}</span><span className="project-art-note">{project.note}</span><div className="art-orbit" aria-hidden="true" /></div>
      <div className="project-card-body"><h3>{project.result}</h3><p>{project.summary}</p><button className="project-card-action" type="button" aria-label={`Explore ${project.name} campaign`} onClick={event => onSelect(project.id, event.currentTarget)}><span>{project.action}</span><span className="circle-arrow"><ArrowUpRight size={19} /></span></button></div>
    </div>
  </article>;
}
