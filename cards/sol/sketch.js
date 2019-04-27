var cX = 200;
var cY = 200;

var r = 120;
var r0, r1;
var x0, y0, x1, y1;

var t = 0;
var W = 6;

function setup() {
	createCanvas(windowWidth, windowHeight);

    noFill();
    frameRate(24)

    ellipse(0, 0, 2*r + W);
    ellipse(0, 0, 2*r - W);

}

function drawRay(theta, w, s) {
    strokeWeight(s)
    r0 = r - w;
    r1 = r + w;
    x0 = r0 * cos(theta);
    y0 = r0 * sin(theta);
    x1 = r1 * cos(theta);
    y1 = r1 * sin(theta);
    line(x0, y0, x1, y1);
}


function draw() {
    background(0xfffffff)
    translate(cX, cY);

    print(t)
    var w0 = 18 + W * cos(t);
    var w1 = 18 + W * sin(t - PI / 2);
    print("w0, w1", w0, w1);

    for(var i = 0; i < 60; i++) {
        drawRay(i * TAU / 60, i % 2 == 0 ? w0 : w1, 5);
    }

    t = (t + TAU / 120) % 360;

    strokeWeight(8);
    var h = -7;
    line(16, h, 60, h);
    line(-16, h, -60, h);
}


