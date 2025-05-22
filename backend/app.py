from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import numpy as np
import io
from PIL import Image
from skimage import restoration, img_as_float, color
from skimage.restoration import denoise_wavelet

app = Flask(__name__)
CORS(app)  # Enables CORS for all domains on all routess

# === Helper: Generate PSF ===
def gaussian_psf(size=15, sigma=2):
    ax = np.arange(-size // 2 + 1., size // 2 + 1.)
    xx, yy = np.meshgrid(ax, ax)
    psf = np.exp(-(xx**2 + yy**2) / (2. * sigma**2))
    return psf / np.sum(psf)

# === Route: Process uploaded image ===
@app.route('/process', methods=['POST'])
def process_image():
    # === Step 1: Receive File and Params ===
    file = request.files.get('image')
    psf_size = int(request.form.get('psf_size', 15))
    sigma = float(request.form.get('sigma', 2))
    iterations = int(request.form.get('iterations', 30))

    if not file:
        return jsonify({"error": "No image file uploaded."}), 400

    # Load image and convert to grayscale
    image = Image.open(file.stream).convert("RGB")
    image_np = img_as_float(np.array(image))
    gray_image = color.rgb2gray(image_np)

    # === Step 2: Deconvolution & Denoising ===
    psf = gaussian_psf(size=psf_size, sigma=sigma)
    deconvolved = restoration.richardson_lucy(gray_image, psf, num_iter=iterations)
    final_output = denoise_wavelet(
        deconvolved,
        method='BayesShrink',
        mode='soft',
        rescale_sigma=True
    )

    # === Step 3: Resize Output to Match Original Dimensions ===
    final_image = Image.fromarray((final_output * 255).astype(np.uint8))
    final_image_resized = final_image.resize(image.size)  # Resize to match original dimensions

    # === Step 4: Convert Output to Image and Send ===
    img_io = io.BytesIO()
    final_image_resized.save(img_io, format='PNG')
    img_io.seek(0)

    return send_file(img_io, mimetype='image/png')

# === Run the app ===
if __name__ == '__main__':
    app.run(port=4000, debug=True)
