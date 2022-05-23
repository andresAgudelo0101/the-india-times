import NewsGrid from "../components/NewsGrid";

export default function Technology({ technologyNews }) {
  return (
    <>
     <NewsGrid title="Technology" newsData={technologyNews}/>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://inshorts.deta.dev/news?category=technology").then(
    (res) => res.json()
  );

  return {
    props: {
      technologyNews: res,
    },
  };
};
