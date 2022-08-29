import {
  checkCardValue,
  checkCardValuesSequence,
  checkForCardSuitsRepeated,
  countCardValue,
  getValuesFromHand,
} from "./helpers/cards";
import PokerHandRulesInterface from "./interfaces/poker-hand-rules";
import { checkPairsType } from "./types/pairs";

class PokerHandRules implements PokerHandRulesInterface {
  checkforPairs(hand: string): checkPairsType {
    const pairs = getValuesFromHand(hand).filter(
      (cardValue, cardIndex, originalCardArray) =>
        cardValue === originalCardArray[cardIndex + 1]
    );

    return {
      isSinglePair: pairs.length === 1,
      isDoublePair: pairs.length === 2,
    };
  }

  checkForThreeOfKind(hand: string): boolean {
    const THREE_OF_KIND_VALUE = 3;

    return checkCardValue(countCardValue, {
      hand,
      handValue: THREE_OF_KIND_VALUE,
    });
  }

  checkForStraight(hand: string): boolean {
    return checkCardValuesSequence(hand);
  }

  checkForFlush(hand: string): boolean {
    const FLUSH_VALUE = 5;
    return checkCardValue(checkForCardSuitsRepeated, {
      hand,
      handValue: FLUSH_VALUE,
    });
  }

  checkForFullHouse(hand: string): boolean {
    if (
      checkCardValue(countCardValue, {
        hand,
        handValue: 2,
      })
    ) {
      return checkCardValue(countCardValue, {
        hand,
        handValue: 3,
      });
    }

    return false;
  }

  checkForFourOfKind(hand: string): boolean {
    const FOUR_OF_KIND_VALUE = 4;

    return checkCardValue(countCardValue, {
      hand,
      handValue: FOUR_OF_KIND_VALUE,
    });
  }

  checkForStraightFlush(hand: string): boolean {
    const STRAIGHT_FLUSH_VALUE = 5;
    if (this.checkForStraight(hand)) {
      return checkCardValue(checkForCardSuitsRepeated, {
        hand,
        handValue: STRAIGHT_FLUSH_VALUE,
      });
    }

    return false;
  }

  checkForRoyalFlush(hand: string): boolean {
    const ROYAL_FLUSH_VALUE = 5;
    if (getValuesFromHand(hand).includes("A") && this.checkForStraight(hand)) {
      return checkCardValue(checkForCardSuitsRepeated, {
        hand,
        handValue: ROYAL_FLUSH_VALUE,
      });
    }

    return false;
  }
}

export default PokerHandRules;
