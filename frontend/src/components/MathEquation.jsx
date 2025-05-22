import "../styles/math-equation.css"

const MathEquation = ({ equation, description }) => {
  return (
    <div className="math-equation">
      <div className="equation-content">{equation}</div>
      {description && <p className="equation-description">{description}</p>}
    </div>
  )
}

export default MathEquation
