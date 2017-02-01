var width = document.getElementById('paper-canvas').offsetWidth;
var height = document.getElementById('paper-canvas').offsetHeight;

var circle = new Path.Circle(new Point(width/2, height/3), 50);
circle.fillColor = 'tomato';

var scalefactor = 0;
 
function onFrame(event) {

	var max = breath.out;
	var min = breath.in;

	function getScaleFactor(){

	}

	circle.scale(getScaleFactor);

}
