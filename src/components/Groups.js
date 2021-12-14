import * as React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Groups.module.css";

export default function ChatsList() {
  const groups = useSelector((state) => state.groups);
  return (
    <section className={styles.container}>
      {!groups ? (
        <div className="loading">Loading...</div>
      ) : (
        <ul className={styles.list}>
          {groups.map((group) => (
            <NavLink key={group.id} to={`/chats/${group.id}`}
            activeClassName={styles.listItemActive}>
              <li className={styles.listItem}>
                <figure className={styles.itemImageWrapper}>
                  <img
                    className={styles.itemImage}
                    src={group.image}
                    alt={group.title}
                  />
                </figure>
                <h4
                  className={styles.itemTitle}
                >
                  {group.title}
                </h4>
                <div
                  title="unread messages"
                  className={styles.itemUnreadMsgCount}
                >
                  {group.unread_msg_count}
                </div>
              </li>
            </NavLink>
          ))}
        </ul>
      )}
    </section>
  );
}
