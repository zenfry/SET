const newDeckBtn = document.getElementById('new-deck');
const shuffleDeckBtn = document.getElementById('shuffle-deck');
const cardsContainer = document.getElementById('cards-container');

let deck = [];
let displayedCards = [];

const createDeck = () => {
    const shapes = ['oval', 'squiggle', 'diamond'];
    const colors = ['red', 'green', 'purple'];
    const numbers = [1, 2, 3];
    const shading = ['solid', 'striped', 'open'];

    deck = [];
    for (let shape of shapes) {
        for (let color of colors) {
            for (let number of numbers) {
                for (let shade of shading) {
                    deck.push({ shape, color, number, shade });
                }
            }
        }
    }
    shuffleDeck();
};

const shuffleDeck = () => {
    deck = deck.sort(() => Math.random() - 0.5);
    displayedCards = deck.slice(0, 12);
    renderCards();
};

const renderCards = () => {
    cardsContainer.innerHTML = '';
    for (let card of displayedCards) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.textContent = `${card.number} ${card.color} ${card.shape} ${card.shade}`;
        cardsContainer.appendChild(cardElement);
    }
};

const checkForSet = () => {
    // Logic for checking if a set exists
    // This will check whether three selected cards form a valid set according to Set game rules
};

// Event listeners for buttons
newDeckBtn.addEventListener('click', () => {
    createDeck();
    shuffleDeck();
});

shuffleDeckBtn.addEventListener('click', () => {
    shuffleDeck();
});

// Start the game by creating a deck and shuffling it
createDeck();
shuffleDeck();
