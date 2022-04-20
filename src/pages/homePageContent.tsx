// react
import { useMemo } from "react";

// redux
import { selectUser } from "../redux/slices/userSlice";
import { store } from "../redux/store";

// style
import styles from "../style/home-content.module.scss";

// project imports
import { User } from "../models/user";

const subtitle: string = "Test project Rick&Morty";
const characterListCta: string = "Characters";

const HomePageContent: React.FC = () => {
  const user: User = useMemo(() => selectUser(store.getState()), []);

  return (
    <div className={styles["home-content"]}>
      <div>
        <h1>{`${user.name} ${user.surname}`}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div className={styles["button-container"]}>
        <button>{characterListCta}</button>
      </div>
    </div>
  );
};

export default HomePageContent;
