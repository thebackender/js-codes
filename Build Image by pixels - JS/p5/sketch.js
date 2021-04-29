function setup() {
  // put setup code here
  createCanvas(500, 500);
  pixelDensity(1);
}

function draw() {
  // put drawing code here
  background(51);
  loadPixels();
  for (var i = 0; i < height; i++) {
  	for (var j = 0; j < width; j++) {
  		var index = (j + i * width)*4;
  		/*pixels[index+0] = 255;
		pixels[index+1] = 0;
		pixels[index+2] = 255;
		pixels[index+3] = 255;*/
		/*pixels[index+0] = j;
		pixels[index+1] = 0;
		pixels[index+2] = i;
		pixels[index+3] = 255;*/
		pixels[index+0] = j;
		pixels[index+1] = random(255);
		pixels[index+2] = i;
		pixels[index+3] = 255;
  	}	
  }
  updatePixels();
}