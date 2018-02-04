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
          <tr>
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
                <tr key={idx + 1}>
                  <td>{idx + 1}</td>
                  <td>{customer.name}</td>
                  <td>{customer.cups}</td>
                  <td>{customer.favorite}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    );
  }
}

{
  /* <Table>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</Table> */
}

// <div>
//         <h3>Favorite Ramen by Customer</h3>
//         <div className="customer">
//           <ul>
//             {customers &&
//               customers.map((customer, idx) => {
//                 return (
//                   <div className="customer-info" key={idx}>
//                     <li>Name: {customer.name}</li>
//                     <li>Ramen-Consumed: {customer.cups}</li>
//                     <li>Favorite-Ramen: {customer.favorite}</li>
//                   </div>
//                 );
//               })}
//           </ul>
//         </div>
//       </div>
