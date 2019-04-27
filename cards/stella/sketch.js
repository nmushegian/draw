var cX = 200;
var cY = 200;

var r0 = 10; // inner
var r1 = 35;
var r2 = 130; // arrow size
var r3 = 65; // wing size

function setup() {
	createCanvas(windowWidth, windowHeight);
    strokeWeight(5);
    noFill();
    frameRate(24);
}

function drawArrow(theta, ratio) {
    inner = r1 + (ratio * r0);
    outer = inner + r2; 
    x0 = inner * cos(theta);
    y0 = inner * sin(theta);
    x1 = outer * cos(theta);
    y1 = outer * sin(theta);
    line(x0, y0, x1, y1);
    push();
    translate(x0, y0);
    theta1 = theta + PI/4;
    theta2 = theta - PI/4;
    x1 = r3 * cos(theta1); 
    y1 = r3 * sin(theta1); 
    line(0, 0, x1, y1);
    x2 = r3 * cos(theta2); 
    y2 = r3 * sin(theta2); 
    line(0, 0, x2, y2);
    pop();
}

var t = 0.0;

function draw() {
    background(0xfff);
    translate(cX, cY);
    for(var i = 0; i < 8; i++) {
        if( i % 2 == 0 ) {
            drawArrow(i * TAU / 8, cos(t));
        } else {
            drawArrow(i * TAU / 8, sin((t - PI/2) % TAU));
        }
    }
    t += 0.1;
}
