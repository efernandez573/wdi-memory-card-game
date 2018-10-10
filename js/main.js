var cards = [
	{
		rank:'queen',
		suit:'hearts',
		cardImage: 'images/queen-of-hearts.png'},
{
		rank:'queen',
		suit: 'diamonds',
		cardImage:'images/queen-of-diamonds.png'},
{
 		rank:'king',
		suit: 'hearts',
		cardImage:'images/king-of-hearts.png'},
{
		rank:'king',
		suit: 'diamonds',
		cardImage:'images/king-of-diamonds.png'}
];

var cardsInPlay = cards[1].rank
var cardOne = cards[0]
function checkForMatch(){

	if (cardsInPlay[0] === cardsInPlay[1] && cardsInPlay.length === 2){
		alert("You found a match!")
	}
else if(cardsInPlay[0] === cardsInPlay[2] && cardsInPlay.length === 2){
		alert("Sorry, try again.")
	}
}
function flipCard(cards){


};
	console.log("User flipped " + cards[0].rank)

console.log(cards[0].cardImage)

console.log(cards[0].suit)
console.log("User flipped " + cards[2].rank)
console.log(cards[2].cardImage)
console.log(cards[2].suit)
