import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Table, hover, bordered } from "react-bootstrap";
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
      <Table hover bordered>
        <thead>
          <tr md={6}>
            <th>#</th>
            <th>Name</th>
            <th>Cups Consumed</th>
            <th>Favorite Ramen</th>
          </tr>
        </thead>
        <tbody>
          {customers &&
            customers.map((customer, idx) => {
              return (
                <tr key={idx + 1} md={6}>
                  <td>{idx + 1}</td>
                  <td>{customer.name}</td>
                  <td>{customer.cups}</td>
                  <td>
                    <NavLink to={`/ramen/${customer.favorite}`}>
                      {customer.favorite}
                    </NavLink>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    );
  }
}
