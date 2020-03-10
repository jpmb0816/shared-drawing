var socket;

function setup() {
	createCanvas(600, 400);
	background(112, 146, 190);
	socket = io.connect('http://192.168.22.23:3000');
}

function newDrawing(data) {
	noStroke();
	fill(255, 0, 100);
	ellipse(data.x, data.y, 5, 5);
}

function mouseDragged() {
	var data = {
		x: mouseX,
		y: mouseY
	};
	
	socket.emit('mouse', data);
	socket.on('mouse', newDrawing);
	
	noStroke();
	fill(0);
	ellipse(mouseX, mouseY, 5, 5);
}

function draw() {
	
}