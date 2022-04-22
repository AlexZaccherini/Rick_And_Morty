// react
import { useCallback, useEffect, useMemo } from "react";

// redux
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { addCharacters, setCharacters } from "../redux/slices/characterSlice";

// styles
import styles from "../style/list-page-content.module.scss";

// project imports
import { Character } from "../models/character";
import { RootState } from "../redux/store";
import { CharacterApiService } from "../services/characterApi";
import CharacterCard from "../components/characterCard";

const pageTitle: string = "List Page";

const ListPageContent: React.FC = () => {
  const dispatch = useAppDispatch();

  const characterService: CharacterApiService = useMemo(
    () => new CharacterApiService(),
    []
  );

  const characters: Character[] = useAppSelector(
    (store: RootState) => store.character.currentCharacterList
  );

  useEffect(() => {
    _fetchData();
  });

  const _fetchData = useCallback(
    (pageIndex?: number) => {
      characterService.getCharacters(pageIndex).then((data: Character[]) => {
        dispatch(setCharacters(data));
        dispatch(addCharacters(data));
      });
    },
    [characterService, dispatch]
  );

  const _getCharacterCards = useCallback(() => {
    return characters.map((character: Character) => {
      return (
        <CharacterCard key={character.id} character={character}></CharacterCard>
      );
    });
  }, [characters]);

  // First implementation of a pagination, not with all pages.
  // The total number of pages can be reached in info data from endpoint
  const _getPageButtons = useCallback(() => {
    return [1, 2, 3].map((index: number) => {
      return (
        <button key={index} onClick={(_) => _fetchData(index)}>
          {index}
        </button>
      );
    });
  }, [_fetchData]);

  return (
    <div className={styles["main-container"]}>
      <h1>{pageTitle}</h1>
      <div className={styles["card-list-container"]}>
        {_getCharacterCards()}
      </div>
      <div className={styles["card-list-container"]}>{_getPageButtons()}</div>
    </div>
  );
};

export default ListPageContent;
