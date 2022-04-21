// external libs
import axios from "axios";
import { Exception } from "sass";

// project imports
import { Character } from "../models/character";
import { CharacterListDTO } from "../models/dtos/characterListDTO";

export class CharacterApiService {
  public async getCharacters(pageNumber?: number): Promise<Character[]> {
    let response;
    try {
      response = await axios.get<CharacterListDTO>(
        `https://rickandmortyapi.com/api/character/${
          pageNumber ? "" : "?page=19"
        }`
      );
      if (response.status === 200) {
        return response.data.results;
      } else {
        return [];
      }
    } catch (e) {
      if (typeof e === "string") {
        alert(e);
      } else if (e instanceof Error) {
        alert(e.message);
      }
      return [];
    }
  }
}
