/*
 * Create a list that holds all of your cards
 */

let cards = new Array();
const symbolClasses = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb'];
symbolClasses.forEach(symbolClass => {
    cards.push({symbolClass: symbolClass});
    cards.push({symbolClass: symbolClass});
});


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

cards = shuffle(cards);

cards.forEach(card => {
    const li = document.createElement('li');
    li.classList.add('card');
    const i = document.createElement('i');
    i.classList.add('fa');
    i.classList.add(card.symbolClass);
    li.appendChild(i);
    card.htmlElement = li;
});

const cardsContainer = document.getElementsByClassName('deck')[0]; // ul
cards.forEach(card => {
    cardsContainer.appendChild(card.htmlElement);
});


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


const openCards = new Array();

cardsContainer.addEventListener('click', event => {
    event.target.classList.add('show');
    event.target.classList.add('open');
    evaluateMatch();
});


function evaluateMatch() {
    cards.forEach(card => {
        console.log(card.htmlElement);
    });
}
