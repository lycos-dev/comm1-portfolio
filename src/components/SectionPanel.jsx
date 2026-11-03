export default function SectionPanel({ children, tone = 'light', className = '', label }) {
  return <section className={`section-panel section-panel-${tone} ${className}`} aria-label={label}>{children}</section>;
}
