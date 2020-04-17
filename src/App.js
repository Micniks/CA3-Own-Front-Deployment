import React,{useState} from "react";
import {
  HashRouter as Router,
  Switch,
  Route} from "react-router-dom";
import { Header } from "./Header";
import { External } from "./External";
import { LoginAndOut } from "./LoginAndOut";
import { Admin } from "./Admin";

export default App;

function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const setLoginStatus = status => {
    setIsLoggedIn(status);
  }

  return (
    <Router>
      <div>
        <Header
        loginMsg={isLoggedIn ? "Logout" : "Login"}
        isLoggedIn={isLoggedIn}
        />
        <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/external">
            <External />
          </Route>
          <Route path="/admin-page">
            <Admin />
          </Route>
          <Route path="/login-out">
            <LoginAndOut 
             loginMsg={isLoggedIn ? "Logout" : "Login"}
             isLoggedIn={isLoggedIn}
             setLoginStatus={setLoginStatus}
            />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Michael Frontend for CA3</h1>
      <p>
        This frontend was easy to use from the startcode, but I was annoyed that we could not figure out how to build the frontend as a war file.<br/>
        Because of this, the guide for the frontend startcode currently only help to deploy on surge, and not to our own droplot.
      </p>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>How did you get here? You shouldn't be here..</h2>
    </div>
  )
}