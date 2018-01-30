import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";

import Users from "./Users";
import Header from "./Header";
import Cups from "./Cups";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      users: {},
      cups: []
    };
  }

  componentWillMount() {
    axios
      .get("/api/users")
      .then(res => res.data)
      .then(users => this.setState({ users }));
    axios
      .get("/api/cups")
      .then(res => res.data)
      .then(allCups => this.setState({ cups: allCups }));
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/users"
            render={props => <Users allUsers={this.state.users} />}
          />
          <Route
            exact
            path="/cups"
            render={props => <Cups allCups={this.state.cups} />}
          />
        </Switch>
      </div>
    );
  }
}
