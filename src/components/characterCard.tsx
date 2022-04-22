// react
import { Link } from "react-router-dom";

// styles
import styles from "../style/character-card.module.scss";

// project imports
import { Character } from "../models/character";

type CharacterCardProps = {
  character: Character;
};

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className={styles["single-card-container"]}>
      <Link to={`/detail/${character.id}`}>
        <span>{character.name}</span>
      </Link>
    </div>
  );
};

export default CharacterCard;
