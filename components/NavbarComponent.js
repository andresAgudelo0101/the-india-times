import styles from "../styles/Navbar.module.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

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
