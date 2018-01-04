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
