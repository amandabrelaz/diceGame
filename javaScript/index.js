// Step3 = Create a random number between 1 and 6
var randomNumber1 = Math.floor( Math.random() * 6 ) + 1;

// Step4= Change the image 1 randomlly
var randomImageSource = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


// Do the same for image 2
var randomNumber2 = Math.floor( Math.random() *6 ) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


//Change the title accordingly to the winner dice
if( randomNumber1 > randomNumber2 ){

  document.querySelector("h1").innerHTML = "Play 1 Wins!";
}
else if( randomNumber2 > randomNumber1 ){

  document.querySelector("h1").innerHTML = "Play 2 Wins!";
}
else{
  
  document.querySelector("h1").innerHTML = "Draw!";
}
