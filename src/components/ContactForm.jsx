import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { emailDraft } from '../data/helpers.js';
import { profile } from '../data/profile.js';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [intent, setIntent] = useState('Job opportunity');
  const [status, setStatus] = useState('');
  const field = name => ({ value: form[name], onChange: event => setForm(previous => ({ ...previous, [name]: event.target.value })) });
  function submit(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.message.trim()) { setStatus('Please add your name and a message.'); return; }
    window.location.href = emailDraft({ ...form, message: `${intent}\n\n${form.message}` }, profile.email);
    setStatus('Your email app should open with a draft. Review and send it there. If it doesn’t open, use the email address on this page.');
  }
  return <form className="contact-form" onSubmit={submit}><p className="eyebrow">Let’s start a conversation</p><h2>What do you have in mind?</h2><div className="intent-buttons" role="group" aria-label="Conversation topic">{['Job opportunity', 'Collaboration', 'Say hello'].map(value => <button type="button" aria-pressed={intent === value} key={value} onClick={() => setIntent(value)}>{intent === value && <Check size={13} />}{value}</button>)}</div><div className="form-two-column"><label>Your name<input name="name" autoComplete="name" required maxLength={100} placeholder="Full name" {...field('name')} /></label><label>Your email<input name="email" type="email" inputMode="email" autoComplete="email" required maxLength={200} placeholder="you@company.com" {...field('email')} /></label></div><label>Your message<textarea name="message" rows={5} required maxLength={2500} placeholder="Tell me about the role, your team, or the partnership you have in mind…" {...field('message')} /></label><div className="field-counter" aria-hidden="true">{form.message.length} / 2,500</div><button className="button" type="submit">Continue in email <ArrowUpRight size={19} /></button><p className="form-note">This opens a draft in your email app. Nothing is sent or stored by this website.</p><p className="form-status" role="status" aria-live="polite">{status}</p></form>;
}
