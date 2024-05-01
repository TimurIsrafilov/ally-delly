import Heading from "../components/Heading";
import styles from "../styles/App.module.css";

const Header = () => (
  <header className={styles.page_header}>
    <Heading tag="h4" text="ALLY DELIVERY" />
  </header>
);

export default Header;
