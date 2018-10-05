console.log("Up and running!");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
console.log (" User flipped " + cardFour + " User flipped " + cardThree);
var cardOne = document.getElementById("first-card")
cardOne.addEventListener("click",()=>{
	console.log("Clicked first card")
	cardOne.src= "images/queen-of-diamonds.png"
}) 
