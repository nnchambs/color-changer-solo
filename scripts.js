//event listener for random-color-button click
$('#random-color-button').click(function(){
  generateRandomBackgroundColor();
});
//event listener for reset-button click
$('#reset-button').click(function(){
  resetBackgroundColor();
});
//function to reset background color to white
function resetBackgroundColor() {
  $("body").css("background", "white");
};
//function to generate random hex code
function generateRandomBackgroundColor () {
  var randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
  if (randomColor === "#FFFFFF") {
    var randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
    $("body").css("background", randomColor);
  }
  else {
    $("body").css("background", randomColor);
  }
};
