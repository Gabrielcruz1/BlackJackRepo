//ARRAY OF SUITS AND VALUES
let cardValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q'];
let cardSuit = ['♠', '♥', '♣', '♦'];
let cardDeck = [];

// HANDS THAT DEALER AND PLAYER HAVE
let dealerTotal = [];
let playerTotal = [];
let hidden = 0;

//HTML IN A VARIABLE 
let playerHand = document.querySelector('#playerText')
let dealerHand = document.querySelector('#dealerText');

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
    hidden = (cardDeck[Math.floor(Math.random() * cardDeck.length)])
    console.log(hidden + " hidden number in the hidden array")
    // hidden.push(cardDeck[Math.floor(Math.random() * cardDeck.length)])
    dealerTotal =  cardDeck[Math.floor(Math.random() * cardDeck.length)]
    dealerTotalNumber = hidden.value + dealerTotal.value
    console.log(dealerTotalNumber + " the hidden number and the dealer total added")
    // console.log(dealerSum)
    console.log(dealerTotal + " dealers first card given")
    for (let i = 0; i < 2; i++){
        randomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)] 
        playerTotal.push(randomCard)
        }
    playerHand.innerHTML = `Player ${playerTotal}`
    dealerHand.innerHTML = `Dealer ${dealerTotal}`
    console.log(playerTotal + " players hand")
    calculateDealerHand()
    calculatePlayerHand()
    console.log(playerTotalNumber + " this is the sum of the total hand") // we do not have to have this number appear on the dom, only have to  have it calculated and ran in a conditional.        
    console.log(cardDeck)
}


//HIT BUTTON
hitButton.addEventListener('click', hitButtonFunction);

function hitButtonFunction (){
    calculatePlayerHand()
    // calculateDealerHand()
    // console.log(dealerHand)
    playerTotal += cardDeck[Math.floor(Math.random() * cardDeck.length)];
    playerHand.innerHTML = `Player ${playerTotal}`
    console.log(playerTotal)
    // console.log(cardDeck + " card Deck ")
    // // playerHand.innerHTML = `Player ${firstTwo}`
    }

    
// //STAY BUTTON 
stayButton.addEventListener('click', stayButtonFunction )
function stayButtonFunction(){
    winningGame()
    
}



let playerScore = 0;
//CALCULATE PLAYER HAND

let playerTotalNumber = 0;
function calculatePlayerHand(){
for(let i = 0; i < playerTotal.length ; i++){
if ( playerTotal[i][0] === "J" || playerTotal[i][0] ===     "K" || playerTotal[i][0] === "Q" ) {
playerTotalNumber+=10
    }
    else if (playerTotal[i][0] === "A") {
        playerTotalNumber+= 11
    }
    else if ( playerTotal[i][0] !== "J" || playerTotal[i][0] !== "K" || playerTotal[i][0] !== "Q" || playerTotal[i][0] !== "A") {
        let numberValue = playerTotal[i].match(/\d+/)
    numberValueNumber = Number(numberValue)
    playerTotalNumber+= numberValueNumber
        }
    }
    
    // playerScore = 0 ;
    // for (let i = 0; i < playerTotalNumber.length; i++){
    //     playerScore = playerScore + playerTotalNumber[i]
    // }
    // console.log(playerScore + " player score")
    // console.log(playerTotalNumber)
    return playerTotalNumber
}

//CALCULATE DEALER HAND
let dealerTotalNumber = 0;
function calculateDealerHand(){
    for(let i = 0; i < dealerTotal.length ; i++){
        if ( dealerTotal[i][0] === "J" || dealerTotal[i][0] === "K" || dealerTotal[i][0] === "Q" || dealerTotal === 10) {
            dealerTotalNumber+=10
        }
        else if (dealerTotal[i][0] === "A") {
            dealerTotalNumber+=10
        }
        else if ( dealerTotal[i][0] !== "J" || dealerTotal[i][0] !== "K" || dealerTotal[i][0] !== "Q" || dealerTotal[i][0] !== "A") {
            let numberValue = dealerTotal[i].match(/\d+/)
            numberValueNumber = Number(numberValue)
            dealerTotalNumber += numberValueNumber
        }
    }
    // console.log(dealerTotalNumber)
    return dealerTotalNumber
    }
  

// LOSE CONDITION 
function winningGame(){
    if(playerTotalNumber === 21){
        return console.log("BlackJack")
    } else if (playerTotalNumber < 21) {
        console.log("Keep Going")
    } else console.log("BUST")
}
        
        
        
// console.log("hello world")
// console.log("hello world ")
        
        
        



















