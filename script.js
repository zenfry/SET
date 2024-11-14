// DOM Elements
const newDeckBtn = document.getElementById('new-deck');
const shuffleDeckBtn = document.getElementById('shuffle-deck');
const cardsContainer = document.getElementById('cards-container');

// Deck and Displayed Cards
let deck = [];
let displayedCards = [];

// Create Deck Function
const createDeck = () => {
    const shapes = ['oval', 'squiggle', 'diamond'];
    const colors = ['red', 'green', 'purple'];
    const numbers = [1, 2, 3];
    const shading = ['solid', 'striped', 'open'];

    deck = [];
    displayedCards = []; // Reset displayed cards
    for (let shape of shapes) {
        for (let color of colors) {
            for (let number of numbers) {
                for (let shade of shading) {
                    deck.push({ shape, color, number, shade });
                }
            }
        }
    }
    shuffleDeck(); // Shuffle the deck after creation
};

// Shuffle Deck Function
const shuffleDeck = () => {
    deck = deck.sort(() => Math.random() - 0.5);
    displayedCards = deck.slice(0, 12); // Show the first 12 cards
    renderCards();
};

// Render Cards Function
const renderCards = () => {
    cardsContainer.innerHTML = '';
    for (let card of displayedCards) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', card.shade); // Apply shade class
        cardElement.style.color = card.color; // Set the color of the card
        
        // Card Content
        cardElement.innerHTML = `
            <p>${card.number} ${card.shape}</p>
        `;

        // Click event for card selection
        cardElement.addEventListener('click', () => {
            cardElement.classList.toggle('selected');
        });

        cardsContainer.appendChild(cardElement);
    }
};

// Event Listeners
newDeckBtn.addEventListener('click', createDeck); // New Deck Button
shuffleDeckBtn.addEventListener('click', shuffleDeck); // Shuffle Deck Button

// Initialize the Game
createDeck();
