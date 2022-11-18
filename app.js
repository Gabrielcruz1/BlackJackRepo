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
    hidden.push(cardDeck[Math.floor(Math.random() * cardDeck.length)])
    dealerTotal = cardDeck[Math.floor(Math.random() * cardDeck.length)]
    console.log(dealerTotal + " dealerTotal")
    for (let i = 0; i < 2; i++){
        randomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)] 
        playerTotal.push(randomCard)
    }
    playerHand.innerHTML = `Player ${playerTotal}`
    dealerHand.innerHTML = `Dealer ${dealerTotal}`
    console.log(playerTotal)
    // calculatePlayerHand()
    calculateDealerHand()
}



//HIT BUTTON
hitButton.addEventListener('click', hitButtonFunction);

function hitButtonFunction (){
    calculatePlayerHand()
    // console.log(calculatePlayerHand)
    // playerTotal += cardDeck[Math.floor(Math.random() * cardDeck.length)];
    // playerHand.innerHTML = `Player ${playerTotal}`
    // console.log(cardDeck + " card Deck ")
    // // calculateHand()
    // // playerHand.innerHTML = `Player ${firstTwo}`
    }


// //STAY BUTTON 
// stayButton.addEventListener('click', stayButtonFunction )

// function stayButtonFunction(){

// }


//WIN CONDITION 
let playerTotalNumber = [];

function calculatePlayerHand(){
    for(let i = 0; i < playerTotal.length ; i++){
        if ( playerTotal[i][0] === "J" || playerTotal[i][0] === "K" || playerTotal[i][0] === "Q" ) {
            playerTotalNumber.push(10)
        }
        else if (playerTotal[i][0] === "A") {
            playerTotalNumber.push(11)
        }
        else if ( playerTotal[i][0] !== "J" || playerTotal[i][0] !== "K" || playerTotal[i][0] !== "Q" || playerTotal[i][0] !== "A") {
            let numberValue = playerTotal[i].match(/\d+/)
            numberValueNumber = Number(numberValue)
            playerTotalNumber.push(numberValueNumber)
        }
    }
    console.log(playerTotalNumber)
     return playerTotalNumber
}

let dealerTotalNumber = [];
function calculateDealerHand(){
    for(let i = 0; i < dealerTotal.length ; i++){
        if ( dealerTotal[i][0] === "J" || dealerTotal[i][0] === "K" || dealerTotal[i][0] === "Q" || dealerTotal[i][10]) {
            dealerTotalNumber.push(10)
        }
        else if (dealerTotal[i][0] === "A") {
            dealerTotalNumber.push(10)
        }
        else if ( dealerTotal[i][0] !== "J" || dealerTotal[i][0] !== "K" || dealerTotal[i][0] !== "Q" || dealerTotal[i][0] !== "A") {
            let numberValue = dealerTotal[i].match(/\d+/)
            numberValueNumber = Number(numberValue)
            dealerTotalNumber.push(numberValueNumber)
        }
    }
    console.log(dealerTotalNumber)
     return dealerTotalNumber
}




// LOSE CONDITION 












