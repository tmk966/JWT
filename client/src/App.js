import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./containers/Navbar/Nav";
import NotFound from "./containers/404/ErrorPage";
import Login from "./containers/Login/Login";

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/about">About</Route>
        <Route path="/news">News</Route>
        <Route path="/contact">Contact</Route>
        <Route exact path="/">
          Home
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
