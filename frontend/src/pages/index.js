import { useState, useEffect } from "react";
import Link from "next/link";

import Heading from "../components/Heading";
import styles from "../styles/App.module.css";

const Home = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    setUsername(localStorage.getItem("username") || "");
  }, []);

  const handleSignout = () => {
    setUsername(null);
    localStorage.clear();
  };

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <Heading tag="h2" text={"Hello, "} />
        {username ? (
          <p className={styles.title_greeting}>{username} </p>
        ) : (
          <Link className={styles.title_link} href="/email">
            please push here to signin
          </Link>
        )}
      </div>
      <Heading tag="h1" text="welcome to ALLY DELIVERY website" />
      {username ? (
        <button type="button" className={styles.button} onClick={handleSignout}>
          signout
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
