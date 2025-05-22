import "../styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} Astronomical Image Deblurring. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="#" className="footer-link">
            <svg className="footer-icon" viewBox="0 0 24 24">
              <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </a>
          <a href="#" className="footer-link">
            <svg className="footer-icon" viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a href="#" className="footer-link">
            <svg className="footer-icon" viewBox="0 0 24 24">
              <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
