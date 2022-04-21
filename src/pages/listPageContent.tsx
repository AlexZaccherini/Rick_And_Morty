import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { Character } from "../models/character";
import { RootState, store } from "../redux/store";
import { CharacterApiService } from "../services/characterApi";
import {
  addCharacters,
  addCharacter,
  addFavouriteCharacter,
  removeCharacterWithId,
  removeFavouriteCharacterWithId,
} from "../redux/slices/characterSlice";

const pageTitle: string = "List Page";

const ListPageContent: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const characterService: CharacterApiService = useMemo(
    () => new CharacterApiService(),
    []
  );

  const characters: Character[] = useAppSelector(
    (store: RootState) => store.character.characterList
  );

  useEffect(() => {
    characterService.getCharacters().then((data: Character[]) => {
      dispatch(addCharacters(data));
    });
  }, [characterService, dispatch]);

  const _getNames = useCallback(() => {
    let names: string = "";
    characters.forEach((character: Character) => (names += character.name));
    return names;
  }, [characters]);

  return (
    <>
      <h1>{_getNames()}</h1>
    </>
  );
};

export default ListPageContent;
