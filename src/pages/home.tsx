// styles
import styles from "../style/home-page.module.scss";

// project imports
import Footer from "../components/footer";
import Header from "../components/header";
import HomeContent from "../components/homeContent";
import PageTitle from "../enumerations/pageTitle";

const HomePage = () => {
  return (
    <>
      <Header title={PageTitle.HOME} />
      <div className={styles["home-content-container"]}>
        <HomeContent />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
