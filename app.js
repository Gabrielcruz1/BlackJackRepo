// console.log("hello world")
// console.log(cardSuit)
// console.log(cardValue)

//CARD DECK AND SUITS STORED IN VARIABLE
let cardValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q']
let cardSuit = ['H', 'S', 'D', 'C']

// FUNCTION THAT LOOPS THROUGH ARRAYS AND GIVES OUTPUT FOR HIT ME BUTTON 
for(let i=0; i < cardValue.length; i++){
    for (let k = 0; k < cardSuit.length; k++){
        console.log(cardValue[i] + cardSuit[k])
    }
}


