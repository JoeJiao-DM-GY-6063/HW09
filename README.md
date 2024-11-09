# HW09A
draw(): Continuously modifies the pixel colors in mImg based on color thresholds and the slider value. Updates the pixel array in real-time to display color modifications.

Color Detection: 
It checks each pixel to see if it’s red, green, or yellow based on certain RGB thresholds.
Slider Control: You use a slider to control the color intensity for those detected areas. The slider changes how much each color “pops” by adjusting the brightness or saturation in those spots.

Playing Around
Move the slider to adjust the colors — higher values make the colors brighter or more saturated.
Watch the colors change in real-time as you drag the slider.

# HW09B
（A visual silhouette effect of a Japanese anime bad guy who has yet to make an appearance....）
Pixel Blocks: The code breaks the screen into blocks of a set size (20 pixels here).
Random Distortion: Each block is slightly moved around by a random offset, giving that distorted look.
Brightness Check: Each block’s color is set based on the brightness of the camera feed in that area.
