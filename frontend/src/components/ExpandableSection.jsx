"use client"

import { useState } from "react"
import "../styles/expandable-section.css"

const ExpandableSection = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="expandable-section">
      <button className="section-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h3 className="section-title">{title}</h3>
        {isExpanded ? (
          <svg className="section-icon" viewBox="0 0 20 20">
            <path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" />
          </svg>
        ) : (
          <svg className="section-icon" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        )}
      </button>

      {isExpanded && <div className="section-content">{children}</div>}
    </div>
  )
}

export default ExpandableSection
