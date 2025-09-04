import React from "react";
import styles from "../Footer/FooterComponent.module.css";
function FooterComponent() {
  return (
    <footer className={`${styles.footer} ${styles.FontHeaderFooter} container`}>
      <div className="row">
        <div className={`${styles.footerLeft} col-lg-4 col-md-6 col-sm-12`}>
          <div className={styles.icons}>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className={`${styles.footerCenter} col-lg-4 col-md-6 col-sm-12`}>
          <h2>
            Agenzia<span> logo</span>
          </h2>
          <p className={styles.menu}>
            <a href="#"> Servizi</a> |<a href="#"> Portfolio</a>
          </p>
          <p className={styles.name}> Nome agenzia &copy; 2025</p>
        </div>
        <div className={`${styles.footerRight} col-lg-4 col-md-12 col-sm-12`}>
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span> indirizzo,</span> cità, paese
            </p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p> (+00) 0000 000 000</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a className={styles.color} href="#">
                officio@agenzia.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
