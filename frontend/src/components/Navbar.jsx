"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <span className="logo-text">Astronomical Image Deblurring</span>
          </Link>
        </div>
        <div className="desktop-menu">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/upload" className="nav-link">
            Upload
          </Link>
          <Link to="/results" className="nav-link">
            Results
          </Link>
          <Link to="/theory" className="nav-link">
            How It Works
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </div>
        <div className="mobile-menu-button">
          <button onClick={toggleMenu} className="menu-button">
            {isOpen ? (
              <svg className="menu-icon" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="menu-icon" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/upload" className="mobile-link" onClick={() => setIsOpen(false)}>
            Upload
          </Link>
          <Link to="/results" className="mobile-link" onClick={() => setIsOpen(false)}>
            Results
          </Link>
          <Link to="/theory" className="mobile-link" onClick={() => setIsOpen(false)}>
            How It Works
          </Link>
          <Link to="/about" className="mobile-link" onClick={() => setIsOpen(false)}>
            About
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
