import Cards from "../../cards/cards";
import { checkForDuplicateCards, checkValidCountCards } from "./cards";

test("compare duplicates", () => {
  const cards = new Cards();
  const playerOneHand = `${cards.deckOfHearts().fourHearts} ${
    cards.deckOfDiamonds().twoDiamonds
  } ${cards.deckOfHearts().queenHearts} ${cards.deckOfSpades().fiveSpades} ${
    cards.deckOfHearts().queenHearts
  }`;

  expect(() => checkForDuplicateCards(playerOneHand)).toThrowError(
    "Repeated cards are not allowed"
  );
});

test("check if hand is valid", () => {
  const cards = new Cards();
  const playerCard = `${cards.deckOfHearts().fourHearts} ${
    cards.deckOfDiamonds().twoDiamonds
  } ${cards.deckOfClubs().kingClubs} ${cards.deckOfSpades().fiveSpades} ${
    cards.deckOfHearts().queenHearts
  }`;

  expect(checkValidCountCards(playerCard)).toBeTruthy();
});

test("check if hand is not valid", () => {
  const cards = new Cards();
  const playerCard = `${cards.deckOfHearts().fourHearts} ${
    cards.deckOfDiamonds().twoDiamonds
  } ${cards.deckOfClubs().kingClubs} ${cards.deckOfSpades().fiveSpades} ${
    cards.deckOfHearts().queenHearts
  } ${cards.deckOfHearts().fiveHearts}`;

  expect(() => {
    checkValidCountCards(playerCard);
  }).toThrowError("Each player needs to have 5 cards to play");
});
