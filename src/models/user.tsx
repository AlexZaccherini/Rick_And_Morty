export class User {
  private _id: number;
  private _name: string;
  private _surname: string;

  constructor(id: number, name: string, surname: string) {
    this._id = id;
    this._name = name;
    this._surname = surname;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get surname(): string {
    return this._surname;
  }

  public set surname(surname: string) {
    this._surname = surname;
  }
}
