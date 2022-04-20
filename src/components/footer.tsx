import styles from "../style/footer.module.scss";

const footerContent: string = "Content of the footer";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <span className={styles["footer-content"]}>{footerContent}</span>
    </div>
  );
};

export default Footer;
