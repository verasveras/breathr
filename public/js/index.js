let breath = {
	in: 4,
	out: 4
};

const START_RADIUS = 50;
let radius = START_RADIUS;
let reset = false;

var startTime;
document.addEventListener('DOMContentLoaded', function(e) {
	startTime = Date.now();

	function changeSelected(target){

		target.classList.add('selected');
	}

	function clearAll(className){

		let inputsList = document.getElementsByClassName(className);
		for (var i = 0; i < inputsList.length; i++){
			inputsList[i].classList.remove('selected');
		}
	}

	function handleChange(event){

		radius = 50;
		let target = event.target;
		let className = target.classList.contains('in') ? 'in' : 'out';
		breath[className] = Number(target.innerHTML);
		reset = true;
		startTime = Date.now();
		clearAll(className);
		changeSelected(target);

	}

	// bind click handlers
	let inList = document.getElementsByClassName('in');
	let outList = document.getElementsByClassName('out');

	for (var i = 0; i < inList.length; i++){
		inList[i].addEventListener('click', handleChange);
		outList[i].addEventListener('click', handleChange);
	}

})
