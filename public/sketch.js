var socket;

function setup() {
	createCanvas(600, 400);
	background(51);
	//socket = io.connect('http://192.168.0.107:8099');
}

function mouseDragged() {
	console.log("Sending: " + mouseX + ', ' + mouseY);
	
	var data = {
		x: mouseX,
		y: mouseY
	};
	
	noStroke();
	fill(255);
	ellipse(mouseX, mouseY, 36, 36);
}

function draw() {
	
}
