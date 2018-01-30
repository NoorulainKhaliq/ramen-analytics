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
    let users = this.state.users;

    return (
      <div>
        <h3>Favorite Ramen by User</h3>
        <div className="user">
          <ul>
            {users &&
              users.map((user, idx) => {
                return (
                  <div className="user-info" key={idx}>
                    <li>Name: {user.name}</li>
                    <li>Ramen-Consumed: {user.cups}</li>
                    <li>Favorite-Ramen: {user.favorite}</li>
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}
