

// //function to set background to white
// function resetBackground () {
// $("body").css("background", "white");
// };

//function to set background to random color



//event listener for reset button click
$('#reset').click(function(){
  $("body").css("background", "white");
});

//function to generate random hex code

function getRandomHexCode () {
  var randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
  return randomColor;
  if (randomColor === "#FFFFFF") {
    var randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
  }
};




//event listener to random button click
// $('#random').click(function(){
//   getRandomHexCode;
//   alert: "Hi!";
// };




//   $("body").css("background", randomColor);
// });
// });
