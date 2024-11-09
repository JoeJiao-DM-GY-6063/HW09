// original image, to use as reference for pixel colors
let oImg;
let mImg;
let slider;
let texture=[];
function preload() {
  oImg = loadImage("../assets/mondriaan.jpg");
  mImg = loadImage("../assets/mondriaan.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  oImg.resize(0, height);
  mImg.resize(0, height);


  oImg.loadPixels();


  slider = createSlider(0, 255);
  slider.position(1000, height / 2);
  slider.size(300);
}

function draw() {
  let s= slider.value();
  mImg.loadPixels();

  for (let idx = 0; idx < mImg.pixels.length; idx+=4) {
    let r = mImg.pixels[idx + 0];
    let g = mImg.pixels[idx + 1];
    let b = mImg.pixels[idx + 2];
    let pixelIsRed = r > 1.3 *g && r >  1.3*b && r >128;
    let pixelIsGreen = g> 1.8 * r && g > 0.4* b && g > 50;
    let pixelIsYellow = r > 1.2* b && g > 1.2* b && r > 128&&g>128;


    if (pixelIsRed) {
      oImg.pixels[idx + 0]=232;
      oImg.pixels[idx + 1]=48;
      oImg.pixels[idx + 2]=35+s;
    }
    if (pixelIsGreen) {
      oImg.pixels[idx + 0]=4;
      oImg.pixels[idx + 1]=181;
      oImg.pixels[idx + 2]=7+s;
    }
    if (pixelIsYellow) {
      oImg.pixels[idx + 0]=245;
      oImg.pixels[idx + 1]=212;
      oImg.pixels[idx + 2]=24+s;
    }
  }
  oImg.updatePixels();

  image(oImg, 0, 0);
}
