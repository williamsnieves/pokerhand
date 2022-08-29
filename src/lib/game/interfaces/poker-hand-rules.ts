import { checkPairsType } from "../types/pairs";

interface PokerHandRulesInterface {
  checkforPairs(hand: string): checkPairsType;
  checkForThreeOfKind(hand: string): boolean;
  checkForStraight(hand: string): boolean;
  checkForFlush(hand: string): boolean;
  checkForFullHouse(hand: string): boolean;
  checkForFourOfKind(hand: string): boolean;
  checkForStraightFlush(hand: string): boolean;
  checkForRoyalFlush(hand: string): boolean;
}

export default PokerHandRulesInterface;
