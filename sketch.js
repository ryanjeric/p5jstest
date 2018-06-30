var img;
var smallPoint, largePoint;

function preload() {
  img = loadImage("draw.jpg");
}

function setup() {
	createCanvas(720, 800);
	smallPoint = 3;
	largePoint = 5;
	imageMode(CENTER);
	background(255);
	img.loadPixels();
}

function draw() {
  var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  fill(pix, 1);
  ellipse(x, y, pointillize, pointillize);
}