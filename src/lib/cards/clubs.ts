import ClubsInterface from "./interfaces/clubs";

class Clubs implements ClubsInterface {
  private _twoClubs: string;
  private _threeClubs: string;
  private _fourClubs: string;
  private _fiveClubs: string;
  private _sixClubs: string;
  private _sevenClubs: string;
  private _eightClubs: string;
  private _nineClubs: string;
  private _tenClubs: string;
  private _jackClubs: string;
  private _queenClubs: string;
  private _kingClubs: string;
  private _aceClubs: string;

  constructor() {
    this._twoClubs = "2C";
    this._threeClubs = "3C";
    this._fourClubs = "4C";
    this._fiveClubs = "5C";
    this._sixClubs = "6C";
    this._sevenClubs = "7C";
    this._eightClubs = "8C";
    this._nineClubs = "9C";
    this._tenClubs = "TC";
    this._jackClubs = "JC";
    this._queenClubs = "QC";
    this._kingClubs = "KC";
    this._aceClubs = "AC";
  }

  get twoClubs(): string {
    return this._twoClubs;
  }

  get threeClubs(): string {
    return this._threeClubs;
  }

  get fourClubs(): string {
    return this._fourClubs;
  }

  get fiveClubs(): string {
    return this._fiveClubs;
  }

  get sixClubs(): string {
    return this._sixClubs;
  }

  get sevenClubs(): string {
    return this._sevenClubs;
  }

  get eightClubs(): string {
    return this._eightClubs;
  }

  get nineClubs(): string {
    return this._nineClubs;
  }

  get tenClubs(): string {
    return this._tenClubs;
  }

  get jackClubs(): string {
    return this._jackClubs;
  }

  get queenClubs(): string {
    return this._queenClubs;
  }

  get kingClubs(): string {
    return this._kingClubs;
  }

  get aceClubs(): string {
    return this._aceClubs;
  }
}

export default Clubs;
