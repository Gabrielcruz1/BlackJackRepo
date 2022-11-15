// console.log("hello world")
// console.log(cardSuit)
// console.log(cardValue)
// console.log(hitButton)
// console.log(stayButton)
//console.log(Math.floor(Math.random() * (cardValue[i] + cardSuit[k])))

//CARD DECK AND SUITS STORED IN VARIABLE
let cardValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q']
let cardSuit = ['H', 'S', 'D', 'C']
let cardDeck = []

// BUTTONS STORED IN A VARIABLE 
let hitButton = document.querySelector('#hitButton')
let stayButton = document.querySelector('#stayButton')

//HIT BUTTON AND FUNCTION FOR WHAT HAPPENS NEXT 
hitButton.addEventListener('click', () => {
    for(let i=0; i < cardValue.length; i++){
        for (let k = 0; k < cardSuit.length; k++){
       console.log(Math.floor(Math.random() * (cardValue[i] + cardSuit[k])))
    }
}
})



























//STAY BUTTON AND FUNCTION FOR WHAT HAPPENS NEXT 
stayButton.addEventListener('click', () => {

})


//LOOPING THROUGH THE SUITS AND VALUES TO FORM A DECK 
// for(let i=0; i < cardValue.length; i++){
//         for (let k = 0; k < cardSuit.length; k++){
//         cardDeck.push(values[i] + values[k])
//     }
// }



