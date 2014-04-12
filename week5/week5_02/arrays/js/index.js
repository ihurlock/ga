$(function() {
    var myArr = ["Hello", , 54.3, true];

    console.log(myArr);

    console.log(myArr[0]);
    console.log(myArr[1]);

    myArr[1] = "Stuff";

    console.log(myArr[1]);

    var fruits = ["Apples", "Oranges", "Pears"];

    myArr = fruits;

    console.log(myArr[0]);

    // Return number of items in array - .length

    console.log(myArr.length);

    //.push adds a value to end of Array

    myArr.push("Strawberries");
    console.log(myArr);

    //.pop takes a value off the Array list

    myArr.pop();
    console.log(myArr);

    // first value is position that we want to enter the value, second value is how many variables we want to remove, third is the value/string you want to enter into the array

    myArr.splice(2, 0, "Mango");
    console.log(myArr)

    // Attributes - can use to change source of image for example

    var className = $("h1").attr("class");
  	className = $("h1").attr("class", "new-heading");


  	//forEach loops
  	var names = ["Daniel", "James", "CJ"];

  	names.forEach(function(element, index) {
  		console.log(element, index);

  	});



});