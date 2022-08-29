import HeartsInterface from "./interfaces/hearts";

class Hearts implements HeartsInterface {
  private _twoHearts: string;
  private _threeHearts: string;
  private _fourHearts: string;
  private _fiveHearts: string;
  private _sixHearts: string;
  private _sevenHearts: string;
  private _eightHearts: string;
  private _nineHearts: string;
  private _tenHearts: string;
  private _jackHearts: string;
  private _queenHearts: string;
  private _kingHearts: string;
  private _aceHearts: string;

  constructor() {
    this._twoHearts = "2H";
    this._threeHearts = "3H";
    this._fourHearts = "4H";
    this._fiveHearts = "5H";
    this._sixHearts = "6H";
    this._sevenHearts = "7H";
    this._eightHearts = "8H";
    this._nineHearts = "9H";
    this._tenHearts = "TH";
    this._jackHearts = "JH";
    this._queenHearts = "QH";
    this._kingHearts = "KH";
    this._aceHearts = "AH";
  }

  get twoHearts(): string {
    return this._twoHearts;
  }

  get threeHearts(): string {
    return this._threeHearts;
  }

  get fourHearts(): string {
    return this._fourHearts;
  }

  get fiveHearts(): string {
    return this._fiveHearts;
  }

  get sixHearts(): string {
    return this._sixHearts;
  }

  get sevenHearts(): string {
    return this._sevenHearts;
  }

  get eightHearts(): string {
    return this._eightHearts;
  }

  get nineHearts(): string {
    return this._nineHearts;
  }

  get tenHearts(): string {
    return this._tenHearts;
  }

  get jackHearts(): string {
    return this._jackHearts;
  }

  get queenHearts(): string {
    return this._queenHearts;
  }

  get kingHearts(): string {
    return this._kingHearts;
  }

  get aceHearts(): string {
    return this._aceHearts;
  }
}

export default Hearts;
