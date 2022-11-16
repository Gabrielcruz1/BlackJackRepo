// console.log("hello world")
// console.log(cardSuit)
// console.log(cardValue)
// console.log(hitButton)
// console.log(stayButton)
//console.log(Math.floor(Math.random() * (cardValue[i] + cardSuit[k])))
//console.log(cardDeck);
// newDeck();
//shuffleDeck();

//CARD DECK AND SUITS STORED IN VARIABLE
let cardValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q'];
let cardSuit = ['H', 'S', 'D', 'C'];
let cardDeck = [];

// SCORE COUNTER BETWEEN DEALER AND PLAYER 
let dealerTotal = 0;
let playerTotal = 0;

// BUTTONS STORED IN A VARIABLE 
let hitButton = document.querySelector('#hitButton')
let stayButton = document.querySelector('#stayButton')


//LOOPING THROUGH THE SUITS AND VALUES TO FORM A DECK 
function newDeck(){
    for(let i=0; i < cardValue.length; i++){
        for (let k = 0; k < cardSuit.length; k++){
          cardDeck.push(cardValue[i] + cardSuit[k])
        }
    }
}
newDeck();

// A FUNCTION THAT SHUFFLES MY DECK 
function shuffleDeck (){
    let currentIndex = cardDeck.length, randomIndex;
    while (currentIndex !==0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [cardDeck[currentIndex], cardDeck[randomIndex]] = [cardDeck[randomIndex], cardDeck[currentIndex]];
    }
    console.log(cardDeck)
   return cardDeck
}
shuffleDeck();

//HIT BUTTON THAT GENERATES RANDOM 2 CARDS TO PLAYER 
hitButton.addEventListener('click', () => {
    //we dont want to call the shuffle deck because it will give more cards than necessary we could use a function that only provides two cards at a time of game start then 1 card there after 

    // game start two cards auto populate 
    // then it is up to player to hit or stay
    // during case of hit the player should get a card until the total value is 21 < 
})
   

//STAY BUTTON AND FUNCTION FOR WHAT HAPPENS NEXT 
stayButton.addEventListener('click', () => {

})

//WIN CONDITION 
// LOSE CONDITION 







