let breath = {
	in: 0,
	out: 0
};

document.addEventListener('DOMContentLoaded', function(e) {

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

		let target = event.target;
		let className = target.classList.contains('in') ? 'in' : 'out';
		breath[className] = Number(target.innerHTML);
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