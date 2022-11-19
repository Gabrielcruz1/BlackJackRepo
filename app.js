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
    console.log(playerHand)
    console.log(cardDeck)
    
    console.log(dealerHand + " dealers first card given dealers array")
    console.log(dealerTotalNumber + " this is hidden number and the dealer total added")
    
    // hidden = (cardDeck[Math.floor(Math.random() * cardDeck.length)])
    // dealerHand =  
    
    
    // dealerTotalNumber = hidden.value + dealerHand.value
    // console.log(hidden + " hidden number")
    // for (let i = 0; i < 2; i++){
    //     randomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)] 
    //     playerHand.push(randomCard)
    //     }

    playerTextOnScreen.innerHTML = `Player ${playerHand}`
    dealerTextOnScreen.innerHTML = `Dealer ${dealerHand}`
    console.log(playerHand + " players hand")
    calculateDealerHand()
    calculatePlayerHand()
    console.log(playerTotalNumber + " this is the sum of the player hand") // we do not have to have this number appear on the dom, only have to  have it calculated and ran in a conditional.        
    console.log(cardDeck)
    // cardDeck[0].charAt(0)
    console.log(cardDeck[0].charAt(0))
}


function hit (hand, deck){
    let card = deck.pop()
    hand.push(card)
}




// hit(playerHand, cardDeck);
// console.log(playerHand)



//CALCULATE PLAYER HAND
let playerTotalNumber = 0;

function calculatePlayerHand(){
for(let i = 0; i < playerHand.length ; i++){
if ( playerHand[i][0] === "J" || playerHand[i][0] ===     "K" || playerHand[i][0] === "Q" ) {
playerTotalNumber+=10
    }
    else if (playerHand[i][0] === "A") {
        playerTotalNumber+= 11
    }
    else if ( playerHand[i][0] !== "J" || playerHand[i][0] !== "K" || playerHand[i][0] !== "Q" || playerHand[i][0] !== "A") {
        let numberValue = playerHand[i].match(/\d+/)
    numberValueNumber = Number(numberValue)
    playerTotalNumber+= numberValueNumber
        }
    }
    // console.log(playerTotalNumber)
    return playerTotalNumber
}

//CALCULATE DEALER HAND
let dealerTotalNumber = 0;

function calculateDealerHand(){
    for(let i = 0; i < dealerHand.length ; i++){
        if ( dealerHand[i][0] === "J" || dealerHand[i][0] === "K" || dealerHand[i][0] === "Q" || dealerHand === 10) {
            dealerTotalNumber+=10
        }
        else if (dealerHand[i][0] === "A") {
            dealerTotalNumber+=11
        }
        else if ( dealerHand[i][0] !== "J" || dealerHand[i][0] !== "K" || dealerHand[i][0] !== "Q" || dealerHand[i][0] !== "A") {
            
            let numberValue = dealerHand[i].match(/\d+/)
            numberValueNumber = Number(numberValue)
            dealerTotalNumber+= numberValueNumber
        }
    }
    // console.log(dealerTotalNumber)
    return dealerTotalNumber
    }
  



//HIT BUTTON
hitButton.addEventListener('click', hitButtonFunction);

function hitButtonFunction (){
    calculatePlayerHand()
    calculateDealerHand()
    // console.log(dealerHand)
    playerHand += cardDeck[Math.floor(Math.random() * cardDeck.length)];
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







