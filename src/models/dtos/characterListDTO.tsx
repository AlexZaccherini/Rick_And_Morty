import { Character } from "../character";

export class ResponseInformation {
  count: number = 0;
  pages: number = 0;
  next: string = "";
  prev: string = "";
}

export class CharacterListDTO {
  info?: ResponseInformation;
  results: Character[] = [];
}
