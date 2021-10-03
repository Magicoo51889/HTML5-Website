const outputParagraph = document.getElementById('result');
const submitButton = document.getElementById('cmdMultiply');

function multiply(e) {
	e.preventDefault();

	const number1 = parseInt(document.forms['maths']['number1'].value)
	const number2 = parseInt(document.forms['maths']['number2'].value)
	const multiplied = number1 * number2

	outputParagraph.innerHTML = number1 + " x " + number2 + " = " + multiplied;
}

const outputHeadingD2B = document.getElementById('result');
const submitButtonD2B = document.getElementById('D2B')

function D2B(decimal) {
	decimal.preventDefault();

	return (decimal >>> 0).toString(2);
}

submitButton.addEventListener('click', multiply);
submitButton.addEventListener('click', D2B);


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