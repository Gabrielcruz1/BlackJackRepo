//ARRAY OF SUITS AND VALUES
let cardValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q'];
let cardSuit = ['♠', '♥', '♣', '♦'];
let cardDeck = [];

// HANDS THAT DEALER AND PLAYER HAVE
let dealerTotal = [];
let playerTotal = [];
let hidden = [];

//HTML IN A VARIABLE 
let playerHand = document.querySelector('#playerText')
let dealerHand = document.querySelector('#dealerText');

// BUTTONS STORED IN A VARIABLE 
let startButton = document.querySelector('#startButton')
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


// A FUNCTION THAT SHUFFLES MY DECK 
function shuffleDeck (){
    let currentIndex = cardDeck.length //randomIndex;
    while (currentIndex !==0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [cardDeck[currentIndex], cardDeck[randomIndex]] = [cardDeck[randomIndex], cardDeck[currentIndex]];
    }
    // console.log(cardDeck)
    return cardDeck
}



startButton.addEventListener('click', startGame)

function startGame(){
    newDeck();
    shuffleDeck();
    hidden.push(cardDeck[Math.floor(Math.random() * cardDeck.length)])
    dealerTotal = cardDeck[Math.floor(Math.random() * cardDeck.length)]
    console.log(dealerTotal)
    // console.log(hidden)
    playerTotal = cardDeck[Math.floor(Math.random() * cardDeck.length)] + cardDeck[Math.floor(Math.random() * cardDeck.length)]
    playerHand.innerHTML = `Player ${playerTotal}`
    dealerHand.innerHTML = `Dealer ${dealerTotal}`
    console.log(playerTotal)
    calculatePlayerHand()
}



//HIT BUTTON THAT GENERATES RANDOM  CARD TO PLAYER
hitButton.addEventListener('click', hitButtonFunction);

function hitButtonFunction (){
    playerTotal += cardDeck[Math.floor(Math.random() * cardDeck.length)];
    playerHand.innerHTML = `Player ${playerTotal}`
    console.log(cardDeck)
    // calculateHand()
    // playerHand.innerHTML = `Player ${firstTwo}`
    }



// //STAY BUTTON AND FUNCTION FOR WHAT HAPPENS NEXT 
// stayButton.addEventListener('click', () => {

// })

//WIN CONDITION 

function calculatePlayerHand(){
    playerTotal = cardDeck[0].match(/\d+/);
    cardDeckNumber = Number(playerTotal);
    console.log(playerTotal);
    console.log(cardDeckNumber)
    // dealerTotal = cardDeck[0].match(/\d+/);
    // cardDeckNumber = Number(dealerTotal);
    // console.log(dealerTotal)

}
calculatePlayerHand();


// LOSE CONDITION 













