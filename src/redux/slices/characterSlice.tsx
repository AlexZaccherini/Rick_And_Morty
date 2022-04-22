// redux
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// project imports
import { Character } from "../../models/character";
import { RootState } from "../store";

interface CharacterSlice {
  characterList: Character[];
  currentCharacterList: Character[];
  favouriteList: Character[];
  currentCharacter: Character | undefined;
}

const initialState: CharacterSlice = {
  characterList: [],
  currentCharacterList: [],
  favouriteList: [],
  currentCharacter: undefined,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.currentCharacterList = action.payload;
    },
    addCharacters: (state, action: PayloadAction<Character[]>) => {
      action.payload.forEach((character: Character) => {
        if (
          // verify if it is present a character with same id
          !state.characterList.find(
            (currentCharacter: Character) =>
              currentCharacter.id === character.id
          )
        ) {
          state.characterList.push(character);
        }
      });
    },
    addCharacter: (state, action: PayloadAction<Character>) => {
      if (
        !state.characterList.find(
          (currentCharacter: Character) =>
            currentCharacter.id === action.payload.id
        )
      ) {
        state.characterList.push(action.payload);
      }
    },
    addFavouriteCharacter: (state, action: PayloadAction<Character>) => {
      if (
        !state.favouriteList.find(
          (currentCharacter: Character) =>
            currentCharacter.id === action.payload.id
        )
      ) {
        state.favouriteList.push(action.payload);
      }
    },
    getCharacterFromId: (state, action: PayloadAction<number>) => {
      state.currentCharacter = state.characterList.find(
        (currentCharacter: Character) => currentCharacter.id === action.payload
      );
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

      const toRemoveIndex: number = state.favouriteList.findIndex(
        (favouriteCharacter) => favouriteCharacter.id === id
      );

      if (toRemoveIndex >= 0) {
        state.favouriteList.splice(toRemoveIndex, 1);
      }
    },
  },
});

export const selectCharacter = (state: RootState) => state.character;

export const selectCharacterList = (state: RootState) =>
  state.character.characterList;

export const selectCurrentCharacterList = (state: RootState) =>
  state.character.currentCharacterList;

export const selectFavouriteCharacterList = (state: RootState) =>
  state.character.favouriteList;

export const {
  getCharacterFromId,
  setCharacters,
  addCharacters,
  addCharacter,
  addFavouriteCharacter,
  removeCharacterWithId,
  removeFavouriteCharacterWithId,
} = characterSlice.actions;

export default characterSlice.reducer;
