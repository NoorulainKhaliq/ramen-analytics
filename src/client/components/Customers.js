import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: this.props.allCustomers
    };
  }

  render() {
    let customers = this.state.customers;
    return (
      <div>
        <h3>Favorite Ramen by Customer</h3>
        <div className="customer">
          <ul>
            {customers &&
              customers.map((customer, idx) => {
                return (
                  <div className="customer-info" key={idx}>
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
