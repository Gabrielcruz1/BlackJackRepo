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



// when our button is clicked give one value out of the array, access our array a


//HIT BUTTON THAT GENERATES RANDOM 2 CARDS TO PLAYER 
hitButton.addEventListener('click', () => {
    cardDeck.slice(Math.floor(Math.random())) 
    console.log(cardDeck)

})
   

//STAY BUTTON AND FUNCTION FOR WHAT HAPPENS NEXT 
stayButton.addEventListener('click', () => {

})

//WIN CONDITION 
// LOSE CONDITION 







