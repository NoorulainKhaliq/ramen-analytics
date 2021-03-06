import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";

import Customers from "./Customers";
import Header from "./Header";
import AllCups from "./Cups";
import SingleRamen from "./SingleRamen";
import Home from "./Home";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      customers: {},
      cups: [],
      currentRamenId: ""
    };
  }

  componentWillMount() {
    axios
      .get("/api/customers")
      .then(res => res.data)
      .then(customers => this.setState({ customers }));
    axios
      .get("/api/sales/by-type")
      .then(res => res.data)
      .then(allCups => this.setState({ cups: allCups }));
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/customers"
            render={props => <Customers allCustomers={this.state.customers} />}
          />
          <Route
            exact
            path="/sales/by-type"
            render={props => <AllCups allCups={this.state.cups} />}
          />
          <Route
            exact
            path="/ramen/:id"
            render={props => <SingleRamen allCups={this.state.cups} />}
          />
        </Switch>
      </div>
    );
  }
}
