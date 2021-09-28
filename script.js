const outputHeading = document.getElementById('result');
const submitButton = document.getElementById('cmdMultiply');

function multiply(e) {
	e.preventDefault();

	const number1 = parseInt(document.forms['maths']['number1']).value
	const number2 = parseInt(document.forms['maths']['number2']).value
	const multiplied = number1 * number2

	outputHeading.innerHTML = number1 + " x " + number2 + " = " + multiplied;
}

submitButton.addEventListener('click', multiply);


/*
windows.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky")
	}
}
*/