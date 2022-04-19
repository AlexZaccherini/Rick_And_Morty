import Header from "../components/header";
import HomeContent from "../components/homeContent";
import Pages from "../enumerations/pages";

import styles from "../style/home-page.module.scss";

const HomePage = () => {
  return (
    <>
      <Header title={Pages.HOME} />
      <div className={styles["home-content-container"]}>
        <HomeContent />
      </div>
    </>
  );
};

export default HomePage;
