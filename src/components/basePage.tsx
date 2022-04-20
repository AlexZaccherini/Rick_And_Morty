// styles
import styles from "../style/base-page.module.scss";

// project imports
import Footer from "../components/footer";
import Header from "../components/header";
import PageTitle from "../enumerations/pageTitle";

interface BasePageProps {
  children: React.ReactNode;
  pageTitle?: PageTitle;
}

const BasePage: React.FC<BasePageProps> = ({ children, pageTitle }) => {
  return (
    <>
      <Header title={pageTitle} />
      <div className={styles["home-content-container"]}>{children}</div>
      <Footer />
    </>
  );
};

export default BasePage;
