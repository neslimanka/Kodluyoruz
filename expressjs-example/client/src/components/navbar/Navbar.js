import React from "react";
import { ImSearch } from "react-icons/im";
import {Redirect, NavLink } from "react-router-dom";

import styles from "./styles/Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={`${styles.navbar}`}>
        <div className={styles["flex-container"]}>
          <div className={styles["flex-container-logo"]}>
            <NavLink to="/" className={styles["cinemaximum-logo"]}>
              <img
                className={styles.logo}
                src="https://www.cinemaximum.com.tr/Assets/Cgv/assets/images/cinemaximum_logo.svg"
                alt="Cinemaximum Logo"
              />
            </NavLink>
           
          </div>
          <div className={styles["flex-container-menu1"]}>
          <div className={styles.links}>
              <NavLink className={styles.link} to="/" exact>
                Menü
              </NavLink>
             
            </div>
          </div>
          <div className={styles["flex-container-menu"]}>
            <div className={styles.links}>
              <NavLink
                className={styles.link}
                to={{ pathname: "/films/", title: "films" }}
                exact
                activeStyle={{ fontWeight: "bold" }}
              >
                Filmler
              </NavLink>
              <NavLink
                className={styles.link}
                to={{ pathname: "/cinema/", title: "cinema" }}
                exact
                activeStyle={{ fontWeight: "bold" }}
              >
                Sinemalar
              </NavLink>
              <NavLink
                className={styles.link}
                to={{ pathname: "/gold-class-salon-sizin/", title: "gold-class-salon-sizin" }}
                exact
                activeStyle={{ fontWeight: "bold" }}
              >
                Gold Class
              </NavLink>
              <NavLink
                className={styles.link}
                to={{ pathname: "/cgv-arthouse/", title: "cgv-arthouse" }}
                exact
                activeStyle={{ fontWeight: "bold" }}
              >
                CGV ARTHOUSE
              </NavLink>
              
              <ImSearch
                className={`${styles.icons} ${styles["search-icon"]}`}
              />
              <Redirect className={styles.link} to="/search" />

           
            </div>
          </div>
          <div className={styles["login-container"]}>
          <div className={styles.links}>
              <NavLink
                className={styles.link}
                to={{ pathname: "/signup/", title: "signup" }}
                exact
                activeStyle={{ fontWeight: "bold" }}
              >
                Üye Ol
              </NavLink>
              <NavLink
                className={styles.link}
                to={{ pathname: "/login/", title: "login" }}
                exact
                activeStyle={{ fontWeight: "bold" }}
              >
                Giriş
              </NavLink>
              <NavLink
                className={styles.link}
                to={{ pathname: "/cgv-cinema-club/", title: "cgv-cinema-club" }}
                exact
                activeStyle={{ fontWeight: "bold" }}
              >
                CGV 
              </NavLink>
         

          </div>
        </div>
      </div>
      </div>
    </>
  );
}


export default React.memo(Navbar);
