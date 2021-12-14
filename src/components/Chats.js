import * as React from "react";
import {Switch, Route, useRouteMatch} from "react-router-dom";
import Groups from "./Groups";
import ChatBox from "./ChatBox";
import styles from "./Chats.module.css";

export default function Chats() {
  let { path } = useRouteMatch();
  
  return (
    <main className={styles.container}>
      <Groups />
      <Switch>
        <Route exact path={path} >
          <h3 className={styles.defaultMsg}>👈 please select a chat</h3>
        </Route>
        <Route path={`/chats/:groupId`} component={ChatBox} ></Route>
      </Switch>
    </main>
  );
}
