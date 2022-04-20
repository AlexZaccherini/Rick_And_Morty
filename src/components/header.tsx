// react
import { useCallback } from "react";
import { Link } from "react-router-dom";

// styles
import styles from "../style/header.module.scss";

// project imports
import PageTitle from "../enumerations/pageTitle";

// utils
import { classJoin } from "../utils/misc";
import { pageTitleToPath } from "../utils/pageTitleMapper";

type HeaderProps = {
  title?: PageTitle;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  const _getHeaderLinks = useCallback(() => {
    return Object.values(PageTitle).map((page: PageTitle) => {
      return (
        <div key={page} className={styles["header-content-item"]}>
          <Link to={pageTitleToPath(page)}>
            <span
              className={classJoin(styles, [
                "link",
                title === page ? "link-current" : "",
              ])}
            >
              {page}
            </span>
          </Link>
        </div>
      );
    });
  }, [title]);

  const _getHeaderContents = useCallback(() => {
    let contentItems: JSX.Element[] = _getHeaderLinks();

    contentItems.push(
      <div key={"search"} className={styles["header-content-item"]}>
        <span>search</span>
      </div>
    );

    return contentItems;
  }, [_getHeaderLinks]);

  return (
    <div className={styles["header-container"]}>{_getHeaderContents()} </div>
  );
};

export default Header;
