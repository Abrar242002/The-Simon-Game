
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
console.log(userClickedPattern);
$(".btn").click(function(event) {

  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);
})

function playSound(name){
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

function nextSequence() {
  //random number generated.
  var randomNumber = Math.floor(Math.random() * 4);
  //Random color generated.
  var randomChosenColour = buttonColours[randomNumber];
  //Pushed a random color into the gamePattern array.
  gamePattern.push(randomChosenColour);


  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);


}

nextSequence();
