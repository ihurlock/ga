window.onload = function() {

var name = document.getElementById("name");
name.innerHTML = "Ian";

var sum = document.getElementById("sum");
sum.innerHTML = 24 + 56 + 111;

var shouldIGetAHaricut = true;
var haircut = document.getElementById("haircut");

if (shouldIGetAHaricut) {
	alert("Yes!");
	haircut.innerHTML = "Yes, you should!";
	}

}
