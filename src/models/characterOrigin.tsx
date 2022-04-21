export class CharacterOrigin {
  _name: string;
  _url: string;

  constructor(name: string, url: string) {
    this._name = name;
    this._url = url;
  }

  public get name(): string {
    return this._name;
  }
  public set name(name: string) {
    this._name = name;
  }

  public get url(): string {
    return this._url;
  }
  public set url(url: string) {
    this._url = url;
  }
}
