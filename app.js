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
    console.log(dealerTotal + " dealerTotal")
    // console.log(hidden)



    for (let i = 0; i < 2; i++){
        randomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)] 
        playerTotal.push(randomCard)
    }


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
    console.log(cardDeck + " card Deck ")
    // calculateHand()
    // playerHand.innerHTML = `Player ${firstTwo}`
    }



// //STAY BUTTON AND FUNCTION FOR WHAT HAPPENS NEXT 
// stayButton.addEventListener('click', () => {

// })





//WIN CONDITION 
let playerTotalNumber = [];

function calculatePlayerHand(){
    console.log(playerTotal)
    for(let i = 0; i < playerTotal.length ; i++){
        if ( playerTotal[i][0] === "J" || playerTotal[i][0] === "K" || playerTotal[i][0] === "Q" || playerTotal[i][0] === "A") {
            console.log("face card")
            playerTotalNumber.push(10)
        } if ( playerTotal[i][0] !== "J" || playerTotal[i][0] !== "K" || playerTotal[i][0] !== "Q" || playerTotal[i][0] === "A") {
            console.log("numerical card")
            let numberValue = playerTotal[i][0].match(/\d+/)
            //  console.log(numberValue[0])
            console.log(numberValue)
            playerTotalNumber.push(numberValue)
        }
    }
    console.log(playerTotalNumber)
     return playerTotalNumber
   // console.log(playerTotal);
    //console.log(cardDeckNumber)
    // dealerTotal = cardDeck[0].match(/\d+/);
    // cardDeckNumber = Number(dealerTotal);
    // console.log(dealerTotal)
}




// LOSE CONDITION 













