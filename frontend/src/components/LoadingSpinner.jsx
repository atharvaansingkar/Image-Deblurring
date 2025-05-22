import "../styles/loading-spinner.css"

const LoadingSpinner = ({ message = "Processing image..." }) => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <div className="spinner-ring outer"></div>
        <div className="spinner-ring inner"></div>
      </div>
      <p className="spinner-message">{message}</p>
    </div>
  )
}

export default LoadingSpinner
