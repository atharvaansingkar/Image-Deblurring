import { Link } from "react-router-dom"
import "../styles/home-page.css"
import blurImage from "../assets/blur_image.png";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Background with stars effect */}
      <div className="stars-background"></div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Astronomical Image Deblurring</h1>
          <p className="hero-subtitle">Reviving the Universe with Science</p>
          <p className="hero-description">
            Restore astronomical clarity using cutting-edge deconvolution and denoising techniques.
          </p>
          <Link to="/upload" className="hero-button">
            Try it Now
            <svg className="button-icon" viewBox="0 0 20 20">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </Link>
        </div>

        {/* Image Comparison */}
        <div className="image-examples">
          <div className="example-card">
            <div className="example-header">
              <h3 className="example-title">Blurred Image</h3>
            </div>
            <div className="example-body">
              <img
                src={blurImage}
                alt="Blurred astronomical image"
                className="example-image"
              />
            </div>
          </div>

          <div className="example-card">
            <div className="example-header">
              <h3 className="example-title">Deblurred Result</h3>
            </div>
            <div className="example-body">
              <img
                src={blurImage}
                alt="Deblurred astronomical image"
                className="example-image"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <h2 className="features-title">Advanced Image Processing Features</h2>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon purple">
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="feature-title">Richardson–Lucy Deconvolution</h3>
              <p className="feature-description">
                Iterative algorithm for recovering a latent image that has been blurred by a known point spread
                function.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon blue">
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="feature-title">Wavelet Denoising</h3>
              <p className="feature-description">
                Advanced technique that preserves important image features while removing noise using wavelet
                transforms.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon indigo">
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="feature-title">Quality Metrics</h3>
              <p className="feature-description">
                Quantitative assessment of image quality using PSNR, SSIM, and MSE metrics for objective evaluation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
