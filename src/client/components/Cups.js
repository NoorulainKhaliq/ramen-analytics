import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Users extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let allCups = this.props.allCups;
    let total = allCups.pop();
    console.log(total);
    return (
      <div className="total">
        {allCups &&
          allCups.map((cup, idx) => {
            return (
              <div className="ramen-info" key={idx + 1}>
                {Object.keys(cup).map((obj, i) => {
                  return (
                    <div key={i + 2}>
                      <NavLink to={`/ramen/${obj}`}>{obj}</NavLink>: {cup[obj]}
                    </div>
                  );
                })}
              </div>
            );
          })}
        <div className="total">Total: {Object.values(total)} </div>
      </div>
    );
  }
}
