const deckBuilder = () => {
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
  const cards = [];
  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      const value = values[v];
      const suit = suits[s];
      cards.push({ value, suit });
    }
  }
  return cards;
};
// console.log (deckBuilder()) used to test if the deck creates an array

const cardDisplay = document.getElementById("cardDisplay")

const randomCard = (cards) => {
  const random = Math.floor(Math.random() * 51);
  const random1 = Math.floor(Math.random() * 51);
  const cardValue = cards[random].value;
  const cardSuit = cards[random].suit;
    const cardValue1 = cards[random1].value;
    const cardSuit1 = cards[random1].suit;
  let entity;
  cardSuit === "Diamonds"
    ? (entity = "&diams;")
    : (entity = "&" + cardSuit.toLowerCase() + ";");
  const card = document.createElement("div");
  cardDisplay.innerHTML = ""
  card.classList.add("card", cardSuit.toLowerCase());
  card.innerHTML =
    '<span class="card-value-suit top">' +  //for value at top of card
    cardValue +
    entity +
    "</span>" +
    '<span class="card-suit">' +  //for suit in middle of card
    entity +
    "</span>" +
    '<span class="card-value-suit bot">' + //for value at bottom of card
    cardValue +
    entity +
    "</span>";
      let entity1;
      cardSuit1 === "Diamonds"
        ? (entity1 = "&diams;")
        : (entity1 = "&" + cardSuit1.toLowerCase() + ";");
      const card1 = document.createElement("div");
      card1.classList.add("card1", cardSuit1.toLowerCase());
      card1.innerHTML =
        '<span class="card-value-suit top">' + //for value at top of card
        cardValue1 +
        entity1 +
        "</span>" +
        '<span class="card-suit">' + //for suit in middle of card
        entity1 +
        "</span>" +
        '<span class="card-value-suit bot">' + //for value at bottom of card
        cardValue1 +
        entity1 +
        "</span>";
  cardDisplay.appendChild(card);
  cardDisplay.appendChild(card1);
};
const cards = deckBuilder();


generateCards.addEventListener("click", () => {
    randomCard(cards)
})
// randomCard(cards); // creates a random card using the deckbuilder function
