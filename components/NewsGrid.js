import Head from "next/head";
import styles from "../styles/NewsGrid.module.css";
import NewsCard from "./NewsCard";


function NewsGrid(props) {
    return (
    <>
      <Head>
        <title>The India Times - {props.title}</title>
        <meta name="description" content="India And world News" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.grid}>
          {props.newsData?.data?.map((val) => (
            <NewsCard 
              key={val.title}
              title={val.title}
              imageUrl={val.imageUrl}
              content={val.content}
              author={val.author}
            />
          ))}
        </div>
      </div>
    </>
    )
}

export default NewsGrid;
