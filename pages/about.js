import styles from "../styles/About.module.css";
import Head from "next/head";
import Link from "next/link";

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
          This project was created to learn Next js.
          <br></br>
          Check this api from the creator on {" "}
          <Link  href="https://github.com/cyberboysumanjay/Inshorts-News-API">
    
            
          <a
             target="_blank"
             rel="noreferrer"
             className={styles.link}
          >
            GitHub
          </a>
            </Link>
        </h1>
      </div>
    </>
  );
}

export default about;
