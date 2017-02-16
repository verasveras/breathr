var width = document.getElementById('paper-canvas').offsetWidth;
var height = document.getElementById('paper-canvas').offsetHeight;

var circle = new Path.Circle(new Point(width/2, height/3), radius);
circle.fillColor = 'tomato';

var scaleFactor = 1;
var once = 1;

var test = function (){
	console.log('i was called')
}

var resetAnimation = function(){
	circle.remove();
	circle = new Path.Circle(new Point(width/2, height/3), START_RADIUS);
	circle.fillColor = 'tomato';
}

var diff, now;

function onFrame(event) {

	var max = breath.in + breath.out;
	var inB = breath.in;
	var outB = breath.out;

	if (reset){
		resetAnimation();
		// diff = event.time;
		reset = false;
	}

	circle.remove();
	//radius
	var instep = 2 / inB;
	var outstep = 2 / outB;
	var color;

/*
	light blue: rgb(172,193,212)
	dark blue: rgb(103,139,153)
	turquoise: rgb(28,121,128)
*/

	// colors
	var startRed = 172;
	var endRed = 103;
	var diffRed = startRed - endRed;

	var startGreen = 193;
	var endGreen = 139;
	var diffGreen = startGreen - endGreen;

	var startBlue = 212;
	var endBlue = 153;
	var diffBlue = startBlue - endBlue;

	var red = startRed;
	var blue = startBlue;
	var green = startGreen;


	//calculate next radius and color
	now = Date.now();
	diff = startTime ? (now - startTime) / 1000 : 0;
	if (diff % max < inB) {
		radius +=  instep;
		red += diffRed / inB;
		green += diffGreen / inB;
		blue += diffBlue/ inB;

	}
	else if (diff % max > inB){
		radius -= outstep;
		red -= diffRed / outB;
		green -= diffGreen / outB;
		blue -= diffBlue/ outB;
	}
	console.log('r', red, 'g', green, 'b', blue)
	//draw next circle
	circle.remove();
	circle = new Path.Circle(new Point(width/2, height/3), radius);
	circle.fillColor = new Color(red/255,green/255,blue/255);


}
