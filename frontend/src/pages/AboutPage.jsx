import "../styles/about-page.css";
import linkedInIcon from "../assets/linkedIn-icon.jpg";
import githubIcon from "../assets/github-icon.jpg";
import ananyaAvatar from "../assets/ananya.jpg";
import atharvaAvatar from "../assets/atharva.jpg";
import sarveshAvatar from "../assets/sarvesh.jpg";
import sarthakAvatar from "../assets/sarthak.jpg";

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

      {/* Developers Section */}
      <div className="developers-section">
        <h2 className="section-title">Developers</h2>
        <div className="developer-cards">
          <div className="developer-card">
            <div className="developer-avatar">
              <img src={ananyaAvatar} alt="Ananya Sharma" className="avatar-image" />
            </div>
            <div className="developer-details">
              <h3 className="developer-name">Ananya Sharma</h3>
              <div className="developer-links">
                <a
                  href="https://www.linkedin.com/in/ananya-sharma-1053122b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedInIcon} alt="LinkedIn" className="social-icon" />
                </a>
                <a
                  href="https://github.com/ananyasharma11"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" className="social-icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="developer-card">
            <div className="developer-avatar">
              <img src={atharvaAvatar} alt="Atharva Ansingkar" className="avatar-image" />
            </div>
            <div className="developer-details">
              <h3 className="developer-name">Atharva Ansingkar</h3>
              <div className="developer-links">
                <a
                  href="https://www.linkedin.com/in/atharva-ansingkar-793134142/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedInIcon} alt="LinkedIn" className="social-icon" />
                </a>
                <a
                  href="https://github.com/atharvaansingkar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" className="social-icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="developer-card">
            <div className="developer-avatar">
              <img src={sarveshAvatar} alt="Sarvesh Bajare" className="avatar-image" />
            </div>
            <div className="developer-details">
              <h3 className="developer-name">Sarvesh Bajare</h3>
              <div className="developer-links">
                <a
                  href="https://www.linkedin.com/in/sarvesh-bajare-bb181a252/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedInIcon} alt="LinkedIn" className="social-icon" />
                </a>
                <a
                  href="https://github.com/geekatbest"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" className="social-icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="developer-card">
            <div className="developer-avatar">
              <img src={sarthakAvatar} alt="Sarthak Biyani" className="avatar-image" />
            </div>
            <div className="developer-details">
              <h3 className="developer-name">Sarthak Biyani</h3>
              <div className="developer-links">
                <a
                  href="https://www.linkedin.com/in/sarthak-biyani-3098ab259/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedInIcon} alt="LinkedIn" className="social-icon" />
                </a>
                <a
                  href="https://github.com/andare23"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
