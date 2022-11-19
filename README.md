# BlackJackRepo

   // hidden = (cardDeck[Math.floor(Math.random() * cardDeck.length)])
    // dealerHand =  
    
    
    // dealerTotalNumber = hidden.value + dealerHand.value
    // console.log(hidden + " hidden number")
    // for (let i = 0; i < 2; i++){
    //     randomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)] 
    //     playerHand.push(randomCard)
    //     }

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
            
            let DealerNumberValue = dealerHand[i].match(/\d+/)
            numberValueNumber = Number(DealerNumberValue)
            dealerTotalNumber+= numberValueNumber
        }
    }
    console.log(dealerTotalNumber + " im the dealers total right now")
    return dealerTotalNumber
    }


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
  
