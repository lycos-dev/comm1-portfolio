import { categories } from './profile.js';

export function filterProjects(projects, category) {
  return category === 'All work' ? projects : projects.filter(project => categories[project.id] === category);
}
export function filterExperience(experiences, query) {
  const term = query.trim().toLocaleLowerCase();
  return experiences.filter(job => [job.company, job.title, job.date, ...job.bullets].join(' ').toLocaleLowerCase().includes(term));
}
export function emailDraft({ name, email, message }, recipient) {
  return `mailto:${recipient}?subject=${encodeURIComponent(`Partnership opportunity — ${name.trim()}`)}&body=${encodeURIComponent(`Hi Myra,\n\n${message.trim()}\n\nBest,\n${name.trim()}\n${email.trim()}`)}`;
}
