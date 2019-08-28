const width=640;
const height=480;
let capture;
let scale;

function setup() {
   createCanvas(windowWidth, windowHeight);
   capture = createCapture(VIDEO);
   capture.size(width, height);
   scale = windowWidth/width;
   capture.hide();
   frameRate(10);
   fill(0)
}

 function draw() {
   background(255);
   capture.loadPixels();

   for (var y=0; y<height; y+=8) {
     for (var x=0; x<width; x+=8) {
       var i = y * width + x;
       var b = capture.pixels[i*4+2];
       var radius = 8*scale * (255 - b)/255;
       ellipse(x*scale, y*scale, radius, radius);
    }
  }
 }
