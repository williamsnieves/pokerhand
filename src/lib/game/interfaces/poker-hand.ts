interface PokerHand {
  playerOne: string;
  playerTwo: string;
  checkForHighCard(hand: string): string;
  findBestTypeOfHand(playerOneHand: number, playerTwoHand: number): number;
  findBestHandForHighCard(playerOneHand: number, playerTwoHand: number): number;
  compareWith(playerHand: PokerHand): number;
  findTypeOfHand(hand: string): string;
}

export default PokerHand;
