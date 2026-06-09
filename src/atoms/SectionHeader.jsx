const SectionHeader = ({ label, title }) => (
  <div>
    <p className="section-label">{label}</p>
    <h2 className="section-title">{title}</h2>
    <div className="section-divider" />
  </div>
);

export default SectionHeader;
