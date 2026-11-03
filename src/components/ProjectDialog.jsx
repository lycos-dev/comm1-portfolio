import { useEffect, useRef } from 'react';
import { X, Check } from 'lucide-react';
import { cases } from '../data/portfolio.js';

export default function ProjectDialog({ selected, trigger, onClose }) {
  const ref = useRef(null); const close = useRef(null);
  const data = selected ? cases[selected] : null;
  useEffect(() => {
    if (!selected) return;
    const dialog = ref.current; const previous = document.body.style.overflow;
    dialog.showModal(); dialog.scrollTop = 0; close.current?.focus(); document.body.style.overflow = 'hidden';
    return () => { if (dialog.open) dialog.close(); document.body.style.overflow = previous; trigger.current?.focus({ preventScroll: true }); };
  }, [selected, trigger]);
  return <dialog ref={ref} className="project-dialog" aria-labelledby="project-dialog-title" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => {
    if (event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose();
  }}><div className="dialog-toolbar"><span className="eyebrow">Campaign in focus</span><button ref={close} className="icon-button" aria-label="Close campaign details" onClick={onClose}><X size={20} /></button></div>
    {data && <div className="dialog-copy"><p className="eyebrow">{data.label}</p><h2 id="project-dialog-title">{data.title}</h2><p className="lead">{data.intro}</p><div className="dialog-result"><p className="eyebrow">Reported outcome</p><h3>{data.result}</h3><p>{data.detail}</p></div><h3>My contribution</h3><ul className="contribution-list">{data.work.map(item => <li key={item}><span><Check size={16} /></span>{item}</li>)}</ul>
      {data.story && <div className="outreach-story"><h3>A message that started a conversation.</h3><p>For Luke, the creator behind Luke’s Dev Lab, I began with his work: practical AI model benchmarks and detailed coding comparisons.</p><blockquote>“I came across your channel and really appreciate how you cut through the hype to test local LLM setups — especially your detailed coding comparisons between Qwen and Gemma models on 16GB configurations.”<footer>Excerpt from Myra’s Floot outreach</footer></blockquote><p>Luke responded positively and signed up. When he asked about using a Stripe invoice because of PayPal currency conversion fees, I checked with the team and provided a clear answer within a day.</p><p>I moved the conversation into integration planning, suggesting the upcoming MCP launch as a fit for his channel. The partnership progressed toward a dedicated video integration.</p></div>}
      <button className="button button-outline" onClick={onClose}>Back to the portfolio</button>
    </div>}
  </dialog>;
}
