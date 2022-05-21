import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import Script from "next/script";
import Head from "next/head";

const NavbarComponent = () => {
  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "#1443",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      backgroundColor: "#fff",
      width: "30%",
    },
  };
  return (
    <>
      <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="undefined" crossorigin="anonymous"/>

      </Head>
   
      <div className={styles.navbar}>
        <div id="home">
          <h1 className={styles.title}>The India Times</h1>
        </div>

        <div className={styles.nav}>
        <Navbar expand="lg" variant="light">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={styles.links}>
              <a className={styles.a}  href="#"> world </a>
              <a className={styles.a}  href="#">sports</a>
              <a className={styles.a}  href="#">national</a>
              <a className={styles.a}  href="#">tecnology</a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
