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