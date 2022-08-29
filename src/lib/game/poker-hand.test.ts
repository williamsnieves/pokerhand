import PokerHand from "./poker-hand";
import Cards from "../cards/cards";
import PokerHandRules from "./poker-hand-rules";
import { results } from "./enums/result";
import { typeHand } from "./enums/type-hand";

describe("Poker hand", () => {
  test("check if hand is high card", () => {
    const cards = new Cards();
    const handForHighCard = `${cards.deckOfClubs().eightClubs} ${
      cards.deckOfDiamonds().fourDiamonds
    } ${cards.deckOfSpades().tenSpades} ${cards.deckOfHearts().kingHearts} ${
      cards.deckOfSpades().sixSpades
    }`;
    const pokerHandPlayerOne = new PokerHand(
      new PokerHandRules(),
      handForHighCard
    );

    expect(pokerHandPlayerOne.findTypeOfHand(handForHighCard)).toBe(
      typeHand.HIGH_CARD
    );
  });

  test("check if hand is a pair", () => {
    const cards = new Cards();
    const handForPair = `${cards.deckOfSpades().fiveSpades} ${
      cards.deckOfDiamonds().kingDiamonds
    } ${cards.deckOfSpades().kingSpades} ${cards.deckOfHearts().fourHearts} ${
      cards.deckOfClubs().sixClubs
    }`;
    const pokerHandPlayerOne = new PokerHand(new PokerHandRules(), handForPair);

    expect(pokerHandPlayerOne.findTypeOfHand(handForPair)).toBe(typeHand.PAIR);
  });

  test("check if hand is three of kind", () => {
    const cards = new Cards();
    const handForThreeOfKind = `${cards.deckOfSpades().fiveSpades} ${
      cards.deckOfDiamonds().eightDiamonds
    } ${cards.deckOfSpades().eightSpades} ${cards.deckOfHearts().eightHearts} ${
      cards.deckOfClubs().sixClubs
    }`;
    const pokerHandPlayerOne = new PokerHand(
      new PokerHandRules(),
      handForThreeOfKind
    );

    expect(pokerHandPlayerOne.findTypeOfHand(handForThreeOfKind)).toBe(
      typeHand.THREE_OF_KIND
    );
  });

  test("player one wins if both have high card", () => {
    const cards = new Cards();
    const playerOneHand = `${cards.deckOfClubs().tenClubs} ${
      cards.deckOfDiamonds().jackDiamonds
    } ${cards.deckOfHearts().kingHearts} ${cards.deckOfSpades().sevenSpades} ${
      cards.deckOfClubs().threeClubs
    }`;
    const playerTwoHand = `${cards.deckOfDiamonds().twoDiamonds} ${
      cards.deckOfClubs().sevenClubs
    } ${cards.deckOfSpades().queenSpades} ${cards.deckOfHearts().fourHearts} ${
      cards.deckOfClubs().jackClubs
    }`;
    const playerOne = new PokerHand(new PokerHandRules(), playerOneHand);
    const playerTwo = new PokerHand(new PokerHandRules(), playerTwoHand);

    expect(playerOne.compareWith(playerTwo)).toBe(results.WIN);
  });

  test("player one losse if both have high card", () => {
    const cards = new Cards();
    const playerOneHand = `${cards.deckOfClubs().tenClubs} ${
      cards.deckOfDiamonds().jackDiamonds
    } ${cards.deckOfHearts().tenHearts} ${cards.deckOfSpades().sevenSpades} ${
      cards.deckOfClubs().threeClubs
    }`;
    const playerTwoHand = `${cards.deckOfDiamonds().twoDiamonds} ${
      cards.deckOfClubs().sevenClubs
    } ${cards.deckOfSpades().queenSpades} ${cards.deckOfHearts().fourHearts} ${
      cards.deckOfClubs().jackClubs
    }`;
    const playerOne = new PokerHand(new PokerHandRules(), playerOneHand);
    const playerTwo = new PokerHand(new PokerHandRules(), playerTwoHand);

    expect(playerOne.compareWith(playerTwo)).toBe(results.LOSS);
  });

  test("player one and player two tie if both have high card", () => {
    const cards = new Cards();
    const playerOneHand = `${cards.deckOfClubs().tenClubs} ${
      cards.deckOfDiamonds().jackDiamonds
    } ${cards.deckOfHearts().tenHearts} ${cards.deckOfSpades().sevenSpades} ${
      cards.deckOfClubs().threeClubs
    }`;
    const playerTwoHand = `${cards.deckOfDiamonds().tenDiamonds} ${
      cards.deckOfSpades().threeSpades
    } ${cards.deckOfSpades().tenSpades} ${cards.deckOfHearts().sevenHearts} ${
      cards.deckOfClubs().jackClubs
    }`;
    const playerOne = new PokerHand(new PokerHandRules(), playerOneHand);
    const playerTwo = new PokerHand(new PokerHandRules(), playerTwoHand);

    expect(playerOne.compareWith(playerTwo)).toBe(results.TIE);
  });

  test("player one wins with pair", () => {
    const playerOneHand = "AH AC 6D 7S 3C";
    const playerTwoHand = "AS 9H TC 3D 5S";
    const playerOne = new PokerHand(new PokerHandRules(), playerOneHand);
    const playerTwo = new PokerHand(new PokerHandRules(), playerTwoHand);

    expect(playerOne.compareWith(playerTwo)).toBe(results.WIN);
  });

  test("player one loose with high card", () => {
    const playerOneHand = "AS 9H JC 3D 6S";
    const playerTwoHand = "AD AS 6D 8S 3C";
    const playerOne = new PokerHand(new PokerHandRules(), playerOneHand);
    const playerTwo = new PokerHand(new PokerHandRules(), playerTwoHand);

    expect(playerOne.compareWith(playerTwo)).toBe(results.LOSS);
  });

  test("player one and player two tie with pairs", () => {
    const playerOneHand = "8D 8C JC 3D 6S";
    const playerTwoHand = "AD AS 6D 8S 3C";
    const playerOne = new PokerHand(new PokerHandRules(), playerOneHand);
    const playerTwo = new PokerHand(new PokerHandRules(), playerTwoHand);

    expect(playerOne.compareWith(playerTwo)).toBe(results.TIE);
  });

  test("player one wins with two pairs not case sensitive", () => {
    const playerOneHand = "8h 8c jc 3d 3s";
    const playerTwoHand = "Ad As 6d 8s 3c";
    const playerOne = new PokerHand(new PokerHandRules(), playerOneHand);
    const playerTwo = new PokerHand(new PokerHandRules(), playerTwoHand);

    expect(playerOne.compareWith(playerTwo)).toBe(results.WIN);
  });

  test("player one loose with three of kind", () => {
    const playerOneHand = "8H 8C JC 3D 3S";
    const playerTwoHand = "3H 3D 8C 3S TC";
    const playerOne = new PokerHand(new PokerHandRules(), playerOneHand);
    const playerTwo = new PokerHand(new PokerHandRules(), playerTwoHand);

    expect(playerOne.compareWith(playerTwo)).toBe(results.LOSS);
  });

  test("player one wins with straight", () => {
    const playerOneHand = "7S 9C TH 8C 6D";
    const playerTwoHand = "AD AS 6D 8S 3C";
    const playerOne = new PokerHand(new PokerHandRules(), playerOneHand);
    const playerTwo = new PokerHand(new PokerHandRules(), playerTwoHand);

    expect(playerOne.compareWith(playerTwo)).toBe(results.WIN);
  });

  test("player one wins with flush", () => {
    const playerOneHand = "2D 9D 7D KD JD";
    const playerTwoHand = "3H 3D 8C 3S TC";
    const playerOne = new PokerHand(new PokerHandRules(), playerOneHand);
    const playerTwo = new PokerHand(new PokerHandRules(), playerTwoHand);

    expect(playerOne.compareWith(playerTwo)).toBe(results.WIN);
  });

  test("player one loose with full house", () => {
    const playerOneHand = "2D 9D 7D KD JD";
    const playerTwoHand = "KS 3D 3C KS KC";
    const playerOne = new PokerHand(new PokerHandRules(), playerOneHand);
    const playerTwo = new PokerHand(new PokerHandRules(), playerTwoHand);

    expect(playerOne.compareWith(playerTwo)).toBe(results.LOSS);
  });

  test("player one wins with four of kind", () => {
    const playerOneHand = "QD QC QS QH JS";
    const playerTwoHand = "KS 3D 3C KS KC";
    const playerOne = new PokerHand(new PokerHandRules(), playerOneHand);
    const playerTwo = new PokerHand(new PokerHandRules(), playerTwoHand);

    expect(playerOne.compareWith(playerTwo)).toBe(results.WIN);
  });

  test("player one wins with straight flush", () => {
    const playerOneHand = "8S 5S 9S 6S 7S";
    const playerTwoHand = "KS 3D 3C KS KC";
    const playerOne = new PokerHand(new PokerHandRules(), playerOneHand);
    const playerTwo = new PokerHand(new PokerHandRules(), playerTwoHand);

    expect(playerOne.compareWith(playerTwo)).toBe(results.WIN);
  });

  test("player one wins with royal flush", () => {
    const playerOneHand = "AS KS TS QS JS";
    const playerTwoHand = "8S 5S 9S 6S 7S";
    const playerOne = new PokerHand(new PokerHandRules(), playerOneHand);
    const playerTwo = new PokerHand(new PokerHandRules(), playerTwoHand);

    expect(playerOne.compareWith(playerTwo)).toBe(results.WIN);
  });
});
