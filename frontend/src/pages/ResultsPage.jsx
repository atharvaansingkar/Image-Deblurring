"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import ImageComparison from "../components/ImageComparison"
import MetricCard from "../components/MetricCard"
import "../styles/results-page.css"

const ResultsPage = () => {
  const location = useLocation();
  const { originalImage, processedImage } = location.state || {};
  const [metrics, setMetrics] = useState({
    psnr: "32.45 dB",
    ssim: "0.897",
    mse: "0.0057",
  })
  const [viewMode, setViewMode] = useState("comparison") // 'comparison' or 'sideBySide'

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = processedImage;
    link.download = "deblurred_image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!originalImage || !processedImage) {
    return (
      <div className="no-results">
        <h1 className="no-results-title">No Results Available</h1>
        <p className="no-results-message">Please upload and process an image first.</p>
        <Link to="/upload" className="no-results-button">
          Go to Upload Page
        </Link>
      </div>
    )
  }

  return (
    <div className="results-page">
      <div className="results-header">
        <div className="header-text">
          <h1 className="results-title">Deblurring Results</h1>
          <p className="results-description">Compare the original and processed images to see the improvement.</p>
        </div>

        <div className="header-actions">
          <button
            onClick={() => setViewMode(viewMode === "comparison" ? "sideBySide" : "comparison")}
            className="view-mode-button"
          >
            <svg className="button-icon" viewBox="0 0 24 24">
              <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            {viewMode === "comparison" ? "Side by Side View" : "Comparison View"}
          </button>

          <button onClick={handleDownload} className="download-button">
            <svg className="button-icon" viewBox="0 0 24 24">
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Result
          </button>
        </div>
      </div>

      {/* Image Viewer */}
      <div className="image-viewer">
        <div className="viewer-header">
          <h2 className="viewer-title">Image Comparison</h2>
          <div className="viewer-subtitle">
            {viewMode === "comparison" ? "Drag the slider to compare" : "Before and after"}
          </div>
        </div>

        <div className="viewer-content">
          {viewMode === "comparison" ? (
            <div className="comparison-view">
              <ImageComparison beforeImage={originalImage} afterImage={processedImage} />
            </div>
          ) : (
            <div className="side-by-side-view">
              <div className="image-column">
                <div className="image-label">Original Image</div>
                <img
                  src={originalImage || "/placeholder.svg"}
                  alt="Original astronomical image"
                  className="result-image"
                />
              </div>
              <div className="image-column">
                <div className="image-label">Processed Image</div>
                <img
                  src={processedImage || "/placeholder.svg"}
                  alt="Processed astronomical image"
                  className="result-image"
                />
              </div>
            </div>
          )}
        </div>
      </div>



      {/* Next Steps */}
      <div className="next-steps">
        <h2 className="next-steps-title">Next Steps</h2>
        <p className="next-steps-description">Want to learn more about how this deblurring process works?</p>
        <div className="next-steps-actions">
          <Link to="/theory" className="secondary-button">
            Learn How It Works
          </Link>
          <Link to="/upload" className="primary-button">
            Process Another Image
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ResultsPage
