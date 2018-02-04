import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import React, { Component } from "react";
import { render } from "react-dom";

import Main from "./components/Main";
import "./styles.css";

render(
  <Router>
    <Main />
  </Router>,
  document.getElementById("main")
);
