import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { projects, cases, experiences, skills } from '../src/data/portfolio.js';
import { filterExperience, filterProjects, emailDraft } from '../src/data/helpers.js';
import { categories, profile } from '../src/data/profile.js';

test('all campaign links resolve to complete, unique case studies', () => {
  assert.equal(new Set(projects.map(project => project.id)).size, projects.length);
  for (const project of projects) {
    assert.ok(cases[project.id]); assert.ok(categories[project.id]);
    assert.equal(project.name, cases[project.id].title);
    assert.ok(cases[project.id].work.length > 0);
  }
  assert.equal(projects.length, 5);
  assert.equal(experiences.length, 11);
  assert.equal(skills.length, 4);
});
test('industry filters preserve all campaigns without duplicate or missing categories', () => {
  assert.equal(filterProjects(projects, 'All work').length, 5);
  assert.deepEqual(filterProjects(projects, 'Tech').map(project => project.id), ['floot']);
  assert.equal(filterProjects(projects, 'Beauty & care').length, 3);
  assert.deepEqual(filterProjects(projects, 'Fitness').map(project => project.id), ['strong']);
});
test('experience search matches company, role, date, and responsibility without case sensitivity', () => {
  assert.equal(filterExperience(experiences, ' FLOOT ')[0].company, 'Floot');
  assert.ok(filterExperience(experiences, '2023').some(job => job.company === 'Bibiluv'));
  assert.ok(filterExperience(experiences, 'shipping').some(job => job.company === 'Nuvora Hair'));
  assert.equal(filterExperience(experiences, '').length, 11);
  assert.equal(filterExperience(experiences, 'no-such-company').length, 0);
});
test('email drafts correctly encode special characters and multiline messages', () => {
  const url = new URL(emailDraft({ name: 'Alex & Lee', email: 'alex@example.com', message: 'A role?\nDetails #1 & #2' }, profile.email));
  assert.equal(url.protocol, 'mailto:');
  assert.equal(url.pathname, profile.email);
  assert.equal(url.searchParams.get('subject'), 'Partnership opportunity — Alex & Lee');
  assert.ok(url.searchParams.get('body').includes('A role?\nDetails #1 & #2'));
});
test('Vercel build configuration and downloadable assets are complete', async () => {
  const config = JSON.parse(await readFile(new URL('../vercel.json', import.meta.url)));
  assert.equal(config.framework, 'vite'); assert.equal(config.outputDirectory, 'dist');
  assert.deepEqual(config.rewrites, [{ source: '/(.*)', destination: '/index.html' }]);
  await access(new URL('../public/Myra_Bathan_Resume.pdf', import.meta.url));
  const portrait = await readFile(new URL('../src/assets/myra-bathan.png', import.meta.url));
  assert.equal(portrait.subarray(1, 4).toString(), 'PNG');
});

