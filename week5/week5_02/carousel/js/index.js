$(function(){

	var images = ["images/food1.jpg", "images/food2.jpg", "images/food3.jpg", "images/food4.jpg"]

	var position = 0


//function for next image
function nextImage() {
	if(position === (images.length -1)) {}
	else if (position < images.length){
	position++;
	$("#image-to-vote-on").attr('src', images[position]);
}
}
	
//function for previous image
function previousImage() {
	if(position === 0){}
	else if (position > 0){
	position--;
	$("#image-to-vote-on").attr('src', images[position]);
}
}
//define onclicks for skip button and back button

$("#backbtn").on("click", previousImage);
$("#skipbtn").on("click", nextImage);

})
	

// variables
// create an array of your images to loop through
// variable to hold the index position



// functions:
// function to change image based on index
// function to skip
// function to go back

// .length of the array? stop skip button at end of images

// change src .attr
// move up or down array value to chage src via attribute.







// 2 arrays, one with image location and one with vote score based on 
// array 1 = image files locations
// array 2 = vote id's that we can then calculate average from
//Function for onskip OR onrate = array1 +1
//function for onback array1 - 1 (index value)
//onclick skip array 2 value = 0, move to next image
//on image-to-vote-on move to next
//on final image skip or vote, calculate average of array 2, insert new para into html 
//with "Your deliciousness score" + AVERAGE of Array2

//