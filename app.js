// console.log("hello world")
// console.log(cardSuit)
// console.log(cardValue)
// console.log(hitButton)
// console.log(stayButton)


// BUTTONS STORED IN A VARIABLE 
let hitButton = document.querySelector('#hitButton')
let stayButton = document.querySelector('#stayButton')

hitButton.addEventListener('click', () => {
    for(let i=0; i < cardValue.length; i++){
        for (let k = 0; k < cardSuit.length; k++){
        console.log(cardValue[i] + cardSuit[k])
    }
}
    
})

stayButton.addEventListener('click', () => {

})

//CARD DECK AND SUITS STORED IN VARIABLE
let cardValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q']
let cardSuit = ['H', 'S', 'D', 'C']
   
// for(let i=0; i < cardValue.length; i++){
//         for (let k = 0; k < cardSuit.length; k++){
//         console.log(cardValue[i] + cardSuit[k])
//     }
// }




