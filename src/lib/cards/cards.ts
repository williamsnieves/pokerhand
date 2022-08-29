import Spades from "./spades";
import Hearts from "./hearts";
import Diamonds from "./diamonds";
import Clubs from "./clubs";
import CardsInterface from "./interfaces/cards";

class Cards implements CardsInterface {
  deckOfSpades(): Spades {
    return new Spades();
  }

  deckOfHearts(): Hearts {
    return new Hearts();
  }

  deckOfDiamonds(): Diamonds {
    return new Diamonds();
  }

  deckOfClubs(): Clubs {
    return new Clubs();
  }
}

export default Cards;
