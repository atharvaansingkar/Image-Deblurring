"use client"
import "../styles/parameter-slider.css"

const ParameterSlider = ({ label, min, max, value, onChange, defaultValue, step = 1 }) => {
  return (
    <div className="parameter-slider">
      <div className="slider-header">
        <label className="slider-label">{label}</label>
        <span className="slider-value">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        step={step}
        className="slider-input"
      />
      <div className="slider-markers">
        <span>{min}</span>
        <span>{defaultValue}</span>
        <span>{max}</span>
      </div>
    </div>
  )
}

export default ParameterSlider
