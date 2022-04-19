import styles from "../style/header.module.scss";
import Pages from "../enumerations/pages";
import { classJoin } from "../utils/misc";
import { useCallback } from "react";

type HeaderProps = {
  title: Pages;
};

const Header = (props: HeaderProps) => {
  const _getLinks = useCallback(() => {
    return Object.values(Pages).map((page: Pages) => {
      return (
        <div className={styles["link-container"]}>
          <span
            className={classJoin(styles, [
              "link",
              props.title === page ? "link-current" : "",
            ])}
          >
            {page}
          </span>
        </div>
      );
    });
  }, [props.title]);

  return <div className={styles["header-container"]}>{_getLinks()}</div>;
};

export default Header;
