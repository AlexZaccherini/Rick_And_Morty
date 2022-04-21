import { CharacterLocation } from "./characterLocation";
import { CharacterOrigin } from "./characterOrigin";

export class Character {
  _id: number;
  _name: string;
  _status: string;
  _species: string;
  _type: string;
  _gender: string;
  _origin: CharacterOrigin;
  _location: CharacterLocation;
  _image: string;
  _episode: string[];
  _url: string;
  _created: string;
  _isFavourite: boolean;

  constructor(
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: CharacterOrigin,
    location: CharacterLocation,
    image: string,
    episode: string[],
    url: string,
    created: string,
    isFavourite: boolean = false
  ) {
    this._id = id;
    this._name = name;
    this._status = status;
    this._species = species;
    this._type = type;
    this._gender = gender;
    this._origin = origin;
    this._location = location;
    this._image = image;
    this._episode = episode;
    this._url = url;
    this._created = created;
    this._isFavourite = isFavourite;
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

  public get status(): string {
    return this._status;
  }

  public set status(status: string) {
    this._status = status;
  }

  public get species(): string {
    return this._species;
  }

  public set species(species: string) {
    this._species = species;
  }

  public get type(): string {
    return this._type;
  }

  public set type(type: string) {
    this._type = type;
  }

  public get gender(): string {
    return this._gender;
  }

  public set gender(gender: string) {
    this._gender = gender;
  }

  public get origin(): CharacterOrigin {
    return this._origin;
  }

  public set origin(origin: CharacterOrigin) {
    this._origin = origin;
  }

  public get location(): CharacterLocation {
    return this._location;
  }

  public set location(location: CharacterLocation) {
    this._location = location;
  }

  public get image(): string {
    return this._image;
  }

  public set image(image: string) {
    this._image = image;
  }

  public get episode(): string[] {
    return this._episode;
  }

  public set episode(episode: string[]) {
    this._episode = episode;
  }

  public get url(): string {
    return this._url;
  }

  public set url(url: string) {
    this._url = url;
  }

  public get created(): string {
    return this._created;
  }

  public set created(created: string) {
    this._created = created;
  }
}
