import Clubs from "../clubs";
import Diamonds from "../diamonds";
import Hearts from "../hearts";
import Spades from "../spades";

interface CardsInterface {
  deckOfSpades(): Spades;
  deckOfHearts(): Hearts;
  deckOfDiamonds(): Diamonds;
  deckOfClubs(): Clubs;
}

export default CardsInterface;
