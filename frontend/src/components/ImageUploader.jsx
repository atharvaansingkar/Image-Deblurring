"use client"

import { useState, useRef } from "react"
import "../styles/image-uploader.css"

const ImageUploader = ({ onImageUpload }) => {
  const [dragActive, setDragActive] = useState(false)
  const [image, setImage] = useState(null)
  const inputRef = useRef(null)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file) => {
    // Check if file is an image
    if (!file.type.match("image.*")) {
      alert("Please upload an image file");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
      if (onImageUpload) {
        onImageUpload(file); // Pass the File object
      }
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImage(null)
    if (onImageUpload) {
      onImageUpload(null)
    }
  }

  const onButtonClick = () => {
    inputRef.current.click()
  }

  return (
    <div className="image-uploader">
      {!image ? (
        <div
          className={`upload-area ${dragActive ? "active" : ""}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input ref={inputRef} type="file" className="file-input" onChange={handleChange} accept="image/*" />
          <svg className="upload-icon" viewBox="0 0 24 24">
            <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="upload-text">
            Drag and drop your astronomical image here, or{" "}
            <button type="button" className="browse-button" onClick={onButtonClick}>
              browse
            </button>{" "}
            to select a file
          </p>
          <p className="upload-hint">PNG, JPG, GIF up to 10MB</p>
        </div>
      ) : (
        <div className="image-preview">
          <img src={image || "/placeholder.svg"} alt="Uploaded astronomical image" className="preview-image" />
          <button onClick={removeImage} className="remove-button">
            <svg className="remove-icon" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

export default ImageUploader
