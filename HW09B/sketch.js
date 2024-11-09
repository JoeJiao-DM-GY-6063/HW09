let mCamera;
let blockSize = 20;

function preload() {
  mCamera = createCapture(VIDEO);
  mCamera.size(windowWidth, windowHeight);
  mCamera.hide();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(180, 200, 255);
   mCamera.loadPixels();

  for (let y = 0; y < height; y += blockSize) {
    for (let x = 0; x < width; x += blockSize) {
      
      
      let offsetX = x + random(-10, 10);
      let offsetY = y + random(-10, 10);
      
      
      let i = (floor(offsetY) * mCamera.width + floor(offsetX)) * 4;
      let r = mCamera.pixels[i];
      let g = mCamera.pixels[i + 1];
      let b = mCamera.pixels[i + 2];
      
     
      let brightness = (r + g + b) / 3;
      
   
      if (brightness > 128) {
        fill(0); // Black
      } else {
        fill(255); // White
      }
      
      
      rect(x, y, blockSize, blockSize);
    }
  }
}
