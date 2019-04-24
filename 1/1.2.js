var a = Number(prompt('Enter first number'));
var c = prompt('Enter act');
var b = Number(prompt('Enter second number'));

switch (c) {

	case '-':
		d = a - b;
		break;

	case '+':
		d = a + b;
		break;

	case '*':
		d = a * b;
		break;

	case '/':
		d = a / b;
		break;

	default:
		alert('Incorrect input');

}

alert('Result = ' + d);



