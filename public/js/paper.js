var width = document.getElementById('paper-canvas').offsetWidth;
var height = document.getElementById('paper-canvas').offsetHeight;

var circle = new Path.Circle(new Point(width/2, height/3), radius);
circle.fillColor = 'tomato';

var scaleFactor = 1;
var once = 1;



function onFrame(event) {

	var max = breath.in + breath.out;
	var inB = breath.in;
	var outB = breath.out;

	// var max = breath.out;

	// function getScaleFactor(){

	// 	return scaleFactor < max ? increase() : decrease()
	// }

	// function increase(){
	// 	return scaleFactor++;

	// }

	// function decrease(){
	// 	return scaleFactor - 1 == 1 ? 1 : scaleFactor--;
	// }

	// if (!once) {
	// 	once++;
	// 	circle.scale(4);
	// }

	// sin(event.time);

	// circle.scale(Math.sin(event.count) + 2);
	// console.log(Math.sin(event.count) + 2);

	circle.remove();
	// circle = new Path.Circle(new Point(width/2, height/3), 55 * (Math.sin(event.time) + 2));


	if (event.time % max < inB) radius += 5;
	else radius -= 5;


	circle = new Path.Circle(new Point(width/2, height/3), radius);
	circle.fillColor = 'tomato';

}
