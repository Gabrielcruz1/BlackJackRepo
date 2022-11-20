//ARRAY OF SUITS AND VALUES
let cardValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q'];
let cardSuit = ['♠', '♥', '♣', '♦'];
let cardDeck = [];

// HANDS THAT DEALER AND PLAYER HAVE
let dealerHand = [];
let playerHand = [];
// let hidden = 0; // hidden is second dealer card should be added to dealer hand 

//HTML IN A VARIABLE 
let playerTextOnScreen = document.querySelector('#playerText')
let dealerTextOnScreen = document.querySelector('#dealerText');

// BUTTONS STORED IN A VARIABLE 
let startButton = document.querySelector('#startButton')
let hitButton = document.querySelector('#hitButton')
let stayButton = document.querySelector('#stayButton')

//LOOPING THROUGH SUITS & VALUES TO MAKE DECK 
function newDeck(){
    for(let i=0; i < cardValue.length; i++){
        for (let k = 0; k < cardSuit.length; k++){
            cardDeck.push(cardValue[i] + cardSuit[k])
        }
    }
}
// SHUFFLES MY DECK 
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


//START BUTTON FUNCTION
startButton.addEventListener('click', startGame)

function startGame(){
    newDeck();
    shuffleDeck();
    hit(playerHand, cardDeck)
    hit(dealerHand, cardDeck)
    hit(playerHand, cardDeck)
    hit(dealerHand, cardDeck)
    console.log(playerHand + " players hand")
    console.log(cardDeck)
    console.log(dealerHand + " dealers first card given dealers array")
    // console.log(dealerTotalNumber + " this is hidden number and the dealer total added")
    playerTextOnScreen.innerHTML = `Player ${playerHand}`
    dealerTextOnScreen.innerHTML = `Dealer ${dealerHand}`
    let handTotal = calculateHand(playerHand)
    handTotal = calculateHand(dealerHand)
    // console.log(handTotal + " players hand total")
    console.log(handTotal = calculateHand(playerHand) + " players hand sum")
    console.log(handTotal = calculateHand(dealerHand) + " dealer hand sum")
    // calculateHand(dealerHand)
    // calculateHand(playerHand)
     // console.log(playerTotalNumber + " this is the sum of the player hand") // we do not have to have this number appear on the dom, only have to  have it calculated and ran in a conditional.        
    // console.log(cardDeck)
    // cardDeck[0].charAt(0)
    // console.log(cardDeck[0].charAt(0))
}



// POP TWO CARDS OFF THE DECK INTO DEALER AND PLAYER 
function hit (hand, deck){
    let card = deck.pop()
    hand.push(card)
}



//CALCULATE HAND
function calculateHand(hand){
    let handTotal = 0;
    for(let i = 0; i < hand.length; i++){
        if(hand[i][0] === "J" || hand[i][0] === "K" || hand[i][0] === "Q"){
            handTotal +=10
        } else if (hand[i][0] === "A"){
            handTotal+=11 
        } else {
            let val = hand[i].match(/\d+/)
            numVal = Number(val)
            handTotal += numVal
        }
    }
    return handTotal
}


//HIT BUTTON
hitButton.addEventListener('click', hitButtonFunction);

function hitButtonFunction (){
    calculateHand(dealerHand)
    calculateHand(playerHand)
    hit(dealerHand, cardDeck)
    hit(playerHand, cardDeck)
    console.log(dealerHand + " im the dealers hand now")
    // playerHand += cardDeck[Math.floor(Math.random() * cardDeck.length)];
    playerTextOnScreen.innerHTML = `Player ${playerHand}`
    console.log(playerHand)
    }

    
// //STAY BUTTON 
stayButton.addEventListener('click', stayButtonFunction )

function stayButtonFunction(){
    winningGame()

}


// LOSE CONDITION 
function winningGame(){
    if(playerTotalNumber === 21){
        return console.log("BlackJack")
    } else if (playerTotalNumber < 21) {
        console.log("Keep Going")
    } else console.log("BUST")
}

function losingGame(){
    if(dealerTotalNumber === 21){
        return console.log("BlackJack")
    } else if (dealerTotalNumber < 21) {
        console.log("Keep Going")
    } else console.log("BUST")
}







