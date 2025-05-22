import ExpandableSection from "../components/ExpandableSection"
import MathEquation from "../components/MathEquation"
import "../styles/theory-page.css"

const TheoryPage = () => {
  return (
    <div className="theory-page">
      <div className="page-header">
        <h1 className="page-title">How It Works</h1>
        <p className="page-description">
          Understanding the science behind astronomical image deblurring and the algorithms we use.
        </p>
      </div>

      {/* Pipeline Diagram */}
      <div className="pipeline-section">
        <h2 className="section-title">Image Processing Pipeline</h2>

        <div className="pipeline-diagram">
          {/* Pipeline Steps */}
          <div className="pipeline-steps">
            <div className="pipeline-step">
              <div className="step-number">Step 1</div>
              <div className="step-name">Input Image</div>
            </div>

            <div className="pipeline-arrow">→</div>

            <div className="pipeline-step">
              <div className="step-number">Step 2</div>
              <div className="step-name">PSF Estimation</div>
            </div>

            <div className="pipeline-arrow">→</div>

            <div className="pipeline-step">
              <div className="step-number">Step 3</div>
              <div className="step-name">RL Deconvolution</div>
            </div>

            <div className="pipeline-arrow">→</div>

            <div className="pipeline-step">
              <div className="step-number">Step 4</div>
              <div className="step-name">Wavelet Denoising</div>
            </div>

            <div className="pipeline-arrow">→</div>

            <div className="pipeline-step">
              <div className="step-number">Step 5</div>
              <div className="step-name">Output Image</div>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Sections */}
      <div className="theory-sections">
        <ExpandableSection title="What is a PSF (Point Spread Function)?">
          <div className="theory-content">
            <p>
              A Point Spread Function (PSF) describes how a point source of light is spread out (blurred) by an optical
              system. In astronomical imaging, the PSF represents how a perfect point source (like a distant star)
              appears in the final image.
            </p>
            <p>The PSF can be affected by various factors:</p>
            <ul className="theory-list">
              <li>Atmospheric turbulence (for ground-based telescopes)</li>
              <li>Optical aberrations in the telescope</li>
              <li>Diffraction effects due to the finite aperture</li>
              <li>Motion blur from tracking errors</li>
            </ul>
            <p>Mathematically, the blurring process can be described as a convolution:</p>
            <MathEquation
              equation="B = H * I + η"
              description="Where B is the blurred image, H is the PSF, I is the true image, * represents convolution, and η is noise."
            />
          </div>
        </ExpandableSection>

        <ExpandableSection title="Richardson–Lucy Deconvolution">
          <div className="theory-content">
            <p>
              Richardson–Lucy deconvolution is an iterative procedure for recovering a latent image that has been
              blurred by a known PSF. It was independently derived by William Richardson (1972) and Leon Lucy (1974).
            </p>
            <p>
              The algorithm is based on Bayes' theorem and assumes Poisson statistics for the noise, making it
              particularly suitable for astronomical images where photon noise is significant.
            </p>
            <p>The iterative update rule is:</p>
            <MathEquation
              equation="Iₖ₊₁(x, y) = Iₖ(x, y) × [(B(x, y) / (Iₖ * H)(x, y)) * H(-x, -y)]"
              description="Where Iₖ is the estimate of the true image at iteration k, B is the blurred image, H is the PSF, and * represents convolution."
            />
            <p>Key properties of Richardson–Lucy deconvolution:</p>
            <ul className="theory-list">
              <li>Preserves the total intensity of the image</li>
              <li>Ensures non-negativity of the solution</li>
              <li>Converges to the maximum likelihood solution for Poisson noise</li>
              <li>Can amplify noise with too many iterations</li>
            </ul>
          </div>
        </ExpandableSection>

        <ExpandableSection title="Wavelet Denoising">
          <div className="theory-content">
            <p>
              Wavelet denoising is a powerful technique for removing noise while preserving important image features. It
              works by transforming the image into the wavelet domain, applying thresholding to the wavelet
              coefficients, and then transforming back to the image domain.
            </p>
            <p>
              The wavelet transform decomposes an image into different frequency bands, allowing us to process different
              scales separately. This is particularly useful because noise typically affects high-frequency components
              more than low-frequency ones.
            </p>
            <p>The basic steps of wavelet denoising are:</p>
            <ol className="theory-ordered-list">
              <li>Apply wavelet transform to the image</li>
              <li>Apply thresholding to the wavelet coefficients</li>
              <li>Apply inverse wavelet transform to obtain the denoised image</li>
            </ol>
            <p>The thresholding operation can be described as:</p>
            <MathEquation
              equation="ŵ = sign(w) × max(|w| - T, 0)"
              description="Where w is the wavelet coefficient, T is the threshold value, and ŵ is the thresholded coefficient."
            />
            <p>
              This is known as soft thresholding, which reduces all coefficients by the threshold amount. Hard
              thresholding, which sets coefficients below the threshold to zero and leaves others unchanged, is another
              common approach.
            </p>
          </div>
        </ExpandableSection>

        <ExpandableSection title="Image Quality Metrics">
          <div className="theory-content">
            <p>To quantitatively assess the quality of deblurred images, we use several metrics:</p>

            <h3 className="subsection-title">Peak Signal-to-Noise Ratio (PSNR)</h3>
            <p>
              PSNR measures the ratio between the maximum possible power of a signal and the power of corrupting noise.
              Higher values indicate better quality.
            </p>
            <MathEquation
              equation="PSNR = 10 × log₁₀(MAX² / MSE)"
              description="Where MAX is the maximum possible pixel value (255 for 8-bit images) and MSE is the Mean Squared Error."
            />

            <h3 className="subsection-title">Structural Similarity Index (SSIM)</h3>
            <p>
              SSIM is designed to improve on traditional metrics like PSNR by considering structural information. It
              ranges from -1 to 1, with 1 indicating perfect similarity.
            </p>
            <MathEquation
              equation="SSIM(x, y) = (2μₓμᵧ + C₁)(2σₓᵧ + C₂) / ((μₓ² + μᵧ² + C₁)(σₓ² + σᵧ² + C₂))"
              description="Where μ represents the average, σ represents the variance and covariance, and C₁, C₂ are constants to stabilize division."
            />

            <h3 className="subsection-title">Mean Squared Error (MSE)</h3>
            <p>
              MSE measures the average squared difference between the estimated values and the actual value. Lower
              values indicate less difference between images.
            </p>
            <MathEquation
              equation="MSE = (1/mn) × Σᵢ₌₁ᵐ Σⱼ₌₁ⁿ [I(i,j) - K(i,j)]²"
              description="Where I is the original image, K is the processed image, and m, n are the dimensions of the images."
            />
          </div>
        </ExpandableSection>
      </div>

      {/* References */}
      <div className="references-section">
        <h2 className="section-title">Academic References</h2>
        <ul className="references-list">
          <li className="reference-item">
            <p className="reference-author">Richardson, W. H. (1972)</p>
            <p className="reference-title">
              "Bayesian-Based Iterative Method of Image Restoration." Journal of the Optical Society of America, 62(1),
              55-59.
            </p>
          </li>
          <li className="reference-item">
            <p className="reference-author">Lucy, L. B. (1974)</p>
            <p className="reference-title">
              "An Iterative Technique for the Rectification of Observed Distributions." The Astronomical Journal, 79,
              745-754.
            </p>
          </li>
          <li className="reference-item">
            <p className="reference-author">Donoho, D. L., & Johnstone, I. M. (1994)</p>
            <p className="reference-title">
              "Ideal Spatial Adaptation by Wavelet Shrinkage." Biometrika, 81(3), 425-455.
            </p>
          </li>
          <li className="reference-item">
            <p className="reference-author">Wang, Z., Bovik, A. C., Sheikh, H. R., & Simoncelli, E. P. (2004)</p>
            <p className="reference-title">
              "Image Quality Assessment: From Error Visibility to Structural Similarity." IEEE Transactions on Image
              Processing, 13(4), 600-612.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TheoryPage
