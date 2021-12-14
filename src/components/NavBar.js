import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function AppHeader() {
  return (
    <header className={styles.container}>
      <NavLink
        activeClassName={styles.navLinkWrapperActive}
        to="/chats"
      >
        <span className={styles.navLink}>Chats</span>
      </NavLink>
      <NavLink
        className={styles.navLink}
        activeClassName={styles.navLinkWrapperActive}
        to="/profile"
      >
        <span className={styles.navLink}>Profile</span>
      </NavLink>
    </header>
  );
}
