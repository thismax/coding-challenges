class Deck {
  constructor() {
    this.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    this.cards = [];

    this.names.forEach(name => {
      this.suits.forEach(suit => {
        this.cards.push(`${name} of ${suit}`);
      });
    });
  }

  shuffle() {
    let cards = this.cards;
    let n = cards.length,
      i,
      t;
    while (n) {
      i = Math.floor(Math.random() * n);
      n--;
      t = cards[n];
      cards[n] = cards[i];
      cards[i] = t;
    }
    return cards;
  }

  handShuffle() {
    let cards = this.cards;
    let midPoint = Math.floor(cards.length / 2);
    let pile1 = cards.slice(0, midPoint);
    let pile2 = cards.slice(midPoint, cards.length);
    let results = [];
    let l = Math.min(pile1.length, pile2.length);

    for (let i = 0; i < l; i++) {
      results.push(pile1[i], pile2[i]);
    }
    results.push(...pile1.slice(l), ...pile2.slice(l));

    return results;
  }
}
