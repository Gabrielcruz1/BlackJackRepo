//ARRAY OF SUITS AND VALUES
let cardValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q'];
let cardSuit = ['♠', '♥', '♣', '♦'];
let cardDeck = [];

// HANDS THAT DEALER AND PLAYER HAVE
let dealerHand = [];
let playerHand = [];

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
    return cardDeck
}

// POP TWO CARDS OFF THE DECK INTO DEALER AND PLAYER 
function hit (hand, deck){
    let card = deck.pop()
    hand.push(card)
}

//START BUTTON WITH FUNCTION BELOW
startButton.addEventListener('click', startGame)

function startGame(){
    newDeck();
    shuffleDeck();
    hit(playerHand, cardDeck)
    hit(playerHand, cardDeck)
    hit(dealerHand, cardDeck)
    hit(dealerHand, cardDeck)
    playerTextOnScreen.innerHTML = `Player ${playerHand}`
    dealerTextOnScreen.innerHTML = `Dealer ${dealerHand}`
    calculateHand(dealerHand)
    calculateHand(playerHand)
    console.log(cardDeck)
    console.log(calculateHand(dealerHand) + " The Dealers calculated Hand")
    console.log(calculateHand(playerHand) + " The Players calculated Hand")

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

//HIT BUTTON WITH FUNCTION BELOW
hitButton.addEventListener('click', hitButtonFunction);

function hitButtonFunction (){
    calculateHand(dealerHand)
    calculateHand(playerHand)
    hit(dealerHand, cardDeck)
    hit(playerHand, cardDeck)
    playerTextOnScreen.innerHTML = `Player ${playerHand}`
    dealerTextOnScreen.innerHTML = `Dealer ${dealerHand}`
    console.log(calculateHand(dealerHand) + " The Dealers Hand Now")
    console.log(calculateHand(playerHand)+ " The Players Hand Now")
    }

    
//STAY BUTTON WITH FUNCTION BELOW
stayButton.addEventListener('click', stayButtonFunction )

function stayButtonFunction(){
    winningGame()
    calculateHand(dealerHand)
    calculateHand(playerHand)
    dealerTextOnScreen.innerHTML = `Dealer ${dealerHand}`
}

// WIN GAME FUNCTION (COMPARES HANDS)
function winningGame(){
    if(calculateHand(playerHand) === calculateHand(dealerHand)){
        playerTextOnScreen.innerHTML = `Player ${"draw"}`
    } else if (calculateHand(playerHand) < 21 && calculateHand(playerHand) > calculateHand(dealerHand)){
        playerTextOnScreen.innerHTML = `Player ${"you win"}`   
    } else if (calculateHand(playerHand) > 21 && calculateHand(dealerHand) < 21){
        playerTextOnScreen.innerHTML = `Player ${"Bust, Dealer wins"}`
    } else if (calculateHand(playerHand) === 21 && calculateHand(dealerHand) != 21){
        playerTextOnScreen.innerHTML = `Player ${"BlackJack"}`
    } else if(calculateHand(playerHand) > 21 && calculateHand(dealerHand) > 21) {
        playerTextOnScreen.innerHTML = `Player ${"BUST"}`
    }
}


function gameRules(array){
    dealerHand = array
    if (stayButtonFunction()){
        for (let val of dealerHand){
            if(calculateHand(playerHand) <= 16){
                hit(dealerHand, cardDeck)
            } else {
                winningGame()
            }
        }
    }
    winningGame()
}

gameRules(dealerHand)
// if player stays at first hit because he hit 19, well dealer still has option to hit.
//if upon start game 21 is reached. game ends for player and cpu. 










