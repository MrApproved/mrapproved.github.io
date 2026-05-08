const Deck = {
 cards: [],
 name: String = "untitled",
 addCard(c) {
  var deckCard = Object.create(DeckCard);
  deckCard.name = c.name;
  deckCard.type = c.type;
  deckCard.stage = c.stage;
  deckCard.colours = c.colours;
  deckCard.series = c.series;
  deckCard.set = c.set;
  deckCard.cardNumber = c.cardNumber;
  this.cards.push(deckCard);
 },
 removeCard(index) {
  this.cards.splice(index, 1);
 },
 export() {
  return JSON.stringify({ name: this.name, cards: this.cards });
 },
 import(deck) {
  this.cards = [];
  this.cards = deck.cards;
  this.name = deck.name;
 },
};
