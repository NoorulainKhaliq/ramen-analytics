import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Table, hover, bordered, xs, md } from "react-bootstrap";

export default class AllCups extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let allCups = this.props.allCups.slice(0, -1);
    let total = this.props.allCups.slice(-1)[0];
    return (
      <Table bordered hover width="50%">
        <thead>
          <tr md={6}>
            <th>Ramen-Type</th>
            <th>Cups Sold</th>
          </tr>
        </thead>
        {allCups &&
          allCups.map((cup, idx) => {
            return (
              <tbody key={idx + 1}>
                {Object.keys(cup).map((obj, i) => {
                  return (
                    <tr md={6} key={i + 2}>
                      <td>
                        <NavLink to={`/ramen/${obj}`}>{obj}</NavLink>
                      </td>
                      <td>{cup[obj]}</td>
                    </tr>
                  );
                })}
              </tbody>
            );
          })}
      </Table>
    );
  }
}
