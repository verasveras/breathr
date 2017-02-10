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

var diff = 0;

function onFrame(event) {

	var max = breath.in + breath.out;
	var inB = breath.in;
	var outB = breath.out;

	if (reset){
		resetAnimation();
		diff = event.time;
		reset = false;
	}

	circle.remove();
	// circle = new Path.Circle(new Point(width/2, height/3), 55 * (Math.sin(event.time) + 2));

	var instep = 2 / inB;
	var outstep = 2 / outB;
	// if (!step) step = max;
	if ((event.time - diff) % max <= inB){
		// console.log('im adding', instep)
		radius +=  instep;
	}
	else {
		// console.log('im subtracting', outstep)
		radius -= outstep;
	}

	circle = new Path.Circle(new Point(width/2, height/3), radius);
	circle.fillColor = 'tomato';

	// resetAnimation();

}
