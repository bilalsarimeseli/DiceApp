var randomNumber1 = Math.floor(Math.random() * 6); //1-6

var dicesArray = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice1.png",
];

randomImageSource = dicesArray[randomNumber1];

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6);
var randomImageSource2 = dicesArray[randomNumber2];

var image2 = document.querySelectorAll("img")[1]

image2.setAttribute("src", randomImageSource2);

//RESULTS
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

document.getElementById("p1").style.color = "orange";
document.getElementById("p2").style.color = "orange";

var x = document.getElementsByClassName("dice");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.backgroundColor = "#4ecca3";
}

document.getElementById("p1").style.color = "yellow";
document.getElementById("p2").style.color = "yellow";


