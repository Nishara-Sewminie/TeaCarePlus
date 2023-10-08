import cv2
import numpy as np
from matplotlib import pyplot as plt

# Load an image
img = cv2.imread('BES_0074.jpg')

# Define new dimensions for resizing
new_width = 800
new_height = 600

# Resize the image
resized_img = cv2.resize(img, (new_width, new_height))

# Apply Gaussian blur
gaussian_blur = cv2.GaussianBlur(resized_img, (7, 7), 2)

# Perform image sharpening
sharpened_img = cv2.addWeighted(resized_img, 1.5, gaussian_blur, -0.5, 0)

# Display the images
cv2.imshow('Original', resized_img)
cv2.imshow('Sharpened', sharpened_img)

# Wait for a key press
key = cv2.waitKey(0)

# Save the sharpened image if 's' is pressed
if key == ord('s'):
    cv2.imwrite('Sharpened_BES_0074.jpg', sharpened_img)
    print("Sharpened image saved as 'Sharpened_BES_0024.jpg'.")

# Close all OpenCV windows
cv2.destroyAllWindows()
