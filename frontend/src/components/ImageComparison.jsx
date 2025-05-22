"use client"

import { useState, useRef, useEffect } from "react"
import "../styles/image-comparison.css"

const ImageComparison = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50) // Start slider in the center
  const containerRef = useRef(null)
  const isDragging = useRef(false)

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e) => {
    if (!isDragging.current || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const position = (x / rect.width) * 100

    setSliderPosition(Math.max(0, Math.min(100, position)))
  }

  const handleTouchMove = (e) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const position = (x / rect.width) * 100

    setSliderPosition(Math.max(0, Math.min(100, position)))
  }

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="comparison-container"
      onMouseDown={handleMouseDown}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Before Image */}
      <div className="before-image">
        <img src={beforeImage || "https://via.placeholder.com/800x600?text=Original+Image"} alt="Before deblurring" />
      </div>

      {/* After Image */}
      <div
        className="after-image"
        style={{
          clipPath: `inset(0 0 0 ${sliderPosition}%)`, // Clip the "after" image based on the slider position
        }}
      >
        <img
          src={afterImage || "https://via.placeholder.com/800x600?text=Processed+Image"}
          alt="After deblurring"
        />
      </div>

      {/* Slider */}
      <div className="slider-divider" style={{ left: `${sliderPosition}%` }} onMouseDown={handleMouseDown}>
        <div className="slider-handle">
          <svg className="slider-arrows" viewBox="0 0 24 24">
            <path d="M21 12H3M9 6l-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="image-label before-label">Before</div>
      <div className="image-label after-label">After</div>
    </div>
  )
}

export default ImageComparison