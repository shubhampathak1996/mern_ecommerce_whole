import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./container/home/Home";
import SignIn from "./container/signin/SignIn";
import SignUp from "./container/signup/SignUp";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={SignIn}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
