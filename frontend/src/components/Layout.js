import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/App.module.css";

const Layout = ({ children }) => (
  <div className={styles.page}>
    <Header />
    <section className={styles.main}> {children}</section>
    <Footer />
  </div>
);

export default Layout;
