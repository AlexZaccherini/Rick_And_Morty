import { useCallback } from "react";
import { useAppDispatch } from "../hooks/reduxHooks";
import { Character } from "../models/character";
import {
  selectCurrentCharacterList,
  setCharacters,
} from "../redux/slices/characterSlice";
import { store } from "../redux/store";

const SearchInput: React.FC = () => {
  const dispatch = useAppDispatch();

  const currentCharacters: Character[] = selectCurrentCharacterList(
    store.getState()
  );

  const _filterList = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const filteredCharacters: Character[] = currentCharacters.filter(
        (character: Character) => character.name.startsWith(event.target.value)
      );
      dispatch(setCharacters(filteredCharacters));
    },
    [dispatch]
  );

  return (
    <input
      placeholder="search"
      type={"text"}
      onChange={(event) => _filterList(event)}
    />
  );
};

export default SearchInput;
