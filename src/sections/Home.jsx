import { ArrowUpRight, Download, Globe2, Users, MessageCircle } from 'lucide-react';
import Portrait from '../components/Portrait.jsx';
import AnimatedNumber from '../components/AnimatedNumber.jsx';
import Reveal from '../components/Reveal.jsx';
import { profile } from '../data/profile.js';
import SectionPanel from '../components/SectionPanel.jsx';

export default function Home() {
  return <div className="container home-page"><div className="hero"><div className="hero-copy"><p className="availability"><span />Open to new opportunities</p><p className="eyebrow">A people-first approach to partnerships</p><h1 id="home-title">Hi, I’m<br /><span>Myra Bathan.</span></h1><p className="hero-title">Influencer Outreach &amp;<br />TikTok Affiliate Specialist</p><p className="hero-summary">I connect the right brands with the right creators. Thoughtful conversations. Organized campaigns. Partnerships that move forward.</p><div className="button-row"><a className="button" href="#work">Explore my work <ArrowUpRight size={19} /></a><a className="button button-outline" href={profile.resume} download>My résumé <Download size={17} /></a></div><div className="hero-location"><Globe2 size={15} /><span>Philippines · Working across US, UK, Australia &amp; Asia</span></div></div><Portrait /></div>
    <SectionPanel tone="dark" className="home-proof" label="Career at a glance"><p className="eyebrow">A few numbers. A lot of conversations.</p><Reveal className="proof-strip"><div><span className="proof-icon"><Users size={20} /></span><div><strong><AnimatedNumber value={100} suffix="+" /></strong><span>Partnerships sourced &amp; managed</span></div></div><div><span className="proof-icon"><MessageCircle size={20} /></span><div><strong><AnimatedNumber value={50} prefix="~" suffix="%" /></strong><span>Response rate in featured campaigns</span></div></div><div><span className="proof-icon"><Globe2 size={20} /></span><div><strong>Since 2023</strong><span>Supporting brands across borders</span></div></div></Reveal></SectionPanel>
  </div>;
}
