//function to set background to random color
function resetBackground() {
  $("body").css("background", "white");
};
//function to generate random hex code
function getRandomHexCode () {
  var randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
  if (randomColor === "#FFFFFF") {
    var randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
    $("body").css("background", randomColor);
  }
  else {
    $("body").css("background", randomColor);
  }
};
//event listener to random button click
$('#random-color').click(function(){
  getRandomHexCode();
});
//event listener for reset button click
$('#reset').click(function(){
  resetBackground();
});
