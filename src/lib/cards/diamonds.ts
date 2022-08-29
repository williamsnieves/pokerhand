import DiamondsInterface from "./interfaces/diamonds";

class Diamonds implements DiamondsInterface {
  private _twoDiamonds: string;
  private _threeDiamonds: string;
  private _fourDiamonds: string;
  private _fiveDiamonds: string;
  private _sixDiamonds: string;
  private _sevenDiamonds: string;
  private _eightDiamonds: string;
  private _nineDiamonds: string;
  private _tenDiamonds: string;
  private _jackDiamonds: string;
  private _queenDiamonds: string;
  private _kingDiamonds: string;
  private _aceDiamonds: string;

  constructor() {
    this._twoDiamonds = "2D";
    this._threeDiamonds = "3D";
    this._fourDiamonds = "4D";
    this._fiveDiamonds = "5D";
    this._sixDiamonds = "6D";
    this._sevenDiamonds = "7D";
    this._eightDiamonds = "8D";
    this._nineDiamonds = "9D";
    this._tenDiamonds = "TD";
    this._jackDiamonds = "JD";
    this._queenDiamonds = "QD";
    this._kingDiamonds = "KD";
    this._aceDiamonds = "AD";
  }

  get twoDiamonds(): string {
    return this._twoDiamonds;
  }

  get threeDiamonds(): string {
    return this._threeDiamonds;
  }

  get fourDiamonds(): string {
    return this._fourDiamonds;
  }

  get fiveDiamonds(): string {
    return this._fiveDiamonds;
  }

  get sixDiamonds(): string {
    return this._sixDiamonds;
  }

  get sevenDiamonds(): string {
    return this._sevenDiamonds;
  }

  get eightDiamonds(): string {
    return this._eightDiamonds;
  }

  get nineDiamonds(): string {
    return this._nineDiamonds;
  }

  get tenDiamonds(): string {
    return this._tenDiamonds;
  }

  get jackDiamonds(): string {
    return this._jackDiamonds;
  }

  get queenDiamonds(): string {
    return this._queenDiamonds;
  }

  get kingDiamonds(): string {
    return this._kingDiamonds;
  }

  get aceDiamonds(): string {
    return this._aceDiamonds;
  }
}

export default Diamonds;
