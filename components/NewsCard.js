import styles from "../styles/NewsCard.module.css";


function NewsCard(props) {
    return (
        <div className={styles.card}>
              <h2>{props.title} &rarr;</h2>
              <div className={styles.containerGridNews}>
                <div>
                  <img src={props.imageUrl} className={styles.img} alt={props.title}/>
                  <p>
                    <b>Author:</b> {props.author}
                  </p>
                </div>
                <div>
                  <p className={styles.contentNew}>{props.content}</p>
                </div>
              </div>

             
            </div>
    )
}

export default NewsCard;
