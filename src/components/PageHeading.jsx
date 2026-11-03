export default function PageHeading({ id, label, title, description, children }) {
  return <div className="page-heading"><div><p className="eyebrow"><span className="tiny-line" />{label}</p><h2 id={id}>{title}</h2>{description && <p className="page-description">{description}</p>}</div>{children}</div>;
}
