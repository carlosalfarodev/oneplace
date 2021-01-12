import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./index.css";

import Login from "./components/Login";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <div className="navigation__container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
