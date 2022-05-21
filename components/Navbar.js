import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar=()=> {
    return (
        <div className={styles.navbar}>
             <div id="home">
          <h1 className={styles.title}>
            The India Times <a href="https://nextjs.org">Next.js!</a>
          </h1>
          Menu
        </div>
            <div className={styles.links}>
                <Link href="/">Criptos</Link>
                <Link href="/cripto_info">Cripto Info</Link>
                <Link href="/about">Acerca</Link>
            </div>
        </div>
    )
}

export default Navbar;