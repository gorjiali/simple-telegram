import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleInitialData } from "./actions/shared";
// Lazy loading implementation was not necessary due to the structure of the pages 
import NavBar from "./components/NavBar";
import Chats from "./components/Chats";
import Profile from "./components/Profile";
import styles from "./App.module.css";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Router>
      <div className={styles.container}>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/chats" />} />
          <Route path="/chats" component={Chats} />
          <Route path="/profile" component={Profile} />
          <Route path="*" render={() => <h1>not Fount</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
