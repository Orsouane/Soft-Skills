import React, { useState, useEffect } from "react";
import styles from "./HeaderComponent.module.css";
import { NavLink } from "react-router-dom";

function HeaderComponent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const images = [
    "https://images.unsplash.com/photo-1613744696511-fd64320d6c7b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1604239282228-6a723984962c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.jumbotron}>
      <header className={`${styles.header} ${styles.FontHeaderFooter}`}>
        <div className={styles.headerContainer}>
          <a href="/" className={styles.logo}>
            Logo
          </a>

          <ul className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
            <li>
              <NavLink to="/CreateViaggio" className={styles.myLink}>
                Creare un viaggio
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className={styles.myLink}>
                Contact
              </NavLink>
            </li>
          </ul>
          <label htmlFor="menu-btn" className={styles.menuIcon}>
            <span className={styles.navicon}></span>
          </label>
        </div>
        <input
          type="checkbox"
          id="menu-btn"
          className={styles.menuBtn}
          checked={menuOpen}
          onChange={toggleMenu}
        />

        <img
          src={images[currentImageIndex]}
          alt="Jumbotron"
          className={styles.image}
        />
      </header>
    </div>
  );
}

export default HeaderComponent;
