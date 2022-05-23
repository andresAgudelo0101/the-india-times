import NewsGrid from "../components/NewsGrid";

export default function Home({ worldNews }) {
  console.log(worldNews);
  return (
    <>
     <NewsGrid title="World" newsData={worldNews}/>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://inshorts.deta.dev/news?category=world").then(
    (res) => res.json()
  );

  return {
    props: {
      worldNews: res,
    },
  };
};
