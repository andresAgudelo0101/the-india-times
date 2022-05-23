import NewsGrid from "../components/NewsGrid";

export default function National({ nationalNews }) {
  return (
    <>
     <NewsGrid title="India" newsData={nationalNews}/>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://inshorts.deta.dev/news?category=national").then(
    (res) => res.json()
  );

  return {
    props: {
        nationalNews: res,
    },
  };
};
