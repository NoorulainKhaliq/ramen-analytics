import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";

import Users from "./Users";
import Header from "./Header";

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
        </Switch>
      </div>
    );
  }
}
