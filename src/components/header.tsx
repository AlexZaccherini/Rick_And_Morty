// react
import { useCallback } from "react";

// styles
import styles from "../style/header.module.scss";

// project imports
import PageTitle from "../enumerations/pageTitle";

// utils
import { classJoin } from "../utils/misc";

type HeaderProps = {
  title: PageTitle;
};

const Header = (props: HeaderProps) => {
  const _getHeaderLinks = useCallback(() => {
    return Object.values(PageTitle).map((page: PageTitle) => {
      return (
        <div key={page} className={styles["header-content-item"]}>
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

  const _getHeaderContents = useCallback(() => {
    let contentItems: JSX.Element[] = _getHeaderLinks();

    contentItems.push(
      <div className={styles["header-content-item"]}>
        <span>search</span>
      </div>
    );

    return contentItems;
  }, []);

  return (
    <div className={styles["header-container"]}>{_getHeaderContents()} </div>
  );
};

export default Header;
