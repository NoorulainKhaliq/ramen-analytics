import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.allUsers
    };
  }

  render() {
    let customers = this.state.users;
    return (
      <div>
        <h3>Favorite Ramen by Customer</h3>
        <div className="user">
          <ul>
            {customers &&
              customers.map((customer, idx) => {
                return (
                  <div className="user-info" key={idx}>
                    <li>Name: {customer.name}</li>
                    <li>Ramen-Consumed: {customer.cups}</li>
                    <li>Favorite-Ramen: {customer.favorite}</li>
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}
