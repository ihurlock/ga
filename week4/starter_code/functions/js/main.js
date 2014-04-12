function helloWorld() {
	console.log('Hello Ian!')
}

helloWorld();

// function with arguments

function addAndPrint(num1, num2) {
	var sum = num1 + num2;
	console.log(sum);
}

addAndPrint(1,5);

// javascript concatination

function multiplyAndPrint(num3, num4) {
	var multiplication = num3 * num4;
	console.log("The multiplication is: " + 
		multiplication);
}

multiplyAndPrint(2,3)

// anonymous function
// returning a value
var division = function(num5, num6) {
	return num5 / num6;
}

console.log(division(10, 5));

// name and age function

function nameAndAge (name, age) {
	//console.log("Your name is " + name + " , you are " + age);
	return name + " is" + " " + age;
}
console.log(nameAndAge("Daniel" , 27))