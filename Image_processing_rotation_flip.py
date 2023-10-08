import cv2

img = cv2.imread('Images/BES_0003.jpg')

rotated_img_1 = cv2.rotate(img, cv2.ROTATE_90_CLOCKWISE)
rotated_img_2 = cv2.rotate(rotated_img_1, cv2.ROTATE_90_CLOCKWISE)
rotated_img_3 = cv2.rotate(rotated_img_2, cv2.ROTATE_90_CLOCKWISE)
flipped_img_h = cv2.flip(img, 1) #Horizontal flip
flipped_img_v = cv2.flip(img, 0) #Vertical flip

cv2.imshow('Original', img)
cv2.imshow('Rotated 90 Degrees_1', rotated_img_1)
cv2.imshow('Rotated 90 Degrees_2', rotated_img_2)
cv2.imshow('Rotated 90 Degrees_3', rotated_img_3)
cv2.imshow('flipped img_h', flipped_img_h)
cv2.imshow('flipped img_v', flipped_img_v)
key = cv2.waitKey(0)

if key == ord('s'):
    cv2.imwrite('BES_0001_3.jpg', rotated_img_1)
    cv2.imwrite('BES_0002_3.jpg', rotated_img_2)
    cv2.imwrite('BES_0003_3.jpg', rotated_img_3)
    cv2.imwrite('BES_0003_flipped_h.jpg', flipped_img_h)
    cv2.imwrite('BES_0003_flipped_v.jpg', flipped_img_v)
    print("Rotated 90 degrees image saved as 'rotated_90_degrees.jpg'.")

cv2.destroyAllWindows()
