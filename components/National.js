import styles from "../styles/National.module.css";
import { useEffect,useState } from "react";

function National() {
    const [news, setnews] = useState([]);

    const getNationalNews=async()=>{
        await fetch("https://inshorts.deta.dev/news?category=national")
        .then(res=>res.json())
        .then(res=>{setnews(res)})
    }

   useEffect(() => {
    getNationalNews();
   }, []);
    
 
    return (
        <div className={styles.main}>

        <p className={styles.description}>
          {news?.category}{" news"}
        </p>

        <div className={styles.grid}>
            {news?.data?.map((val)=>(
                <a href="https://nextjs.org/docs" className={styles.card} key={val.title}>
                <h2>{val.title} &rarr;</h2>
                <img src={val.imageUrl} width={200}/>
                <p><b>Author:</b> {val.author}</p>
                </a>
            ))}
        </div>


        </div>
    )
}

export default National;

