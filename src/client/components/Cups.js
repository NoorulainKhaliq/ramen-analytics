import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Users extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let allCups = this.props.allCups;
    return (
      <div className="total-cups">
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
      </div>
    );
  }
}
