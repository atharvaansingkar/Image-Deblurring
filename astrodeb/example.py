# example.py

from PIL import Image
from astrodeb import deblur_image

# Load a blurred image
input_image = Image.open("input.jpg")

# Deblur it
output_image = deblur_image(input_image, psf_size=15, sigma=2, iterations=30)

# Save the output
output_image.save("output.png")
