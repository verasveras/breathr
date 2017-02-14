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

	var instep = 2 / inB;
	var outstep = 2 / outB;
	var color; 

	if ((event.time - diff) % max < inB) {
		radius +=  instep;
		color = new Color(0, 30/radius, 20/radius); 
	}
	else if ((event.time - diff) % max > inB){
		radius -= outstep;
		color = new Color(0, 30/radius, 20/radius); 
	}
	
	circle.remove(); 
	circle = new Path.Circle(new Point(width/2, height/3), radius);
	circle.fillColor = color;


}
