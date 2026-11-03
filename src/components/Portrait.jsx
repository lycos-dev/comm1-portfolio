import { useRef } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import portrait from '../assets/myra-bathan.png';

export default function Portrait({ compact = false }) {
  const ref = useRef(null);
  function move(event) {
    if (!window.matchMedia('(hover:hover) and (prefers-reduced-motion:no-preference)').matches) return;
    const box = event.currentTarget.getBoundingClientRect();
    ref.current.style.setProperty('--tilt-x', `${((event.clientY - box.top) / box.height - .5) * -3}deg`);
    ref.current.style.setProperty('--tilt-y', `${((event.clientX - box.left) / box.width - .5) * 3}deg`);
  }
  function reset() { ref.current.style.setProperty('--tilt-x', '0deg'); ref.current.style.setProperty('--tilt-y', '0deg'); }
  return <div className={`portrait-composition ${compact ? 'compact' : ''}`} onPointerMove={move} onPointerLeave={reset}>
    <div className="portrait-frame" ref={ref}><img src={portrait} alt="Myra Bathan smiling, shown in the natural colors of her original portrait" width="1254" height="1254" fetchPriority="high" />
      <div className="portrait-caption"><span><MapPin size={14} /> Philippines</span><ArrowUpRight size={22} /></div>
    </div>
    {!compact && <><div className="portrait-float"><img className="float-logo" src="/myra-logo.png" alt="Myra logo" width="42" height="42" /><div><strong>A personal approach.</strong><span>Professional follow-through.</span></div></div><div className="portrait-label">Real people. Lasting connections.</div></>}
  </div>;
}
