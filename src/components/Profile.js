import * as React from "react";
import { useSelector } from "react-redux";
import styles from "./Profile.module.css";

export default function Profile() {
  const profile = useSelector((state) => state.profile);
  return (
    <React.Fragment>
      {!profile ? (
        <div className="loading">loading...</div>
      ) : (
        <div className={styles.container}>
          <figure className={styles.userAvatar}>
            <img
              src={profile.avatar}
              alt={`${profile.username} avatar`}
            />
          </figure>
          <h2>username: {profile.username}</h2>
          <p>phone number: {profile.phone_number}</p>
        </div>
      )}
    </React.Fragment>
  );
}
