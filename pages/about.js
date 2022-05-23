import styles from "../styles/About.module.css";
import Head from "next/head";

function about() {
  return (
    <>
      <Head>
        <title>The India Times - About</title>
        <meta name="description" content="India And world News" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>
          This project was created to learn Next js
          <br></br>
          Api Creator{" "}
          <a
            href="https://github.com/cyberboysumanjay/Inshorts-News-API"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
        </h1>
      </div>
    </>
  );
}

export default about;
