import numpy as np
import matplotlib.pyplot as plt
from skimage import restoration, img_as_float, color
from skimage.io import imread
from skimage.util import random_noise
from skimage.restoration import denoise_wavelet

# === STEP 1: Load image and handle channels ===
image = img_as_float(imread("homepageimage.jpg"))

# Remove alpha channel if RGBA
if image.ndim == 3 and image.shape[-1] == 4:
    image = image[..., :3]

# Convert to grayscale if RGB
if image.ndim == 3:
    image = color.rgb2gray(image)

# === STEP 2: Crop to center 512x512 (or smaller if needed) ===
h, w = image.shape
crop_size = min(h, w, 512)
startx = w // 2 - crop_size // 2
starty = h // 2 - crop_size // 2
image_cropped = image[starty:starty+crop_size, startx:startx+crop_size]

# === STEP 4: Define Gaussian PSF ===
def gaussian_psf(size=15, sigma=2):
    ax = np.arange(-size // 2 + 1., size // 2 + 1.)
    xx, yy = np.meshgrid(ax, ax)
    psf = np.exp(-(xx**2 + yy**2) / (2. * sigma**2))
    return psf / np.sum(psf)

psf = gaussian_psf(size=15, sigma=2)

# === STEP 5: Richardson-Lucy deconvolution ===
deconvolved = restoration.richardson_lucy(image_cropped, psf, num_iter=30)

# === STEP 6: Wavelet denoising ===
final_output = denoise_wavelet(
    deconvolved,
    method='BayesShrink',
    mode='soft',
    rescale_sigma=True
)

# === STEP 7: Display Results ===
titles = ['Cropped Input', 'RL Deconvolved', 'Wavelet Denoised']
images = [image_cropped, deconvolved, final_output]

plt.figure(figsize=(12, 4))
for i in range(3):
    plt.subplot(1, 3, i + 1)
    plt.imshow(images[i], cmap='gray')
    plt.title(titles[i])
    plt.axis('off')
plt.tight_layout()
plt.show()
