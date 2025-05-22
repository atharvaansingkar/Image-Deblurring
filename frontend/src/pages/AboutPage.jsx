import "../styles/about-page.css"

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1 className="page-title">About & Credits</h1>
        <p className="page-description">Learn more about the project, the developers, and the technologies used.</p>
      </div>

      {/* About the Project */}
      <div className="about-project-card">
        <h2 className="card-title">About the Project</h2>
        <p className="card-text">
          The Astronomical Image Deblurring project aims to provide astronomers, astrophotographers, and space
          enthusiasts with a powerful tool to enhance the quality of astronomical images affected by various sources
          of blur.
        </p>
        <p className="card-text">
          By combining advanced image processing techniques like Richardson–Lucy deconvolution and wavelet denoising,
          this application can recover details that would otherwise be lost due to atmospheric turbulence, optical
          imperfections, or motion blur.
        </p>
        <p className="card-text">
          This project is open-source and welcomes contributions from the community to improve its capabilities and
          user experience.
        </p>
      </div>

      {/* Developer Cards */}
      <div className="developer-cards">
        <div className="developer-card">
          <div className="developer-avatar"></div>
          <div className="developer-details">
            <h3 className="developer-name">Developer 1</h3>
            <p className="developer-title">Astrophysics Enthusiast</p>
            <p className="developer-contact">Email: dev1@example.com</p>
          </div>
        </div>
        <div className="developer-card">
          <div className="developer-avatar"></div>
          <div className="developer-details">
            <h3 className="developer-name">Developer 2</h3>
            <p className="developer-title">Software Engineer</p>
            <p className="developer-contact">Email: dev2@example.com</p>
          </div>
        </div>
        <div className="developer-card">
          <div className="developer-avatar"></div>
          <div className="developer-details">
            <h3 className="developer-name">Developer 3</h3>
            <p className="developer-title">Data Scientist</p>
            <p className="developer-contact">Email: dev3@example.com</p>
          </div>
        </div>
        <div className="developer-card">
          <div className="developer-avatar"></div>
          <div className="developer-details">
            <h3 className="developer-name">Developer 4</h3>
            <p className="developer-title">UI/UX Designer</p>
            <p className="developer-contact">Email: dev4@example.com</p>
          </div>
        </div>
      </div>

      {/* External Resources */}
      <div className="resources-section">
        <h2 className="section-title">External Resources</h2>
        <div className="resources-grid">
          <a href="#" target="_blank" rel="noopener noreferrer" className="resource-link">
            <svg className="resource-icon" viewBox="0 0 24 24">
              <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span>GitHub Repository</span>
            <svg className="external-icon" viewBox="0 0 24 24">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <a
            href="https://www.nasa.gov/image-library/"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            <svg className="resource-icon" viewBox="0 0 24 24">
              <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
              <path d="M14.828 14.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
            </svg>
            <span>NASA Image Library</span>
            <svg className="external-icon" viewBox="0 0 24 24">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <a href="https://esahubble.org/images/" target="_blank" rel="noopener noreferrer" className="resource-link">
            <svg className="resource-icon" viewBox="0 0 24 24">
              <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
              <path d="M14.828 14.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
            </svg>
            <span>ESA Hubble Image Gallery</span>
            <svg className="external-icon" viewBox="0 0 24 24">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <a
            href="https://scikit-image.org/docs/stable/auto_examples/"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            <svg className="resource-icon" viewBox="0 0 24 24">
              <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
              <path d="M14.828 14.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
            </svg>
            <span>Scikit-image Examples</span>
            <svg className="external-icon" viewBox="0 0 24 24">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
