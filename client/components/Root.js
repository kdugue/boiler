import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import App from "./App";
import ButtonTest from "./ButtonTest";

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/button" component={ButtonTest} />
        </Switch>
      </div>
    </Router>
  );
};

export default Root;
