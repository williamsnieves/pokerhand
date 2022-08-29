import SpadesInterface from "./interfaces/spades";

class Spades implements SpadesInterface {
  private _twoSpades: string;
  private _threeSpades: string;
  private _fourSpades: string;
  private _fiveSpades: string;
  private _sixSpades: string;
  private _sevenSpades: string;
  private _eightSpades: string;
  private _nineSpades: string;
  private _tenSpades: string;
  private _jackSpades: string;
  private _queenSpades: string;
  private _kingSpades: string;
  private _aceSpades: string;

  constructor() {
    this._twoSpades = "2S";
    this._threeSpades = "3S";
    this._fourSpades = "4S";
    this._fiveSpades = "5S";
    this._sixSpades = "6S";
    this._sevenSpades = "7S";
    this._eightSpades = "8S";
    this._nineSpades = "9S";
    this._tenSpades = "TS";
    this._jackSpades = "JS";
    this._queenSpades = "QS";
    this._kingSpades = "KS";
    this._aceSpades = "AS";
  }

  get twoSpades(): string {
    return this._twoSpades;
  }

  get threeSpades(): string {
    return this._threeSpades;
  }

  get fourSpades(): string {
    return this._fourSpades;
  }

  get fiveSpades(): string {
    return this._fiveSpades;
  }

  get sixSpades(): string {
    return this._sixSpades;
  }

  get sevenSpades(): string {
    return this._sevenSpades;
  }

  get eightSpades(): string {
    return this._eightSpades;
  }

  get nineSpades(): string {
    return this._nineSpades;
  }
  get tenSpades(): string {
    return this._tenSpades;
  }

  get jackSpades(): string {
    return this._jackSpades;
  }

  get queenSpades(): string {
    return this._queenSpades;
  }

  get kingSpades(): string {
    return this._kingSpades;
  }

  get aceSpades(): string {
    return this._aceSpades;
  }
}

export default Spades;
