import "../styles/metric-card.css"

const MetricCard = ({ title, value, description, icon }) => {
  return (
    <div className="metric-card">
      <div className="metric-header">
        {icon && <span className="metric-icon">{icon}</span>}
        <h3 className="metric-title">{title}</h3>
      </div>
      <div className="metric-value">{value}</div>
      <p className="metric-description">{description}</p>
    </div>
  )
}

export default MetricCard
