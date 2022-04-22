// react
import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";

// redux
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  addFavouriteCharacter,
  getCharacterFromId,
  removeFavouriteCharacterWithId,
} from "../redux/slices/characterSlice";

// project imports
import { Character } from "../models/character";
import { RootState } from "../redux/store";

const DetailPageContent: React.FC = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCharacterFromId(Number(id)));
  }, []);

  const currentCharacter: Character | undefined = useAppSelector(
    (store) => store.character.currentCharacter
  );

  const _addToFavourite = useCallback(() => {
    if (currentCharacter !== undefined) {
      dispatch(addFavouriteCharacter(currentCharacter));
    }
  }, [currentCharacter, dispatch]);

  const _removeFromFavourite = useCallback(() => {
    if (currentCharacter !== undefined) {
      dispatch(removeFavouriteCharacterWithId(currentCharacter.id));
    }
  }, [currentCharacter, dispatch]);

  const favourites: Character[] = useAppSelector(
    (store: RootState) => store.character.favouriteList
  );

  return (
    <>
      <h1>{currentCharacter?.name}</h1>
      {favourites.find(
        (favourite: Character) => favourite.id === currentCharacter?.id
      ) === undefined && (
        <button onClick={() => _addToFavourite()}>favourite</button>
      )}
      {favourites.find(
        (favourite: Character) => favourite.id === currentCharacter?.id
      ) !== undefined && (
        <button onClick={() => _removeFromFavourite()}>remove favourite</button>
      )}
    </>
  );
};

export default DetailPageContent;
