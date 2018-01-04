class Card {
  constructor(rank, suit) {
    this.card = rank + suit;
    this.rank = rank;
    this.suit = suit;
    if (rank == 'A') {
      this.value = [1, 11];
    } else if (rank == 'K' || rank == 'Q' || rank == 'J') {
      this.value = [10];
    } else {
      this.value = [rank];
    }
  }
}

class Deck {
  constructor() {
    this.values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    this.suits = ['s', 'd', 'c', 'h'];
    this.deck = this.populate()[0];
    this.stringifiedDeck = this.populate()[1];
  }

  populate() {
    const deck = [];
    const stringifiedDeck = [];
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.values.length; j++) {
        let card = new Card(this.values[j], this.suits[i]);
        stringifiedDeck.push(card.card);
        deck.push(card);
      }
    }
    return [deck, stringifiedDeck];
  }

  shuffle() {
    let n = this.deck.length,
      i,
      t;
    while (n) {
      i = Math.floor(Math.random() * n--);
      t = this.deck[n];
      this.deck[n] = this.deck[i];
      this.deck[i] = t;
    }
    return this.deck;
  }
}

class Player {
  constructor() {
    this.hand = [];
    this.stringifiedHand = [];
    this.total = 0;
    this.bust = false;
    this.blackjack = false;
  }
}
