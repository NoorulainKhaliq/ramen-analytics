import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="nav">
        <header>
          <div className="pull-right">
            <Link to="/users">
              <button type="button" className="btn btn-secondary btn-lg">
                Customers
              </button>
            </Link>
            <Link to="/cups">
              <button type="button" className="btn btn-secondary btn-lg">
                Cups
              </button>
            </Link>
          </div>
        </header>
        <hr />
      </div>
    );
  }
}
