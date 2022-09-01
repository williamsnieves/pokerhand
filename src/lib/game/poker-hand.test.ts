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

  test.each([
    { a: "AH AC 6D 7S 3C", b: "AS 9H TC 3D 5S", expected: results.WIN },
    { a: "AS 9H JC 3D 6S", b: "AD AS 6D 8S 3C", expected: results.LOSS },
    { a: "8D 8C JC 3D 6S", b: "AD AS 6D 8S 3C", expected: results.TIE },
    { a: "8h 8c jc 3d 3s", b: "Ad As 6d 8s 3c", expected: results.WIN },
    { a: "8H 8C JC 3D 3S", b: "3H 3D 8C 3S TC", expected: results.LOSS },
    { a: "7S 9C TH 8C 6D", b: "AD AS 6D 8S 3C", expected: results.WIN },
    { a: "2D 9D 7D KD JD", b: "3H 3D 8C 3S TC", expected: results.WIN },
    { a: "2D 9D 7D KD JD", b: "KS 3D 3C KS KC", expected: results.LOSS },
    { a: "QD QC QS QH JS", b: "KS 3D 3C KS KC", expected: results.WIN },
    { a: "8S 5S 9S 6S 7S", b: "KS 3D 3C KS KC", expected: results.WIN },
    { a: "AS KS TS QS JS", b: "8S 5S 9S 6S 7S", expected: results.WIN },
  ])(".compareWith($a, $b)", ({ a, b, expected }) => {
    const playerOne = new PokerHand(new PokerHandRules(), a);
    const playerTwo = new PokerHand(new PokerHandRules(), b);
    expect(playerOne.compareWith(playerTwo)).toBe(expected);
  });
});
