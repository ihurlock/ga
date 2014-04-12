$(document).ready(function(){
  var body = $('body');

  $('#grey').on("click", function(){
    body.css("background", "grey").css("color", "white");
    //$(this).css('border-color', 'white');
  })

  $('#blue').on("click", function(){
    body.css("background", "blue").css("color", "white");
  })

  $('#yellow').on("click", function(){
    body.css("background", "yellow").css("color", "black");
  })
  
});

// $(this) refers to the element you are curerntly editing

//$('#grey').on("click", function(){}) (select a class/id.statetheevent("type of event", function()))
// use same # and . to select id's and classes.

//$("body").hide(); (hide an element)

//$("body").show(); (show an element)
//$(function(){

//}); (The above is the same as the $(document) function above, same as onload in plain javascript)


// window.onload = function() {

//   var body = document.getElementById('background');
//   var greyButton = document.getElementById('grey');
//   var blueButton = document.getElementById('blue');
//   var yellowButton = document.getElementById('yellow');





//   greyButton.onclick = function() {
//     body.style.backgroundColor = 'grey';
//     body.style.color = 'white';
//   }

//   blueButton.onclick = function() {
//     body.style.backgroundColor = 'blue';
//     body.style.color = 'white';
//   }

//   yellowButton.onclick = function() {
//     body.style.backgroundColor = 'yellow';
//     body.style.color = 'black';
//   }

// }
