import NewsGrid from "../components/NewsGrid";

export default function Sports({ sportsNews }) {
  return (
    <>
     <NewsGrid title="Sports" newsData={sportsNews}/>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://inshorts.deta.dev/news?category=sports").then(
    (res) => res.json()
  );

  return {
    props: {
        sportsNews: res,
    },
  };
};
