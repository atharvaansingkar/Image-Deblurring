"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ImageUploader from "../components/ImageUploader"
import ParameterSlider from "../components/ParameterSlider"
import LoadingSpinner from "../components/LoadingSpinner"
import "../styles/upload-page.css"

const UploadPage = () => {
  const navigate = useNavigate()
  const [uploadedImage, setUploadedImage] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [parameters, setParameters] = useState({
    psfSize: 15,
    sigma: 2,
    iterations: 30,
  })

  const handleImageUpload = (file) => {
    // Convert the File object to a base64 string
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage({
        file, // Store the File object
        preview: e.target.result, // Store the base64 string
      });
    };
    reader.readAsDataURL(file);
  };

  const handleParameterChange = (name, value) => {
    setParameters({
      ...parameters,
      [name]: value,
    });
  };

  const handleProcessImage = async () => {
    if (!uploadedImage) {
      alert("Please upload an image first");
      return;
    }
  
    setIsProcessing(true);
  
    try {
      // Prepare form data
      const formData = new FormData();
      formData.append("image", uploadedImage.file); // Pass the File object
      formData.append("psf_size", parameters.psfSize);
      formData.append("sigma", parameters.sigma);
      formData.append("iterations", parameters.iterations);
  
      // Send the image and parameters to the backend
      const response = await fetch("https://image-deblurring.onrender.com/process", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Failed to process the image");
      }
  
      // Get the processed image as a Blob
      const blob = await response.blob();
      const processedImageURL = URL.createObjectURL(blob);
  
      // Navigate to the results page with the processed image
      navigate("/results", {
        state: {
          originalImage: uploadedImage.preview, // Pass the base64 string
          processedImage: processedImageURL,
        },
      });
    } catch (error) {
      console.error("Error processing the image:", error);
      alert("An error occurred while processing the image. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="upload-page">
      <div className="page-header">
        <h1 className="page-title">Upload Your Astronomical Image</h1>
        <p className="page-description">
          Upload your blurred astronomical image and adjust the processing parameters to achieve optimal results.
        </p>
      </div>

      {isProcessing ? (
        <LoadingSpinner message="Processing your image. This may take a few moments..." />
      ) : (
        <div className="upload-content">
          <div className="uploader-container">
            <ImageUploader onImageUpload={handleImageUpload} />
          </div>

          <div className="parameters-container">
            <h2 className="parameters-title">Click here to Process the Image</h2>

            <button
              onClick={handleProcessImage}
              disabled={!uploadedImage}
              className={`process-button ${!uploadedImage ? "disabled" : ""}`}
            >
              Process Image
            </button>

            <p className="processing-note">
              Processing may take several minutes depending on image size and selected parameters.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default UploadPage