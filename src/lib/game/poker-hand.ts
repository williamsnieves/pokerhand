import { results } from "./enums/result";
import { getValuesFromHand } from "./helpers/cards";
import { CARD_VALUES } from "./data/card-values";
import PokerHandRulesInterface from "./interfaces/poker-hand-rules";
import { typeHand } from "./enums/type-hand";

class PokerHand implements PokerHand {
  private _hand: string;
  rules: PokerHandRulesInterface;

  constructor(rules: PokerHandRulesInterface, hand: string) {
    this.rules = rules;
    this._hand = hand;
  }

  private checkForHighCard(hand: string): string {
    let highCardValuePosition = 0;

    getValuesFromHand(hand).forEach((cardValue) => {
      if (CARD_VALUES.indexOf(cardValue) > highCardValuePosition) {
        highCardValuePosition = CARD_VALUES.indexOf(cardValue);
      }
    });

    return CARD_VALUES[highCardValuePosition];
  }

  private findBestTypeOfHand(
    playerOneHand: number,
    playerTwoHand: number
  ): number {
    if (playerOneHand > playerTwoHand) {
      return results.WIN;
    } else if (playerOneHand < playerTwoHand) {
      return results.LOSS;
    } else {
      return results.TIE;
    }
  }

  private findBestHandForHighCard(
    playerOneCardIndex: number,
    playerTwoCardIndex: number
  ): number {
    if (playerOneCardIndex > playerTwoCardIndex) {
      return results.WIN;
    } else if (playerOneCardIndex < playerTwoCardIndex) {
      return results.LOSS;
    } else {
      return results.TIE;
    }
  }

  compareWith(playerHand: PokerHand) {
    const playerOne: string = new PokerHand(this.rules, this._hand).hand;
    const playerTwo: string = playerHand.hand;
    const HIGH_CARD_INDEX = 0;

    const typeOfHandForPlayerOne = this.findTypeOfHand(playerOne);
    const typeOfHandForPlayerTwo = this.findTypeOfHand(playerTwo);

    const isHighCardForBothPlayers =
      typeOfHandForPlayerOne === HIGH_CARD_INDEX &&
      typeOfHandForPlayerTwo === HIGH_CARD_INDEX;

    if (isHighCardForBothPlayers) {
      return this.findBestHandForHighCard(
        CARD_VALUES.indexOf(this.checkForHighCard(playerOne)),
        CARD_VALUES.indexOf(this.checkForHighCard(playerTwo))
      );
    }

    return this.findBestTypeOfHand(
      typeOfHandForPlayerOne,
      typeOfHandForPlayerTwo
    );
  }

  findTypeOfHand(hand: string): number {
    if (this.rules.checkForRoyalFlush(hand)) {
      return typeHand.ROYAL_FLUSH;
    }

    if (this.rules.checkForStraightFlush(hand)) {
      return typeHand.STRAIGHT_FLUSH;
    }

    if (this.rules.checkForFourOfKind(hand)) {
      return typeHand.FOUR_OF_KIND;
    }

    if (this.rules.checkForFullHouse(hand)) {
      return typeHand.FULL_HOUSE;
    }

    if (this.rules.checkForFlush(hand)) {
      return typeHand.FLUSH;
    }

    if (this.rules.checkForStraight(hand)) {
      return typeHand.STRAIGHT;
    }

    if (this.rules.checkForThreeOfKind(hand)) {
      return typeHand.THREE_OF_KIND;
    }

    if (this.rules.checkforPairs(hand).isDoublePair) {
      return typeHand.TWO_PAIRS;
    }

    if (this.rules.checkforPairs(hand).isSinglePair) {
      return typeHand.PAIR;
    }

    return typeHand.HIGH_CARD;
  }

  get hand() {
    return this._hand;
  }
}

export default PokerHand;
