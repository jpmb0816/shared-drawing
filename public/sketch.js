var socket;

function setup() {
	createCanvas(600, 400);
	background(51);
	socket = io.connect('http://192.168.0.107:3000');
}

function newDrawing(data) {
	noStroke();
	fill(255, 0, 100);
	ellipse(data.x, data.y, 36, 36);
}

function mouseDragged() {
	var data = {
		x: mouseX,
		y: mouseY
	};
	
	socket.emit('mouse', data);
	socket.on('mouse', newDrawing);
	
	noStroke();
	fill(255);
	ellipse(mouseX, mouseY, 36, 36);
}

function draw() {
	
}
