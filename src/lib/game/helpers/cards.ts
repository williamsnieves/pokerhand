import { CARD_VALUES } from "../data/card-values";
import { cardKeysType } from "../types/card-keys";
import { checkCardValueType } from "../types/check-card-value";
import { compareDuplicates } from "./utils";

export const splitCards = (cards: string): string[] => {
  return cards.split(" ");
};

export const getValuesFromHand = (hand: string): string[] => {
  const handList = splitCards(hand);
  return handList.map((card) => card[0]);
};

export const getSuitsFromHand = (hand: string): string[] => {
  const handList = splitCards(hand);
  return handList.map((card) => card[1]);
};

export const checkForDuplicateCards = (playerHand: string) => {
  if (compareDuplicates(splitCards(playerHand))) {
    throw new Error("Repeated cards are not allowed");
  }

  return false;
};

export const checkValidCountCards = (playerHand: string): boolean => {
  if (splitCards(playerHand).length !== 5) {
    throw new Error("Each player needs to have 5 cards to play");
  }

  return true;
};

export const countCardValue = (hand: string): cardKeysType => {
  return getValuesFromHand(hand).reduce(
    (cardAccumulated: cardKeysType, currentCard) => {
      cardAccumulated[currentCard] = cardAccumulated[currentCard]
        ? cardAccumulated[currentCard] + 1
        : 1;
      return cardAccumulated;
    },
    {}
  );
};

export const checkCardValuesSequence = (hand: string): boolean => {
  const indexes = getValuesFromHand(hand)
    .filter((value) => value !== "A")
    .map((elem) => {
      return CARD_VALUES.indexOf(elem);
    });

  indexes.sort((a, b) => a - b);

  const differenceValues = indexes.slice(1).map((number, positionIndex) => {
    return number - indexes[positionIndex];
  });

  return differenceValues.every((diffValue) => diffValue === 1);
};

export const checkForCardSuitsRepeated = (hand: string): cardKeysType => {
  return getSuitsFromHand(hand).reduce(
    (cardSuitAccumulated: cardKeysType, currentSuit) => {
      cardSuitAccumulated[currentSuit] = cardSuitAccumulated[currentSuit]
        ? cardSuitAccumulated[currentSuit] + 1
        : 1;
      return cardSuitAccumulated;
    },
    {}
  );
};

export const checkCardValue = (
  action: (value: string) => cardKeysType,
  { hand, handValue }: checkCardValueType
): boolean => {
  return Object.values(action(hand)).some((val: number) => val === handValue);
};
