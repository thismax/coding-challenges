function card(value, name, suit) {
  this.value = value;
  this.name = name;
  this.suit = suit;
}

function deck() {
  this.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
  let cards = [];

  this.names.forEach(name => {
    this.suits.forEach(suit => {
      cards.push(`${name} of ${suit}`);
    });
  });
  return cards;
}
