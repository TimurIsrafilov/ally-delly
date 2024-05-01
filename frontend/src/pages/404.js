import Head from "next/head";

import Heading from "../components/Heading";
import styles from "../styles/App.module.css";

import Link from "next/link";

const Error = () => {
  return (
    <div>
      <Head>
        <title>Error</title>
      </Head>
      <Heading tag="h2" text="Error-showing-page" />
      <Heading tag="h3" text="Oops... something went wrong" />
      <Link className={styles.link} href="/email">
        вернуться к вводу учетных данных
      </Link>
    </div>
  );
};

export default Error;
