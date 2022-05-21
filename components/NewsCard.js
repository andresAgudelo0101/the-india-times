import styles from "../styles/NewsCard.module.css";
import Image from "next/image";

function NewsCard(props) {
    return (
        <div className={styles.card}>
              <h2>{props.title} &rarr;</h2>
              <div className={styles.containerGridNews}>
                <div>
                  <Image src={props.imageUrl} className={styles.img} />
                </div>
                <div>
                  <p>{props.content}</p>
                </div>
              </div>

              <p>
                <b>Author:</b> {props.author}
              </p>
            </div>
    )
}

export default NewsCard;
