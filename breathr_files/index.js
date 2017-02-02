document.addEventListener("DOMContentLoaded", function(e) {

	function changeSelected(event){

		let target = event.target;
		let currentTarget = event.currentTarget;
		console.log(target);
		target.setAttribute('class', 'selected');
	}

	function clearAll(){

		let inputsList = document.getElementsByClassName("input");
		for (var i = 0; i < inputsList.length; i++){
			inputsList[i].setAttribute('class', 'unselected');
		}
	}


	let inputsList = document.getElementsByClassName("input");

	for (var i = 0; i < inputsList.length; i++){
		console.log('dogs');
		inputsList[i].addEventListener('click', changeSelected);
	}

})