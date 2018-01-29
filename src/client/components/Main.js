import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";

import Users from "./Users";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    axios
      .get("users")
      .then(res => res.data)
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Users allUsers={this.state.users} />}
          />
        </Switch>
      </div>
    );
  }
}
