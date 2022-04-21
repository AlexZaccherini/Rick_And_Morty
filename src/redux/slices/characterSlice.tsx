// redux
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// project imports
import { Character } from "../../models/character";
import { RootState } from "../store";

interface CharacterSlice {
  characterList: Character[];
  favouriteList: Character[];
}

const initialState: CharacterSlice = {
  characterList: [],
  favouriteList: [],
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    addCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characterList.push(...action.payload);
    },
    addCharacter: (state, action: PayloadAction<Character>) => {
      state.characterList.push(action.payload);
    },
    addFavouriteCharacter: (state, action: PayloadAction<Character>) => {
      state.favouriteList.push(action.payload);
    },
    removeCharacterWithId: (state, action: PayloadAction<number>) => {
      const id: number = action.payload;

      const character: Character | undefined = state.characterList.find(
        (character: Character) => character.id === id
      );

      const favouriteCharacter: Character | undefined =
        state.characterList.find((character: Character) => character.id === id);

      if (character !== undefined) {
        const toRemoveIndex: number = state.characterList.indexOf(character);

        if (toRemoveIndex >= 0) {
          state.characterList.splice(toRemoveIndex, toRemoveIndex);
        }
      }

      if (favouriteCharacter !== undefined) {
        const toRemoveIndex: number =
          state.favouriteList.indexOf(favouriteCharacter);

        if (toRemoveIndex >= 0) {
          state.favouriteList.splice(toRemoveIndex, toRemoveIndex);
        }
      }
    },

    removeFavouriteCharacterWithId: (state, action: PayloadAction<number>) => {
      const id: number = action.payload;
      const favouriteCharacter: Character | undefined =
        state.characterList.find((character: Character) => character.id === id);

      if (favouriteCharacter !== undefined) {
        const toRemoveIndex: number =
          state.favouriteList.indexOf(favouriteCharacter);

        if (toRemoveIndex >= 0) {
          state.favouriteList.splice(toRemoveIndex, toRemoveIndex);
        }
      }
    },
  },
});

export const selectCharacter = (state: RootState) => state.character;

export const selectCharacterList = (state: RootState) =>
  state.character.characterList;

export const selectFavouriteCharacterList = (state: RootState) =>
  state.character.favouriteList;

export const {
  addCharacters,
  addCharacter,
  addFavouriteCharacter,
  removeCharacterWithId,
  removeFavouriteCharacterWithId,
} = characterSlice.actions;

export default characterSlice.reducer;
